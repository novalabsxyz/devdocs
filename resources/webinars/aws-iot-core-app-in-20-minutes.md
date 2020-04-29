---
description: >-
  A webinar that covers how to build an application with Helium, AWS IoT Core,
  and Twilio in under 20 minutes.
---

# AWS IoT Core App in 20 Minutes

Recorded on April 24, 2020, this webinar covers how to build an application that sends an SMS to a target phone number when you press a button on your development board. Upon button press, data is routed via the Helium Network to AWS IoT Core, where a waiting Lamba function processes it and kicks off a Twilio SMS notification. Not bad for 20 minutes. 

{% embed url="https://www.youtube.com/watch?v=loy54JhVCU8" %}

## Slides and Relevant Links

{% file src="../../.gitbook/assets/helium-awsiot-webinar.pdf" caption="Helium and AWS IoT Core" %}

* [AWS IoT Core Integration](../../console/integrations/awsiotcore.md) 
* [ST Development Kit](../../devices/devkit/)
* [Arduino Button Press Example Sketch](https://github.com/helium/longfi-platformio/tree/master/ST-B-L072Z-LRWAN1/examples/arduino-helium-us915-double-tap)
* [AWS Lamba Button Press Example](https://github.com/helium/longfi-arduino/blob/master/ST-B-L072Z-LRWAN1/longfi-us915-button/lambda_button_text.py)

