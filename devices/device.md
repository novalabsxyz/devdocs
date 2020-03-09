# Introduction

The Helium Network was built to transfer device data. Here you will learn about the pieces that make up a Helium device and how you can quickly get started!

Any device can communicate on the Helium network if it uses the [LoRaWAN wireless protocol](https://lora-alliance.org/about-lorawan).

### Adding New Devices

For information on how to add new LoRaWAN devices, visit the [Console Quickstart](https://github.com/helium/devdocs/tree/316a0ffe46a00cd9398f98332e75206bc437c93c/console/quickstart/README.md).

#### Developing A New Device

**LongFi Arduino**

The LongFi Arduino repository provides example Sketches that help LoRaWAN capable Arduino devices connect to the Helium Network.

[Quickstart](https://github.com/helium/devdocs/tree/316a0ffe46a00cd9398f98332e75206bc437c93c/device/arduino-quickstart/README.md)

[GitHub - longfi-arduino](https://github.com/helium/longfi-arduino)

### Migrating Devices

If you already have LoRaWAN devices deployed on another network, you can easily migrate them the the Helium Network. Typically this only involves adding your existing `DevEUI`, `AppEUI`, and `AppKey` to a new device in the Helium Console \(and we'll soon have a CLI that scripts some or all of this process for you\).

The following is a list of network-specific migration guides. Join us!

* [Migrating from the Thing Network to Helium](device-migration-the-things-network.md)
* Migrating from Senet to Helium \(**Coming Soon**\)
* Migrating from MachineQ to Helium \(**Coming Soon**\)

