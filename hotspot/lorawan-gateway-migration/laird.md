---
description: Migrating to the Helium Network
---

# Laird Sentrius RG191

## Introduction

This guide will help you connect a Laird Sentrius RG191 to a Helium Miner. This will allow your gateway to participate in the Helium Network and to provide coverage!

![](../../.gitbook/assets/image%20%2881%29.png)

[Laird Sentrius™ RG1xx LoRaWAN-Enabled Gateway](https://www.lairdconnect.com/wireless-modules/lorawan-solutions/sentrius-rg1xx-lora-enabled-gateway-wi-fi-ethernet)

## Log in to the Sentrius web console

Following the instructions in the [Quick Start Guide](https://connectivity-staging.s3.us-east-2.amazonaws.com/2020-03/CS-GUIDE-RG1xx-Quickstart%20v3_0.pdf) or the [User Guide](https://connectivity-staging.s3.us-east-2.amazonaws.com/2020-03/CS-GUIDE-RG1xx%20v4_0.pdf), log into the web administration console for the Laird gateway. You will most likely get a certificate warning here, but you may safely ignore this \(Laird discusses this in their guides\).

## Ensure firmware is up to date:

Follow the instructions in the [User Guide](https://connectivity-staging.s3.us-east-2.amazonaws.com/2020-03/CS-GUIDE-RG1xx%20v4_0.pdf) to update to the most recent version of the firmware. The Firmware URL will differ depending upon what version you are currently running.

![](../../.gitbook/assets/laird001.png)

At the end of the update, you are prompted to reboot the gateway. Click Reboot. The gateway must be rebooted for the update to take effect.

![](../../.gitbook/assets/image%20%2876%29.png)

## Reconfigure sub-band frequencies to work with the Helium Network:

{% hint style="info" %}
Rather than setting the sub-band frequencies by hand, you can upload a saved LoRa configuration file under LoRa-&gt;Advanced in the Laird Web Console.
{% endhint %}

{% code title="Sentrius\_LoRa\_Config\_2020-03-20T19\_48\_05.347Z.json" %}
```javascript
{
    "data": {
        "name": "Sentrius configuration 2020-03-20T19:48:05.861Z",
        "country_code": "US"
    },
    "lora": {
        "logging_level": "debug",
        "gateway_mode": "semtech"
    },
    "forwarder": {
        "server_address": "",
        "serv_port_up": 1680,
        "serv_port_down": 1680,
        "keepalive_interval": 10,
        "stat_interval": 30,
        "push_timeout_ms": 100,
        "forward_crc_valid": true,
        "forward_crc_error": false,
        "forward_crc_disabled": false
    },
    "radios": {
        "radio_0": {
            "freq": 912300000
        },
        "radio_1": {
            "freq": 913000000
        },
        "chan_multiSF_0": {
            "enable": true,
            "radio": 0,
            "if": -400000
        },
        "chan_multiSF_1": {
            "enable": true,
            "radio": 0,
            "if": -200000
        },
        "chan_multiSF_2": {
            "enable": true,
            "radio": 0,
            "if": 0
        },
        "chan_multiSF_3": {
            "enable": true,
            "radio": 0,
            "if": 200000
        },
        "chan_multiSF_4": {
            "enable": true,
            "radio": 1,
            "if": -300000
        },
        "chan_multiSF_5": {
            "enable": true,
            "radio": 1,
            "if": -100000
        },
        "chan_multiSF_6": {
            "enable": true,
            "radio": 1,
            "if": 100000
        },
        "chan_multiSF_7": {
            "enable": true,
            "radio": 1,
            "if": 300000
        },
        "chan_Lora_std": {
            "enable": true,
            "radio": 0,
            "if": 300000,
            "bandwidth": 500000,
            "spread_factor": 8
        },
        "chan_FSK": {
            "enable": false,
            "bandwidth": 500000,
            "datarate": 0
        }
    }
}
```
{% endcode %}

This is what the channels look like when configured for TTN:

![](../../.gitbook/assets/image%20%2845%29.png)

![](../../.gitbook/assets/image%20%2861%29.png)

We need to make the following channel modifications to allow the gateway to work on the Helium Network:

![](../../.gitbook/assets/image%20%2845%29.png)



It should come out looking like this:

![](../../.gitbook/assets/image%20%2873%29.png)

## Monitor traffic coming through the device:

Click the "Start Polling" button in the upper-left, and, if you have a Helium node in the vicinity, you should start to see traffic:

![](../../.gitbook/assets/laird002%20%281%29.png)

By clicking on a row, we can examine the packet details:

![](../../.gitbook/assets/image%20%281%29.png)

A live logging console may be pulled up using the arrows in the lower-left of the screen. Make sure to set it to Start Updating:

![](../../.gitbook/assets/image%20%2869%29.png)

## **Connecting to a Helium Miner**

If you haven't done it yet, you'll want to get your [Helium Miner running](../../blockchain/run-your-own-miner.md). We'll assume you've done this with an Amazon AMI for the sake of this tutorial. 

From Your EC2 dashboard, you should select your miner and take a look at the description at the bottom of the page:

![Extract IP Address](../../.gitbook/assets/ipv4.png)

In this case,  the IP is `18.218.135.176`. You now have to go back edit the packet forwarder's configuration such that it connects to you Miner on AWS. 

Now you'll want to update your `Sentrius_LoRa_Config_2020-03-20T19_48_05.347Z.json` file to include the address of your miner as the "server\_address"

```text
"server_address": "18.218.135.176",
```

To verify that things are working, you can follow the logs **on the AWS instance:**

```text
tail -f /var/data/log/miner/console.log | grep lora
```

At the very least, you should see PULL\_DATA messages every few seconds. If so, then you've done it!



