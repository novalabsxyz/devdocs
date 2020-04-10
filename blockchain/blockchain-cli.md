---
description: Full usage details on the Helium Wallet CLI
---

# Blockchain Wallet CLI

![](../.gitbook/assets/artboard-copy-20.jpg)

The Helium blockchain CLI is an open-source Rust application that allows the user to create secure address key pairs and interact with the blockchain via the command line. This guide will walk you through how to create various types of wallets, and perform some of the different blockchain specific functions.

{% hint style="info" %}
The Wallet CLI source code [is available on GitHub](https://github.com/helium/helium-wallet-rs).
{% endhint %}

{% hint style="info" %}
This documentation is current as of **v1.1.4.**
{% endhint %}

{% hint style="info" %}
All the command examples below assume you've built the wallet from source. If you've installed from a release on a target platform, simply strip the leading **`./target/release`** from all commands. 
{% endhint %}

{% hint style="danger" %}
Please be sure to keep wallet files and passwords secure. If you forget a password or lose a key file, they are gone. Back things up in more than one location. This is your responsibility.
{% endhint %}

## Installation \(from source\)

The Wallet application can either be downloaded from the [GitHub releases page](https://github.com/helium/helium-wallet-rs/releases), or built from source. This guide will walk through building from source.

First, we'll assume you're using a Linux or macOS based system. To build from source you'll need the [Rust programming language](https://www.rust-lang.org) and its package manager, Cargo:

```
$ curl https://sh.rustup.rs -sSf | sh
```

Once Rust is installed, we'll need to check out the Wallet git repo and build it. You'll of course need Git installed first.

```bash
$ git clone https://github.com/helium/helium-wallet-rs.git
$ cd helium-wallet-rs
$ cargo build --release
```

Cargo will pull in all the required dependencies and build the application. Once complete, you should have a binary available as `./target/release/helium-wallet`

{% hint style="info" %}
You can run `./target/release/helium-wallet -h` or `--help` to get help at any time to get guidance on how to use any of the Wallet CLI commands
{% endhint %}

## Creating Wallets

Using the Helium Wallet CLI, you can \(re\)create three types of wallets:

1. New Helium Wallet 
2. Recreate an existing wallet using a 12 word seed phrase
3. New Helium Wallet with as sharded private key

### Creating a Wallet from Scratch

To create a simple wallet, run:

```bash
$ ./target/release/helium-wallet create basic
```

This will create a password protected wallet file located at `wallet.key` If you want to output the wallet file to a different location you can specify `-o /path/to/mywalletfile.key` when creating the wallet.

### Creating a wallet using an existing 12 word seed phrase

If you've been using the Helium iOS/Android mobile application, you're likely to have an existing wallet and you've hopefully written the 12 word seed phrase down somewhere. To create a CLI wallet using that existing seed phrase you can do this:

```bash
$ ./target/release/helium-wallet create basic --seed
```

The CLI will then prompt you for your `Seed Words:` enter them in the correct order separated by spaces:

```bash
$ Seed Words: word1 word2 word3 ...
```

### Creating a Sharded Wallet

Basic wallets are secured by a single `wallet.key` file. A more secure option is to break your private key into what are called "shards".  To support this, the CLI uses  [Shamir's Secret Sharing](https://github.com/dsprenkels/sss).  

A key can be broken into `N` shards such that recovering the original key needs `K` distinct shards. This can be done by passing options to `create`

```bash
$ ./target/release/helium-wallet create sharded -n 5 -k 3
```

This will create a wallet with `5` shards, with any `3` shards required. The files are stored as `wallet.key.1` through `wallet.key.5` As before, the filename can be specified by passing the `-o` flag during the wallet creation.

## Verifying Wallets

If you have existing wallet files you can verify them by running the `verify` command. You'll be asked for your wallet passphrase. 

```bash
$ ./target/release/helium-wallet verify 
Password: [hidden]
+-----------------------------------------------------+---------+--------+
| Address                                             | Sharded | Verify |
+-----------------------------------------------------+---------+--------+
| 13QvnWtjpi3HYoBPpcEmqansMyCbJSkRpSthXAJFTaxwUraKKaP | false   | true   |
+-----------------------------------------------------+---------+--------+
```

You can pass `-f mywallet.key` to the `verify` command  to use different wallet files.

## Getting Wallet Info

To simply see the public address of a given `wallet.key`, use the \`info

```bash
$ ./target/release/helium-wallet info
+-----------------------------------------------------+---------+
| Address                                             | Sharded |
+-----------------------------------------------------+---------+
| 14d5tFhmy5wW98gS3NzDgqsLAAZ54QsMfMy5dNRdsGPw7a7USbC | false   |
+-----------------------------------------------------+---------+
```

You can pass `-f mywallet.key` to either the `verify` or `info` commands to use different wallet files.

## Sending Tokens

Once your wallet has been created it's easy to send HNT via the CLI. The basic command structure is as follows:

```bash
$ ./target/release/helium-wallet pay [FLAGS] [OPTIONS] --payee <payee=hnt>
```

| **Available Flags** | Description |
| :--- | :--- |
| --commit | Required to formally commit the transaction to the API |
| --hash | Only output the transaction hash |
| --payee, -p | Precedes the address and amount of HNT to send in `<address>=<amount>` format |
| --file, -f | Wallet to use as the payer `[default: wallet.key]` |

When you submit a payment transaction, you will be prompted for the password you used to create the wallet.

The value of HNT you send can be down to 8 decimal places of precision. `0.00000001` is the smallest denomination that could be sent \(also known as a `bone`\).

If the `--hash` flag is passed to the command, the CLI will output the transaction hash which can then be checked against the [Blockchain API](https://developer.helium.com/blockchain/api#get-pending-transaction-status) pending transaction route to see the status of the transaction: 

```bash
https://api.helium.io/v1/pending_transactions/<hash>
```

Or once the transaction has been confirmed:

```bash
https://api.helium.io/v1/transactions/<hash>
```



#### Sending Tokens to more than one HNT Address in a Single Transaction 

As of CLI v1.1.3, you can send HNT to up to `50` wallets in the same CLI command. To do this, simply follow the `--payee <payee=hnt>` format but include multiple addresses and their desired HNT amounts. For example:

```bash
$ ./target/release/helium-wallet pay --commit --payee 13buBykFQf5VaQtv7mWj2PBY9Lq4i1DeXhg7C4Vbu3ppzqqNkTH=100 12z4nUiayZnbW46azcegBBB9yGkchFb1Zm7EPuh6eV1r2HT1NgC=100 14cKr7Qs93gdyLguKXf6Pg2SdryopG7dWSgiC6JWKHozuRQjmK8=100
```



## Checking Balance

To check your wallet balance:

```bash
$ ./target/release/helium-wallet balance
+-----------------------------------------------------+------------+--------------+-----------------+
| Address                                             | Balance    | Data Credits | Security Tokens |
+-----------------------------------------------------+------------+--------------+-----------------+
| 14d5tFhmy5wW98gS3NzDgqsLAAZ54QsMfMy5dNRdsGPw7a7USbC | 0.00000000 | 0            | 0               |
+-----------------------------------------------------+------------+--------------+-----------------+
```

## Listing Hotspots

To return all the Hotspots for a given wallet address:

```bash
./target/release/helium-wallet hotspots
+-----------------------------------------------------+-------------------+
| Address                                             | Name              |
+-----------------------------------------------------+-------------------+
| 13QvnWtjpi3HYoBPpcEmqansMyCbJSkRpSthXAJFTaxwUraKKaP | No hotspots found |
+-----------------------------------------------------+-------------------+
```

This will return a list of Hotspots owned by the `wallet.key` file. 

