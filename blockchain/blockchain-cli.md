# Blockchain CLI

The Helium blockchain CLI is an open-source Rust application that allows the user to create secure address key pairs and interact with the blockchain via the command line.

The source code is available via GitHub: [https://github.com/helium/helium-wallet-rs](https://github.com/helium/helium-wallet-rs)

This guide will walk you through how to create various types of wallet, and perform some of the different blockchain specific functions.

{% hint style="danger" %}
Please be sure to keep wallet files and passwords secure. There is no forgotten password and no recourse for lost files, keys and passwords!
{% endhint %}

## Installation

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

Cargo will pull in all the required dependencies and build the application. Once complete you should have a binary available as `./target/release/helium-wallet`

{% hint style="info" %}
The latest master branch of the CLI is incompatible with the current production API while migration to the new API occurs.

Please use `export HELIUM_API_URL=https://api.helium.wtf/v1` to point the CLI at the development server until migration is complete.
{% endhint %}

## Creating and Verifying Wallets

You can run `./target/release/helium-wallet -h` or `--help` to get help at any time. 

### Creating a wallet from scratch

To create a simple wallet, run:

```bash
$ ./target/release/helium-wallet create basic
```

This will create a password protected wallet file located at `wallet.key` - if you want to output the wallet file to a different location you can specify `-o mywalletfile.key` when creating the wallet.

### Creating a wallet using an existing 12 word seed phrase

If you've been using the Helium iOS/Android mobile application, you're likely to have an existing wallet and you've hopefully written the 12 word seed phrase down somewhere. To create a CLI wallet using that existing seed phrase you can do this:

```bash
$ ./target/release/helium-wallet create basic --seed
```

The CLI will then prompt you for your `Seed Words:` enter them in the correct order separated by spaces:

```bash
$ Seed Words: word1 word2 word3 ...
```

### Creating a sharded wallet

Sharding wallet keys is supported via [Shamir's Secret Sharing](https://github.com/dsprenkels/sss). A key can be broken into N shards such that recovering the original key needs K distinct shards. This can be done by passing options to `create`

```bash
$ ./target/release/helium-wallet create sharded -n 5 -k 3
```

This will create a wallet with 5 shards, with any 3 shards required. The files are stored as `wallet.key.1` through `wallet.key.5` - as before, the filename can be specified by passing the `-o` flag during the wallet creation.

### Verifying and getting info on an existing wallet

If you have existing wallet files you can verify them by running:

```bash
$ ./target/release/helium-wallet verify 
```

If you just want to see the public address of the wallet:

```bash
$ ./target/release/helium-wallet info
+-----------------------------------------------------+---------+
| Address                                             | Sharded |
+-----------------------------------------------------+---------+
| 14d5tFhmy5wW98gS3NzDgqsLAAZ54QsMfMy5dNRdsGPw7a7USbC | false   |
+-----------------------------------------------------+---------+
```

You can pass `-f mywallet.key` to either the `verify` or `info` commands to use different wallet files.

## Sending tokens

Once your wallet has been created it's easy to send HNT via the CLI:

```bash
$ ./target/release/helium-wallet pay <address> --hnt <amount>
```

You will be prompted for the password you used to create the wallet.

The value of `--hnt` can be down to 8 decimal places of precision. `0.00000001` is the smallest denomination that could be sent \(also known as a `bone`\).

If the `--hash` flag is passed to the command, the CLI will output the transaction hash which can then be checked against the [Blockchain API](https://developer.helium.com/blockchain/api#get-pending-transaction-status) pending transaction route to see the status of the transaction: 

```bash
https://api.helium.io/v1/pending_transactions/<hash>
```

Or once the transaction has been confirmed:

```bash
https://api.helium.io/v1/transactions/<hash>
```

## Checking balance

To check your wallet balance:

```bash
$ ./target/release/helium-wallet balance
+-----------------------------------------------------+------------+--------------+-----------------+
| Address                                             | Balance    | Data Credits | Security Tokens |
+-----------------------------------------------------+------------+--------------+-----------------+
| 14d5tFhmy5wW98gS3NzDgqsLAAZ54QsMfMy5dNRdsGPw7a7USbC | 0.00000000 | 0            | 0               |
+-----------------------------------------------------+------------+--------------+-----------------+
```

