# Pending Transactions

{% api-method method="get" host="https://api.helium.io" path="/v1/pending\_transactions/:hash" %}
{% api-method-summary %}
Pending Transaction Status
{% endapi-method-summary %}

{% api-method-description %}
Fetches the status for a given pending transaction hash.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hash" type="string" required=true %}
Hash of the pending transaction to fetch. 
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
  "data": {
    "updated_at": "2020-04-13T04:19:31.713044Z",
    "status": "pending",
    "hash": "Coy2WqcmCt6k8MgSq3hK0XW1Um5NtwHskoY1zwYADKE",
    "failed_reason": "",
    "created_at": "2020-04-13T04:19:23.105879Z"
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https//api.helium.io" path="/v1/pending\_transactions" %}
{% api-method-summary %}
Submit a New Transaction
{% endapi-method-summary %}

{% api-method-description %}
New transactions can be submitted to the blockchain by sending a pending transaction.  
  
The transaction has to be constructed using the protobuf form, encoded and then signed. The resulting signed transaction is then wrapped in a transaction wrapper which must be encoded and then submitted to this endpoint.  
  
If successful, the response will include a transaction hash that can be used to check for pending transaction status.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Content-Type" type="string" required=false %}
application/json
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="txn" type="string" required=true %}
A base64 encoded transaction. An exmple of the both of a post  request:   
`{ "txn": "QoWBCIe..."}`
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "data": {
    "hash": "Coy2WqcmCt6k8MgSq3hK0XW1Um5NtwHskoY1zwYADKE"
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



