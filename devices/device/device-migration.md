---
description: Migrating a device from TheThingsNetwork to Helium
---

# Device Migration

## Migrating a device from TheThingsNetwork to Helium

### Assume we have a device that has been provisioned and running on TheThingsNetwork:

In the [TTN Console](https://console.thethingsnetwork.org/), we go to the [Application](https://console.thethingsnetwork.org/applications) containing the device we want to migrate and copy these keys over into a new Device created in [Helium console](https://console.helium.com/devices)… Simple as that!

![](../../.gitbook/assets/ttn-keys001.png)

![](../../.gitbook/assets/migratory_helium_console.png)

The only other change we may need to make is to set the device to use LoRaWAN US channels 48-55 \(sub-band 7\). This process can vary by device. Some come bundled with configuration utilities, others you will have to recompile and flash the firmware yourself. It is also possible that the network negotiates the sub-channel band itself.

If you have followed the [Arduino Quickstlart guide](../arduino-quickstart.md), you will want to copy the values over in the following format:

Paste these values into your code as follows \(replacing with your own keys\):

```text
static const u1_t PROGMEM APPEUI[8]= { 0xC4, 0xA6, 0x19, 0xC9, 0xD8, 0x00, 0x00, 0x00 };
static const u1_t PROGMEM DEVEUI[8]= { 0xF0, 0x9C, 0x3F, 0x5D, 0xC3, 0x00, 0x00, 0x00 };
static const u1_t PROGMEM APPKEY[16] = { 0x73, 0x26, 0x00, 0x8B, 0xC2, 0x6F, 0x23, 0xB8, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
```

Recompile, flash, and you should be good to go!

The frequency table for the US915 band is below. By default, the end node will use all channels \(8~15\) for the OTAA join process. After OTAA JOINED, the end node will use these channels \(8~15\) to send uplink packets.

#### CHE  US915 Uplink Channels \(125KHz,4/5,Unit:MHz,CHS=0\)

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

| Freq | SFBW |
| :--- | :--- |
| 903.9 | SF7BW125 to SF10BW125 |
| 904.1 | SF7BW125 to SF10BW125 |
| 904.3 | SF7BW125 to SF10BW125 |
| 904.5 | SF7BW125 to SF10BW125 |
| 904.7 | SF7BW125 to SF10BW125 |
| 904.9 | SF7BW125 to SF10BW125 |
| 905.1 | SF7BW125 to SF10BW125 |
| 905.3 | SF7BW125 to SF10BW125 |
| 904.6 | SF8BW500 |

#### When using the Helium network, the US915 frequency bands are:

| Freq | SFBW |
| :--- | :--- |
| 911.9 | SF7BW125 to SF10BW125 |
| 912.1 | SF7BW125 to SF10BW125 |
| 912.3 | SF7BW125 to SF10BW125 |
| 912.5 | SF7BW125 to SF10BW125 |
| 912.7 | SF7BW125 to SF10BW125 |
| 912.9 | SF7BW125 to SF10BW125 |
| 913.1 | SF7BW125 to SF10BW125 |
| 913.3 | SF7BW125 to SF10BW125 |
| 912.6 | SF8BW500 |



