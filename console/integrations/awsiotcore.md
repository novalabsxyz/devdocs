---
description: How to connect your Helium Devices directly to AWS IoT Core.
---

# AWS IoT Core

![](../../.gitbook/assets/image%20%2827%29.png)

[AWS IoT Core](https://aws.amazon.com/iot-core/) is a powerful offering that lets developers build device-based applications and services on the AWS Cloud. And this Integration via Helium Console automates the complexity of securely connecting your devices to AWS IoT Core. 

### Add an AWS IoT Core Integration

To add an **AWS IoT Core Integration**, go to **Integrations** on the left-hand menu. Select the integration to add - in this case, the **AWS IoT Core** integration:

![](../../.gitbook/assets/integrations-aws-iot-core.png)

The next step is to create a new user with limited permissions that this Integration will use.

Open up the [AWS Console](https://console.aws.amazon.com/)

Under the Services menu in the upper-left, go to **Security, Identity, & Compliance**-&gt;**IAM**:

![](../../.gitbook/assets/image%20%2814%29.png)

We are now going to create a new **User:**

![](../../.gitbook/assets/image%20%2838%29.png)

Set the user name to "**HeliumIntegrationAccess**" and select only "**Programmatic access**"

![](../../.gitbook/assets/image%20%2842%29.png)

We now attach a policy to the newly created user that defines what permissions they hold.

Select "**Attach existing policies directly**" and type "**AWSIoTConfigAccess"** into the "**Filter Policies**" box and check the box to the left of the row:

![](../../.gitbook/assets/image%20%2850%29.png)

![](../../.gitbook/assets/image%20%2840%29.png)

{% hint style="danger" %}
Ensure you record and store these keys securely, as you will not have an opportunity to get access to them again!
{% endhint %}

Back in the **Helium Console**, enter the credentials we just created under **AWS Connection Details,** as well as the AWS region that you would like AWS IoT to run in.

![](../../.gitbook/assets/image%20%2846%29.png)

The **Topic** field is the AWS IoT MQTT topic that this integration will publish uplink messages to, from devices.

Finally, we give our new Integration a name:

![](../../.gitbook/assets/image%20%2828%29.png)

And click **Create Integration**. Your new Integration is now ready for use. 

### Connecting Integrations to Devices

Devices are connected to integrations through the use of Labels. Labels are named identifiers, that can be used to associate an integration with a device. To connect one or more devices to one or more integrations, simply attach the same label to both the device and integration. Labels need to be created before attaching them to devices and integrations. You can read more about how to do that [here](https://developer.helium.com/console/labels).

## AWS IoT MQTT Topic composition:

### Device Uplink \(Receive Data from Device\)

This topic is defined in the **Topic** field when creating the AWS IoT intgeration.

**Subscribe to:** `{custom_topic}`

### Device Downlink \(Send Data to Device\)

**Publish to:** `helium/devices/{Device ID}/down`

Example: `helium/devices/4f10d99a-e22e-4007-a3f0-6af3bc63acfe/down`

## AWS IoT MQTT Messages

To send data to a device, use JSON with a `payload_raw` field with a base64 encoded string.  
**Sending Data to Device \(Downlink\):**

```javascript
{
   "payload_raw": "encoded_string"
}
```

When receiving data from a device, the messages will be in JSON and look like the following. The data from the device is in the `payload` field, and is a base64 encoded string.  
**Receiving data from Device \(Uplink\):**

```javascript
{
  "app_eui": "06B02F1A0E482128",
  "dev_eui": "5F67F99E10B47006",
  "devaddr": "1A2FB006",
  "fcnt": 10,
  "hotspots": [
    {
      "frequency": 911.9000244140625,
      "id": "112ErPy4pa8bRBQj9XgtRrHdk4i4ciTzB5gHwBbFupgNnwaGdExi",
      "name": "mammoth-tartan-tortoise",
      "reported_at": 1586466818,
      "rssi": -57,
      "snr": 12.5,
      "spreading": "SF9BW125",
      "status": "success"
    },
    {
      "frequency": 911.9000244140625,
      "id": "112kFNJoxBYn7UWwZqUABrTXjhn7mkP8ePrbi6w9Hj1NXJfodwP3",
      "name": "howling-gauze-guppy",
      "reported_at": 1586466818,
      "rssi": -91,
      "snr": 13,
      "spreading": "SF9BW125",
      "status": "success"
    }
  ],
  "id": "4f10d99a-e22e-4007-a3f0-6af3bc63acfe",
  "metadata": {
    "labels": [
      {
        "id": "0ec71594-de64-4794-acd7-9ace0b7137a3",
        "name": "aws-iot-integration-label",
        "organization_id": "0c3fbfb6-f8ed-4dbe-af7c-1a86bf372764"
      }
    ]
  },
  "name": "Sparkfun Pro RF",
  "payload": "AWcA8AJodANzJ18Ecc04B9CYMAWGyVCIuDaw",
  "port": 1,
  "reported_at": 1586466818
}
```

### Viewing Integration in AWS IoT Core

Once a label has been set up to connect our devices to our new Integration, let's return to the [AWS Console](https://console.aws.amazon.com/), and go to **IoT Core** under the **Services** menu:

![](../../.gitbook/assets/image%20%2816%29.png)

Here you are able to monitor the connections to AWS:

![](../../.gitbook/assets/image%20%2849%29.png)

When data comes in from the Helium Network Integration, Things will be automatically created within AWS IoT Core:

![](../../.gitbook/assets/image%20%2819%29.png)

Going to **Interact** on the left while on a **Thing** takes us to a list of topics for interacting with the **Thing Shadows**:

![](../../.gitbook/assets/image%20%287%29.png)

![](../../.gitbook/assets/image%20%289%29.png)

To monitor in real-time what is being sent to AWS from Helium, we can open the **MQTT monitor**, and subscribe to a topic with "\#" wildcard \(to catch all messages, or use the topic we set in **Helium Console** if just wanting to monitor those\).

![](../../.gitbook/assets/image%20%282%29.png)

![](../../.gitbook/assets/image%20%2833%29.png)

The payload field is the actual data received from the device, [encoded in a base64](https://www.base64decode.org/) string.

### Integration Details

View the details of your integration by clicking on the Integration name.

**Integration Details** shows the integration ID that is unique to each integration, the name, the type of integration, and whether it is active or not.

**Devices Piped** lists all the devices that are currently sending their data to the selected integration.

**Update your AWS Connection Details** allows you to update your AWS connection details for the currently viewed integration.

### 



