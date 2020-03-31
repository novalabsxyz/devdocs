---
description: How to set up MQTT Integration for your Helium Devices.
---

# MQTT



![](../../.gitbook/assets/artboard.jpg)

## Add an MQTT Integration

To add an integration, go to **Integrations** on the left-hand menu. Select the integration to add - in this case, the **MQTT** integration.

The next step is to paste your MQTT broker endpoint, and optional topic prefix.

## Connecting Integrations to Devices

Devices are connected to integrations through the use of Labels. Labels are named identifiers, that can be used to associate an integration with a device. To connect one or more devices to one or more integrations, simply attach the same label to both the device and integration. Labels need to be created before attaching them to devices and integrations. Read more on this [here](../labels.md).

## MQTT Topic composition:

### Device Uplink \(Receive Data from Device\)

**Subscribe to:** `{optional_prefix}/helium/{Device ID}/rx`

Example with prefix: `mqtt/helium/3c822699-37fd-4df6-a84d-93037a450843/rx`  
Example without prefix: `helium/3c822699-37fd-4df6-a84d-93037a450843/rx`

### Device Downlink \(Send Data to Device\)

**Publish to:** `{optional_prefix}/helium/{Device ID}/tx`

Example with prefix: `mqtt/helium/3c822699-37fd-4df6-a84d-93037a450843/tx`  
Example without prefix: `helium/3c822699-37fd-4df6-a84d-93037a450843/tx`

## MQTT Messages

To send data to a device, use JSON with a `payload_raw` field with a base64 encoded string.  
**Sending Data to Device \(Downlink\):**

```javascript
{
   "payload_raw": "encoded_string"
}
```

When receiving data from a device, the messages will be in JSON and look like the following.  
**Receiving data from Device \(Uplink\):**

```javascript
{
   "app_eui": "415D0A10B5DD763A",
   "dev_eui": "7778223FAE245EA5",
   "gateway": "mean-lava-fox",
   "id": "3c822699-37fd-4df6-a84d-93037a450843",
   "name": "Tracking Device",
   "payload": "SGVsbG8sIHdvcmxkIQ==",
   "rssi": -24.0,
   "sequence": 100,
   "snr": 9.800000190734863,
   "spreading": "SF8BW500",
   "timestamp": 1583361466
}
```

## Connecting Integrations to Devices

Devices are connected to integrations through the use of Labels. Labels are named identifiers, that can be used to associate an integration with a device. To connect one or more devices to one or more integrations, simply attach the same label to both the device and integration. Labels need to be created before attaching them to devices and integrations. Instructions for doing this are [here](https://github.com/helium/devdocs/tree/67b988ec351854ec4b7608e12b5b8f47f2456abf/console/labels/README.md).

## Send and Receive Device Data

The following examples are done with the [MQTT CLI](https://hivemq.github.io/mqtt-cli) utility.

Example MQTT

**Subscribe to Uplink Packets:**

```text
mqtt sub -V 3 -t helium/3c822699-37fd-4df6-a84d-93037a450843/rx -h {mqtt_broker_host} -p {mqtt_broker_host_port} -u "user" -pw "password"
```

**Publish Downlink Packet:**

```text
mqtt pub -V 3 -t helium/3c822699-37fd-4df6-a84d-93037a450843/tx -h {mqtt_broker_host} -p {mqtt_broker_host_port} -u "user" -pw "password" -m "{\"payload_raw\":\"encoded_string\"}"
```

