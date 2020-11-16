---
description: Cargo is an in-house mapping tool used here at Helium.
---

# Cargo

![](../../.gitbook/assets/artboard-copy-8.jpg)

{% hint style="danger" %}
[Helium Cargo](http://cargo.helium.com/) is an evaluation tool and the data collected is available to all developers. Please do not share any sensitive information. Use at your own discretion.
{% endhint %}

## Add a Cargo Integration

To add an integration, go to **Integrations** on the left-hand menu. Select the integration to add - in this case, the **Cargo** integration.

![](../../.gitbook/assets/integrations-cargo.png)

The next step is to name the integration.

Last, apply any optional Labels. For more information on Labels please visit the [Labels guide](https://github.com/helium/devdocs/tree/67b988ec351854ec4b7608e12b5b8f47f2456abf/console/labels/README.md).

## Connecting Integrations to Devices

Devices are connected to integrations through the use of Labels. Labels are named identifiers, that can be used to associate an integration with a device. To connect one or more devices to one or more integrations, simply attach the same label to both the device and integration. Labels need to be created before attaching them to devices and integrations. Read more on this [here](../labels.md).

## Cargo Endpoint

The Cargo endpoint is where device data is sent if connected with a Label.

**HTTP Details**  
Method: `post`  
Endpoint: `https://cargo.helium.com/api/payloads`  
Headers: `{"Content-Type":"application/json"}`

## Cargo Payload

The Cargo payload defines the content and structure of the data payload that must be sent to the cargo endpoint from a device or separate application. Cargo currently accepts data from either the `decoded` or the`payload` field. Each field has different requirements described below.

### Decoded Field

The `decoded` field is the preferred method for sending data to Cargo. This method requires the use of a [Function Decoder](../functions.md) on Console in order to decode the device payload before sending it to Cargo.  The accepted fields are listed below and can be located at any depth within the `decoded` field.

| Required JSON Fields | Description |
| :--- | :--- |
| latitude | Latitude in Degrees |
| longitude | Longitude in Degrees |
| altitude | Altitude in Meters |

| Optional JSON Fields | Description |
| :--- | :--- |
| speed | Speed in mph |
| battery | Battery Voltage |

### Payload Field

Cargo is also capable of decoding the `payload` field, but is only compatible with a few common tracking devices.

#### Compatible Devices:

* RAK 7200
* Dragino LGT-92
* Browan Object Locator
* Digital Matter Oyster & Yabby

You also have the option of encoding the required data on a development device before transmitting it as described below. 

**Total Payload:**

* 12 Bytes without Battery Voltage
* 14 Bytes with Battery Voltage

**Packed in the following order:**

* int32\_t Latitude in Degrees
* int32\_t Longitude in Degrees
* int16\_t Elevation in Meters
* int16\_t Speed in mph
* uint16\_t Battery Voltage \(Optional\)

### Example:

```c
if (GPS.hasFix) { 
    idx = 0;
    data = (uint32_t)(GPS.latitudeDegrees * 1E7);
    payload[idx++] = data >> 24;
    payload[idx++] = data >> 16;
    payload[idx++] = data >> 8;
    payload[idx++] = data;
    data = (uint32_t)(GPS.longitudeDegrees * 1E7);
    payload[idx++] = data >> 24;    
    payload[idx++] = data >> 16;
    payload[idx++] = data >> 8;
    payload[idx++] = data;
    data = (int)(GPS.altitude);
    payload[idx++] = data >> 8;
    payload[idx++] = data;    
    data = (int)(GPS.speed);
    payload[idx++] = data >> 8;
    payload[idx++] = data;
}
```

