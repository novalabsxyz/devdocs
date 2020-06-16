# Extensions to the Semtech UDP Protocol

Due to the trustless decentralized nature of the Helium Network, mechanisms such as [Proof of Coverage](../../blockchain/proof-of-coverage.md) exist to authenticate the physical existence of a gateway participating in the Helium Network. Part of a gateways ability to participate in Proof of Coverage is dependent on an on-board GPS module and a packet forwarder which provides [an extension of the Semtech UDP "stat" frame](https://github.com/helium/packet_forwarder/commit/39b57d86d14b7a0cc10e04b09a904f78908de748):

| Name | Type | Function |
| :--- | :--- | :--- |
| tacc | number | GPS time accuracy in nanoseconds |
| eha | number | GPS horizontal accuracy in meters |
| eva | number | GPS vertical accuracy in meters |
| sats | number | GPS satellites used for position and time \(quantity\) |

These fields help the Miner determine the quality of its GPS fix, which allows its full participation in different validation mechanisms.

We are working with the leading LoRa gateway vendors to assure compatibility with the Helium Network. Check this page in the future for compatible hardware and software references.

