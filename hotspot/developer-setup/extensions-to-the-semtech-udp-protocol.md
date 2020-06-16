# Extensions to the Semtech UDP Protocol

Due to the decentralized nature of the Helium Network, mechanisms such as [Proof of Coverage](../../blockchain/proof-of-coverage.md) exist to authenticate the physical existence of a gateway participating in the Helium Network. Part of a gateways ability to participate in Proof of Coverage is dependent on an on-board GPS module and a packet forwarder which provides [an extension of the Semtech UDP "stat" frame](https://github.com/helium/packet_forwarder/commit/39b57d86d14b7a0cc10e04b09a904f78908de748):

| Name | Type | Function |
| :--- | :--- | :--- |
| tacc | number | GPS time accuracy in nanoseconds |
| eha | number | GPS horizontal accuracy in meters |
| eva | number | GPS vertical accuracy in meters |
| sats | number | GPS satellites used for position and time \(quantity\) |

These fields help the Miner determine the quality of its GPS fix, which allows its full participation in different validation mechanisms.

We are working with the leading LoRa gateway vendors to assure compatibility with the Helium Network. Check this page in the future for compatible hardware and software references.

## Integration Details

Adding the necessary fields to the Semtech UDP frame generally requires modifying the source code of the packet forwarder. Helium maintains two forks from Semtech's packet forwarder where we features these extensions:

* [Packet Forwarder](https://github.com/helium/packet_forwarder/commit/0755105ea03da5a8cbe7b2c47e9e5a9cbc940fbc)
* [LoRa Gateway](https://github.com/helium/lora_gateway/commit/5ba0aa04808b20591be09cddd3d88c480c2703b6)



