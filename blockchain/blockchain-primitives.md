# Blockchain Primitives

![](../.gitbook/assets/artboard-copy-18.jpg)

## Blocks

Blocks are used to record the most recent set of transactions in the Helium blockchain. Blocks are mined based on time, as defined in the “block\_time” chain variable. The current target block time is 60000 milliseconds \(or 60 seconds\). During any given epoch, the most recent block consists of:

* Block Version
* Block Height 
* Previous Block Hash
* Transactions \(stored as a Merkle hash\)
* Threshold signature from the current consensus group

The easiest way to see the blocks being mined is with the Block Explorer. The Helium Mobile App also shows block details. Developers can also use the Helium blockchain API to access all block transaction and metadata.

## Epochs

An epoch is the target time period for which a given group of Hotspots is elected to serve as the consensus group. The target time for an epoch is currently 30 blocks, as defined in the election\_interval chain variable. Approximately every 30 blocks mined marks the passing of an epoch, after which a new group of Hotspots is elected to form the next consensus group.

Mining rewards are distributed per epoch \(as opposed to per block in most blockchain-based systems\). At the conclusion of each epoch, the consensus group will distribute all the Helium tokens produced in that block via the `rewards` transaction.

## Transactions

The Helium blockchain currently has 20 native transaction types. Some appear in nearly every block mined while others were created to be used only once and will never heard from again. \(You can see various transaction types in action using the Helium Block Explorer.\)

All transactions occur on-chain, and all transactions require Data Credits to be submitted and confirmed. Here’s the current list of supported transaction \(in no particular order\):

* **add gateway** - Add a new gateway to the Helium Network. For the purposes of transactions, a “gateway” is the term for a Helium-compliant Hotspot that is mining and providing coverage. 
* **assert location** - Assert a gateway’s location on the Helium Network. This happens after a gateway has been added via the add gateway transaction. Once asserted, this location is then used as part of Proof of Coverage challenges. A Hotspot’s location can be asserted more than once but each subsequent assertion will a\) cost a fee and b\) reset that Hotspot’s score to neutral \(.25\)  
* **coinbase** - Similar to the bitcoin blockchain’s coinbase transaction but used only during testnet phases of the Helium blockchain. The rewards transaction has taken its place.
* **consensus group** - Marks the election of a new consensus group, responsible for mining during the next epoch.
* **create hashed timelock** - Creates a transaction that can only be redeemed by providing the correct pre-image to the hashlock within the specified timelock. 
* **redeem hashed timelock** - Redeem the transaction created using the create hashed timelock transaction. 
* **coinbase data credits** - Created the initial 10,000 Data Credits required to bring the first group of Hotspots online. 
* **genesis gateway** - Used to define the initial group of Hotspots that bootstrapped the blockchain. 
* **OUI** - Create a OUI for a new router on the Helium network. In the Helium blockchain, Hotspots forward packets to routers that own them based on their OUI as stored in the blockchain.  
* **reward** - A token payout for a specific event on the network such as submitting a valid proof of coverage request, participating in a consensus group, etc. 
* **rewards** -  Bundles multiple reward transactions at the end of each epoch and distributes all HNT produced in that block to wallets that have earned them. 
* **payment** - Used to send HNT from one wallet to another.
* **multi-payment** - Used to sent HNT from one wallet to multiple wallets. 
* **create proof of coverage request** - Submitted by a Hotspot wishing to initiate a challenge. 
* **proof of coverage receipts** - The result of a POC submitted to the network upon completion. 
* **routing** - Update the routing information associated with an OUI.
* **security coinbase** - Distribution of security tokens in the genesis block. 
* **security exchange** - The transfer of security tokens from one address to another. 
* **token burn exchange rate** - Change the exchange rate for burning HNT to DCs. 
* **data credits** - Burn HNT for DCs at the current exchange rate and deliver them to the target wallet address.
* **chain vars** - Change a chain variable. 

### Transaction Encoding

Transactions are encoded in a portable binary format using [Protocol Buffers](https://developers.google.com/protocol-buffers). Language bindings exist for most programming languages.

The following steps are required to construct a transaction that can be submitted to the blockchain:

* Construct the transaction with an empty binary signature field. 
  * If a transaction has multiple signature fields they should all be empty binaries.
* Encode the transaction into binary form and sign the resulting binary. 
  * Some transactions may require more than one signature from multiple parties.
* Insert the signature\(s\) in the original transaction.
* Wrap the transaction in a `blockchain_txn` envelope.
* Encode the envelope into binary form.

### Extended Reading

* [Helium Blockchain Core on GitHub](https://github.com/helium/blockchain-core)
* [Transaction protobuf definitions on GitHub](https://github.com/helium/proto)

## Chain Variables

Chain Variables, often referred to as “chain vars”, are a series of configuration settings for the Helium blockchain. Chain Variables can be used to change things like target block time, target epoch time, the minimum number of targets in a POC Challenge, and much more.

Chain Variables can be altered by submitting a transaction containing the chain variable to be changed, its new value, and a signature of the chain variable master key. Currently this key is controlled by Helium Inc, but it is intended to be superseded by a voting-based governance mechanism in the very near future.

## Accounts, Wallets, and Keys

The Helium blockchain uses an account-based system for wallets and balances \(similar to Ethereum and others\) as opposed to a UTXO-based ledger like Bitcoin blockchain.

Users have several options for creating Helium wallets and managing their private keys:

* If you’re using the Helium Mobile Wallet \([iOS](https://apps.apple.com/app/id1450463605), [Android](https://play.google.com/store/apps/details?id=com.helium.wallet&hl=en_US)\), your private key is encrypted locally \(and can be recreated on another mobile device using the 12 word passphrase generated when your wallet was first created\);
* Using the [Helium CLI Wallet](https://github.com/helium/helium-wallet-rs), users are responsible for creating, storing, and securing a wallet’s private key and associated passphrase;

Both the Helium Mobile Wallet and the CLI Wallet create and use keys based on the ed25519 public key signature system. The CLI can also support NIST p-256 keys. And the Helium blockchain supports both key types.

### Public Key Format

A Helium public key is encoded as a [base58check encoded](https://en.bitcoin.it/wiki/Base58Check_encoding#Creating_a_Base58Check_string) binary with the following structure:

![](../.gitbook/assets/key_encoding.png)

The key type indicates the kind of key that follows. The following key types are supported:

| Type | Value |
| :--- | :--- |
| NIST p-256 | 0 |
| ed25519 | 1 |

Since this is a public key the base58check encoded version is `0`

### Extended Reading

* [edd25519 public-key Signature System](https://ed25519.cr.yp.to/)

