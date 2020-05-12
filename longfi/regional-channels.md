# Regional Channels & Data Rates

## LoRaWAN US915 Uplink Channels

All channels in 0-63 in US915 have a bandwidth of 125 KHz, encoding of 4/5 bit encoding, and permit data rates \(DR\) 0-3.

Helium uses `sub-band 2` as detailed in the table below. \(The channel frequencies described in `MHz`.\)

| Sub-band |  |  |  |  |  |  |  |  | Channels |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 902.3 | 902.5 | 902.7 | 902.9 | 903.1 | 903.3 | 903.5 | 903.7 | 0-7 |
| **2 \(Helium\)** | **903.9** | **904.1** | **904.3** | **904.5** | **904.7** | **904.9** | **905.1** | **905.3** | **8-15** |
| 3 | 905.5 | 905.7 | 905.9 | 906.1 | 906.3 | 906.5 | 906.7 | 906.9 | 16-23 |
| 4 | 907.1 | 907.3 | 907.5 | 907.7 | 907.9 | 908.1 | 908.3 | 908.5 | 24-31 |
| 5 | 908.7 | 908.9 | 909.1 | 909.3 | 909.5 | 909.7 | 909.9 | 910.1 | 32-39 |
| 6 | 910.3 | 910.5 | 910.7 | 910.9 | 911.1 | 911.3 | 911.5 | 911.7 | 40-47 |
| 7 | 911.9 | 912.1 | 912.3 | 912.5 | 912.7 | 912.9 | 913.1 | 913.3 | 48-55 |
| 8 | 913.5 | 913.7 | 913.9 | 914.1 | 914.3 | 914.5 | 914.7 | 914.9 | 56-63 |

In addition, there are channels number 64-72 which have a bandwidth of 500 kHz, encoding of 4/5 bit encoding, permitting data rate 4 only.

Helium uses channel 70.

| Channel | Frequency \(MHz\) |
| :--- | :--- |
| 64 | 903.0 |
| **65 \(Helium\)** | **904.6** |
| 66 | 906.2 |
| 67 | 907.8 |
| 68 | 909.4 |
| 69 | 911.0 |
| 70 | 912.6 |
| 71 | 914.2 |

## LoRaWAN US915 Uplink Data Rates

The uplink data rates  correspond to specific configurations as details below. Note how the BW of DR0-3 match the channels on which it is tolerated \(0-63\). Similarly, DR4 is only tolerated on channels 64-72.

Max application payload is given assuming the absence of the optional FOpt MAC Control field.

| Data Rate \(DR\) | Spreading Factor \(SF\) | BW \(kHz\) | Physical bit/s | Max Application Payload |
| :--- | :--- | :--- | :--- | :--- |
| 0 | 10  | 125 | 980 | 11 |
| 1 | 9 | 125 | 1,760 | 53 |
| 2 | 8 | 125 | 3,125 | 125 |
| 3 | 7 | 125 | 5,470 | 242 |
| 4 | 8 | 500 | 12,500 | 242 |

## LoRaWAN US915  Downlink Channels



| Channel | Frequency \(MHz\) |
| :--- | :--- |
| 0 | 922.3 |
| 1 | 923.9 |
| 2 | 924.5 |
| 3 | 925.1 |
| 4 | 925.7 |
| 5 | 926.3 |
| 6 | 926.9 |
| 7 | 927.5 |

## LoRaWAN US915  Data Rates & Spreading Factors

Max application payload is given assuming the absence of the optional `FOpt` MAC Control field.

| Data Rate | Spreading Factor \(SF\) | BW \(kHz\) | Physical bit/s | Max Application Payload |
| :--- | :--- | :--- | :--- | :--- |
| 8 | 12  | 500 | 980 | 53 |
| 9 | 11 | 500 | 1,760 | 125 |
| 10 | 10 | 500 | 3,900 | 242 |
| 11 | 9 | 500 | 7,000 | 242 |
| 12 | 8 | 500 | 12,500 | 242 |
| 13 | 7 | 500 | 21,900 | 242 |

