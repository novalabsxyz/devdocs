# Run Your Own Miner

Running a Helium Miner is a great way to get some exposure to the blockchain and to support the network. And if you have [your own hardware deployed](../hotspot/developer-setup.md), this is necessary for routing LoRaWAN packets according to our LongFi protocol.

In this guide, we offer two ways of doing this: 

* deploying a plug-and-play AMI on AWS, if you want an easy setup and to avoid the initial sync time
* building from source on a Debian-based system, if you are feeling adventurous

A Docker container for the miner is coming soon as well, which will allow for an easy setup without restricting you to AWS.  


## Deploy an AMI

To deploy a ready made AMI, make sure you are logged into your AWS account, then go to: 

[**https://us-east-2.console.aws.amazon.com/ec2**](https://us-east-2.console.aws.amazon.com/ec2)  


On the left menu, click Images -&gt; AMIs

![](../.gitbook/assets/ami.png)

To the left of the search bar,  select “Public Images” and then search \`AMI ID : ami-04c4cca34b82100dc\`

You can quickly launch by clicking Launch, but if you’d rather launch from a region other than us-east2, you’ll want to make a Copy of the AMI to that region before launching.

![](../.gitbook/assets/launch.png)

From launch, select what kind of instance you want; a t2.micro instance is cheap, but not free since the disk must be bigger than the free tier allows.

During the instance configuration, you’ll want to be careful about setting the security group to allow for Miner and Packet Forwarder Traffic.

Note: if you are not using a packet forwarder, you can skip the packet forwarder settings. And if you want to be more careful, you can allow packet forwarder traffic only from the IP of your packet forwarder instead of all IPs.

![](../.gitbook/assets/security-group.png)

At this point, the instance is running and the Miner is running at boot. To connect to the Miner, follow the AWS instructions:

![](../.gitbook/assets/connect.png)



## Installing Miner from Source

First, you'll need [git](https://git-scm.com/). If you don't have it installed:

```bash
sudo apt-get install git
```

Clone the git repository:

```text
git clone https://github.com/helium/miner.git
```

### Install Erlang

Miner has been tested against Erlang OTP 21.3.3.

To install OTP 21.3.3 in Raspian, we'll first acquire the Erlang package from [Erlang Solutions](https://www.erlang-solutions.com/resources/download.html):

```text
wget https://packages.erlang-solutions.com/erlang/debian/pool/esl-erlang_21.3.3-1~ubuntu~bionic_amd64.deb
```

Now we'll install various other dependencies and then install Erlang itself. You'll see some errors after running `dpkg`, you can ignore them:

```text
$ sudo apt-get install libdbus-1-dev autoconf automake libtool flex libgmp-dev cmake libsodium-dev libssl-dev bison libsnappy-dev libclang-dev doxygen
$ sudo dpkg -i esl-erlang_21.3.3-1~raspbian~stretch_armhf.deb
$ sudo apt-get install -f
```

### Compile the Miner

Now it's time to build the miner. This will  take a while:

```text
$ cd miner
$ make release
```

## Using the Miner

In this section, we have a working Miner installation and now it's time to make some things happen!

### Editing the configuration

If you are using the AWS AMI, these steps are already done. But there's plenty of interesting stuff to learn in this section for the curious.

The `sys.config` will need to be edited to match your configuration. Assuming you aren't using Helium Hotspot hardware you'll need to change the following lines of the configuration file:

```text
$ nano _build/prod/rel/miner/releases/0.1.0/sys.config
```

Find the following line:

```erlang
{key, {ecc, [{key_slot, 0}, {onboarding_key_slot, 15}]}},
```

And change it to:

```erlang
{key, undefined},
```

And this line:

```erlang
{use_ebus, true},
```

Should be changed to:

```erlang
{use_ebus, false},
```

You can also edit `log_root`, `base_dir` and `update_dir` to be appropriate for whatever you prefer on your system. For the rest of the guide we'll assume you didn't change these values.

Again press `ctrl-x` to save and exit.

You will also want to increase the open file limit. Note that make the change this will only be effective until you reboot:

```text
$ ulimit -n 64000
```

### Putting Miner in Your Environment

For the rest of this guide, we will assume you've exported the miner root to your PATH and that you've aliased `miner` to the executable \(eg: _build/prod/rel/miner/bin/miner_\).

On the AWS AMI, this is already done for you. Otherwise, this should work on most Linux environments `~/.bashrc`:

```text
export PATH=$PATH:$HOME/miner
alias miner=$HOME/miner/_build/prod/rel/miner/bin/miner
```

### Starting Up

If you are using the AWS AMI, systemd is running the Miner for you. Otherwise,  you can run the Miner in the background, or via an interactive console. 

{% hint style="info" %}
**Note**: because we assume you did not change `log_root`, `base_dir` or `update_dir` in the previous step you'll have to run these commands as root using `sudo` otherwise the default `pi` user won't have sufficient permission to access these directories. If you changed these values in the previous step, you won't have to run as root here.
{% endhint %}

To run in the background \(recommended\):

```text
$ sudo _build/prod/rel/miner/bin/miner start
```

After a few moments you should be back at the shell prompt. Don't worry, that's a good thing.

If you're an advanced user, you might instead want to run miner via the interactive console:

```text
$ sudo _build/prod/rel/miner/bin/miner console
```

If you run in console mode, you'll need to open another SSH session to the Pi to execute any other commands, or use a tool like `tmux` if you're an advanced user. We'd recommend running in the background for now.

### Checking the peer-to-peer network

This is the first health check you can do to see how your Miner is doing. Is it finding other Helium miners over libp2p properly?

The Helium blockchain uses an Erlang implementation of [libp2p](https://libp2p.io/). Because we expect Hotspot hardware to be installed in a wide variety of networking environments [erlang-libp2p](https://github.com/helium/erlang-libp2p) includes a number of additions to the core specification that provides support for NAT detection, proxying and relaying.

The first order of business once the Miner is running is to see if you're connected to any peers, whether your NAT type has been correctly identified, and that you have some listen addresses:

```text
miner peer book -s
```

You will see an output roughly like the following:

```bash
+--------------------------------------------------------+------------------------------+------------+-----------+---------+------------+
|                        address                         |             name             |listen_addrs|connections|   nat   |last_updated|
+--------------------------------------------------------+------------------------------+------------+-----------+---------+------------+
|/p2p/11dwT67atkEe1Ru6xhDqPhSXKXmNhWf3ZHxX5S4SXhcdmhw3Y1t|{ok,"genuine-steel-crocodile"}|     2      |    13     |symmetric|   3.148s   |
+--------------------------------------------------------+------------------------------+------------+-----------+---------+------------+

+----------------------------------------------------------------------------------------------------------------------------+
|                                                 listen_addrs (prioritized)                                                 |
+----------------------------------------------------------------------------------------------------------------------------+
|/p2p/11apmNb8phR7WXMx8Pm65ycjVY16rjWw3PvhSeMFkviWAUu9KRD/p2p-circuit/p2p/11dwT67atkEe1Ru6xhDqPhSXKXmNhWf3ZHxX5S4SXhcdmhw3Y1t|
|                                                 /ip4/192.168.3.6/tcp/36397                                                 |
+----------------------------------------------------------------------------------------------------------------------------+

+--------------------------+-----------------------------+---------------------------------------------------------+------------------------------+
|          local           |           remote            |                           p2p                           |             name             |
+--------------------------+-----------------------------+---------------------------------------------------------+------------------------------+
|/ip4/192.168.3.6/tcp/36397|/ip4/104.248.122.141/tcp/2154|/p2p/112GZJvJ4yUc7wubREyBHZ4BVYkWxQdY849LC2GGmwAnv73i5Ufy|{ok,"atomic-parchment-snail"} |
|/ip4/192.168.3.6/tcp/36397| /ip4/73.15.36.201/tcp/13984 |/p2p/112MtP4Um2UXo8FtDHeme1U5A91M6Jj3TZ3i2XTJ9vNUMawqoPVW|   {ok,"fancy-glossy-rat"}    |
|/ip4/192.168.3.6/tcp/36397| /ip4/24.5.52.135/tcp/41103  |/p2p/11AUHAqBatgrs2v6j3j75UQ73NyEYZoH41CdJ56P1SzeqqYjZ4o |  {ok,"skinny-fuchsia-mink"}  |
|/ip4/192.168.3.6/tcp/46059| /ip4/34.222.64.221/tcp/2154 |/p2p/11LBadhdCmwHFnTzCTucn6aSPieDajw4ri3kpgAoikgnEA62Dc6 | {ok,"skinny-lilac-mustang"}  |
|/ip4/192.168.3.6/tcp/33547| /ip4/34.208.255.251/tcp/443 |/p2p/11VjFZM14JK3oecVuVfYSgAM9oZy1J98kQW8AZMQgLZC4p4noih |   {ok,"fast-pebble-snake"}   |
|/ip4/192.168.3.6/tcp/36397|  /ip4/45.33.47.34/tcp/443   |/p2p/11apmNb8phR7WXMx8Pm65ycjVY16rjWw3PvhSeMFkviWAUu9KRD |{ok,"radiant-cobalt-tadpole"} |
|/ip4/192.168.3.6/tcp/36397| /ip4/67.48.33.86/tcp/49909  |/p2p/11ckxdQsReXpqwCrbbREZj6urEuNEGf2Zk5d4UnsuPMsJDSihwy |{ok,"orbiting-cream-starfish"}|
|/ip4/192.168.3.6/tcp/36397|/ip4/73.241.19.171/tcp/45312 |/p2p/11dj5k2dwSUE7fqFnwAHK9stLd3St9MJiJuaRnvvRgJjbRMZgKJ |   {ok,"micro-tiger-tuna"}    |
|/ip4/192.168.3.6/tcp/36397| /ip4/178.128.88.28/tcp/443  |/p2p/11sRJ9L6nenuBDK8RNvswXThvu6aYyPNA7Rsq6bV1dWG1veyYaS | {ok,"curved-rouge-hedgehog"} |
|/ip4/192.168.3.6/tcp/36397|/ip4/54.152.161.170/tcp/2154 |/p2p/11tZZW54iY4WF481DmrMdVe2QVi2K9m6dXEZps6GvPTqyWZp5V3 |{ok,"harsh-honeysuckle-shark"}|
|/ip4/192.168.3.6/tcp/36397|/ip4/70.113.51.183/tcp/61383 |/p2p/11vsUeTb8g4KcELPctghGLSDWhUDGAEAkiAhERU3euC69HSNvca |  {ok,"long-rosewood-boar"}   |
|/ip4/192.168.3.6/tcp/36397|/ip4/104.248.206.159/tcp/443 |/p2p/11wDt78AktL5ZMmV8ePxZWAu8wyVRLbArFeqhCVExzyd3HP6hQa |   {ok,"fluffy-sand-yeti"}    |
|/ip4/192.168.3.6/tcp/36397|/ip4/192.168.2.134/tcp/62146 |/p2p/11xxCzYzQAxhfazMVa6vi7QBD4ct85baw7FLG9KPmERVttXBKhQ |{ok,"beautiful-coffee-oyster"}|
+--------------------------+-----------------------------+---------------------------------------------------------+------------------------------+
```

As long as you have an address listed in `listen_addrs` and some peers in the table at the bottom, you're connected to the p2p network and good to go.

If you are having trouble, try forwarding port 44158 to the miner. On AWS, double check your security group settings.

### Loading the Genesis block

If you are using the AWS AMI, the Miner has the genesis block loaded and is at least partially synced. If you are running from source or have wiped your blockchain data, you'll need to load the genesis block.

First, you need a genesis block for the main network. 

```text
wget https://github.com/helium/blockchain-api/raw/master/priv/prod/genesis
```

Now you'll need to load the genesis block in to your miner:

```text
miner genesis load ~/miner/genesis
```

You should now be able to check your block height and see a height of 1, which is the genesis \(first\) block:

```text
miner info height
```

The first number is the election epoch, and the second number is the block height of your miner. As blocks get gossiped around from peers in your peerbook and added to your local chain you should see both of these numbers go up. It will take several hours or more to catch up to the tip of the blockchain.



