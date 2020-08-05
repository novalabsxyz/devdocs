---
description: >-
  Hotspots are usually clustered in and around cities. The routes in this
  section help list all cities with their hotspot counts, or list all hotspots
  for a specific city
---

# Cities

{% api-method method="get" host="https://api.helium.io" path="/v1/cities" %}
{% api-method-summary %}
List Hotspot Cities
{% endapi-method-summary %}

{% api-method-description %}
List all known hotspot cities with the total hotspot count for each city.  Use a `search` parameter to filter the list of cities with the given search term   
  
This route is paged with a `cursor`. 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="search" type="string" required=false %}
term to limit the list of cities with
{% endapi-method-parameter %}

{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for page to fetch
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Lists  cities including the word `houston` in their city, state or country. 
{% endapi-method-response-example-description %}

```javascript
{
    "data": [
        {
            "city_id": "aG91c3RvbnRleGFzdW5pdGVkIHN0YXRlcw",
            "hotspot_count": 52,
            "long_city": "Houston",
            "long_country": "United States",
            "long_state": "Texas",
            "short_city": "Houston",
            "short_country": "US",
            "short_state": "TX"
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/cities/:city\_id/hotspots" %}
{% api-method-summary %}
List Hotspots for a City
{% endapi-method-summary %}

{% api-method-description %}
Lists all known hotspots for a given `city_id`. The `city_id` captures the city, state and country and is included in the city list result.    
  
This route is paged with a `cursor`. 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="city\_id" type="string" required=false %}
The id for the city are returned by the cities list
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for the page of results to fetch  
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
The list of hotspots for Montrose, New York, which is city\_id `bW9udHJvc2VuZXcgeW9ya3VuaXRlZCBzdGF0ZXM`
{% endapi-method-response-example-description %}

```javascript
{
    "data": [
        {
            "address": "11C5PW3fe5RmBV7jvdmBJmjH7FjiZ3URAZ5oUj2V9dVsW83a5wU",
            "block": 403147,
            "block_added": 356922,
            "geocode": {
                "long_city": "Montrose",
                "long_country": "United States",
                "long_state": "New York",
                "long_street": "Dutch Street",
                "short_city": "Montrose",
                "short_country": "US",
                "short_state": "NY",
                "short_street": "Dutch St",
                "city_id": "bW9udHJvc2VuZXcgeW9ya3VuaXRlZCBzdGF0ZXM"                
            },
            "lat": 41.24450048207128,
            "lng": -73.93189556758152,
            "location": "8c2a10c020007ff",
            "name": "delightful-onyx-swan",
            "nonce": 1,
            "owner": "142dmsAe4qVmNxdZJuQiFmpSnB9p6wBkAX78MVza1yNrF4t5R6e",
            "score": 0.25,
            "score_update_height": 403138,
            "status": {
                "gps": "no_fix",
                "height": 403025,
                "online": "online"
            }
        },
        {
            "address": "112PSCgC7kXWFnKWrczNL6srYKQpg3VdA9iou6FrQW4C1aot5HPc",
            "block": 403147,
            "block_added": 355849,
            "geocode": {
                "long_city": "Montrose",
                "long_country": "United States",
                "long_state": "New York",
                "long_street": "Sunset Road",
                "short_city": "Montrose",
                "short_country": "US",
                "short_state": "NY",
                "short_street": "Sunset Rd",
                "city_id": "bW9udHJvc2VuZXcgeW9ya3VuaXRlZCBzdGF0ZXM"
            },
            "lat": 41.24464436633493,
            "lng": -73.94293581685558,
            "location": "8c2a10c024e1bff",
            "name": "wobbly-lipstick-manatee",
            "nonce": 1,
            "owner": "142dmsAe4qVmNxdZJuQiFmpSnB9p6wBkAX78MVza1yNrF4t5R6e",
            "score": 0.25,
            "score_update_height": 403097,
            "status": {
                "gps": "good_fix",
                "height": 402961,
                "online": "online"
            }
        },
        {
            "address": "112Byc2EoL1yB7zyfC9ve2HayLoFf9WLvJdTDtevMsmkfxu9GAA1",
            "block": 403147,
            "block_added": 94932,
            "geocode": {
                "long_city": "Montrose",
                "long_country": "United States",
                "long_state": "New York",
                "long_street": "Sycamore Court",
                "short_city": "Montrose",
                "short_country": "US",
                "short_state": "NY",
                "short_street": "Sycamore Ct",
                "city_id": "bW9udHJvc2VuZXcgeW9ya3VuaXRlZCBzdGF0ZXM"
            },
            "lat": 41.24524348318981,
            "lng": -73.93254191072695,
            "location": "8c2a10c020337ff",
            "name": "smooth-cobalt-cougar",
            "nonce": 1,
            "owner": "142dmsAe4qVmNxdZJuQiFmpSnB9p6wBkAX78MVza1yNrF4t5R6e",
            "score": 0.25,
            "score_update_height": 403117,
            "status": {
                "gps": "good_fix",
                "height": 403026,
                "online": "online"
            }
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

