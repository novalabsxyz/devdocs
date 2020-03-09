---
description: Migrating a device from TheThings Network to Helium
---

# Device Migration from The Things Network

This short guide will walk you through porting your devices to the Helium Network \(and Helium Console\) from TTN and the TTN Console. 

At a high level, there are two steps to accomplish this migration:

1. Copying your keys from the TTN Console to the Helium Console. \(Right now this is a manual process, but we'll soon have a CLI that automates this\).
2. Porting your `application`logic from TTN Console to use the far superior `labels` construct in the Helium Console.

### Copying Keys and Ensuring you're using Sub Band 7

In the [TTN Console](https://console.thethingsnetwork.org/), we go to the [Application](https://console.thethingsnetwork.org/applications) containing the device we want to migrate and copy these keys over into a new Device created in [Helium Console](https://console.helium.com). 

![](../.gitbook/assets/ttn-keys001.png)

![](../.gitbook/assets/migratory_helium_console.png)

Next, you need to ensure the device can use LoRaWAN US channels `48-55` \(also known as `Sub-band 7`\). This process can vary by device. Some come bundled with configuration utilities, others you will have to recompile and flash the firmware yourself. It is also possible that the network negotiates the sub-channel band itself.

The frequency table for the US915 band is below. By default, the end node will use all channels \(8~15\) for the OTAA join process. After OTAA JOINED, the end node will use these channels \(8~15\) to send uplink packets.

#### LoRaWAN US915 Uplink Channels \(125KHz,4/5,Unit:MHz,CHS=0\)

| Sub-band |  |  |  |  |  |  |  |  | Channels |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 902.3 | 902.5 | 902.7 | 902.9 | 903.1 | 903.3 | 903.5 | 903.7 | 0-7 |
| **2 \(TTN\)** | **903.9** | **904.1** | **904.3** | **904.5** | **904.7** | **904.9** | **905.1** | **905.3** | **8-15** |
| 3 | 905.5 | 905.7 | 905.9 | 906.1 | 906.3 | 906.5 | 906.7 | 906.9 | 16-23 |
| 4 | 907.1 | 907.3 | 907.5 | 907.7 | 907.9 | 908.1 | 908.3 | 908.5 | 24-31 |
| 5 | 908.7 | 908.9 | 909.1 | 909.3 | 909.5 | 909.7 | 909.9 | 910.1 | 32-39 |
| 6 | 910.3 | 910.5 | 910.7 | 910.9 | 911.1 | 911.3 | 911.5 | 911.7 | 40-47 |
| **7 \(Helium\)** | **911.9** | **912.1** | **912.3** | **912.5** | **912.7** | **912.9** | **913.1** | **913.3** | **48-55** |
| 8 | 913.5 | 913.7 | 913.9 | 914.1 | 914.3 | 914.5 | 914.7 | 914.9 | 56-63 |

#### When using the TTN network, the US915 frequency bands are:

| **TTN Frequency** | Helium Frequency | **SFBW** |
| :--- | :--- | :--- |
| 903.9 | 911.9 | SF7BW125 to SF10BW125 |
| 904.1 | 912.1 | SF7BW125 to SF10BW125 |
| 904.3 | 912.3 | SF7BW125 to SF10BW125 |
| 904.5 | 912.5 | SF7BW125 to SF10BW125 |
| 904.7 | 912.7 | SF7BW125 to SF10BW125 |
| 904.9 | 912.9 | SF7BW125 to SF10BW125 |
| 905.1 | 913.1 | SF7BW125 to SF10BW125 |
| 905.3 | 913.3 | SF7BW125 to SF10BW125 |
| 904.6 | 912.6 | SF8BW500 |

### Porting Your Application Logic to use Helium's Labels Construct

After you've added your device to the Helium Console, you'll likely need to reconstruct the [Application](https://www.thethingsnetwork.org/docs/applications/) you've built for your devices in TTN's Console. 

Instead of an `application`, Helium uses [labels](../console-1/labels.md) And, instead of creating your TTN application first, then adding devices to it, Helium lets you add any number of devices to Console, then group them by labels after the fact. Devices can also have more than one label. 

To read more about Labels and how you should use them to replace and extend `applications`, head [here](../console-1/labels.md).





