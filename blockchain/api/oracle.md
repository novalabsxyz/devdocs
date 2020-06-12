---
description: An API endpoint that returns data relevant to the HNT Price Oracle
---

# HNT Price Oracle

{% api-method method="get" host="https://api.helium.io" path="/v1/oracle/prices" %}
{% api-method-summary %}
Get historical HNT Oracle prices by block
{% endapi-method-summary %}

{% api-method-description %}
Returns the last 100 HNT prices along with their block. It also returns a cursor to use to page through the results.   
  
To get the price in $USD, divide the `price` field in the response by `100,000,000`. For example, the price from block `370580` in the response below would be `$0.29145000`. 
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



{% api-method method="get" host="https://api.helium.i/v1/oracle/prices" path="/current" %}
{% api-method-summary %}
Get Current HNT Oracle Price
{% endapi-method-summary %}

{% api-method-description %}
Returns the most recent HNT Oracle price, along with its block.   
  
To get the price in $USD, divide the `price` field in the response by `100,000,000`. For example, the price from the response below is `$0.29145000`  
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

