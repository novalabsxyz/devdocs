---
description: Using the Helium Console to migrate devices from The Things Network
---

# Migrating from TTN via the Helium Console

Helium Console now supports importing devices from The Things Network directly from the web interface.

This guide will walk you through the process of migrating devices from TTN over to Helium. As you'll see the, process is quite painless.

## Starting the Import Process

To get started, open up the [Helium Console](https://console.helium.com/) and switch to the Organization that you want to import the devices into:

![](../../.gitbook/assets/ttn_import000%20%281%29.png)

Next, move to the "Devices" tab and select the _Import Devices_ button in the upper-right of the Console.

![](../../.gitbook/assets/ttn_import001.png)

## Retrieving a TTN Access Code

Next we need to retrieve a code from The Things Network that will allow us to manage devices programatically.

![](../../.gitbook/assets/ttn_import010.png)

Go to [https://account.thethingsnetwork.org](https://account.thethingsnetwork.org/) and enter your TTN Console credentials.

![](../../.gitbook/assets/ttn_import009.png)

At this point, you should be taken to our account page on the TTN Console. Click the link directly beneath your avatar, and you will be given a `ttnctl access code` that should be valid for the next five minutes.

![](../../.gitbook/assets/ttn_import008.png)

## 

![](../../.gitbook/assets/ttn_import007.png)

Copy this code over to our _Import Devices_ page back on the Helium Console and click the "Start Importing Devices" button!

![](../../.gitbook/assets/ttn_import006.png)

## Select the devices to Migrate

Next, select the devices you want to migrate from The Things Network to the Helium Network. We encourage you to move them all. 

![](../../.gitbook/assets/ttn_import005.png)

![](../../.gitbook/assets/ttn_import002.png)

As shown in the screenshot above, we include the option to auto-create a [Helium label ](../../console/labels.md#organizing-and-connecting-with-labels)based on the TTN Application name. As you'll see momentarily, his can be very convenient and is recommended. 

We can also delete the devices from The Things Network so that your device will no longer attempt to join TTN rather than Helium.

![](../../.gitbook/assets/ttn_import003.png)

Now we simply click the "Import Devices" button, and wait a few seconds as the devices are pulled over into your Helium Console!

In the example migrated device below, you can see the attached label that was created from the TTN Application name. 

{% hint style="info" %}
Once your devices are organized using Labels, you can address them programmatically via the [Console API](../../console/console-cli-and-api/api.md#introduction). 
{% endhint %}

![](../../.gitbook/assets/ttn_import004.png)

And you're done. That is all that it takes to migrate devices from The Things Network over to The People's Network!

