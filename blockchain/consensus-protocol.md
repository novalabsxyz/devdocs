# The Helium Consensus Protocol

![](../.gitbook/assets/artboard-copy-17.jpg)

The Helium blockchain uses a new consensus protocol, called simply the Helium Consensus Protocol.

## Consensus Protocol Design Goals

In designing the protocol, we wanted to emphasize the following characteristics:

* **Permissionless** - Any Hotspot operating in accordance with the consensus rules and network specifications should be able to participate freely in the Helium Network. 
* **Truly decentralized by design** - No incentive should be available for taking advantage of factors like inexpensive energy cost or deploying more hardware in the same location. 
* **Byzantine Fault Tolerant** - The protocol should be tolerant of Byzantine failures such that consensus can still be reached as long as a threshold of participants are acting honestly. For this, we selected a variant known as Honey Badger BFT detailed below. 
* **Based on useful work** - Achieving network consensus should be useful and reusable to the network. In Nakamoto Consensus-based systems like the bitcoin blockchain, work performed to achieve consensus is only valid for a specific block. By comparison, Helium’s consensus system should perform work that is both useful and reusable to the network beyond simply securing the blockchain. 
* **High rate of confirmed transactions** - The protocol should be able to achieve a high number of transactions per second, and once the transaction is seen by the blockchain it should be assumed confirmed. Users sending device data through the Helium Network cannot tolerate long block settlement times typical of other blockchains. 
* **Censorship-resistant transactions** - Miners should not be able to censor or otherwise select / deselect transactions to be included in a block. 

## HoneyBadger BFT

The Helium Consensus Protocol is based on a variant of the HoneyBadgerBFT \(HBBFT\) protocol. \(HBBFT is based on a body of research originally kicked off by Andrew Miller and the team at the University of Illinois, Urbana-Champaign.\)

HBBFT is an asynchronous atomic broadcast protocol designed to enable a group of known nodes to achieve consensus over unreliable links. In Helium’s implementation, a consensus group of elected Hotspots receives encrypted transactions as inputs and proceeds to reach common agreement on the ordering of these transactions before forming a block and adding it to the blockchain.

HBBFT relies on a scheme known as threshold encryption. Using this scheme, transactions are encrypted using a shared public key, and are only decryptable when the elected consensus group works together to decrypt them. The usage of threshold encryption enables the Helium Consensus Protocol to achieve censorship-resistant transactions.

### Extended Reading

* [HoneyBadger BFT \(PDF\)](https://eprint.iacr.org/2016/199.pdf)
* [Introducing the Helium blockchain](https://blog.helium.com/introducing-the-helium-blockchain-dc2f8997083c)

## The Consensus Group Election

A new Consensus Group \(CG\) is elected once per epoch based a combination of factors. Currently there are `16` members elected to each consensus group, as defined in the `num_consensus_members` chain variable. \(The intention is to increase this number as the number of Hotspots on the network increases.\)

All Hotspots on the Helium Network are eligible to be elected to a consensus group. Hotspots are randomly selected among all Hotspots for a CG assuming they satisfy the following criteria during an election:

* **Active** - Only active hotspots can be elected to a CG. For this purpose, Hotspots are considered active if they have issued a challenge within the last 360 blocks, which is calculated as three times the current challenge interval of 120 blocks.
* **Unique Location** - Using the **H3** location system, the election protocol removes from consideration for that election any Hotspots that share an 'H4' resolution hex with an existing member of the Consensus Group. This provides geographic isolation of CG members as a 'H4' hex is roughly 658.5 square miles. The Helium blockchain uses [H3 for all aspects of geospatial representation within the network](https://blog.helium.com/mapping-the-world-with-hexagons-49f57d8b3df5). **H3** lets you index a space into hexagons of varying resolutions, ranging from `H0` to `H15`,with each level representing a different hexagon size. \([The full breakdown of hex resolutions is here](https://github.com/uber/h3/blob/master/docs/core-library/restable.md)\).

#### Consensus Group Member Deselection

In addition to the **Active** and **Location** filters, each election uses a phased approach to migrating out only a subset of the existing Consensus Group Members over a series of epochs. Specifically, each new Consensus Groups retains `12` of previous `16` members. This is done to make additional use of the CG members that have already been elected and have proven their ability to mine blocks and distribute `HNT`. Put another way:

* Each election, typically four new Consensus Group members are elected. The other 12 are from the previous CG election. 
* Once elected, a Hotspot can typically be part of up to four consecutive Consensus Groups.  
* Poorly performing CG members are likely to be deselected before their four epoch limit is reached. 
* Once a Hotspot is deselected from a Consensus Group, it's not eligible to be elected to another group until the other 15 members that were in its group are completely cycled out. This would be four elections into the future.



## The Mining Process

Following the election of a new Consensus Group, a distributed key generation phase occurs to bootstrap the threshold encryption key \(TPKE\). This TPKE is a cryptographic primitive that allows any Hotspot in the network to encrypt transactions to a master public key \(PK\) such that the Consensus group must work together to decrypt it.

Hotspots are constantly submitting new transactions to the current consensus group. As they arrive, each consensus group member takes a random subset and forwards them around to other members of the group after encrypting them with their share of the master public key.

## Rewarding Hotspots

At the end of each epoch, mining rewards are distributed by the consensus group to the wallet addresses that have earned them. Currently `65%` of all mining rewards go to the hotspot infrastructure \(with the remaining `35%` being distributed to Helium, Inc and other network investors\). A graphical overview of token reward system can be [viewed here](https://www.helium.com/tokens).

During the course of any epoch, Hotspots are rewarded for the following list of activities:

* Submitting valid proof of coverage challenges \(as a “challenger”\)
* Successful participation in proof of coverage as a target \(as a “challengee”\) 
* Witnessing a proof of coverage challenge
* Transfering device data over the network 
* Serving as consensus group member

The Consensus Group members also split `6%` of all HNT mined, as well as any transaction fees collected during the epoch.

Each one of the above activities is recorded in a block using the `reward` transaction. At the completion of each epoch, all the individual `reward` transactions are grouped in a `rewards` transaction at which point all HNT mined in that epoch are distributed.

