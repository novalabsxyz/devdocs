---
description: How to set up HTTP Integration for your Helium Devices.
---

# HTTP

![](../../.gitbook/assets/artboard-copy-7.jpg)

## Add an HTTP Integration

To add a Integration, go to **Integrations** on the left-hand menu. Select the integration to add - in this case, the **HTTP** integration.

![](../../.gitbook/assets/integrations-http.png)

The next step is to paste the HTTP endpoint.

If you're still testing, you can find popular sites that can create HTTP endpoints for you and inspect packets. [Requestbin](https://www.requestbin.com) and [Beeceptor](https://www.beeceptor.com) provide tools to make an HTTP endpoint quickly and easily.

### Uplink

### RequestBin Example

Create an endpoint by going to requestbin.com and click **Create a Request Bin**. Once created, copy the endpoint.

![](../../.gitbook/assets/request_bin.png)

... and paste it in Console.

![](../../.gitbook/assets/screenshot-2020-03-11-at-09.36.19.png)

**HTTP Header** and **Value** are not required and those can be left blank.

Lastly, provide a name for the integration. Names do not have to be unique.

Click **Create Integration**.

Your new integration is now ready for use! Please read about the [JSON schema](json-schema.md) to understand how to parse data received.

### Integration Details

View the details of your integration by clicking on the Integration name.

**Integration Details** shows the integration ID that is unique to each integration, the name, the type of integration, and whether it is active or not.

**HTTP Details** shows the specific endpoint. Editing endpoints is not available in the SDK Beta and will be coming soon. If you no longer want to use a integration, simply create a new one and redirect existing devices using the old integration to use the new one.

**Devices Piped** lists all the devices that are currently sending their data to the selected integration.

**Update your Connection Details** allows you to update your HTTP connection details for the currently viewed integration.

## Downlink

To send data down to your device,  use the `downlink_url` found in the uplink JSON message for that particular device.  It will look similar to the URL shown below.

```text
"downlink_url": "https://console.helium.com/api/v1/down/897780bc-6980-42c1-a659-30077e8dbcd1/h4IxFDle6biV1ZKmrUJamaXhKjRRF3c-/d2c7b8dc-221a-4ec8-aedd-6c19ae348a33"
```

To send the downlink message, make a POST request including a JSON body with the following fields shown below, see more details on the fields [here](https://developer.helium.com/console/integrations/json-schema#downlink-transmitting-data-to-a-device).

```text
{
    "payload_raw": "SGVsbG8sIHdvcmxkIQ==",
    "port": 1,
    "confirmed": false
}
```

### Postman Example

Postman is a popular developer utility for HTTP based services, you can download it [here](https://www.postman.com/downloads/). We can use this utility to easily make a POST request to the downlink URL with our downlink JSON message.  Follow the steps below to successfully send your downlink message to your device.

1. Select the type of HTTP request, POST in this case.
2. Enter the downlink URL here.
3. Select Body to begin entering your message details.
4. Select `raw` as your body type.
5. Select `JSON` as the body format.
6. Enter your JSON message with the required fields.
7. Finally press `Send` to transmit the message.
8. You should see a response of `Downlink scheduled` if successful.

![](../../.gitbook/assets/http-downlink-postman%20%282%29.png)

## Connecting Integrations to Devices

Devices are connected to integrations through the use of Labels. Labels are named identifiers, that can be used to associate an integration with a device. To connect one or more devices to one or more integrations, simply attach the same label to both the device and integration. Labels need to be created before attaching them to devices and integrations. You can read more about how to do that [here](https://developer.helium.com/console/labels).

