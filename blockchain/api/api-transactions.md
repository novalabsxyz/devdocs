# Transactions

{% api-method method="get" host="https://api.helium.io" path="/v1/transactions/:hash" %}
{% api-method-summary %}
Transaction for Hash
{% endapi-method-summary %}

{% api-method-description %}
Fetch the transaction for a given hash.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hash" type="string" required=true %}
Transaction hash to fetch
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Transaction successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
    "data": {
        "type": "payment_v2",
        "time": 1595980494,
        "payments": [
            {
                "payee": "13FkKYnwHPoa6F7K23jJ7j2WNg9cMPsznJ7i4c9ysCwLoS8vx3E",
                "amount": 100000000
            }
        ],
        "payer": "14h5MCATzJAB88gGBph8YtPM9539FdyBnMdTt7sYxg4Ts1D1aW3",
        "nonce": 6,
        "height": 435251,
        "hash": "bUc6-LQXdR6zOBaR_8TPWlf3THCpb4wI6WPXJHJfnYw",
        "fee": 35000
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

