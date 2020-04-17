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

## Downlink with HTTP

Currently, downlink via HTTP is only supported by providing a response to the HTTP Post of an Uplink packet. In the body of the response, provide a downlink packet by using the [JSON schema documented here](json-schema.md).

## Connecting Integrations to Devices

Devices are connected to integrations through the use of Labels. Labels are named identifiers, that can be used to associate an integration with a device. To connect one or more devices to one or more integrations, simply attach the same label to both the device and integration. Labels need to be created before attaching them to devices and integrations. You can read more about how to do that [here](https://developer.helium.com/console/labels).

