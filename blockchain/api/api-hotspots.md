# Hotspots

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots" %}
{% api-method-summary %}
List Hotpots
{% endapi-method-summary %}

{% api-method-description %}
List known hotspots as registered on the blockchain.  
  
The results are paged. If a `cursor` field is present in the response, more results are available.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" %}
Cursor for the page to fetch
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
  "data": [
    {
      "lng": -122.39186733984285,
      "lat": 37.784056617819544,
      "status": {
        "online": "offline",
        "height": 394065,
        "gps": "no_fix"
      },
      "score_update_height": 395577,
      "score": 0.25,
      "owner": "14e35CChhsnuHJxjjzYAxsHKBKDgjUop4GuD8esB7gE2VDoyPXT",
      "nonce": 1,
      "name": "tall-plum-griffin",
      "location": "8c283082a1a19ff",
      "geocode": {
        "short_street": "Bryant St",
        "short_state": "CA",
        "short_country": "US",
        "short_city": "SF",
        "long_street": "Bryant Street",
        "long_state": "California",
        "long_country": "United States",
        "long_city": "San Francisco"
      },
      "block_added": 395575,
      "block": 397023,
      "address": "11cxkqa2PjpJ9YgY9qK3Njn4uSFu6dyK9xV8XE4ahFSqN1YN2db"
    },
    {
      "lng": 5.5794356104890825,
      "lat": 45.13127467725158,
      "status": {
        "online": "online",
        "height": 391690,
        "gps": "no_fix"
      },
      "score_update_height": 395502,
      "score": 0.25,
      "owner": "13wv9QctMFJqQpvbZq8GuwaKc7YxUuvMw6WQD5JouvB3L2kuGwT",
      "nonce": 1,
      "name": "keen-metal-halibut",
      "location": "8c1f933292185ff",
      "geocode": {
        "short_street": "Chemin de la Colline",
        "short_state": "Auvergne-Rhône-Alpes",
        "short_country": "FR",
        "short_city": "Lans-en-Vercors",
        "long_street": "Chemin de la Colline",
        "long_state": "Auvergne-Rhône-Alpes",
        "long_country": "France",
        "long_city": "Lans-en-Vercors"
      },
      "block_added": 395500,
      "block": 397023,
      "address": "1122FqmqcH5uk8J1BSAStYK436GAR9CuwDVuBT2gRduofm9Vh7Lq"
    },
    
   {
      "lng": -81.77662146961255,
      "lat": 24.55934059588725,
      "status": {
        "online": "online",
        "height": 396910,
        "gps": "good_fix"
      },
      "score_update_height": 396984,
      "score": 0.2593841552734375,
      "owner": "131uuuyiYrPczy1aCKDBhvxYTG7ZMNfnZnKgemesd3CZEe3y6EU",
      "nonce": 2,
      "name": "nutty-daffodil-ferret",
      "location": "8c4416a324933ff",
      "geocode": {
        "short_street": "Seidenberg Ave",
        "short_state": "FL",
        "short_country": "US",
        "short_city": "Key West",
        "long_street": "Seidenberg Avenue",
        "long_state": "Florida",
        "long_country": "United States",
        "long_city": "Key West"
      },
      "block_added": 377240,
      "block": 397023,
      "address": "117ucorijFWJ662HH1q6aYz78Y5q2FfF9DMyx4Ka73vBqsEuuMG"
    }
  ],
  "cursor": "eyJoZWlnaHQiOjM5NzAyMywiYmVmb3JlX2Jsb2NrIjozNzcyNDAsImJlZm9yZV9hZGRyZXNzIjoiMTE3dWNvcmlqRldKNjYySEgxcTZhWXo3OFk1cTJGZkY5RE15eDRLYTczdkJxc0V1dU1HIn0"
}

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots/:address" %}
{% api-method-summary %}
Hotspot for Address
{% endapi-method-summary %}

{% api-method-description %}
Fetch a hotspot with a given address.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=false %}
Address of hotspot to fetch
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
        "address": "11cxkqa2PjpJ9YgY9qK3Njn4uSFu6dyK9xV8XE4ahFSqN1YN2db",
        "block": 397024,
        "block_added": 395575,
        "geocode": {
            "long_city": "San Francisco",
            "long_country": "United States",
            "long_state": "California",
            "long_street": "Bryant Street",
            "short_city": "SF",
            "short_country": "US",
            "short_state": "CA",
            "short_street": "Bryant St"
        },
        "lat": 37.784056617819544,
        "lng": -122.39186733984285,
        "location": "8c283082a1a19ff",
        "name": "tall-plum-griffin",
        "nonce": 1,
        "owner": "14e35CChhsnuHJxjjzYAxsHKBKDgjUop4GuD8esB7gE2VDoyPXT",
        "score": 0.25,
        "score_update_height": 395577,
        "status": {
            "gps": "no_fix",
            "height": 394065,
            "online": "offline"
        }
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots/cities" %}
{% api-method-summary %}
List Hotspot Cities
{% endapi-method-summary %}

{% api-method-description %}
Fetches a list of cities where hotspots are asserted with the count of hotspots for each city.   
  
A `search` parameter can be used to filter the city list to cities with  the given string in the `long_city` field.   
  
Note that once the search parameter was passed it is not needed, and ignored, for subsequent cursor request.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="search" type="string" required=false %}
Filter cities with the given term
{% endapi-method-parameter %}

{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for page to fetch 
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "data": [
    {
      "short_state": "NY",
      "short_country": "US",
      "short_city": "Accord",
      "long_state": "New York",
      "long_country": "United States",
      "long_city": "Accord",
      "count": 1
    },
    {
      "short_state": "MI",
      "short_country": "US",
      "short_city": "Ada",
      "long_state": "Michigan",
      "long_country": "United States",
      "long_city": "Ada",
      "count": 1
    },
    {
      "short_state": "WI",
      "short_country": "US",
      "short_city": "Adell",
      "long_state": "Wisconsin",
      "long_country": "United States",
      "long_city": "Adell",
      "count": 4
    },
    {
      "short_state": "CA",
      "short_country": "US",
      "short_city": "Agoura Hills",
      "long_state": "California",
      "long_country": "United States",
      "long_city": "Agoura Hills",
      "count": 1
    },
   {
      "short_state": "MN",
      "short_country": "US",
      "short_city": "Brainerd",
      "long_state": "Minnesota",
      "long_country": "United States",
      "long_city": "Brainerd",
      "count": 4
    }
  ],
  "cursor": "eyJiZWZvcmVfY2l0eSI6IkJyYWluZXJkIn0"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots/:city" %}
{% api-method-summary %}
List Hotspots for a City
{% endapi-method-summary %}

{% api-method-description %}
Lists all hotspots that are asserted in the given city. The `city` parameter must be the `long_city` field as returned from a city list request and **must** be uri encoded to escape spaces and special characters.   
  
This route is paged using a `cursor`.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="city" type="string" required=false %}
The \(uri encoded\) city to fetch hotspots for
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for page to fetch
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
  "data": [
    {
      "lng": -122.39186733984285,
      "lat": 37.784056617819544,
      "status": {
        "online": "online",
        "height": null,
        "gps": null
      },
      "score_update_height": 395577,
      "score": 0.25,
      "owner": "14e35CChhsnuHJxjjzYAxsHKBKDgjUop4GuD8esB7gE2VDoyPXT",
      "nonce": 1,
      "name": "tall-plum-griffin",
      "location": "8c283082a1a19ff",
      "geocode": {
        "short_street": "Bryant St",
        "short_state": "CA",
        "short_country": "US",
        "short_city": "SF",
        "long_street": "Bryant Street",
        "long_state": "California",
        "long_country": "United States",
        "long_city": "San Francisco"
      },
      "block_added": 395575,
      "block": 397033,
      "address": "11cxkqa2PjpJ9YgY9qK3Njn4uSFu6dyK9xV8XE4ahFSqN1YN2db"
    },
    {
      "lng": -122.45174819388565,
      "lat": 37.766411401974544,
      "status": {
        "online": "online",
        "height": 396987,
        "gps": "good_fix"
      },
      "score_update_height": 397008,
      "score": 0.3160247802734375,
      "owner": "13hwPDd8YccWT2TZwAmzSrafLbBxvDWKVJSAmhypgqDBqSWZiXU",
      "nonce": 1,
      "name": "bright-tartan-mallard",
      "location": "8c283082d2745ff",
      "geocode": {
        "short_street": "Frederick St",
        "short_state": "CA",
        "short_country": "US",
        "short_city": "SF",
        "long_street": "Frederick Street",
        "long_state": "California",
        "long_country": "United States",
        "long_city": "San Francisco"
      },
      "block_added": 382879,
      "block": 397033,
      "address": "112MFDqm7yVf1tdSi9mn1iL9PYpYQ55qWJhtyjLSMVYPvmFVqHSJ"
    },
    {
      "lng": -122.43938209609281,
      "lat": 37.774186927407456,
      "status": {
        "online": "online",
        "height": 396967,
        "gps": "good_fix"
      },
      "score_update_height": 396984,
      "score": 0.25,
      "owner": "13aVg3huh47rUqfsSnuJoFmeaFfP6tkzJwAppDMndNDfTk5vVBN",
      "nonce": 3,
      "name": "colossal-sky-okapi",
      "location": "8c2830829d621ff",
      "geocode": {
        "short_street": "Broderick St",
        "short_state": "CA",
        "short_country": "US",
        "short_city": "SF",
        "long_street": "Broderick Street",
        "long_state": "California",
        "long_country": "United States",
        "long_city": "San Francisco"
      },
      "block_added": 117355,
      "block": 397033,
      "address": "11fYdYgribDiJ95mSzcW8sy7hhYJp1tZzCziqPHsHfXwfbByDKy"
    }
  ],
  "cursor": "eyJoZWlnaHQiOjM5NzAzMywiYmVmb3JlX2Jsb2NrIjoxMTczNTUsImJlZm9yZV9hZGRyZXNzIjoiMTFmWWRZZ3JpYkRpSjk1bVN6Y1c4c3k3aGhZSnAxdFp6Q3ppcVBIc0hmWHdmYkJ5REt5In0"
}

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



