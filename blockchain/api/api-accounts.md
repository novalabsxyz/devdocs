# Accounts

{% api-method method="get" host="https://api.helium.io" path="/v1/accounts" %}
{% api-method-summary %}
List Accounts
{% endapi-method-summary %}

{% api-method-description %}
Retrieve the current set of known accounts.  
  
The result is paged. A `cursor` field is present if more results are available.  
  
_Note:_ The cursor for accounts is valid for a limited time. If you receive a `400` http response code for a cursor based request, you will need to start fetching accounts from the beginning of the list.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" %}
Cursor for the page of accounts to fetch
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```
{    "name": "Cake's name",    "recipe": "Cake's recipe name",    "cake": "Binary cake"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```
{    "message": "Ain't no cake like that."}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/accounts/:address" %}
{% api-method-summary %}
Account for Address
{% endapi-method-summary %}

{% api-method-description %}
Retrieve a specific account record.  
  
The account details for a record include additional speculative nonces that indicate what the expected _nonce_ for the account is for a specific _balance_. Any transactions affecting the given balance type should use an adjusted speculative nonce for that balance type.  
  
For example, when constructing a payment transaction, get the `speculative_nonce` field for the source account and use `speculative_nonce + 1` for the new transaction nonce.  
  
Currently only the `speculative_nonce` is supported. It indicates the expected nonce for the account  
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
Account B58 address to fetch details for
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/accounts/:address/hotspots" %}
{% api-method-summary %}
Hotspots for Account
{% endapi-method-summary %}

{% api-method-description %}
Fetches hotspots owned by a given account address.  
  
The list of returned hotspots is paged. If a `cursor` field is present more results are available.  
  
_Note:_ The cursor for accounts is valid for a limited time. If you receive a `400` http response code for a cursor based request, you will need to start fetching accounts from the beginning of the list.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
Account B58 address to fetch hotspots for
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for the next page of hotspots to fetch
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



