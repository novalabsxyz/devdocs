# Accounts

{% api-method method="get" host="https://api.helium.io" path="/v1/accounts" %}
{% api-method-summary %}
List Accounts
{% endapi-method-summary %}

{% api-method-description %}
Retrieve the current set of known accounts.The result is paged. A `cursor` field is present if more results are available._Note:_ The cursor for accounts is valid for a limited time. If you receive a `400` http response code for a cursor based request, you will need to start fetching accounts from the beginning of the list.
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
Accounts successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
    "data": [
        {
            "sec_nonce": 0,
            "sec_balance": 0,
            "nonce": 2,
            "dc_nonce": 0,
            "dc_balance": 0,
            "block": 435239,
            "balance": 0,
            "address": "13etjTqyGLK7WQh8pp9VJy5ejh5MXmwFee2eAi3TfAA5kS1jEJb"
        },
        {
            "sec_nonce": 0,
            "sec_balance": 0,
            "nonce": 1,
            "dc_nonce": 0,
            "dc_balance": 0,
            "block": 435239,
            "balance": 0,
            "address": "14Vshtwv9RMY5GuTe1sgLDJmmF2f46EW3etEJzjDjhKJSEprtHh"
        },
        {
            "sec_nonce": 0,
            "sec_balance": 0,
            "nonce": 0,
            "dc_nonce": 0,
            "dc_balance": 0,
            "block": 435239,
            "balance": 404040732,
            "address": "14PaJeSfNp5Q3MtDw5yEsJwb2kHJqbcjjLe9aycjroqNFnL4EyS"
        },
        {
            "sec_nonce": 0,
            "sec_balance": 0,
            "nonce": 0,
            "dc_nonce": 0,
            "dc_balance": 0,
            "block": 435239,
            "balance": 1025990703,
            "address": "13rUthiDQUeY9HfwoZFpkqtsbtaubzRyerCsSu1qdDXuVZGL45k"
        },
        {
            "sec_nonce": 0,
            "sec_balance": 0,
            "nonce": 0,
            "dc_nonce": 0,
            "dc_balance": 0,
            "block": 435239,
            "balance": 179087000000,
            "address": "14Xg1SqiJDsmM2YvchR4UacevcuxjfyrjdyNEpRMmfBU7vrZba9"
        }
    ],
    "cursor": "eyJoZWlnaHQiOjQzNTIzOSwiYmVmb3JlX2Jsb2NrIjo0MTM3MDIsImJlZm9yZV9hZGRyZXNzIjoiMTRpdndTNnRBQXVzRFo0QXVucTZXZ2dUc285cEZFbXZ2eXM5S1NXYUJDRENMd1UyMURkIn0"
}
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
Retrieve a specific account record.The account details for a record include additional speculative nonces that indicate what the expected _nonce_ for the account is for a specific _balance_. Any transactions affecting the given balance type should use an adjusted speculative nonce for that balance type.For example, when constructing a payment transaction, get the `speculative_nonce` field for the source account and use `speculative_nonce + 1` for the new transaction nonce.Currently only the `speculative_nonce` is supported. It indicates the expected nonce for the account
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

```javascript
{
    "data": {
        "address": "1122ZQigQfeeyfSmH2i4KM4XMQHouBqK4LsTp33ppP3W2Knqh8gY",
        "balance": 0,
        "block": 311833,
        "dc_balance": 100000000000000,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0,
        "speculative_nonce": 0
    }
}
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
Fetches hotspots owned by a given account address.The list of returned hotspots is paged. If a `cursor` field is present more results are available._Note:_ The cursor for accounts is valid for a limited time. If you receive a `400` http response code for a cursor based request, you will need to start fetching accounts from the beginning of the list.
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
The hotspot list for an account
{% endapi-method-response-example-description %}

```javascript
{
    "data": [
        {
            "lng": -81.70707772367822,
            "lat": 41.480133219396784,
            "status": {
                "online": "online",
                "height": 435166,
                "gps": "good_fix"
            },
            "score_update_height": 435153,
            "score": 0.9222412109375,
            "owner": "13GCcF7oGb6waFBzYDMmydmXx4vNDUZGX4LE3QUh8eSBG53s5bx",
            "nonce": 1,
            "name": "sneaky-violet-penguin",
            "location": "8c2ab38f19a43ff",
            "geocode": {
                "short_street": "W 32nd St",
                "short_state": "OH",
                "short_country": "US",
                "short_city": "Cleveland",
                "long_street": "West 32nd Street",
                "long_state": "Ohio",
                "long_country": "United States",
                "long_city": "Cleveland",
                "city_id": "Y2xldmVsYW5kb2hpb3VuaXRlZCBzdGF0ZXM"
            },
            "block_added": 96087,
            "block": 435241,
            "address": "1182nyT3oXZPMztMSww4mzaaQXGXd5T7JwDfEth6obSCwwxxfsB"
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/accounts/:address/pending\_transactions" %}
{% api-method-summary %}
Pending Transactions for Account
{% endapi-method-summary %}

{% api-method-description %}
Fetches the outstanding transactions for the given account. See Pending Transactions for details.The list of returned pending transactions is paged. If a `cursor` field is present more results are available.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
Account B58 address to fetch pending transactions for
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for the next page of transactions to fetch
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
A single pending transaction for a given account
{% endapi-method-response-example-description %}

```javascript
{
    "data": [
        {
            "created_at": "2020-04-30T18:13:17.411141Z",
            "failed_reason": "",
            "hash": "IUXgVfnYPlv_Br3Rhng6bKTaLb_AzX9DC3E9NGJhAKs",
            "status": "pending",
            "txn": {
                "fee": 0,
                "nonce": 6,
                "payer": "13C8mAv3M3SUQ1ZgREHsGxabcsHtDCkmkJLp9sGimqfWT4GRf9W",
                "payments": [
                    {
                        "amount": 2,
                        "payee": "13C8mAv3M3SUQ1ZgREHsGxabcsHtDCkmkJLp9sGimqfWT4GRf9W"
                    }
                ],
                "signature": "TcB6zhMf6_ImaMyuTbWRd33W-hlzCwxxZtyIeJRQwUTvHN00V1U4Jn7ooyNHjFAoBgvxBDN2VmQ5Fez0OQoICA"
            },
            "type": "payment_v2",
            "updated_at": "2020-04-30T18:47:19.960477Z"
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/accounts/:address/rewards" %}
{% api-method-summary %}
Rewards for an Account
{% endapi-method-summary %}

{% api-method-description %}
Returns reward entries by block and gateway for a given account in a timeframe. 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="addresss" type="string" required=true %}
Account B58 address to fetch rewards for
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for next page of rewards to fetch
{% endapi-method-parameter %}

{% api-method-parameter name="max\_time" type="string" required=true %}
Last timestamp to include rewards for
{% endapi-method-parameter %}

{% api-method-parameter name="min\_time" type="string" required=true %}
First timestamp to include rewards for
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
List of rewards entries between start and end-time
{% endapi-method-response-example-description %}

```
{
    "data": [
        {
            "account": "12xUoMKwf12ABjNx4VCvYcNkX79gW1kzz2JnBLxkFbjswRczRvM",
            "amount": 7885016,
            "block": 470788,
            "gateway": "113kQU96zqePySTahB7PEde9ZpoWK76DYK1f57wyhjhXCBoAu88",
            "hash": "DTU1GGfR0eU15hv6KiV_bg6FOJXfUWz4TjIq1H7TGy4",
            "timestamp": "2020-08-28T01:29:46.000000Z"
        },
        {
            "account": "12xUoMKwf12ABjNx4VCvYcNkX79gW1kzz2JnBLxkFbjswRczRvM",
            "amount": 3612069,
            "block": 470753,
            "gateway": "113kQU96zqePySTahB7PEde9ZpoWK76DYK1f57wyhjhXCBoAu88",
            "hash": "l3EQR6AJ6R1qE1meHyafDnNF8vJ-X-rH1pujxQRTds4",
            "timestamp": "2020-08-28T00:50:44.000000Z"
        },
        {
            "account": "12xUoMKwf12ABjNx4VCvYcNkX79gW1kzz2JnBLxkFbjswRczRvM",
            "amount": 8623955,
            "block": 470509,
            "gateway": "113kQU96zqePySTahB7PEde9ZpoWK76DYK1f57wyhjhXCBoAu88",
            "hash": "5fQJY9MprH9b3IstVU1SdfBteUWoF_sdsVuiARPBtTY",
            "timestamp": "2020-08-27T19:01:48.000000Z"
        },
        {
            "account": "12xUoMKwf12ABjNx4VCvYcNkX79gW1kzz2JnBLxkFbjswRczRvM",
            "amount": 4009855,
            "block": 470475,
            "gateway": "113kQU96zqePySTahB7PEde9ZpoWK76DYK1f57wyhjhXCBoAu88",
            "hash": "0M0fudEmzW9dmAsO3dcWT286tTL6wTX9sllXtsyz-0Q",
            "timestamp": "2020-08-27T18:15:17.000000Z"
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/accounts/:address/rewards/sum" %}
{% api-method-summary %}
Reward Total for an Account
{% endapi-method-summary %}

{% api-method-description %}
Returns the total rewards for a given account in a given timeframe.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
Account B58 address to fetch rewards for
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="min\_time" type="string" required=true %}
First timestamp to include rewards for
{% endapi-method-parameter %}

{% api-method-parameter name="max\_time" type="string" required=true %}
Last timestmap to include rewards for
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Returns the total rewards over a given time range
{% endapi-method-response-example-description %}

```javascript
{
    "data": {
        "max_time": "2020-08-29T00:00:00Z",
        "min_time": "2020-08-27T00:00:00Z",
        "sum": "164942208"
    }
}j
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

