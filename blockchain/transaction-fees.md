---
description: An overview of how the Helium blockchain uses transaction fees
---

# Transaction Fees

Like most blockchains, Helium has a system of transaction fees.  All transactions in the Helium blockchain are paid in [Data Credits ](tokens.md#data-credits)\(DCs\). Data Credits are produced via burning some amount of `HNT` using an on-chain transaction. And thanks to a system called "Implicit Burn", users \(typically\) don't need to manually supply `DCs` to pay fees. As long as the Helium wallet being used to submit the transaction contains enough `HNT` to burn to `DCs` to fund the transaction, the burn will happen implicitly, requiring no user intervention.  

### Transaction Fee Schedule

The following is a list of the current set of fees required for various transactions, along with their details. Transaction fees are paid in [Data Credits](tokens.md#data-credits).  

{% hint style="info" %}
\(Note that the cost is not shown in `HNT` as this number is variable based on the current $USD/HNT price as defined by the [HNT Price Oracle](hnt-price-oracles.md).\)
{% endhint %}

| Fee Type | Fee Description | **Cost \(DC\)** | Cost \(USD\) | Required As Of |
| :--- | :--- | :--- | :--- | :--- |
| Send HNT | Transferring HNT from wallet to wallet | `Variable` | `Variable` | `6/29/2020` |
| Transferring Device Packet Data | Fee paid by device owner when sending or receiving sensor data. Metered per 24 bytes. | `1` | `$.00001` | `Not Yet Required` |
| Add Gateway | Fee paid to add Gateway to the blockchain. \(**Only applies to non-Helium Hotspots.\)** | `4000000` | `$40` | `6/29/2020` |
| Assert Gateway Location | Required when asserting a Gateway's location. \(The **first location assertion** for Helium Hotspots is paid by Helium Inc. \) | `1000000` | `$10` | `6/29/2020` |
| Purchasing a blockchain OUI  | Buy an OUI from the Helium blockchain | `10000000` | `$100` | `6/29/2020` |
| Purchasing a blockchain Subnet | Buy a Subnet from the Helium blockchain | `10000000` | `$100` | `6/29/2020` |

### Calculating the DC cost for Sending HNT

As noted above, the `DC` cost of a `Send`transaction is variable. The precise cost is based on the size of the transaction, in bytes. Once the size  calculated, we apply a `5000x` multiplier. For a typical send transaction, where one wallet is sending to one wallet \([like this one here](https://explorer.helium.com/txns/RP8xdjuYsvIAaEuyNvMmlBF7Kc8ShNoURtA1ccgMGpk)\), the complete transaction is made up of the following:

| Transaction Component | Component Size \(Bytes\) |
| :--- | :--- |
| Payer Wallet Key | 33 |
| Payee Wallet Key | 33 |
| Payer Signature | 64 |
| Nonce | 3 \(approximate; ranges from 2-4\) |
| Payment Amount | 6 \(approximate; ranges from 4-8\) |

* In total, this is `139` bytes. 
* Each `24` bytes requires one Data Credit \(as is the case when you're transferring device packet data\).  
* `139` / `24` results in `6` Data Credits.  
* We then apply our 5000x multiplier, and the result is a transaction fee 
* This results in a `30000 Data Credit` cost for the above transaction.

### Transaction Fees and Implicit Burn 

The Helium blockchain uses something called `implicit burn` when paying  fees. 

{% hint style="info" %}
**Implicit Burn™** 

The term _implicit burn_ was coined by Helium PM Coco "cokes" Tang, a recognized innovator in the blockchain technology and terminology space.
{% endhint %}

Thanks to Implicit Burn,  if you have enough HNT to pay the transaction fee in your wallet,  the Helium Mobile Wallet \(or the [Helium Wallet CLI](blockchain-cli.md)\) will calculate the DC cost of your transaction and the blockchain will automatically burn the precise amount of HNT to supply the required DCs for the transaction. For example:

* You need to send `10 HNT` from a Helium Wallet that contains `11 HNT` 
* The cost for this `send` transaction is `35000 DCs`
* Let's assume the  `HNT/$USD` [Oracle Price](hnt-price-oracles.md) is `$.35` at the time you send the `HNT`. This means that you'll need to supply a `1HNT` to fund the `35000 DCs` for this transaction. 
* When you send the `10 HNT`, the Helium Wallet automatically supplies the `1 HNT` to be burned into `DCs`. 
* After the transaction is submitted and processed, your resulting Helium Wallet balance will be `0 HNT`

In the above example, had you attempted to send `10.0001HNT` with only. `11 HNT` in your wallet, this transaction would have failed as burning `.999 HNT` would only result in `34965 DCs`, a bit short of the`35000` required for a `send` transaction. 

### Failed Transactions Result in No DCs Being Spent

Transactions in the Helium blockchain are `atomic`. In short, this means that they either succeed entirely or they don't. So, if you attempt to send HNT from a Helium Wallet without enough HNT to supply the required Data Credits, the transaction will fail after being submitted to the blockchain API by you wallet. And your `HNT` balance will be the same. No `DCs` were burned \(or harmed\) in this failed transaction. 



