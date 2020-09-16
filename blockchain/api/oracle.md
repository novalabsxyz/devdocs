---
description: An API endpoint that returns current and historical HNT Oracle Prices
---

# Oracle Prices

{% api-method method="get" host="https://api.helium.io" path="/v1/oracle/prices/current" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
The current Oracle Price and at which block it took effect.
{% endapi-method-response-example-description %}

```javascript
{
    "data": {
        "price": 167000000,
        "block": 471570
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/oracle/prices" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Returned from an initial query, allowing client to fetch more results
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a list of recent Oracle Prices and at which block they took effect.
{% endapi-method-response-example-description %}

```javascript
{
    "data": [
        {
            "price": 167000000,
            "block": 471570
        },
        {
            "price": 169630000,
            "block": 471540
        }
    ],
    "cursor": "eyJiZWZvcmUiOjQ2NjE5MH0"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/oracle/prices/:block" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="block" type="string" required=false %}
The block to get the HNT Oracle Price at
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a list of recent Oracle Prices and at which block they took effect.
{% endapi-method-response-example-description %}

```javascript
{
    "data": {
        "price": 167000000,
        "block": 471570
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/oracle/activity" %}
{% api-method-summary %}
List Oracle activity
{% endapi-method-summary %}

{% api-method-description %}
List oracle price report transactions for all oracle keys. This route is paged with a cursor.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for the next page to fetch
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "cursor": "eyJ0eXBlcyI6InByaWNlX29yYWNsZV92MSIsImJsb2NrIjozNzc5MDAsImFuY2hvcl9ibG9jayI6Mzc3OTAwfQ",
    "data": [
        {
            "block_height": 377896,
            "fee": 0,
            "hash": "UcKE8X9UtuhOx5N3yxjyI7QcVihSoJTBq_DVQME7RWI",
            "height": 377900,
            "price": 35736000,
            "public_key": "13Btezbvbwr9LhKmDQLgBnJUgjhZighEjNPLeu79dqBbmXRwoWm",
            "time": 1592484227,
            "type": "price_oracle_v1"
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/oracle/:address/activity" %}
{% api-method-summary %}
List activity for one Oracle
{% endapi-method-summary %}

{% api-method-description %}
Lists price report transactions for the given oracle key. This route is paged using a cursor.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=false %}
The public key of the oracle
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for the next page to fetch
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "cursor": "eyJ0eXBlcyI6InByaWNlX29yYWNsZV92MSIsImJsb2NrIjozNzc5MDAsImFuY2hvcl9ibG9jayI6Mzc3OTAwfQ",
    "data": [
        {
            "block_height": 377896,
            "fee": 0,
            "hash": "UcKE8X9UtuhOx5N3yxjyI7QcVihSoJTBq_DVQME7RWI",
            "height": 377900,
            "price": 35736000,
            "public_key": "13Btezbvbwr9LhKmDQLgBnJUgjhZighEjNPLeu79dqBbmXRwoWm",
            "time": 1592484227,
            "type": "price_oracle_v1"
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/oracle/predictions" %}
{% api-method-summary %}
Get Predicted HNT Oracle Prices
{% endapi-method-summary %}

{% api-method-description %}
This returns a list of expected times when the Oracle Price is expected to change.The blockchain operates in "block-time", meaning that blocks can come out at some schedule close to 1 per minute. Oracles report in "wall-clock-time", meaning they report what they believe the price should be.If the route returns one or more prices and times, it indicates that the chain is expected to adjust the **price** \(based on Oracle reports\) no earlier than the indicated **time** to the returned price.**NOTE:** A prediction may not be seen in the blockchain if they are close together \(within 10 blocks\) since block times may cause the blockchain to skip to a next predicted price. If no predictions are returned the current HNT Oracle Price is valid for at least 1 hour.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns a prediction that the price will change to 47000000 at the earliest at the indicated seconds since Unix epoch time.
{% endapi-method-response-example-description %}

```javascript
{
    "data": [
        {
            "price": 47000000,
            "time": 1594410146
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

