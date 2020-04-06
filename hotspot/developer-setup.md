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

### One Quick Change

We need to modify the SPI speed for this particular RAK concentrator. You may not have to do this with different concentrators. To do that:

```text
$ nano lora_gateway/libloragw/src/loragw_spi.native.c
```

And modify line 56 to read:

```c
#define SPI_SPEED       2000000
```

Now we are ready to build.

### Compiling the Packet Forwarder

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

That's it! Once you have the miner and packet forwarder running you've built a Development Hotspot that can send and receive LoRaWAN packets, and interact with the blockchain to deliver packets to their correct destination.

