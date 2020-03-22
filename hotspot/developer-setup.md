# Building a Developer Hotspot

This guide walks through the steps required to build a Development Hotspot that can send and receive packets over the wireless network, but not perform any blockchain mining functions.

## System Requirements

To build a low-cost Development Hotspot, we recommend using a [Raspberry Pi 3B+ or 4B](https://www.raspberrypi.org) running the latest [Raspian Buster](https://www.raspberrypi.org/downloads/raspbian/) image with a [RAK2245 Pi Hat](https://store.rakwireless.com/products/rak2245-pi-hat) installed, and a recommended 64GB sdcard. In theory any Linux host and any Semtech SX1301-based concentrator board that interfaces to the host via SPI can be used, but are untested as of this writing.

It is also possible to use any LoRa gateway that can run Semtech's [packet forwarder](https://github.com/Lora-net/packet_forwarder) application and run the `miner` application on a separate host.

This README will assume a Raspberry Pi 3B+/4 with 1GB RAM + RAK2245 combination described above. This combination is available as a packaged product directly from RAK called the [Pilot Gateway](https://store.rakwireless.com/products/rak7243c-pilot-gateway?variant=26682434879588).

There are three distinct applications required in order for the Hotspot to send and receive LoRaWAN packets and route them to the correct internet hosted destination - [Miner](https://github.com/helium/miner), [packet\_forwarder](https://github.com/Lora-net/packet_forwarder), and [lora\_gateway](https://github.com/Lora-net/lora_gateway).

### Raspberry Pi specific setup

The current tested release is:

```c
Raspbian Buster Lite
====================
Minimal image based on Debian Buster
Version:September 2019
Release date:2019-09-26
Kernel version:4.19
Size:435 MB
```

The default Raspian image has a small swapfile of 100MB, which on a Pi with 1GB or less of RAM is insufficient for building some of the dependencies, such as [RocksDB](http://rocksdb.org/). To increase the swap size, first stop the swap:

```text
sudo dphys-swapfile swapoff
```

Edit the swapfile configuration as root `sudo nano /etc/dphys-swapfile` and change the `CONF_SWAPSIZE`:

```text
CONF_SWAPSIZE=1024
```

Save the file, then reboot:

```text
sudo reboot
```

Next, enable SPI and I2C by running `sudo raspi-config` and selecting `Interfacing Options`, and enabling I2C and SPI from within the menu system.

Now let's go ahead and update our install with:

```text
sudo apt-get update
```

## Installing miner from Source

First, you'll need [git](https://git-scm.com/). If you don't have it installed:

```bash
sudo apt-get install git
```

Clone the git repository:

```text
git clone https://github.com/helium/miner.git
```

You will need to install the dependencies listed below in order to use the Miner.

### Install Erlang

Miner has been tested against [Erlang OTP 21.3](https://www.erlang.org/downloads/21.3).

To install OTP 21.3 in Raspian, we'll first acquire the Erlang package from [Erlang Solutions](https://www.erlang-solutions.com/resources/download.html) and then install the dependencies:

```text
wget https://packages.erlang-solutions.com/erlang/debian/pool/esl-erlang_21.3.3-1~raspbian~stretch_armhf.deb
```

Install various other dependencies:

```text
sudo apt-get install libdbus-1-dev autoconf automake libtool flex libgmp-dev cmake libsodium-dev libssl-dev bison libsnappy-dev libclang-dev doxygen
sudo dpkg -i esl-erlang_21.3.3-1~raspbian~stretch_armhf.deb
sudo apt-get install -f
```

### Install Screen \(optional\)

This is an optional step, but will help simplify things later on if you'd like to use an interactive console.

```text
sudo apt-get install screen
```

### Compile the Miner

Before we can do so, we must make some modifications. We need to edit the rebar.lock file:

```text
cd miner
nano rebar.lock
```

And change the `rocksdb` dependency so that it appears as follows:

```text
{<<"rocksdb">>,
 {git,"https://github.com/amirhaleem/erlang-rocksdb",
      {ref,"9f29d6e20d7f4f93a6157730a11fa9211e670e87"}},3},
```

Once the Miner has been cloned and Erlang installed, we can create a release using [rebar3](https://www.rebar3.org/). Rebar will handle all the Erlang dependencies and build the application. This will take a while:

```text
./rebar3 as prod release
```

Once this completes, you're ready to run the Miner.

## Using the Miner

Congrats! You've installed the Miner 🚀 Now it's time to make some things happen.

### Editing the configuration

The `sys.config` will need to be edited to match your configuration. Assuming you aren't using Helium Hotspot hardware you'll need to change the following lines of the configuration file:

```text
nano _build/prod/rel/miner/releases/0.1.0/sys.config
```

Change the following settings:

```erlang
{key, {ecc, [{key_slot, 0}, {onboarding_key_slot, 15}]}}, %% don't make this the last line in the stanza because sed and keep it on one line
```

should be changed to:

```erlang
{key, undefined},
```

and:

```erlang
{use_ebus, true},
```

should be changed to:

```erlang
{use_ebus, false},
```

You should also edit `log_root`, `base_dir` and `update_dir` to be appropriate for whatever you prefer on your system.

### Starting Up

You can run the Miner in the background, or via an interactive console \(like screen if you installed it earlier\).

To run in the background:

```text
_build/prod/rel/miner/bin/miner start
```

To run via the interactive console:

```text
_build/prod/rel/miner/bin/miner console
```

If you run in console mode, you'll need to open another terminal to execute any other commands.

### Checking the peer-to-peer network

The Helium blockchain uses an Erlang implementation of [libp2p](https://libp2p.io/). Because we expect Hotspot hardware to be installed in a wide variety of networking environments [erlang-libp2p](https://github.com/helium/erlang-libp2p) includes a number of additions to the core specification that provides support for NAT detection, proxying and relaying.

The first order of business once the Miner is running is to see if you're connected to any peers, whether your NAT type has been correctly identified, and that you have some listen addresses:

```text
_build/prod/rel/miner/bin/miner peer book -s
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

### Loading the Genesis block

First, you need a genesis block from either the main network, or the Pescadero testnet. Get them here: [mainnet](https://github.com/helium/blockchain-api/blob/master/priv/prod/genesis) or [pescadero](https://github.com/helium/blockchain-api/blob/master/priv/pescadero/genesis).

{% hint style="warning" %}
These are not links to the actual files. You will need to download the files separately and transfer them onto the Raspberry Pi.
{% endhint %}

Once you've downloaded it, you'll need to use the CLI to load the genesis block in to your local miner:

```text
_build/prod/rel/miner/bin/miner genesis load <path_to_genesis>
```

After the genesis block has been loaded, you should be able to check your block height and see at least the genesis block:

```text
_build/prod/rel/miner/bin/miner info height
```

The first number is the election epoch, and the second number is the block height of your miner.

## Installing packet\_forwarder and lora\_gateway from Source

Once you have miner running, you'll need packet\_forwarder and lora\_gateway to receive packets via SPI and the RAK2245 board and deliver them to the miner via UDP.

Clone the git repository:

```text
git clone https://github.com/Lora-net/packet_forwarder
git clone https://github.com/Lora-net/lora_gateway
```

And download the configuration file:

{% file src="../.gitbook/assets/global\_conf.json" caption="global\_conf.json" %}

## One Quick Change

Go into the file we pulled from [https://github.com/Lora-net/lora\_gateway/blob/master/libloragw/src/loragw\_spi.native.c](https://github.com/Lora-net/lora_gateway/blob/master/libloragw/src/loragw_spi.native.c) and modify line 56 to read:

```c
#define SPI_SPEED       2000000
```

Now we are ready to build.

## Compile the packet\_forwarder and lora\_gateway

Go into the packet\_forwarder directory and run:

```text
./compile.sh
```

Once that wraps up, we can just run:

```text
./lora_pkt_fwd
```

## Conclusion

That's it! Once you have miner, packet\_forwarder, and lora\_gateway running, you've built a Development Hotspot that can send and receive LoRaWAN packets and interact with the blockchain to deliver packets to their correct destination.

