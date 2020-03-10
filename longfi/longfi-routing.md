# Routing

LongFi leverages LoRaWAN concepts but uses the blockchain to determine routing behavior. As such, the network is decentralized and permissionless. 

There is a fundamental difference between how **Join** and **Data** frames are routed with the Helium network. A LoRaWAN **Join** packet has the following unencrypted data:

```bash
___________________________________________________________
|   Size (octets)  |      8     |      8     |      8     |
|   Join Request   |   AppEUI   |   DevEUI   |  DevNonce  |
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
```

The Miner reads _\(AppEUI, DevEUI\)_ and queries Join routing table for each OUI; each OUI manages its own routing table which is written to the blockchain. If the credentials are in the OUI's table, the Miner will offer the packet to the address assigned by the OUI where the [LongFi Network Server](https://github.com/helium/devdocs/tree/67b988ec351854ec4b7608e12b5b8f47f2456abf/longfi/longfi-network-server/README.md) runs. Thus the Join packet is delivered to all registered LongFi Network Servers.

In typical LoRaWAN fashion, the [LongFi Network Server](https://github.com/helium/devdocs/tree/67b988ec351854ec4b7608e12b5b8f47f2456abf/longfi/longfi-network-server/README.md) then responds with a DevAddr \(and lots of other information which is used to derive session keys\). This DevAddr is important because it is now part of the FHDR of **Data** packets:

```bash
________________________________________________________________________
|   Size (octets)  |     4      |      1     |      2     |    0..15   |
|   FHDR           |  DevAddr   |    FCtrl   |     FCnt   |    FOpts   |
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
```

The Miner is now able to use DevAddr to determine the OUI of Data frames. Note that the look-up and routing by DevAddr instead of \(AppEUI, DevEUI\) is much faster.

