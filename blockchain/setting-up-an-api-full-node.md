# Run an API Full Node

![](../.gitbook/assets/artboard-copy-61.jpg)

This guide walks through setting up a full blockchain node that serves an HTTP API. Once complete you'll have your own version of our hosted [blockchain API](https://developer.helium.com/blockchain/api) and a full node following the blockchain and keeping the API updated.

There are two components needed to run an API node:

* [Blockchain ETL](https://github.com/helium/blockchain-etl), which  follows the blockchain and populates a PostgreSQL database
* [Blockchain HTTP](https://github.com/helium/blockchain-http), which serves a REST API using the PostgreSQL database

## Getting Started

For this guide we'll assume you're using Ubuntu 19.10 on Amazon EC2 and are familiar with launching instances and using SSH. We're using a `t2.small` instance with 100GB of storage. You'll need inbound TCP port 8080 open to serve the HTTP API.

## Installing Dependencies

Both ETL and HTTP require Erlang 22.1 and a variety of dependencies. Let's install them all:

```bash
$ wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb
$ sudo dpkg -i erlang-solutions_2.0_all.deb
$ sudo apt-get update
$ sudo apt-get install esl-erlang=1:22.3.4.1-1 build-essential cmake libsodium-dev libssl-dev
```

## Installing PostgreSQL

ETL uses PostgreSQL to store the data it gets from the blockchain in an easily queryable schema.

If you don't have PostgreSQL already installed and running, we'll need to install it:

```bash
$ sudo apt-get install postgresql
```

We'll need to setup a new user and database for ETL to use. If you already have a user and know the credentials, you can skip this. Create a user called `etl` and give them superuser powers:

```bash
$ sudo -u postgres createuser --interactive
```

We'll need to set a database password for the user:

```bash
$ sudo -u postgres psql
```

From the psql prompt we'll set the newly created `etl` to have a password of `etlpassword` - change this to something more secure if you like.

```bash
postgres=# ALTER USER etl PASSWORD 'etl';
ALTER ROLE
postgres=# \q
```

Now we need to create a database:

```bash
$ sudo -u postgres createdb etl
```

## Getting ETL and HTTP

Now that all the required dependencies are in place we can use Git to clone the ETL and HTTP source code so that we can get on with installing them:

```bash
$ git clone https://github.com/helium/blockchain-etl.git
$ git clone https://github.com/helium/blockchain-http.git
```

## Building ETL from source

Before the HTTP client can do anything, we need to build ETL and set it up to start inserting data into our PostgreSQL database. 

The first step is to copy the `.env.template` file and set it up to use the newly created database and default user. If you want to create a new PostgreSQL user or make any other advanced changes, now is the time. For the rest of the guide, we'll assume the defaults:

```bash
$ cd blockchain-etl
$ cp .env.template .env
```

Now edit the first line to use your local database and user:

```bash
$ nano .env
```

Edit as follows:

```bash
DATABASE_URL=postgresql://etl:etl@127.0.0.1/etl
```

Then hit `ctrl-x` to save and exit.

{% hint style="warning" %}
If you want the database to be populated with Hotspot street/city/state/country locations  you will need to provide a Google Maps API key here. You can follow [this guide to get an API key](https://developers.google.com/maps/documentation/javascript/get-api-key). Otherwise you'll need to remove the `GOOGLE_MAPS_API_KEY` completely.

**NOTE** : Using Google Maps will incur usage charges!
{% endhint %}

Now we can build ETL, which might take a little while:

```bash
$ make release
```

Once it completes, we first need to reset the database and run all the migrations. You should see output that looks similar to the following:

```bash
$ make reset
./_build/dev/rel/blockchain_etl/bin/blockchain_etl stop
make: [Makefile:49: stop] Error 1 (ignored)
cp -f .env ./_build/dev/rel/blockchain_etl/
rm -rf ./_build/dev/rel/blockchain_etl/data/ledger.db
rm -rf ./_build/dev/rel/blockchain_etl/log/*
_build/dev/rel/blockchain_etl/bin/blockchain_etl migrations reset
Applied migrations/1576305004-create-block: ok
Applied migrations/1577040141-create-account: ok
Applied migrations/1577890272-create-gateway: ok
Applied migrations/1580305069-pending-transactions: ok
Applied migrations/1582467907-gateway_account_idx: ok
Applied migrations/1582900136-locations: ok
Applied migrations/1583473459-payment_v2: ok
Applied migrations/1584239323-actor_block: ok
Applied migrations/1584580834-acccount_first_block: ok
Applied migrations/1584651322-gateway_first_block: ok
Applied migrations/1584653412-transaction_time: ok
```

Now we're finally ready to start ETL:

```bash
$ make start
```

It will take some time for ETL to fully sync the blockchain and fill the postgres database. This could be hours or days. You can keep an eye on its status by looking at the logs:

```bash
$ tail _build/dev/rel/blockchain_etl/log/console.log 
```

Which should produce an output that looks like the following. You can use this to tell what block height ETL is currently at:

```erlang
<0.1434.0>@blockchain:save_temp_block:1415 temp block height is at least 3572
<0.1434.0>@blockchain:save_temp_block:1415 temp block height is at least 3573
<0.1434.0>@blockchain:save_temp_block:1415 temp block height is at least 3574
<0.1434.0>@blockchain:save_temp_block:1415 temp block height is at least 3575
<0.1434.0>@blockchain:save_temp_block:1415 temp block height is at least 3576
<0.1434.0>@blockchain:save_temp_block:1415 temp block height is at least 3577
<0.1434.0>@blockchain:save_temp_block:1415 temp block height is at least 3578
<0.1434.0>@blockchain:save_temp_block:1415 temp block height is at least 3579
```

## Building HTTP from source

Now that ETL is running and ingesting blocks, we can get the HTTP server running.

```bash
$ cd ../blockchain-http
$ cp .env.template .env
```

We'll need to edit the configuration to match the database configuration we created in the previous steps of the guide:

```bash
$ nano .env
```

 In larger deployments it is contemplated that there would be separate read replicas and write databases. `DATABASE_RO_URL` is used to specify the read only  database, and the `DATABASE_RW_URL` is used for the the write database \(which can also serve reads\).

In this case we only have one database doing both, so we'll edit so it reads as follows:

```bash
DATABASE_RO_URL=postgresql://etl:etl@127.0.0.1/etl
DATABASE_RW_URL=postgresql://etl:etl@127.0.0.1/etl          
DATABASE_RO_POOL_SIZE=10
```

Again hit `ctrl-x` to save and exit.

Now we'll build the http server:

```bash
$ make release
```

Once it's finished, we can start:

```bash
$ make start
```

Once it's running, you should be able to visit `http://<ip_of_instance>:8080/v1/blocks` and see the genesis block, which should look like this:

```bash
{
	"data": [{
		"transaction_count": 70,
		"time": 0,
		"height": 1,
		"hash": "La6PuV80Ps9qTP0339Pwm64q3_deMTkv6JOo1251EJI"
	}]
}
```

As the ETL server continues syncing and adding blocks to the database you'll see more blocks start to show up in the response. 

{% hint style="info" %}
It can take up to 48hrs for the ETL database to start populating.
{% endhint %}

Take a look at the [full API documentation](https://developer.helium.com/blockchain/api) to see the various routes and parameters.

## Wrapping up

You now have a full blockchain node and API server running. This is the exact same code we run at our hosted API servers located at `api.helium.wtf`\(for development\) and `api.helium.io`. You can now point your mobile application at your newly running server, or build any kind of application you like without having to depend on our hosted versions.

Congrats! 🚀

