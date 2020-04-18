---
description: A tutorial to add a Browan Object Locator for use on the Helium Network
---

# Browan LoRaWAN Object Locator

## Introduction:

The Browan Object Locator is a battery-powered GNSS LoRaWAN tracking device. It's intended to to be attached to a backpack or purse. Functionally the device is composed of a GNSS receiver, 3D accelerometer,  an LED indicator and a USB-C connector. 



![Browan Object Locator](https://lh3.googleusercontent.com/kojYLLk6Y-ifds5PBCBcUJXOsFFeiI1tH7saCLBWds57og5J5f1nB5PGM1Zf-eYJpYTW9T4uuqaLpfRTkWyirdv3jOYs7rCu3mlmsCpje3Xba5rN2evVP1aOYiEZSgmy11VHoCwQ)

### Hardware: 

* Browan Object Locator
* USB-C Charging Cable

### Software: 

* Helium  [Console](../../console/introduction.md)
* Helium [Cargo ](../../console/integrations/cargo.md)\(Optional if you have your own location visualization tool\) 

### Setup: 

The Browan Object Locator is shipped with device credentials \(DevEUI, AppEUI and AppKey\) for OTAA device activation. If you do not have these on hand, please contact the device manufacturer for the credentials. Since this device comes pre-provisioned, and there is no mechanism for changing these credentials, it is crucial that they are provided. 

If you look at the back of the Object Locator, you will notice a QR Code, along with a serial number. Match that serial number with the value that the manufacturer has provided to determine the appropriate credentials. 

![Browan Object Locator Serial Number](../../.gitbook/assets/image%20%2865%29.png)

Once you have the device credentials, you can simply [add a device](../../console/adding-devices.md) in [Console](../../console/introduction.md) with these device credentials. 

![Adding Browan Object Locator in Console](../../.gitbook/assets/image%20%2822%29.png)

### Usage: 

The Browan Object Locator has a rechargeable  LiPo battery, which can be recharged with the USB Type-C connector.  If the battery is charging, the LED will remain on. If the battery is fully charged while a charger is connected, the green LED will fade in and out. 

The Object Locator has a few distinct modes of operation. 

The Object Locator will sleep or hibernate during periods of no activity to prevent transmissions and minimize battery usage. If motion is detected a period of rest, the LED will flash 3 times and the device will transmit immediately. 

If you press the button on the Object Locator, you will schedule an uplink transmission. The device will transmit regardless of whether or not it has a GPS fix. 

If the Object Locator is in motion, it will transmit every 30 seconds. 

### Payload and Integrations: 

The Browan Object Locator payload is compatible with the [Helium Cargo](../../console/integrations/cargo.md) location visualization tool. 

![Browan Object Locator Payload](../../.gitbook/assets/image%20%2853%29.png)

###  

