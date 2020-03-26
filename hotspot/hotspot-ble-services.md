# Hotspot BLE Services

The table below describes the Bluetooth Low Energy services and advertisement the Helium Hotspot provides. You must first press the black button on left side of the Hotpsot to activate the BLE advertising. 

<table>
  <thead>
    <tr>
      <th style="text-align:left"><b>BLE Type</b>
      </th>
      <th style="text-align:left"><b>Name</b>
      </th>
      <th style="text-align:left"><b>UUID</b>
      </th>
      <th style="text-align:left"><b>Permissions</b>
      </th>
      <th style="text-align:left"><b>Data Type</b>
      </th>
      <th style="text-align:left"><b>Protocol Buffers Definition                      </b>
      </th>
      <th style="text-align:left"><b>Max Data</b>
      </th>
      <th style="text-align:left"><b>Default Data</b>
      </th>
      <th style="text-align:left"><b>Description</b>
      </th>
      <th style="text-align:left"><b>Example Value</b>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Advertisement</td>
      <td style="text-align:left">Helium Hotspot ####</td>
      <td style="text-align:left">0fda92b2-44a2-4af2-84f5-fa682baa2b8d</td>
      <td style="text-align:left">Connectable</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">Service</td>
      <td style="text-align:left">Device Information</td>
      <td style="text-align:left">180A</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">Manufacture Name String</td>
      <td style="text-align:left">2A29</td>
      <td style="text-align:left">Read</td>
      <td style="text-align:left">binary -&gt; string</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">6 bytes</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&quot;Helium&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">Serial Number String</td>
      <td style="text-align:left">2A25</td>
      <td style="text-align:left">Read</td>
      <td style="text-align:left">binary -&gt; string</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">12 bytes</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&quot;6081F989E7BF&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">Firmware Revision String</td>
      <td style="text-align:left">2A26</td>
      <td style="text-align:left">Read</td>
      <td style="text-align:left">binary -&gt; string</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">12 bytes</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&quot;2020.02.18.1&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">Service</td>
      <td style="text-align:left">Custom Service</td>
      <td style="text-align:left">0fda92b2-44a2-4af2-84f5-fa682baa2b8d</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">OnboardingKey</td>
      <td style="text-align:left">d083b2bd-be16-4600-b397-61512ca2f5ad</td>
      <td style="text-align:left">Read</td>
      <td style="text-align:left">binary -&gt; string</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">41 bytes</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&quot;11TqqVzycXK5k49bXbmcUcSne91krq7v3VSQCfDXr&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">PublicKey</td>
      <td style="text-align:left">0a852c59-50d3-4492-bfd3-22fe58a24f01</td>
      <td style="text-align:left">Read</td>
      <td style="text-align:left">binary -&gt; string</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">41 bytes</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&quot;117ei8D1Bk2kYqWNjSFuLgg3BrtTNSTi2tt14LRUFgt&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">WiFiServices</td>
      <td style="text-align:left">d7515033-7e7b-45be-803f-c8737b171a29</td>
      <td style="text-align:left">Read</td>
      <td style="text-align:left">binary -&gt; proto</td>
      <td style="text-align:left">
        <p>message wifi_services_v1 {</p>
        <p>repeated string services = 1;</p>
        <p>}</p>
      </td>
      <td style="text-align:left">512 bytes</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">Diagnostics</td>
      <td style="text-align:left">b833d34f-d871-422c-bf9e-8e6ec117d57e</td>
      <td style="text-align:left">Read</td>
      <td style="text-align:left">binary -&gt; proto</td>
      <td style="text-align:left">
        <p>message diagnostics_v1</p>
        <p>{ mapdiagnostics = 1;</p>
        <p>}</p>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">No Descriptor Name(WiFi MAC Address)</td>
      <td style="text-align:left">9c4314f2-8a0c-45fd-a58d-d4a7e64c3a57</td>
      <td style="text-align:left">Read</td>
      <td style="text-align:left">binary -&gt; string</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">12 bytes</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&quot;6081F989E7BF&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">Lights</td>
      <td style="text-align:left">180efdef-7579-4b4a-b2df-72733b7fa2fe</td>
      <td style="text-align:left">Read/Write/Notify</td>
      <td style="text-align:left">binary -&gt; string</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">2 bytes</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&quot;on&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">WiFiSSID</td>
      <td style="text-align:left">7731de63-bc6a-4100-8ab1-89b2356b038b</td>
      <td style="text-align:left">Read/Notify</td>
      <td style="text-align:left">binary -&gt; string</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&quot;&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">AssertLocation</td>
      <td style="text-align:left">d435f5de-01a4-4e7d-84ba-dfd347f60275</td>
      <td style="text-align:left">Read/Write/Notify</td>
      <td style="text-align:left">binary -&gt; proto</td>
      <td style="text-align:left">
        <p>message assert_loc_v1</p>
        <p>{</p>
        <p>float lat = 1; float lon = 2; string owner = 3;</p>
        <p>uint64 nonce = 4;</p>
        <p>uint64 fee = 5; uint64 amount = 6;</p>
        <p>string payer = 7; }</p>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left">12 bytes</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&quot;init&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">AddGateway</td>
      <td style="text-align:left">df3b16ca-c985-4da2-a6d2-9b9b9abdb858</td>
      <td style="text-align:left">Read/Write/Notify</td>
      <td style="text-align:left">binary -&gt; proto</td>
      <td style="text-align:left">
        <p>message add_gateway_v1 {</p>
        <p>string owner = 1;</p>
        <p>uint64 amount = 2;</p>
        <p>uint64 fee = 3; string payer = 4; }</p>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&quot;init&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">WiFiConnect</td>
      <td style="text-align:left">398168aa-0111-4ec0-b1fa-171671270608</td>
      <td style="text-align:left">Read/Write/Notify</td>
      <td style="text-align:left">binary -&gt; proto</td>
      <td style="text-align:left">
        <p>message wifi_connect_v1 {</p>
        <p>string service = 1;</p>
        <p>string password = 2;</p>
        <p>}</p>
      </td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&quot;init&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">Characteristic</td>
      <td style="text-align:left">EthernetOnline</td>
      <td style="text-align:left">e5866bd6-0288-4476-98ca-ef7da6b4d289</td>
      <td style="text-align:left">Read</td>
      <td style="text-align:left">binary -&gt; string</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">&quot;true&quot; or &quot;false&quot;</td>
    </tr>
  </tbody>
</table>