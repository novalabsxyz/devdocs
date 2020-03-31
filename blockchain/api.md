# Blockchain API

![](../.gitbook/assets/artboard-copy-19.jpg)

## Endpoints

The Helium [blockchain API](https://github.com/helium/blockchain-http) serves up the blockchain from a database that is filled by a [blockchain node](https://github.com/helium/blockchain-etl) that populates the database as blocks come in.

While anyone can run a node and a corresponding API, the Helium hosted version offers up the API through two endpoints.

<table>
  <thead>
    <tr>
        <th>Endpoint</th>
        <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>https://api.helium.io</code>
      </td>
      <td style="text-align:left">
        <p>Stable, scalable production service.</p>
        <p>Connected to mainnet.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><code>https://api.helium.wtf</code>
      </td>
      <td style="text-align:left">
        <p>Beta, scalable endpoint for new features and tests</p>
        <p>Currently connected to mainnet</p>
        <p>Submitted transactions may get dropped</p>
      </td>
  </tbody>
</table>

{% api-method method="get" host="https://api.helium.io" path="/v1/blocks" %}
{% api-method-summary %}
Get Blocks
{% endapi-method-summary %}

{% api-method-description %}
Retrieve a list of the most recent blocks and associated hashes, timestamps, and transaction counts.

If there are more available results, a <code>cursor</code> field will be present in the result.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" %}
Return the next page of block for the given cursor
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Blocks successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
  "data": [
    {
      "transaction_count": 37,
      "time": 1585613245,
      "prev_hash": "UEvkx2o17K5DQ3vGT8i5HH3M4BI4F_fO4LroNjTP8b8",
      "height": 270901,
      "hash": "3apCTCLCbDIwLB82EtdtoZkOB_Y5a2PCrwyA0BCH6bI"
    }
  ],
  "cursor": "eyJiZWZvcmUiOjI3MDkwMX0"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/blocks/height" %}
{% api-method-summary %}
Get Blockchain Height
{% endapi-method-summary %}

{% api-method-description %}
Gets the height of the stored blockchain
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Block successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
  "data": {
    "height": 249687
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/blocks/:height" %}
{% api-method-summary %}
Get Block at Height
{% endapi-method-summary %}

{% api-method-description %}

Retrieve a specific block by a given height.

The result will contain a paged list of <code>transactions</code> for
the block.

If there are more available results, a <code>cursor</code> field will
be present in the result.

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="height" type="number" required=true %}
The block height to rertrieve
{% endapi-method-parameter %}
{% api-method-parameter name="cursor" type="string" %}
The cursor for the next page to retrieve
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Block successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
  "data": {
    "transactions": [
      {
        "type": "poc_receipts_v1",
        "time": 1564777325,
        "signature": "MEQCIEsZzd0cP42F8kfJCIVqyPNfqPe95zdVXGHGE_HR8ah1AiAr1qjx3BlTK41OoCODOtf7l6HjQscy-5vkoK9faOa6eQ",
        "onion": "zRkzPdNCiz5PYiuXFVWWQSGjYlPTA0OHaugWmpKBbqQ",
        "location": "8c2832b02713bff",
        "height": 5000,
        "hash": "wO2ItZajZQBmTqV3SfptSGFw2SUXoRg4dCc97BV9RPc",
        "fee": 0,
        "challenger_owner": "13EEVvbnpmjgwmEUDnYBLbQxbbAj9kiYWTU853QYX3uNC4xw4Le",
        "challenger_lon": -121.49232532593086,
        "challenger_lat": 38.57351214736358,
        "challenger": "11qTZbaXb3ZxWD3fW4PmVJryWXyY5dCPaSTKmvDhgEBk8bxTSvS"
      }
    ],
    "transaction_count": 1,
    "time": 1564777325,
    "prev_hash": "SakrAhI6Z-4zfn-zaegSKH4tTlSdo5NN6LRiyWs_gns",
    "height": 5000,
    "hash": "9f4k1hZIUjFwr-JsCqhVajR6rLxhgouozOA5mOh2vPU"
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/blocks/hash/:hash" %}
{% api-method-summary %}
Get Block by Hash
{% endapi-method-summary %}

{% api-method-description %}

Retrieve a specific block by a given block hash.

The result will contain a paged list of <code>transactions</code> for
the block.

If there are more available results, a <code>cursor</code> field will
be present in the result.

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hash" type="string" required=true %}
The block hash to retrieve.
{% endapi-method-parameter %}
{% api-method-parameter name="cursor" type="string" %}
The cursor for the next page to retrieve
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Block successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
  "data": {
    "transactions": [],
    "transaction_count": 0,
    "time": 1564436673,
    "prev_hash": "La6PuV80Ps9qTP0339Pwm64q3_deMTkv6JOo1251EJI",
    "height": 2,
    "hash": "rZr1w0PzmVUxiwKBO-NpMhsQ8DbLRZKiJqNgRJ4nC4E"
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Accounts

{% api-method method="get" host="https://api.helium.io" path="/v1/accounts" %}
{% api-method-summary %}
Get Accounts
{% endapi-method-summary %}

{% api-method-description %}
Retrieve a list of all accounts \(addresses\), balances, and nonces.

If there are more available results, a <code>cursor</code> field will
be present in the result.

<b>Note:</b> A returned cursor for this route is only valid for a
limited time. If you receive a 400 http status code, restart the list
request from the start.

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" %}
The cursor for the next page to retrieve
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successfully retrieved accounts.
{% endapi-method-response-example-description %}

```javascript
{
    "data": [{
        "address": "12wqnqnkouzCN54Ur9oqa9iBo6DBfxazH1CphCVFSpKLhkfidaW",
        "balance": 4028123425526,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12wuxikyJpjnqywvwmKbMpQqUHELk62uoCEcQzETnYqxsL5ieaG",
        "balance": 85071437883,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "more account": "..."
    }, {
        "address": "13AbzNWaJeCytU4ce3rjnKrn9UrtnruVZT1UL3yrYm4hBq3NMgP",
        "balance": 24209885858,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "13AckmpBa9yRA7BTXiJbuKJsQ62AWMpenTHw8dxPZApAuWUVcFW",
        "balance": 114667422272,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }],
    "cursor": "eyJoZWlnaHQiOjI3MDkyMywiYmVmb3JlX2Jsb2NrIjoyMTYyMTgsImJlZm9yZV9hZGRyZXNzIjoiMTNtanpzQXhaTGZlZENMcUxIMXRuald6U3RDZmE0ZGE4WVhlekRpcUFxRnlFUzY1cmh4In0"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/accounts/:address" %}
{% api-method-summary %}
Get Account by Address
{% endapi-method-summary %}

{% api-method-description %}
Retrieve a specific account record.The account details for a record include additional speculative nonces that indicate what the expected nonce for the account is for a specific balance.Any transactions affecting the given balance type should use an adjusted speculative nonce for that balance type.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
A base58 formatted address.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successfully retrieved account.
{% endapi-method-response-example-description %}

```javascript
{
    "data": {
        "address": "12wqnqnkouzCN54Ur9oqa9iBo6DBfxazH1CphCVFSpKLhkfidaW",
        "balance": 4028123425526,
        "dc_balance": 0,
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
Get Hotspots for Account
{% endapi-method-summary %}

{% api-method-description %}
Retrieve a list of Hotspots owned by a specific account.

If there are more available results, a <code>cursor</code> field will
be present in the result.

<b>Note:</b> A returned cursor for this route is only valid for a
limited time. If you receive a 400 http status code, restart the list
request from the start.

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
A base58 formatted address.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" %}
The cursor for the next page to retrieve
{% endapi-method-parameter %}

{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successfully retrieved Hotspots for account.
{% endapi-method-response-example-description %}

```javascript
{
    "data": [{
        "address": "11fa8x9KCSNjoHkh14xpSrzL1TkNpWRTzFxjguXB71YkbKehYkj",
        "geocode": {
            "long_city": "Evanston",
            "long_country": "United States",
            "long_state": "Illinois",
            "long_street": "Elmwood Avenue",
            "short_city": "Evanston",
            "short_country": "US",
            "short_state": "IL",
            "short_street": "Elmwood Ave"
        },
        "lat": 4.20461372476905523854e+01,
        "lng": -8.76840209000774279957e+01,
        "location": "8c2664d85cd2dff",
        "name": "noisy-cinnamon-rhino",
        "owner": "12wqnqnkouzCN54Ur9oqa9iBo6DBfxazH1CphCVFSpKLhkfidaW",
        "score": 2.50000000000000000000e-01,
        "score_update_height": 237948
    }, {
        "address": "112RNM5wGb8ujKGC81rhFe3th7eZmXwYAzyrjvcsWJsXG2Sk2WwH",
        "geocode": {
            "long_city": "Chicago",
            "long_country": "United States",
            "long_state": "Illinois",
            "long_street": "North Pulaski Road",
            "short_city": "Chicago",
            "short_country": "US",
            "short_state": "IL",
            "short_street": "N Pulaski Rd"
        },
        "lat": 4.19334179570012537397e+01,
        "lng": -8.77275016677223788975e+01,
        "location": "8c2664ca07897ff",
        "name": "early-viridian-hamster",
        "owner": "12wqnqnkouzCN54Ur9oqa9iBo6DBfxazH1CphCVFSpKLhkfidaW",
        "score": 9.67864990234375000000e-02,
        "score_update_height": 237922
    }, {
        "more results": "..."
    }, {
        "address": "11nHgLrqkt971vLzcN89Mnz7EJM2WfwNaUs9GuANmxDJE3mckCG",
        "geocode": {
            "long_city": "Chicago",
            "long_country": "United States",
            "long_state": "Illinois",
            "long_street": "West Grand Avenue",
            "short_city": "Chicago",
            "short_country": "US",
            "short_state": "IL",
            "short_street": "W Grand Ave"
        },
        "lat": 4.18906242183774537580e+01,
        "lng": -8.76578961046449762762e+01,
        "location": "8c2664cad0137ff",
        "name": "brave-rose-donkey",
        "owner": "12wqnqnkouzCN54Ur9oqa9iBo6DBfxazH1CphCVFSpKLhkfidaW",
        "score": 2.50000000000000000000e-01,
        "score_update_height": 235260
    }, {
        "address": "112q21gRgdEwtx1SRq4LztEb6pFHCRkk9ZVyn8kM9aYvcZcs1dPq",
        "geocode": {
            "long_city": "Chicago",
            "long_country": "United States",
            "long_state": "Illinois",
            "long_street": "North May Street",
            "short_city": "Chicago",
            "short_country": "US",
            "short_state": "IL",
            "short_street": "N May St"
        },
        "lat": 4.18906075517856848478e+01,
        "lng": -8.76561263405611157395e+01,
        "location": "8c2664cad0031ff",
        "name": "prehistoric-goldenrod-wolverine",
        "owner": "12wqnqnkouzCN54Ur9oqa9iBo6DBfxazH1CphCVFSpKLhkfidaW",
        "score": 2.50000000000000000000e-01,
        "score_update_height": 166947
    }]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Hotspots

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots" %}
{% api-method-summary %}
Get Hotspots
{% endapi-method-summary %}

{% api-method-description %}
Retrieve a list of all Hotspots and associated metadata.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" %}
The cursor for the next page to retrieve
{% endapi-method-parameter %}

{% api-method-parameter name="owner" type="string" required=false %}
Only return Hotspots owned by this base58 encoded account address.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successfully returned Hotspots.
{% endapi-method-response-example-description %}

```javascript
{
  "data": [
    {
      "address": "1126TWLgat7mzzJkosi6VzZUVZLPuB1bqM7ynaVzGHWotPjj57rE",
      "geocode": {
        "long_city": "San Francisco",
        "long_country": "United States",
        "long_state": "California",
        "long_street": "Nido Avenue",
        "short_city": "SF",
        "short_country": "US",
        "short_state": "CA",
        "short_street": "Nido Ave"
      },
      "lat": 37.779884546675696,
      "lng": -122.44602673616339,
      "location": "8c28308291755ff",
      "name": "faithful-wooden-chicken",
      "owner": "135J3Qa3XuQuJPqzEZL3FeQtnq21kAhN9EJZwP1ZtmzFK2SvdCA",
      "score": 0.16595458984375,
      "score_update_height": 228972
    },
    {
      "address": "1128ZakzMbi1M7iGS83g8frdbZaRJF9jAWzTnkqKFudkD1ZjaQFD",
      "geocode": {
        "long_city": "Chicago",
        "long_country": "United States",
        "long_state": "Illinois",
        "long_street": "North Kedvale Avenue",
        "short_city": "Chicago",
        "short_country": "US",
        "short_state": "IL",
        "short_street": "N Kedvale Ave"
      },
      "lat": 41.99255849740483,
      "lng": -87.73203577282106,
      "location": "8c2664d9d7a27ff",
      "name": "scruffy-vanilla-boar",
      "owner": "145Ynf7Z864WhomNQYGJEDNeP9GULTCs746x6cWpJbmdWSajCZ5",
      "score": 0.25,
      "score_update_height": 228972
    },
    {
        "more results": "..."
    },
    {
      "address": "112ezmRsg3FsV4hhcLCRaF3eUuMkZvUSPEeuz37UYFhSK75GhQvT",
      "geocode": {
        "long_city": "San Jose",
        "long_country": "United States",
        "long_state": "California",
        "long_street": "Randleswood Court",
        "short_city": "San Jose",
        "short_country": "US",
        "short_state": "CA",
        "short_street": "Randleswood Ct"
      },
      "lat": 37.30640624036822,
      "lng": -122.00570443045251,
      "location": "8c2834723b847ff",
      "name": "boxy-amethyst-albatross",
      "owner": "14NHk7ajkBnsBsSfZSmmHRD5SHb1UvWyLdwz5z9MCEDyjezFWXD",
      "score": 0.99627685546875,
      "score_update_height": 228972
    },
    {
      "address": "112hgcYUdbAqbdwHgLBT8SmU3xc81HbaHvKCH6X1rtwpgmwDzzRP",
      "geocode": {
        "long_city": "Tracy",
        "long_country": "United States",
        "long_state": "California",
        "long_street": "Foxwood Drive",
        "short_city": "Tracy",
        "short_country": "US",
        "short_state": "CA",
        "short_street": "Foxwood Dr"
      },
      "lat": 37.736176909945904,
      "lng": -121.45036641094117,
      "location": "8c2836af1c741ff",
      "name": "lively-stone-mammoth",
      "owner": "13dLs3rfP3FTFooXeCpmd38QrfQv6gi8tBkyvztMCiLvsfen4V7",
      "score": 0.25,
      "score_update_height": 228972
    }
  ],
  "cursor": "eyJoZWlnaHQiOjI3MDkyOCwiYmVmb3JlX2Jsb2NrIjoyMDYzMDIsImJlZm9yZV9hZGRyZXNzIjoiMTF2TDFHZmd3Y3NCTmU5SlhocVI2TFJEV0dTcTFScVdUWUV5clladjRMYnJ3UGs2dGlzIn0"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots/:address" %}
{% api-method-summary %}
Get Hotspot with Address
{% endapi-method-summary %}

{% api-method-description %}
Return a specific Hotspot by its address.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
The base58 encoded address of the Hotspot.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successfully returned Hotspot.
{% endapi-method-response-example-description %}

```javascript
{
  "data": {
    "score_update_height": 270918,
    "score": 0.266204833984375,
    "owner": "14sD2zx93PAVsdfpRcBHPKLy1zct3249tsNbiSwDedS2kz16wgg",
    "name": "wide-rose-otter",
    "location": "8c2a100d12893ff",
    "lng": -73.94307342213261,
    "lat": 40.7150356102252,
    "geocode": {
      "short_street": "Humboldt St",
      "short_state": "NY",
      "short_country": "US",
      "short_city": "Brooklyn",
      "long_street": "Humboldt Street",
      "long_state": "New York",
      "long_country": "United States",
      "long_city": "Brooklyn"
    },
    "block": 270928,
    "address": "11QgEnNnBK1jiWLEe3N6RBEPQaztt4vaW3P9J31Jt82FkSSVzME"
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Transactions

{% api-method method="get" host="https://api.helium.io" path="/v1/transactions/:hash" %}
{% api-method-summary %}
Get Transaction by Hash
{% endapi-method-summary %}

{% api-method-description %}
Return a completed transaction by its hash.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hash" type="string" required=true %}
The base64url encoded hash of the transaction.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successfully returned transaction.
{% endapi-method-response-example-description %}

```javascript
{
  "data": {
    "type": "poc_request_v1",
    "time": 1583768970,
    "signature": "MEYCIQDKYnWFpoOiWwATGITsg6-nse7iP9pQTlbMVbcU6vI0PAIhAOdw8sSWkqDq9iz8V1sgi4DM33XG3Ckfi9UGkWk8Tycz",
    "owner": "14kCAfBHLM7bczXo7H26DWggkSERG37A9hx9nBa7sC6NuhHmV7B",
    "onion": "TSN8mSI5TTgj_DT7HDmpMtjPTbSL6-ZBt7v9rgfpU4A",
    "location": "8c2a36b0dd45bff",
    "lng": -70.82506382455995,
    "lat": 43.608824316519105,
    "height": 240095,
    "hash": "fxgywWl7Jrk7KIzckBV7a7Xh65nD-bEtudmpNMDHn6M",
    "fee": 0,
    "challenger": "112t9bHVnGEkmvegyVMqRidJZCvc7TzcJBeWEXMSvmjBfjvV1ULz"
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

## Pending Transactions

{% api-method method="get" host="https://api.helium.io" path="/v1/pending\_transactions/:hash" %}
{% api-method-summary %}
Get Pending Transaction Status
{% endapi-method-summary %}

{% api-method-description %}
Return the status of a pending transaction by its hash.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hash" type="string" required=true %}
The base64url encoded hash of the pending transaction.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successfully returned pending transaction.
{% endapi-method-response-example-description %}

```javascript
{
  "data": {
    "created_at": "2020-02-19T23:52:09.561144Z",
    "failed_reason": null,
    "hash": "A61hDe1rvd8hH8qCojEJ4lRafcFfzThw9jTF2pOR4bk=",
    "status": "received",
    "updated_at": "2020-02-19T23:52:09.561144Z"
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://api.helium.io" path="/v1/pending\_transactions" %}
{% api-method-summary %}
Submit new Transaction
{% endapi-method-summary %}

{% api-method-description %}
New transactions can be submitted to the blockchain by POSTing a pending transaction.The transaction must be constructed using the protobuf form, encoded and then signed by the account submitting the transaction. The resulting signed transaction is then wrapped in a transaction wrapper which must be encoded and then submitted to this endpoint.If succesful, the response will include a transaction hash that can be used to check for pending transaction status.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Content-Type" type="string" required=true %}
application/json
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="transaction" type="object" required=true %}
The Javascript transaction object to be submitted, for example:`{ "txn": "QowBCiEBAwjvdnALeIh5hTxRhejfMMqQ=" }`
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successfully submitted transaction.
{% endapi-method-response-example-description %}

```javascript
{
  "data": {
    "hash": "A61hDe1rvd8hH8qCojEJ4lRafcFfzThw9jTF2pOR4bk="
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}
