# Building a Developer Hotspot

This guide walks through the steps required to build a Development Hotspot that can send and receive packets over the wireless network, but not perform any blockchain mining functions.

{% hint style="warning" %}
This guide is experimental and for advanced users only, and you may run in to various issues trying to get this working. We eventually intend to make it possible for LoRaWAN gateways of any kind to connect to our cloud-hosted Console directly without needing to follow these instructions.
{% endhint %}

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
$ sudo dphys-swapfile swapoff
```

Edit the swapfile configuration and change the size of the swapfile:

```text
$ sudo nano /etc/dphys-swapfile
```

Edit the `CONF_SWAPSIZE` line so that it reads as follows:

```text
CONF_SWAPSIZE=1024
```

Save the file and exit by pressing `ctrl-x`, then reboot:

```text
$ sudo reboot
```

Next, enable SPI and I2C using the raspi-config tool:

```text
$ sudo raspi-config
```

Select `Interfacing Options`, and enable `I2C` and `SPI` from within the menu system.

Now let's go ahead and update our install with:

```text
$ sudo apt-get update
```

## Installing miner from Source

First, you'll need [git](https://git-scm.com/). If you don't have it installed:

```bash
$ sudo apt-get install git
```

Clone the git repository:

```text
$ git clone https://github.com/helium/miner.git
```

### Install Erlang

Miner has been tested against Erlang OTP 21.3.3.

To install OTP 21.3.3 in Raspian, we'll first acquire the Erlang package from [Erlang Solutions](https://www.erlang-solutions.com/resources/download.html):

```text
$ wget https://packages.erlang-solutions.com/erlang/debian/pool/esl-erlang_21.3.3-1~raspbian~stretch_armhf.deb
```

Now we'll innstall various other dependencies and then install Erlang itself. You'll see some errors after running `dpkg`, you can ignore them:

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

Congrats! You've installed the Miner 🚀 Now it's time to make some things happen.

### Editing the configuration

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

You will also want to increase the open file limit. Note that make the change this way _w_ill only be effective until you reboot:

```text
$ ulimit -n 64000
```

### Starting Up

You can run the Miner in the background, or via an interactive console. 

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

The Helium blockchain uses an Erlang implementation of [libp2p](https://libp2p.io/). Because we expect Hotspot hardware to be installed in a wide variety of networking environments [erlang-libp2p](https://github.com/helium/erlang-libp2p) includes a number of additions to the core specification that provides support for NAT detection, proxying and relaying.

The first order of business once the Miner is running is to see if you're connected to any peers, whether your NAT type has been correctly identified, and that you have some listen addresses:

```text
$ sudo _build/prod/rel/miner/bin/miner peer book -s
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

First, you need a genesis block for the main network. 

```text
$ wget https://github.com/helium/blockchain-api/raw/master/priv/prod/genesis
```

Now you'll need to load the genesis block in to your miner:

```text
$ sudo _build/prod/rel/miner/bin/miner genesis load ~/miner/genesis
```

You should now be able to check your block height and see a height of 1, which is the genesis \(first\) block:

```text
$ sudo _build/prod/rel/miner/bin/miner info height
```

The first number is the election epoch, and the second number is the block height of your miner. As blocks get gossiped around from peers in your peerbook and added to your local chain you should see both of these numbers go up. It will take several hours or more to catch up to the tip of the blockchain.

## Installing the Semtech packet forwarder

Once you have miner running, you'll need the Semtech packet forwarder to receive packets via SPI and the RAK2245 board and deliver them to the miner via UDP.

Clone the git repository:

```text
$ cd ..
$ git clone https://github.com/Lora-net/packet_forwarder
$ git clone https://github.com/Lora-net/lora_gateway
```

We'll then download the Helium-specific packet forwarder configuration file and move it in to the right folder:

```text
$ wget https://helium-media.s3-us-west-2.amazonaws.com/global_conf.json
$ mv global_conf.json packet_forwarder/lora_pkt_fwd/
```

## One Quick Change

We need to modify the SPI speed for this particular RAK concentrator. You may not have to do this with different concentrators. To do that:

```text
$ nano lora_gateway/libloragw/src/loragw_spi.native.c
```

And modify line 56 to read:

```c
#define SPI_SPEED       2000000
```

Now we are ready to build.

## Compiling the Packet Forwarder

Compile the packet forwarder:

```text
$ cd packet_forwarder
$ ./compile.sh
```

Before we can start the packet forwarder you will often have to issue a reset command to the RAK concentrator. In most cases you have to issue this command every time before starting the packet forwarder. This resets the concentrator using GPIO pin 17 of the Raspberry Pi, which is connected to the reset pin on the concentrator:

```text
$ ../lora_gateway/reset_lgw.sh start 17
```

We can now start the packet forwarder:

```text
$ ./lora_pkt_fwd/lora_pkt_fwd
```

## Conclusion

That's it! Once you have miner, packet\_forwarder, and lora\_gateway running, you've built a Development Hotspot that can send and receive LoRaWAN packets and interact with the blockchain to deliver packets to their correct destination.

