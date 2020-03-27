# Hotspot BLE Services

The Helium Hotspot provides a Bluetooth Low Energy\(BLE\) interface for users to configure several aspects of the device. The BLE services and advertisement data are provided below. You must first press the black button on left side of the Hotpsot to activate the BLE advertising before attempting to connect.

You can also download a PDF version of the services if this is easier for you to view. 

{% file src="../.gitbook/assets/helium-hotspot-ble-services.pdf" caption="Helium Hotspot BLE Services" %}

{% hint style="info" %}
Data may need to be serialized or de-serialized to [Protocol Buffers](https://developers.google.com/protocol-buffers) depending on the BLE Characteristic, which is indicated in the `Data Type` column. For the `Data Type`that are listed as binary to string, they can be directly interpreted as ASCII strings. The Protocol Buffers message definitions are listed below the table and are referenced by the message definition name in column`Protocol Buffers Definition.`
{% endhint %}

| **BLE Type** | **Name** | **UUID** | **Permissions** | **Data Type** | **Protocol Buffers Definition** | **Max Data** | **Default Data** | **Description** | **Example Value** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Advertisement | Helium Hotspot \#\#\#\# | 0fda92b2-44a2-4af2-84f5-fa682baa2b8d | Connectable |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
| Service | Device Information | 180A |  |  |  |  |  |  |  |
| Characteristic | Manufacture Name String | 2A29 | Read | binary -&gt; string |  |  | 6 bytes |  | "Helium" |
| Characteristic | Serial Number String | 2A25 | Read | binary -&gt; string |  |  | 12 bytes |  | "6081F989E7BF" |
| Characteristic | Firmware Revision String | 2A26 | Read | binary -&gt; string |  |  | 12 bytes |  | "2020.02.18.1" |
|  |  |  |  |  |  |  |  |  |  |
| Service | Custom Service | 0fda92b2-44a2-4af2-84f5-fa682baa2b8d |  |  |  |  |  |  |  |
| Characteristic | OnboardingKey | d083b2bd-be16-4600-b397-61512ca2f5ad | Read | binary -&gt; string |  |  | 41 bytes |  | "11TqqVzycXK5k49bXbmcUcSne91krq7v3VSQCfDXr" |
| Characteristic | PublicKey | 0a852c59-50d3-4492-bfd3-22fe58a24f01 | Read | binary -&gt; string |  |  | 41 bytes |  | "117ei8D1Bk2kYqWNjSFuLgg3BrtTNSTi2tt14LRUFgt" |
| Characteristic | WiFiServices | d7515033-7e7b-45be-803f-c8737b171a29 | Read | binary -&gt; proto | wifi\_services\_v1 | 512 bytes |  |  |  |
| Characteristic | Diagnostics | b833d34f-d871-422c-bf9e-8e6ec117d57e | Read | binary -&gt; proto | diagnostics\_v1 |  |  |  |  |
| Characteristic | No Descriptor Name\(WiFi MAC Address\) | 9c4314f2-8a0c-45fd-a58d-d4a7e64c3a57 | Read | binary -&gt; string |  |  | 12 bytes |  | "6081F989E7BF" |
| Characteristic | Lights | 180efdef-7579-4b4a-b2df-72733b7fa2fe | Read/Write/Notify | binary -&gt; string |  |  | 2 bytes |  | "on" |
| Characteristic | WiFiSSID | 7731de63-bc6a-4100-8ab1-89b2356b038b | Read/Notify | binary -&gt; string |  |  |  |  | "" |
| Characteristic | AssertLocation | d435f5de-01a4-4e7d-84ba-dfd347f60275 | Read/Write/Notify | binary -&gt; proto | assert\_loc\_v1 |  | 12 bytes |  | "init" |
| Characteristic | AddGateway | df3b16ca-c985-4da2-a6d2-9b9b9abdb858 | Read/Write/Notify | binary -&gt; proto | add\_gateway\_v1 |  |  |  | "init" |
| Characteristic | WiFiConnect | 398168aa-0111-4ec0-b1fa-171671270608 | Read/Write/Notify | binary -&gt; proto | wifi\_connect\_v1 |  |  |  | "init" |
| Characteristic | EthernetOnline | e5866bd6-0288-4476-98ca-ef7da6b4d289 | Read | binary -&gt; string |  |  |  |  | "true" or "false" |

## Protocol Buffers Message Definitions

### wifi\_services\_v1

```text
message wifi_services_v1 {
    repeated string services = 1;
}
```

### diagnostics\_v1

```text
message diagnostics_v1 {
    map<string, string>diagnostics = 1;
}
```

### assert\_loc\_v1

```text
message assert_loc_v1 {
    float lat = 1;
    float lon = 2;
    string owner = 3;
    uint64 nonce = 4;
    uint64 fee = 5;
    uint64 amount = 6;
    string payer = 7;
}
```

### add\_gateway\_v1

```text
message add_gateway_v1 {
    string owner = 1;
    uint64 amount = 2;
    uint64 fee = 3;
    string payer = 4;
}
```

### wifi\_connect\_v1

```text
message wifi_connect_v1 {
    string service = 1;
    string password = 2;
}
```

