# Data Credits

![](../.gitbook/assets/artboard-copy-24.jpg)

Data Credits \(DCs\) are central to the Helium Blockchain and LongFi. Read about how they fit into [our Tokenomics here](../blockchain/tokens.md).

Not only are DCs critical for asserting new Hotspots and their location on the blockchain, registering OUIs and devices, but they are also used to pay for every single LongFi packet that is sent on the Helium network.

Every 24 bytes sent in an uplink or downlink packet cost `1 DC = $.00001`.

Unlike traditional wireless networks, the Helium Network has no annual fee and you only pay for data you use. This transaction occurs between the Miner \(which runs on every Helium Hotspot\) and the [LongFi Network Server](longfi-network-server.md), identified by the OUI, of the device owner.

The transaction is as follows:

* A Miner receives a packet and determines who it belongs to \(see [Routing](longfi-routing.md)\)
* The Miner dials the appropriate LongFi Network Server and offers the packet
* The LongFi Network Server expresses interest in the packet and accepts delivery
* The Miner provides the packet under the promise that the LongFi Network Server will “burn a DC” in the name of the Miner

You may have noticed that the final step includes a **promise** from the LongFi Network Server. The principle at work here is that each packet in its own is quite insignificant in value and so the Miner is willing to extend this service of delivery in exchange for the promise; by doing such, usage experience low latencies. Should the LongFi Network Server fail to fulfill its promise, the Miner would place the LongFi Network Server on a deny list and would no longer route packets from any devices from this LongFi Network Server.

