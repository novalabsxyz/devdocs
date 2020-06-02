# MAC Commands, FOpts, ADR

## LoRaWAN Specification Background

The LoRaWAN specification separates the notion of **Network** and **Application** messages. This separation of concerns is merited as an application should not have to worry about notions such as transmit power or channels and likewise, a network or gateway should not worry about the actual application-specific data.

In order to provide a way for the Network to talk to devices, the [LoRaWAN specification v1.0.2](https://lora-alliance.org/resource-hub/lorawanr-specification-v102) provides for a notion of MAC Commands. These are transmitted from the Network Server to end-device in one of two ways:

* piggy-backed on downlink application-level messages by using the FOpt \(aka: frame option\) field of the Frame Header
* sent in their own standalone downlink frame where FPort \(aka: frame port\) is set to 0

While using the Helium Network, you are most likely using the Helium Router as a Network Server, unless you are managing your own OUI and OUI endpoint. In other words, if you don't know if you are using the Helium Router, you most likely are.

## Helium Router MAC Command Support

The Helium Router's support for MAC Commands is currently extremely targeted. We intend on developing further as needs arise, but currently, we focus on just a few commands. 

### LinkADRReq:LinkADRAns

The scope of the LinkADRReq is rather broad: "requests the end-device to change data rate, transmit power, repetition rate or channel". However, our intention with this command is very targeted to US devices where devices need to be told which [channels](regional-channels.md) are available; without doing so, subsequent packets have a 7/8 probability of being lost.

The Helium Router will send a LinkADRReq in response to the first uplink frames it receives. It will set the appropriate channel mask, will echo back the datarate it received on that uplink, and it will request "max power" to the device. _These will continue until a LinkADRAns is received from the device!_ 

As such, it is important that you device eventually send a LinkADRAns; if for some reason, your stack does not tolerate some of the requested parameters, NAKs are acceptable but some response should be sent to avoid wasting time-on-air and data credits.

### LinkCheckReq:LinkCheckAns

The LinkCheckReq is sent from device to gateway to check the quality of the connection. The request is more or less a ping and the interesting stuff is in the LinkCheckAns: "Answer to LinkCheckReq command. Contains the received signal power estimation indicating to the end-device the quality of reception \(link margin\)."

The intention of implementing this command was to allow for devices to manage their own datarate and transmit power until we have time on our end to implement these advanced features.









