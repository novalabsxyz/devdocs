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
        "token_supply": 43665725.1302733,
        "state_channel_counts": {
            "last_week": {
                "num_packets": 2473044,
                "num_dcs": 5637970
            },
            "last_month": {
                "num_packets": 8054070,
                "num_dcs": 19274712
            },
            "last_day": {
                "num_packets": 236788,
                "num_dcs": 547374
            }
        },
        "election_times": {
            "last_week": {
                "stddev": 534.822542840926,
                "avg": 2144.7836879432625
            },
            "last_month": {
                "stddev": 543.816093344539,
                "avg": 2154
            },
            "last_hour": {
                "stddev": 42.42640687119285,
                "avg": 1882
            },
            "last_day": {
                "stddev": 859.488237284275,
                "avg": 2323.4324324324325
            }
        },
        "counts": {
            "transactions": 19449205,
            "hotspots": 4460,
            "consensus_groups": 11210,
            "challenges": 6970742,
            "blocks": 435217
        },
        "challenge_counts": {
            "last_day": 44551,
            "active": 1375
        },
        "block_times": {
            "last_week": {
                "stddev": 37.35119910969945,
                "avg": 59.48209718670077
            },
            "last_month": {
                "stddev": 39.13551465750347,
                "avg": 59.71646467904705
            },
            "last_hour": {
                "stddev": 13.222930902010502,
                "avg": 57.40983606557377
            },
            "last_day": {
                "stddev": 54.591247837179495,
                "avg": 61.43274021352313
            }
        }
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/stats/token\_supply" %}
{% api-method-summary %}
Get Token Supply 
{% endapi-method-summary %}

{% api-method-description %}
Returnst the cicrulating token supply in either json or raw form. 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="format" type="string" required=false %}
specify `raw` to get a raw number, otherwise returns json
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
RAWN form of the result when called with `/v1/stats/token_supply?format=raw`
{% endapi-method-response-example-description %}

```javascript
49450470.73544278
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

