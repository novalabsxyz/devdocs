# Hotspot WiFi Configuration

The Helium Hotspot provides a WiFi configuration interface via the device's[ BLE services](hotspot-ble-services.md). The following are instructions for how to configure a Hotspot's WiFi.

### **1. Connecting to the Hotspot over Bluetooth Low Energy**

1. Press the black button on the side of the Hotspot once, and wait a few seconds for the BLE advertising to begin.
2. Scan for connectable devices.
3. Connect to the Hotspot of interest with the following name and UUID in its advertising payload.

   `Name: Helium Hotspot ####`

   `UUID: 0fda92b2-44a2-4af2-84f5-fa682baa2b8d`

4. Discover Services.

### **2. Check if Hotspot is already Connected to WiFi**

1. Read Value from:

   Service 

   `UUID: 0fda92b2-44a2-4af2-84f5-fa682baa2b8d`

   Characteristic - WiFiSSID 

   `UUID: 7731de63-bc6a-4100-8ab1-89b2356b038b`

2. If string value is empty, then no WiFi connection exist, if it is not empty, then it is currently connected to that WiFi SSID.
3. If it is not connected or you would like to change networks then proceed.

### **3. Enable Notifications for WiFiSSID Characteristic Value Update**

1. Enable Notifications for: 

   Service

   `UUID: 0fda92b2-44a2-4af2-84f5-fa682baa2b8d`

   Characteristic - WiFiSSID

   `UUID: 7731de63-bc6a-4100-8ab1-89b2356b038b`

### **4. Scan For WiFi Networks**

1. Read Value from:

   Service

   `UUID: 0fda92b2-44a2-4af2-84f5-fa682baa2b8d`

   Characteristic -WiFiServices

   `UUID: d7515033-7e7b-45be-803f-c8737b171a29`

2. De-serialize the binary value into the WiFi Services [Protocol Buffers](https://developers.google.com/protocol-buffers) message found in [BLE Services Sheet](https://developer.helium.com/hotspot/hotspot-ble-services#wifi_services_v1). This will give you a list of available WiFi SSID string names.

### **5. Set Credentials For WiFi Network**

1. Using the SSID string from the scan, and password string provided by you, do the following to set the credentials.
   1. Serialize your WiFi Connect [Protocol Buffer](https://developers.google.com/protocol-buffers) message, the definition of which is found in the [BLE Services Sheet](https://developer.helium.com/hotspot/hotspot-ble-services#wifi_connect_v1).
   2. Write serialized Value to

      Service

      `UUID: 0fda92b2-44a2-4af2-84f5-fa682baa2b8d`

      Characteristic - WiFiConnect

      `UUID: 398168aa-0111-4ec0-b1fa-171671270608`

### **6. Wait For WiFiSSID Notification to Trigger**

When the notification triggers, this indicates WiFi connection success.  You can repeat step two in order to verify that the correct WiFi SSID name. 

