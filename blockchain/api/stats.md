---
description: Gets statistics for the blockchain
---

# Stats

{% api-method method="get" host="https://api.helium.io" path="/v1/stats" %}
{% api-method-summary %}
Blockchain Stats
{% endapi-method-summary %}

{% api-method-description %}
Retrieve basic stats for the blockchain such as total token supply, and average block and election times over a number of intervals. 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "data": {
        "block_times": {
            "last_day": {
                "avg": 58.77889784946237,
                "stddev": 9.507872269818044
            },
            "last_hour": {
                "avg": 57.24390243902439,
                "stddev": 0.8249350982291116
            },
            "last_month": {
                "avg": 62.05714969486658,
                "stddev": 25.980640301206407
            },
            "last_week": {
                "avg": 62.38787067545305,
                "stddev": 29.094249020022605
            }
        },
        "election_times": {
            "last_day": {
                "avg": 2023.4418604651162,
                "stddev": 242.452086805736
            },
            "last_hour": {
                "avg": 2093.5,
                "stddev": 202.939646200539
            },
            "last_month": {
                "avg": 2184.195615514334,
                "stddev": 463.575353678042
            },
            "last_week": {
                "avg": 2211.8394160583944,
                "stddev": 435.66518941559
            }
        },
        "token_supply": 31654459.25935043
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



