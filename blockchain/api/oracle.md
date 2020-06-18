---
description: An API endpoint that returns current and historical HNT Oracle Prices
---

# Oracle Price Reports

{% api-method method="get" host="https://api.helium.io" path="/v1/oracle/prices" %}
{% api-method-summary %}
Get historical HNT Oracle prices by block
{% endapi-method-summary %}

{% api-method-description %}
Returns up to 100 HNT prices along with the block in which they changed. It also returns a cursor to page through the results if needed.  
  
To get the price in $USD, divide the `price` field in the response by `100,000,000`. For example, the price from block `370580` in the response below would be `$0.29145000`. 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
A successful oracle price history query
{% endapi-method-response-example-description %}

```
"data": [
    {
      "price": 29145000,
      "block": 370580
    },
    {
      "price": 29427500,
      "block": 370510
    },
    {
      "price": 29837500,
      "block": 370500
    },
    {
      "price": 30000000,
      "block": 369680
    },
  ],
  "cursor": "eyJiZWZvcmUiOjM2NzIzMH0"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



{% api-method method="get" host="https://api.helium.io/v1/oracle/prices" path="/current" %}
{% api-method-summary %}
Get Current HNT Oracle Price
{% endapi-method-summary %}

{% api-method-description %}
Returns the most recent HNT Oracle price, along with the block in which it was updated.   
  
To get the price in $USD, divide the `price` field in the response by `100,000,000`. For example, the price from the response below is `$0.29145000`  
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
A successful current HNT price oracle query
{% endapi-method-response-example-description %}

```
{
  "data": {
    "price": 29145000,
    "block": 370580
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="htps://api.helium.io" path="/v1/oracle/activity" %}
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

{% api-method method="get" host="https://api.helium.io" path="/v1/:address/activity" %}
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

