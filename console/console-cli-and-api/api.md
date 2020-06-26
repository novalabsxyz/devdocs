# API

## Introduction

The API is a set of HTTP Request that allows you to programatically interact with Console. It's the lowest level building block and is ideal for integrating with back-end services, for example.

## API Key

All Console API requests require an API Key which provides access to devices owned by the **organization** which owns the device. Devices are never associated to a single user, but instead to an organization.

To create an account key, go to your [profile](https://console.helium.com/profile) on Helium Console. From the top right corner, click: `Account -> Profile`.

From there, you may generate a key for your organization. _The key will only display once._

**You must confirm the API key** creation by clicking a link that is emailed to the account that created the API key.

From then on, you will want to include the API key in all of your API requests. You do this by placing your API key in an HTTP header field called "key. 

{% api-method method="get" host="https://console.helium.com/api/v1" path="/devices" %}
{% api-method-summary %}
Devices List
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of device descriptors for devices owned by the organization.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
    Device {
        app_eui: "70B3D57ED0008E64",
        app_key: "30EACA8A2CAF0C5315D0E4A1B7F7B55B",
        dev_eui: "008000000401261D",
        id: "747246dd-d9b6-4e68-96c1-2c489ab33280",
        name: "Basement Temp",
        organization_id: "07273bc4-4bc9-44ec-b4d5-ad320f162e15",
        oui: 1,
    },
    Device {
        app_eui: "CE1BAF8A8824FD1D",
        app_key: "2A37E7FACF2F0B7833413E9F8988C4EF",
        dev_eui: "9C069EEE66D3ABCD",
        id: "916fc471-87f1-43a8-939e-c36589f33232",
        name: "Water Level North",
        organization_id: "07273bc4-4bc9-44ec-b4d5-ad320f162e15",
        oui: 1,
    },
]

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



{% api-method method="get" host="https://console.helium.com/api/v1" path="/devices?app\_eui={app\_eui}&app\_key={app\_key}&dev\_eui={dev\_eui}" %}
{% api-method-summary %}
Devices by AppEui, AppKey, DevEui
{% endapi-method-summary %}

{% api-method-description %}
Returns a device descriptor if device is found.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="dev\_eui" type="string" required=true %}
LoRaWAN Device EUI uniquely identifies a device
{% endapi-method-parameter %}

{% api-method-parameter name="app\_eui" type="string" required=true %}
LoRaWAN App EUI uniquely identifies the application of the device
{% endapi-method-parameter %}

{% api-method-parameter name="app\_key" type="string" required=true %}
LoRaWAN App Key is a shared secret key which is used to derive secure sessions via the Join mechanism
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Device {
    app_eui: "70B3D57ED0008E64",
    app_key: "30EACA8A2CAF0C5315D0E4A1B7F7B55B",
    dev_eui: "008000000401261D",
    id: "747246dd-d9b6-4e68-96c1-2c489ab33280",
    name: "Basement Temp",
    organization_id: "07273bc4-4bc9-44ec-b4d5-ad320f162e15",
    oui: 1,
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



{% api-method method="get" host="https://console.helium.com/api/v1" path="/devices/:device\_id" %}
{% api-method-summary %}
Device by UUID
{% endapi-method-summary %}

{% api-method-description %}
Returns a device descriptor if device is found.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
UUID of the device
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Device {
        app_eui: "70B3D57ED0008E64",
        app_key: "30EACA8A2CAF0C5315D0E4A1B7F7B55B",
        dev_eui: "008000000401261D",
        id: "747246dd-d9b6-4e68-96c1-2c489ab33280",
        name: "Basement Temp",
        organization_id: "07273bc4-4bc9-44ec-b4d5-ad320f162e15",
        oui: 1,
    }
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://console.helium.com/api/v1" path="/devices" %}
{% api-method-summary %}
Create Device
{% endapi-method-summary %}

{% api-method-description %}
Creates a device with corresponding name, Application EUI, Application Key, and Device EUI.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="name" type="string" required=true %}
A human-friendly name for the device
{% endapi-method-parameter %}

{% api-method-parameter name="app\_eui" type="string" required=true %}
LoRaWAN Application EUI
{% endapi-method-parameter %}

{% api-method-parameter name="app\_key" type="string" required=true %}
LoRaWAN Application Key
{% endapi-method-parameter %}

{% api-method-parameter name="dev\_eui" type="string" required=true %}
LoRaWAN Device EUI
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="https://console.helium.com/api/v1" path="/devices/:id" %}
{% api-method-summary %}
Delete Device by UUID
{% endapi-method-summary %}

{% api-method-description %}
Deletes device record by UUID.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="string" required=true %}
UUID of the device to be deleted
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Device deleted
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://console.helium.com/api/v1" path="/labels" %}
{% api-method-summary %}
Labels
{% endapi-method-summary %}

{% api-method-description %}
Returns a list of label descriptors associated with the organization.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
[
    Label {
        id: "20515fce-2f7c-4025-8841-4be47cb9ec3c",
        name: "Test LoRaWAN",
    },
    Label {
        id: "d20d5d32-f699-40a7-a5a7-b9a49dfe2b4a",
        name: "AWS",
    },
    Label {
        id: "a332bb1e-888e-43d9-ad38-f4043fff791f",
        name: "RequestBinDownlink",
    },
    Label {
        id: "19bee2e7-b222-461f-a271-15b3c52d5532",
        name: "MQTT-Test",
    },
]

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://console.helium.com/api/v1" path="/labels" %}
{% api-method-summary %}
Create label
{% endapi-method-summary %}

{% api-method-description %}
Create a new label with the given name.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="name" type="string" required=true %}
A unique name for the label
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Label {
    id: "868ea783-f252-4fc4-b724-a155680c0bc9",
    name: "Blue Label",
}

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="https://console.helium.com/api/v1" path="/labels/:label\_id" %}
{% api-method-summary %}
Delete label
{% endapi-method-summary %}

{% api-method-description %}
Delete a device label, along with all of its device links
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="label\_id" type="string" required=true %}
The UUID of the label to be deleted
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Label delete successful
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{"errors":{"error":["Label not found"]}}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://console.helium.com/api/v1" path="/devices/:device\_id/labels" %}
{% api-method-summary %}
Add Device to Label
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="device\_id" type="string" required=true %}
UUID of device
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="label" type="string" required=true %}
UUID of label
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Device added to label successfully
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="https://console.helium.com/api/v1" path="/devices/:device\_id/labels/:label\_id" %}
{% api-method-summary %}
Remote Device from Label
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="device\_id" type="string" required=true %}
UUID of device
{% endapi-method-parameter %}

{% api-method-parameter name="label\_id" type="string" required=true %}
UUID of label
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
Device removed from label successfully
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

