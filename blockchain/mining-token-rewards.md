---
description: How do HNT get allocated? Read on to find out.
---

# Mining and Token Rewards

![](../.gitbook/assets/efee.jpg)

Hotspot Hosts and other Helium Network participants have many questions about expected mining rewards. This is for good reason. Earning `HNT` is one of the most exciting pieces of the Helium Network.

While there's no exact formula for for calculating how much `HNT` you'll earn over a given period, there are some higher level concepts, design elements, and rules to keep in mind that will help better explain what you might earn and why. This section covers these, as well as some mining and token reward basics.

## How Do Hotspots Earn Helium Tokens?

The Helium blockchain rewards Hotspots for providing wireless coverage and verifying the Helium Network. Hotspots are rewarded in Helium Token \(`HNT`\).

Every [epoch](mining-token-rewards.md), the current consensus group mines a block on the blockchain. In each block, hotspots earn `HNT` for the work they have contributed. Hotspots and other network participants earn `HNT` according to the following distribution:

| Reward Type | Description |
| :--- | :--- |
| PoC Challenger | Rewarded to any Hotspot that creates a valid PoC challenge and submits the corresponding receipt to the blockchain. |
| PoC Challengees | Awarded to any Hotspot that completes a stage of a PoC challenge. |
| Witnesses | Distributed to all Hotspots that witness a packet as part of a PoC Challenge. |
| Consensus Group | Divided equally among the Hotspots that are part of outgoing Concesus Group, responsible for mining blocks. |
| Security | Awarded to Helium, Inc and other Network investors who hold Security Tokens. |
| Network Data Transfer | Distributed each epoch to Hotspots that route LongFi sensor data for sensors on the Network during that epoch.  |

{% hint style="info" %}
**Do I Have To Actively Participate to Earn Rewards Once My Hotspot is deployed?**

No. Once your Hotspot is completely deployed and fully synced with the Helium blockchain, you as the owner are not required to do anything else in order to earn HNT. Your Hotspot will perform all of the above activities on its own while it runs. That said, there are some optimizations you can make to ensure your Hotspot is operating at full capacity.
{% endhint %}

## Target HNT Production Per Epoch

The target production rate for new `HNT` minted per month is `5,000,000`. This means that, if the blockchain performs as designed, it will produce `5,000,000` HNT per month. This target rate is based on the following two targets, as defined in their specific chain variables:

* Target **block time** is `60` seconds.
* Target **epoch size** is `30` blocks.

Recall that, in the Helium blockchain, [blocks](mining-token-rewards.md) contain some number of individual transactions and [epochs](mining-token-rewards.md) are comprised of all the blocks mined by a the current Consensus Group since the last epoch.

So, if we achieve our target block time of `60` seconds, and target epoch of `30` blocks, the blockchain will produce `5MM` HNT per month. Per epoch, this equals roughly `3424.66` HNT. The math for this is as follows:

* `(43800 minutes per month / 30 minutes per epoch) = 1460 epochs per month`
* `(5000000 tokens minted per month / 1460 epochs per month) = 3424.65753424658 HNT per epoch`

{% hint style="info" %}
#### What Are The Current Block and Epoch Times?

At any point you can go to the [Helium blockchain Explorer](http://explorer.helium.com/) to view recent block and epoch statistics, past HNT production numbers, and much more. Your Helium Mobile Wallet will also give you the average block and epoch times for the trailing 24 hour period.
{% endhint %}

## HNT Distributions Per Epoch

As calculated above, the target `HNT` per epoch is approximately `3424.66`. The next logical question is "Where does all this HNT go?" Let's take a look.

Below are the mining rewards per epoch. For every complete epoch \(marked by the election of a new Consensus Group\), all the `HNT` produced get distributed over the following reward types:

{% hint style="info" %}
**Rewards Change Over Time**

You can always find the current rewards schedule using the [Chain Variables API.](api/chain-variables.md) What's shown below reflects what the rewards distribution will be when [Data Credits](tokens.md#data-credits) are fully deployed and Hotspots are being rewarded for routing traffic. This is slated to happen at the end of July 2020. 
{% endhint %}

| Reward Type | Percentage | HNT Earned by Reward Type |
| :--- | :--- | :--- |
| PoC Challenger | 1% | 34.2466 |
| PoC Challengees | 19% | 650.6854 |
| Witnesses | 9% | 308.2194 |
| Consensus Group | 6% | 205.4796 |
| Security Tokens | 35% | 1198.631 |
| Network Data Transfer | 30% | 1027.398 |
| **Total** | **100%** | **3424.66** |

## HNT Earnings Per Hotspot By Reward Type

Using the above rewards schedule, we can calculate some example distributions for a given epoch.



| Reward Type | Hotspots Earning Reward | HNT Earned Per Hotspot | Total Earned by Reward Type |
| :--- | :--- | :--- | :--- |
| PoC Challenger | 160 | 0.21404125 | 34.2466 |
| PoC Challengee | 128 \(unique instances\) | 5.083479688 | 650.6854 |
| Witnesses | 409 \(unique instances\) | 0.753592665 | 308.2194 |
| Consensus Group | 16 | 12.842475 | 205.4796 |
| Security | N/A | N/A | 1198.631 |
| Network Data Transfer | _**See below\***_ | _**See below\***_ | 1027.398 |
| **Total** | N/A | N/A | 3424.66 |

### **Calculating The Network Data Transfer Reward Per Hotspot**

As shown above, the `Network Data Transfer`  __reward type earns `30%` of the HNT mined per epoch. The calculation for this warrants some explanation. At a high level, every Hotspot that routes data in a given epoch will earn some part of the roughly `1027.398HNT` that is allocated to this reward type.  

Hotspots earn HNT based on how much data they route, and specifically how many Data Credits are burned in their name, at a rate that equals their percentage share of the total amount of Data Credits spent on Network Data Transfer during that epoch.  The simple calculation for finding the amount of HNT awarded to any given Hotspot for Network Data Transfer is:

 `X` =  \(`A` / `C`\) \* `R` where:

* `X` = `Hotspot HNT earnings from Network Data Transfer`
* `A` = `Total DCs routed by Hotspot`
* `C` = `Total DCs spent during Epoch on Network Data Transfer`
* `R` = `Total HNT allocated for Network Data per Epoch (approximately 1027.398HNT)`

**Example Calculation**

* Let's assume that, during a given epoch, a total of 500,000 Data Credits were spent on routing sensor data. 
* Only three Hotspots - `Wobbly Blue Cougar`, `Steep Fern Trout`, and `Damp Peanut Hippo` - were collectively responsible for routing all the sensor data packets for the blockchain accounts that spent the 500,000 DCs to send and receive this data. 
* Across those 500,000 DCs let's assume the following:
  * `Wobbly Blue Cougar` was responsible for 300,000 DCs; 
  * `Steep Fern Trout` routed 150,000 DCs worth of data; 
  * `Damp Peanut Hippo` handled 50,000 DCs of network data transfer.

With these assumptions in mind, here's how the entire `30%` of HNT reward during this epoch for Network Data Transfer would be distributed:

| Hotspot Name | DC Routed  | % of whole during epoch | HNT Earned |
| :--- | :--- | :--- | :--- |
| Wobbly Blue Cougar | 300,000 | 60% | 616.4388 |
| Steep Fern Trout | 150,000 | 30% | 308.2194 |
| Damp Peanut Hippo | 50,000 | 10% | 102.7398 |
| **Total** | **500,000** | **100%** | **1027.398** |

**Additional Notes on Reward Types and Payouts:**

* All Hotspots in the `Consensus` group will earn an equal rewards.
* All Hotspots participating in PoC, including `Challengers`, `Challengees` and `Witnesses` will earn rewards proportional to how many events they participated in out of the total number of events per epoch.
* All Hotspots participating in `Network Data Transfer` will earn rewards proportional to their share of the total data transfer in that epoch, as shown above.
* Hotspots can earn one or more reward types during any given epoch. 
* Hotspots are only eligible to submit one Proof of Coverage Challenge - which results in them earning the `PoC Challenger` reward  - **once per two epochs**.
* `PoC Challenger`, `PoC Challengee`, and `Witness` reward types get distributed in the epoch that includes the corresponding PoC receipt. 
* A Hotspot can earn more than one `PoC Challengee` and `Witness` rewards per epoch. 

## HNT Proration and Slow Block Times

The Helium Network is still new and growing quickly, so there are bugs to be squashed and optimizations to be made. Target block and epoch times can be difficult to attain consistently. To account for this, the Helium blockchain uses something called `proration` to ensure that the target of `5,000,000` is achieved even if block and epoch times aren't on target.

{% hint style="info" %}
#### Target HNT Depends on Blocks, Not Clocks

It's easiest to think of target HNT production over the span of one month. If the blockchain performs on target, resulting in roughly 1460 epochs per month, then 5MM new HNT will be produced. "One month" is a period of time measured by a clock. However, under the hood, we use block time, and the resulting epochs, to mark HNT production against our target. So when blocks are slow, HNT production is reduced proportionally.
{% endhint %}

### What Happens to HNT When Block Times are Slow?

In the past, due to network growing pains, there have been some less-than-optimal block times. This results in slower epochs. When this happens the Network will produce **less** HNT over the same period of time. This may seem counterintuitive. _Shouldn't the blockchain produce more HNT when block times are slower to ensure the 5MM per month target is hit?_ No. Again, think blocks, not clocks. Here's a step-by-step example to make it clearer:

* Let's assume for a given `60` minute period, the average block time was `120` seconds \(instead of the target `60` seconds\). 
* This would mark `30` blocks over the `60` minute period, conclude an epoch, and result in HNT rewards being distributed. 
* As with any epoch, we would distribute the target of \(approximately\) `3424.66` HNT. 
* However, since this epoch took twice as long as normal \(`60` minutes versus `30` minutes\) the blockchain essentially distributes HNT at **half the normal rate**.

### When Block Times Slow Down, Everyone Earns Less

The most important take away here is that, when block times slow and HNT production is reduced, everyone participating in the Network - Witnesses, Challengers, Helium, Investors, etc. - **is impacted equally** \(with the exception of Consensus Group members; more on this below\). So, although it's annoying that the effective rate of HNT may have dropped over a given period of time, know that you're not the only one earning less. And this is by design.

### Consensus Groups and Slow Block Times

The only group that doesn't see its HNT reduced per epoch when blocks are slow is the Consensus Group. Currently there are 16 members of each Consensus Group, sharing 6% of the HNT produced per epoch - or approximately `12.842475` HNT.

This amount stays fixed while every other category of HNT payout is prorated so that members of the Consensus Group are incentivized to keep elections fast. Otherwise, a malicious Consensus Group member might be inclined to prolong elections. This could be done, for example, to prevent a subsequent election, thus ensuring current membership in the Consensus Group stays intact. By distributing a fixed amount of HNT per `30` block epoch \(as opposed to prorating payouts\), we remove the incentive to disrupt elections.

## Optimizing Your HNT Earnings

{% hint style="info" %}
**Join the Helium Discord Server**

Looking to get advice from 1000s of community members on how to optimize your HNT earnings? Join the [Helium Discord Server](https://discord.gg/helium) and start asking questions.
{% endhint %}

In order to optimize your HNT earnings, there are a few things we recommend:

* **Deploy Sensors** as 30% of all HNT goes to Hotspots that route actual sensor data. 
* **Ensuring you aren't the only Hotspot in your area** is the method most likely to increase your earnings. If you are in an area with three or more Hotspots you are likely to participate as a `PoC Challengee` and `Witness` more PoC challenges that are happening around you. These are the two highest `HNT` distributions per epoch so optimizing around them has the highest impact.
* **Upgrading to a larger antenna** will help in situations where you have other Hotspots nearby but either fail challenges that you participate in or do not witness challenges that they are participating in. Note, upgrading to a larger antenna will not help in situations when you are the only Hotspot in the area, as your only HNT earnings will come from issuing challenges which only uses your internet connection. Figuring out which antenna to upgrade to is a complex question, and we recommend joining our [Community Slack](http://chat.helium.com) where plenty of antenna discussion occurs.
* **Opening internet network ports** helps in delivering `PoC Challengee` and `Witness` receipts to the `PoC Challenger`. These receipts are delivered via the internet through a peer-to-peer network, and can be affected by NAT, firewalls, and other networking issues. The most optimal configuration is adding the Hotspot to your network [DMZ ](https://en.wikipedia.org/wiki/DMZ_%28computing%29)which allows unfettered access to and from the internet, but not to your local network. Alternatively manually opening port `44158` to the Hotspot will help, and enabling `uPNP` on your network router is a good fallback.

