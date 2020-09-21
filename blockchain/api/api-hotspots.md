# Hotspots

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots" %}
{% api-method-summary %}
List Hotpots
{% endapi-method-summary %}

{% api-method-description %}
List known hotspots as registered on the blockchain.The results are paged. If a `cursor` field is present in the response, more results are available.
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
Hotspots successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
  "data": [
    {
      "lng": -122.39186733984285,
      "lat": 37.784056617819544,
      "status": {
        "online": "offline",
        "height": 394065
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
        "long_city": "San Francisco",
        "city_id": "c2FuIGZyYW5jaXNjb2NhbGlmb3JuaWF1bml0ZWQgc3RhdGVz"
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
        "height": 391690
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
        "long_city": "Lans-en-Vercors",
        "city_id": "bGFucy1lbi12ZXJjb3JzYXV2ZXJnbmUtcmjDtG5lLWFscGVzZnJhbmNl"
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
        "height": 396910
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
        "long_city": "Key West",
        "city_id": "a2V5IHdlc3RmbG9yaWRhdW5pdGVkIHN0YXRlcw"
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
            "short_street": "Bryant St",
            "city_id": "c2FuIGZyYW5jaXNjb2NhbGlmb3JuaWF1bml0ZWQgc3RhdGVz"
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

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots/:address/activity" %}
{% api-method-summary %}
Hotspot Activity
{% endapi-method-summary %}

{% api-method-description %}
Lists all blockchain transactions that the given hotspot was involved in.This route is paged using a `cursor`.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=false %}
B58 address of the hotspot
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for page of results to fetch
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
This lists the activity for hotspot `11cxkqa2PjpJ9YgY9qK3Njn4uSFu6dyK9xV8XE4ahFSqN1YN2db` which only had one transaction at the time of the request.
{% endapi-method-response-example-description %}

```javascript
{
    "data": [
        {
            "fee": 70000,
            "gateway": "11cxkqa2PjpJ9YgY9qK3Njn4uSFu6dyK9xV8XE4ahFSqN1YN2db",
            "hash": "DXciS1wFRf4CAfK_FPl-nE3l_YhisFibOmY2vXE0e3s",
            "height": 395577,
            "lat": 37.784056617819544,
            "lng": -122.39186733984285,
            "location": "8c283082a1a19ff",
            "nonce": 1,
            "owner": "14e35CChhsnuHJxjjzYAxsHKBKDgjUop4GuD8esB7gE2VDoyPXT",
            "payer": "14fzfjFcHpDR1rTH8BNPvSi5dKBbgxaDnmsVPbCjuq9ENjpZbxh",
            "staking_fee": 1000000,
            "time": 1593622131,
            "type": "assert_location_v1"
        },
        {
            "fee": 65000,
            "gateway": "11cxkqa2PjpJ9YgY9qK3Njn4uSFu6dyK9xV8XE4ahFSqN1YN2db",
            "hash": "VSO7aKH9uiCuWUNzb5rPddlq-m-kvaMeVeufUQisjbo",
            "height": 395575,
            "owner": "14e35CChhsnuHJxjjzYAxsHKBKDgjUop4GuD8esB7gE2VDoyPXT",
            "payer": "14fzfjFcHpDR1rTH8BNPvSi5dKBbgxaDnmsVPbCjuq9ENjpZbxh",
            "staking_fee": 4000000,
            "time": 1593622029,
            "type": "add_gateway_v1"
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots/:address/elections" %}
{% api-method-summary %}
Hotspot Elections
{% endapi-method-summary %}

{% api-method-description %}
Lists the consensus group transactions that the given hotspot was involved in. This route is paged using a `cursor`.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=false %}
B58 address of the hotspot to look up
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
Fetches consensus groups that the hotspot with address `11ztQpmCJbfPxv3RjsnvFTozbikpZ72dgmHTYwBQ2n2rABytnLE` was a part of
{% endapi-method-response-example-description %}

```javascript
{
    "data": [
        {
            "delay": 0,
            "hash": "bGZCTdsBxM5m0IuVLcy0RvJf_OOkZ3C9C-TsvmuoQ50",
            "height": 372552,
            "members": [
                "112mRr9U2QkP5svLtTZjnGZ9qMwExoY8zz3Y5KyNYh6eKsvhsaxT",
                "11edHhAK28WHFMZ6D6HTKnzer9jXNRq57ghzxv1ij7ERPMXRKnH",
                "119hQxQAhkGT7dWMPXoPH4E811PzJB9PsgVjsTcUCDLPaCT9aNP",
                "11gQQknec6vuRm8exJU4UG9pyT1e1NXr6yZV7sjPdCwvXaYCJBN",
                "112VVqgL1LRxy6jhAM4AtNVa4qDcw1KmfGf4HjkjQAszo23EqYYY",
                "112L7A2Xpkh7fjKjuaTfq3WgEn9nnAXg2M7BTWsR9dYvn4eopguz",
                "11Qg88VmPkmv2oZggft8THbNhMKtnhUjBVPFJdy33q64GFu5JPN",
                "11tWRj2Qhnn177iVYm3KUmbPdMyhRfeqHqk9kCyiR7y57hdG9JA",
                "11ztQpmCJbfPxv3RjsnvFTozbikpZ72dgmHTYwBQ2n2rABytnLE",
                "112HwmAx3XVW2NUGWa9Gk1yB2zkxXE6Bv4FXgop5Was5Msa7SUcH",
                "1129waT8yUcphrcgYecpoXQtSGh9HS7NZfc6EfBHhQgYKJGibBHH",
                "11wevymXjkG1zPE717qjb8hJQpUaJZMMp4kr3AegmTQpu1jhZ7e",
                "112uxvcQWcdBCgYkCPZGZaX3Fmpe4Xrx21qBNFyfA7YyEqEY6rbm",
                "1144JMF9rZsvUfW7x6koYbKbYpp86gL1xUzWohejeSZti5aPXo4",
                "112NpqyB7Jq3SrmG8tbMwW6rwic8ftpkDFPsechdRzuLE59QSNmY",
                "11sVuJATssrZChv2uLe3pXbLfzBkfeeLSYhfZn8kgiwAq4oJJ7D"
            ],
            "proof": "g1AAAAdBeJxN1Hc422sbB_D4EZqaPVachCb2KPISLaexSuz3xGlfSq2gRtrUqFipWrFqROkxYnVQRUvNcy4cRZrkoLRV0qjWKClqtJza8-gf0fev55_7uj7393nu-yGCQCCJQODa4YEEMQJEOM-LWgy11VO2wWOG3h6XuP9s6LI83lXRLtnaLUZ8r7JGYQGEZ9xppKfYt0mNqfvtaqfsLKROmLSmzQq4PHSrUdR7cvwTgAS1VY8HZUqkYHGsZFP3B5XwoaXWQuIN--dDCbP-roluSJ5JWlU_c92rEPZ1YWQLvlDqtiS-QE2tQGCvmpr6l05w5ngmEpShHz1Ains1dSXBcFsqb94qLgn_7MXcItGxdE3cySs6FUBIYIL_JhGUGkIzVPK3-cj-JvbZw21TwST51LRk59BAC57pFMzvwVjcHGUKpR8Lh939dP7s1jtRk-ZUJfQgmRE4ufjDTMnYHKmOW_6JLv-5PLyJUzUUJhyBFqGDpyMDLt3rO-kMICJ0gnFS572P__Si1lSw-aXZ41UWSxp9Dc9OusCebN_t55mCyzOfVOrSg3QyDKl0556cK4IvWDOim9CW6mWHRWX2_-VMzWX9NQNB7qfNFC5y7flj875uK0ef5vt9PSIpHVCvqQcQQcutr9NY4oN7OHdJVk-ZW7-d-2gtLK_qWz2lQ7rRS4lnFhwErFusg53BbBUZ6emL_IaWJ90Ezul2nfogJ-Dopur3w2yCygcrfMas01kC97iMEOh4lOQuC2TLiv19UHGjVOo1gDDK-ScxUmbf7TJRR_bGz4m6fcEnA96C3p57XKoePuFEWOOZNVqxJv13NbbWtrDYoYE-pVqS_PCXjwoZmM27Doy3KPbRDMHem-CyXNL41WyekovwK5A-5RxBboZ7Xl2s6RghXK7psKvqhY9tqfw2Kd4ZRtsJ1045202_2s8ItJKObMZe1JZpTOaZLWa3Q2bIDXk7JGzbSGUXSSFPZlCWQGT88uJNOZzqa_29ygplCSCcn6uAByhBhAnjGMsHzE6JpHk-y5iPYWGrtx1BmXYmVADhnmjXGrIsFUv5gptbM5n8TewWVcRj51hwgaNvpXZF1jaPlOw0z1VdY73kgyMV9-2G5Qlwzd7Y7fuvllZ6E99E6escxYSgfFvS-7sV-D4n6IyQoflaulOQ6x82Oyq_eUXxj1u0HcYsLVaf0GTG4kgraC2BcxOcn5GMVntR-irQq3OPs5_J4ZkG3Un6253dK9PxzyFFxNYKzFInrVPIPoJ2ofbm-xqztaOY2j00abHZt3S5nCoruKvm17mQ_baZALojOArnzZJeNAEQwMv7w8y1HRG00A38uKlwch0kW7bgpECo_jwZLdweZcwjd9b0S-gLal-euD96uE3d7Aw_VXEuslRhkvkLak2Mq8A-IoX0Cn4VvZJXYZIzPnHfrfFWs-xlrkeB7tAfkQTqh8T8JgBhsCvfvdfxDO5S9hjeCUGKzTAfjkCdvSl8Orpaq7SteB4ZI2e0pYyCSUYbB3RMu4oP8T1yOas49ufZenH3Vd2_fNaPSKji7QP9TRC0B1yPVVGx2IWKQG8nvWFgQ7lPKFroLB8AQfw6gTb0naa4C16-LlsoyBa6yqpICKJSXT09utoKq0t45FMp_RMG_BifTUllSXGJvF6vnNQaTm6rverGaPFTvQjCEWk2LziAoe9lV-Hj5YWHnTTqnbv-964OXuk0Jdp6xnMVByDEFJyK8pPRmKxpavaG7XmPHdg1ncb-CkVffzkrmeL6ah7pGpXgA4-5Ryixb44TSOi_cBV1p4_c2kBUIvow7cRr__tjNQvxLkuBcTAQ92-yHO2hIh2nnWtYQhFIC8ZaZNQRb_UCCMUVCb_Rdu-D-phML0_zIZ9Q46TAD_w3-7sb6xDHu8-a88y5OxRIobWSYVs-17Ya8myn5UFBUPlGfNTBXkJmZgFM5WhmJURoRGlWgbCq7qU4s0ddlWo2s38aiAXfeCM6muL_GyH-sKsy293iskprGaMym7TojiwHkoPXzfcD5kFex8w6HP0sjl6TEqJR6uWugYn6o1YJQHkiGk4ozP_qQOfQVcGd_tPJuUdXC2u0OugSOwMtVo9n5sM0m9QGxozxz6xJp2NzZzW8e1MAxEWasGXJf2yiN0lG4hupTXGD5qGvmWF-eCe_CvwGQ43MI69XlzXIYJpO2L_qQR6UTkqHVUk2QhN9TZflAE3oxTqb71U2KKvDEPWcogNtGnwlWwas9bLftVyv_IwjZ6xC76orW9JgjzDz_QuiGBiYtb9nN_hb2RTnjWGEyHfqyHsxj0Gx6Y-UC2yWrvwLgaEVxg",
            "time": 1592112154,
            "type": "consensus_group_v1"
        },
        {
            "delay": 0,
            "hash": "8_UTNYLnSwLmYKI4n5OzDdjOIkYYtBREvBGthDGFMZ0",
            "height": 372519,
            "members": [
                "112mRr9U2QkP5svLtTZjnGZ9qMwExoY8zz3Y5KyNYh6eKsvhsaxT",
                "11edHhAK28WHFMZ6D6HTKnzer9jXNRq57ghzxv1ij7ERPMXRKnH",
                "119hQxQAhkGT7dWMPXoPH4E811PzJB9PsgVjsTcUCDLPaCT9aNP",
                "11gQQknec6vuRm8exJU4UG9pyT1e1NXr6yZV7sjPdCwvXaYCJBN",
                "112VVqgL1LRxy6jhAM4AtNVa4qDcw1KmfGf4HjkjQAszo23EqYYY",
                "112L7A2Xpkh7fjKjuaTfq3WgEn9nnAXg2M7BTWsR9dYvn4eopguz",
                "11eMofv6oYA3Y7LE4EZxJzwxzyjNHdedKSMNDP5y8pCuvnaMRQ6",
                "11Qg88VmPkmv2oZggft8THbNhMKtnhUjBVPFJdy33q64GFu5JPN",
                "11tWRj2Qhnn177iVYm3KUmbPdMyhRfeqHqk9kCyiR7y57hdG9JA",
                "11ztQpmCJbfPxv3RjsnvFTozbikpZ72dgmHTYwBQ2n2rABytnLE",
                "112hMyXUsTjZV68R5GpP1CMPeyF546zQjnfi9mdUiwBxNqbi2Lw5",
                "112HwmAx3XVW2NUGWa9Gk1yB2zkxXE6Bv4FXgop5Was5Msa7SUcH",
                "1129waT8yUcphrcgYecpoXQtSGh9HS7NZfc6EfBHhQgYKJGibBHH",
                "11wevymXjkG1zPE717qjb8hJQpUaJZMMp4kr3AegmTQpu1jhZ7e",
                "112Hs1kfxaER29V3C4sebiiJJao3SYB91TJ8oRgmqnG1JSavHj6n",
                "11263kd7cLpvrfBDv8GLEF5kq37kjxHFYE6t8KLEpe8fnwdLoUEx"
            ],
            "proof": "g1AAAAdHeJxN1Hk8FGgYB3AGg8i4rQxGo4l1jWbaZnJXJPcRhjFGrCss64qhXFvIyFUYDLJuRhErd8mRotWKYVCKkdw3ww7LH8P-9f7z-7zf93mf53192NjYBD0BvoeLHNvF138gdttfr05FveHN9mks0lxsJ7VzG4eQrCl3xyp0N49S1-H6ADm2UVAcNuF9ZM2aAXbdRDoq8VbCTTnj5K9a53-1WW95ROYEQEJxn5MMV3qK6gNfQJKdZ0bBVOIaf3XDd2Iugb-xFCrNMmP9Fcl4R0XN0L8oUADcCVIjJDNnZtJB7YBxtbtP3U9jmRCZUyubTc95JWbjw3vNhTcn1W46YGA-AKiDOFvH9C5f6eGpyDTp2GGL9jxzG8LZmoOfXR7-FjDDkXrjCb6hSDZzwNGPZQZtKFwKwGdJLc-PMMDzZOwiaP5RXBFE31tHx538hTp7lDKEGxzu-L15ySrH9ZRr18s4Pj1T_30YvDSjudhRIlwBjPgYHIc5jGxtL2MKVegQy5V4VIWcupuHJRFKF6haR7q7tcxV_57NQm38OHCdCzu0Lu6HPMFS-XQrDcboae26OCjyI6HTc3LhBG1LAPKXXx2xTd0fPl2u_LFAuB0mnG7ILryz0tMasNVUcxj5ELFwcC5plUbWLRzopszZckcnJPYIxf8d3zSjt8P57RYLLd_7DkweMNQerq7d5tlMp04DKDZmKgL6a4JpB1cGu21OOvqAi2l31WXY6vz1vC74N4HyOsE30WY-dQ5TyZQUDKCQBwDR9ae-hABEwd4_AXyT6RnMsVuLn6otvEqbLiFFaLnmFJbZ6cFPfZNdj1JReLDLNYG6hXOYXttW68aNlpEcbhgthJwUGiOJAF3OXhgqmPcIliEW_UD97s-7h5nHDbVa64Ubg18cRkZqCR_qRO_CHPnKwp2DltgmwftAo43xsyZ9G-PFLTwfWWiygspbR66yFHBjxzZophpzO1rHbesCIz1Uz_RCZp2l1VHKAH4NADkVUd8d6xkUMoAcaCOuNWL7mvSlraD5nzAWSvGKT6KzABAJjZTu1IE7akS9KHRurZnpngQCGfY-t3_gfUHBGWBYKouMkEQz5OFSImFaHq1T9qBB9lKMxtmJBo3nIMcNtRaXrWMSHa8r9vni-jUpdUmfFw8VSPNJb0gNBg90r4rXJ92QDh4HQHRUhGOQYaI42mQLORjHsPYN9MP5R0J6PKXcn9HGfDVY5DNRhNBFDk2XHRF5EZDgk158alwFNa3RGLZNy3l2IcTrpJ0VoUmOQys-_3BLj_XWfl6Se2WR64sWJ0z8YINAiI_HRgAQeSOP6ecxfa4LhXORS2IEQH8dPmXDNwM2I3TfVjPPtYFlZh54bF3d4rLlGjonLjZlx4G6JovlvKL2SnlcktMCC3M7MRdFcOopte_x9yoR0jFqbSnyId-wqspJYgolYCY6J4sAgHBadc2tpwSUvBYY2lC2G6O1ZBgtMytjLc4T-4tzdCEIllmhdE-7L1-RscnQ1x_sfwelBEl_Wvoqk6i5k2_SOQwfOhmhUdmLGOD3vKmGSK0SLeD-Hn-CkaXVZQulxitW3mqWCqKHkU5KuGEvO9W9Fl32UjHKcTDosXrhnXfMK8P7UQlAfC47C705SJXjexngN825HN-5y3BSxpLBmKq-O8zpyLdyVeO-xz-RLP26qxHvZfXyEFmeHmuxjWycbHGv8-24mrlt293Zko5Dk6QqnGkQsP3coQRW2e5JcaSD8n9SDkqMEBQV-DNLXkKJZYq066XBNrs_sIPlzu4bfZL2Av_ce2_36d-Lq70x_4QiVI9NaDPAf4aJd2KalnuN2XAkzRTYITe9nw50S-TEIbNFgEfXj3qQTKvUaFIiVXn2LwT_q-6soM046LVVyrd0QsJamlnmbHosb9Z1KKopY_pGOW_bXn1h5m9_bkeFHjCjicRMqXPHc-sj09xpTb7_ISRfqFY2HDg7vuVtZ29fy1gt-7zWp7-ffDjZSX3iCbvmncocha5C_eiRVeSzJ27LVZqqZp7-WGP5dhZpHxrtAo4o8Mo1rovkjO6z9oanvyM01vhAfVy6jEAU0-MyMW2TMl8rDZYvuWefVq62ec1FvIwuD_tWhHMoNkDQN46m7FHecuB6tbZhKIaZlRMgaULHvT13Rp_0KvLpmdE7b78Is8wvdo8ndvw8_ihwTkTIeudHZbdCCah_Q_gm7HUe3aUtN__vrSj300GaaGxQq0GL7mMz0DuJXrwfSryfK3aAkKZ6xgkAMVfp1lfC8_2CAvL8QGUG6mltQgPp-TeTSbwm3H5NmNbb_wG5EB0Z",
            "time": 1592110088,
            "type": "consensus_group_v1"
        },
        {
            "delay": 5,
            "hash": "MdGogde_J7Let1-D-FKR5LqAVWsC_dcTqI15ix8zPMY",
            "height": 372486,
            "members": [
                "112mRr9U2QkP5svLtTZjnGZ9qMwExoY8zz3Y5KyNYh6eKsvhsaxT",
                "11edHhAK28WHFMZ6D6HTKnzer9jXNRq57ghzxv1ij7ERPMXRKnH",
                "119hQxQAhkGT7dWMPXoPH4E811PzJB9PsgVjsTcUCDLPaCT9aNP",
                "11gQQknec6vuRm8exJU4UG9pyT1e1NXr6yZV7sjPdCwvXaYCJBN",
                "112VVqgL1LRxy6jhAM4AtNVa4qDcw1KmfGf4HjkjQAszo23EqYYY",
                "112L7A2Xpkh7fjKjuaTfq3WgEn9nnAXg2M7BTWsR9dYvn4eopguz",
                "11eMofv6oYA3Y7LE4EZxJzwxzyjNHdedKSMNDP5y8pCuvnaMRQ6",
                "11Qg88VmPkmv2oZggft8THbNhMKtnhUjBVPFJdy33q64GFu5JPN",
                "11tWRj2Qhnn177iVYm3KUmbPdMyhRfeqHqk9kCyiR7y57hdG9JA",
                "11ADL7tz5fazKdFM21kdo6K11k7bpjun6JwY22N4tx6ab6mjrYx",
                "112Pah4kwPwuVmCTmD1T5tiM2YZTQ4MmoFg68zxwyZsiYVtk8Bx3",
                "11ztQpmCJbfPxv3RjsnvFTozbikpZ72dgmHTYwBQ2n2rABytnLE",
                "11knHXfj4QiwxtSajc6D8FQzpDZFCEL4Q2cF74K7Yu8Lp3pCXXu",
                "112dDDJ8HCWR9qGC3jsm1UBBaVy2LgLu8Pryd4vNvHXhv8LL4gMW",
                "112hMyXUsTjZV68R5GpP1CMPeyF546zQjnfi9mdUiwBxNqbi2Lw5",
                "112HwmAx3XVW2NUGWa9Gk1yB2zkxXE6Bv4FXgop5Was5Msa7SUcH"
            ],
            "proof": "g1AAAAdHeJxF1Hk81HkYB_Dxq9RE65YMdoaiiWEck9llUY5hQlnH5Jxicx-zaIxxM2Ijdsgx7mssxoQcLbs17hwTuTdCbRIh2lwjmp3-mPz1_efzer2_z_N8n68_CAQS9QYCeAcM5EiKc5eLLPEpuNIUczSObeuHzBwgtzb4K_m792BFmFZfUxikKQADJeR3riH3OHpSFZ4LtbFtybQPxJpPVclC07jw8-HG1AYACvTl18ogUNtV5e6gyfd4j8rRqKfek2rSFcDZrZYnjGt8s0Y12oBdDOdscUxNx54NKDFD5cc_vFZI0d8ttuyeRE4cmiUu1TdNt_8aPQ0zWPl3V9680GzZv5GLjXwtML1r84CjAkCv5BZN-CTbl6qhcMxs9p3TYef8HZdOzshcaEq1CkfP1vFND--ZPdTbEykDdrRTqUbK3vL1JoGzzDliBiLM5GfrxplDk6KtErUf1lqvdx2I0Q3qh-yMpMhMVyfjr0pQKp0R5BUAan10O-DeCu6Bm4XEnOCysTU9Gzhz4NFjcnFV1mam3YzBN7u9hKe68prRiPN39o7Nom-6Oi38t6PR6_qiiuZkgV0lfk2ZI814ZrMDEPnr9ojNspHU8V5lpzTWiEN-y4HE5fWNJhsddXMiLzKNdhQMCoZk0QlheS3JDR3DRooEOfwT37JfGCZzV0Vz-GidpLYY6oi--67EWQkR0ax-PDWpZiqj9YryznR-nRbR52vKDGkCQEm746NPnpf0K8uIYctpZqCuj680HOIUk5wv7feWppGhABSFoS6Ech5vFmmbQuek7t8RLmF3Rkvqv8oJyYMLSw9e5JOoDor2Hqvj45vYLnCef2uF_hqLxjp-hUizZUbN1BhtHdbZ4pkrqt6iqjx-ArGpY-pz63RfwkLz4n0NHZLc30nDF37iRZ6-wIAW_UvhSH2K5U81L21CTSF_eK6mELpn0uoT4OPn-Kh90BHX7tXd6Z7jd0_chhS__VmP8-KUQVOSks4Iudv71Sp_oFA3bCdLYFDrO0SyfQk43VDNcfLpPsIsuVpTxIltX05V5JkV8KOd0nWNPrr21aU3I0hcVSvW5n27y44GUmzZZsLIPN-0G5uCCf0ZHLRwdD25e4_jpuZcKHe9lh12sBDTB6t9GXBY6Hx3vt5_uHWC-Pi2TPmG-V7Ug2vygB50mrGSXUqEyCrxIv92N2hwwbQt0x22mM_grFE8TFMwMWqprGXn5nzRi3o0H00gwAvxLnB9UgtTCUC6QRvEFN5bW3ZOdSofY3m-Scz4VqiDi84rMueBxpJjmAh-9OJw5HJXG45Qdef2F7uUcFtdMs_MC4W0fNnvaD4i3AcnUgJ7mMaKi_TXW4wRxmPb9q1hOt8M3TyvG4zPhayv_MORWyl0XhNZSUuqgJr6GRp6Fs5PLR1uy3LqmB99BgcOeZlZ0e5x0RhenPJmcoh78mH7lNitG5LmAPSaltfmM-eCt1-cH-ukE2gWVpC4ja42Tcy9bLzLXIOsAN-ceE9XTEIr_ym5cVBa1vyu0TacS1fOOm7sIKZOIYb2Dh02N3MCEVL7235j1mYAa8pkcXlKRbbaUD-wuShM_sP8Myd_XiRdesLCt3L7Ouck9QxcoU2gRizbwUv1B5XAh5YHuj7ua3xUckUK7B2kOf_8QLXHg1MF-lHheTbNK9gps2t8gZUHs_m2LQGCWYIkLyNMjutDXxTdeSQA9Xdr4Zsh8I4aHEFNIV4FoDClXCPXRxuV2O8HrCSCqun03-333tV7HcsL-EzKcMZp8EkJ1qUM5a3eIQE5mOIX7Li8j9yF_ui90uG1j_3xoyRt9cPeprri9D4Npael34ZZDmiKYk7F31U80O2L6KaMZTpEs90BqIrbjdwmJsbeLsultfES5Kmu1rHPGE-SrOUn-IF8gSeHb7bscE8wXcQTa8mOWnUFtNo1oSC9PxZ71Lcv1-uKUwySDk2q9V0uZ5oxG59t0vUOeiuineOOwwUOyiu-1jFnqXXwfr8LcQ0DEWI9mLsB6_GXd62ov_3TgKUMovViLqFizcM1X_LNpcwEcC5GCd2WvWBRDX7yubksJ7B8J5bEPYhLTc2BnPv2bm_veJdHo9j22Gb17EcEPOGRX3CPhQKWalOq8vFdup4n71YF7xlp4vf8LB-RQ_w1C0GON4Z95IC5xEap0bEzvq65IXxzHnd_djfIi1JyI0X7e7_i2LzHSmT0PlFo1tEwLWp6_a9v4zxb0A4N00ct5chV2XOEbKK12qW5Zz-X5SSYxVx1L1KLAKCykVahSLTqvLrA3BFmovSCtHgOvjKNwV19C_41rY4u7Ps_lTspEA",
            "time": 1592108023,
            "type": "consensus_group_v1"
        },
        {
            "delay": 0,
            "hash": "22qhsNH-Rw-5v8exId1KHgitBAwPf45SPMwhpyylyKI",
            "height": 372448,
            "members": [
                "112mRr9U2QkP5svLtTZjnGZ9qMwExoY8zz3Y5KyNYh6eKsvhsaxT",
                "11edHhAK28WHFMZ6D6HTKnzer9jXNRq57ghzxv1ij7ERPMXRKnH",
                "119hQxQAhkGT7dWMPXoPH4E811PzJB9PsgVjsTcUCDLPaCT9aNP",
                "11gQQknec6vuRm8exJU4UG9pyT1e1NXr6yZV7sjPdCwvXaYCJBN",
                "112VVqgL1LRxy6jhAM4AtNVa4qDcw1KmfGf4HjkjQAszo23EqYYY",
                "112L7A2Xpkh7fjKjuaTfq3WgEn9nnAXg2M7BTWsR9dYvn4eopguz",
                "11GSd5uyaRF3BkYWc7XGVDz8FzMRTxBi5bHy5ZWjg8jN9mv5gnY",
                "112qdBK6mYPCnovBTcUSPSspo5dDF2GQL7TXHNKihoiqYnDwaizS",
                "112wEDaaeDbUUCNtcjd8LCX6epXuRvSM9qQZW2KtyM2vDgT6GK5N",
                "11eMofv6oYA3Y7LE4EZxJzwxzyjNHdedKSMNDP5y8pCuvnaMRQ6",
                "11Qg88VmPkmv2oZggft8THbNhMKtnhUjBVPFJdy33q64GFu5JPN",
                "112M6AiQEedVsuzfw5au1WFUgSPEiaVCU31Aa1xjCHFYX8WohEnC",
                "11tWRj2Qhnn177iVYm3KUmbPdMyhRfeqHqk9kCyiR7y57hdG9JA",
                "11ADL7tz5fazKdFM21kdo6K11k7bpjun6JwY22N4tx6ab6mjrYx",
                "112Pah4kwPwuVmCTmD1T5tiM2YZTQ4MmoFg68zxwyZsiYVtk8Bx3",
                "11ztQpmCJbfPxv3RjsnvFTozbikpZ72dgmHTYwBQ2n2rABytnLE"
            ],
            "proof": "g1AAAAdAeJxF1Hs4E2ocB_A1cj3llsSMjdMey23ouIUcJJeTldyblrnMMkTMIveVhNJIxhA5RW5JLqu0LGLuoyJ3Z045c4nYXHI5-mPrr_ef7_N83u_z-70vHgAASAcCg_cOKKBhbVesCiV7ozLaU7-GSqlckAw98eRLmw7P6pmRLMki5WfKFmEDhEi3W7VxTtmh26aaSp_vJmCvyvou1lGLoJ4kvP0kBcEBQhTTqibpzEfItQzUloh4-WCjZIaIMdXVheEw4d5SDtfnk66hQt6t8-sjbaK3xSJBRf86n9j4fMDiRYr6cVZ0a-DUvIC0_Xsbe_6LP7Sl-zDuxWhm5FyteTBWaesuF26-sjqgfAMIiTHIflIEi_sY6aikIBtve2jjWX8tNBzTxeshmizuFkzzyeQr8AI0Cm5GbKhSByIuQmplVDhOfzGGGLD99AD2DfLP1GnEKSAkDLv1EFkrnZFyDL9SzSNl9idq330xj2vSUPt-_aFapiwQCvgU693N4qhYKWpdlQje56_CmuYNbOmWWV8zXG4thGct8c1W7G9D7_LqjbU1bm7uHzf28faa-b6m-977cxnFy95hniCoCd2KyrTZtdN4Y8nxvvBYhETUCbzalHRn2HU4Ht4HVJwGQiLlC7WGXMwPgoe9sNXJck6FF1flDDVqqCtn_OjFz24z-KQc_U8yjPu-d58yVG3H4QMYp3yMGbdZ3LewzEwaIBroCGqK-a6KhnUpm7SU-oqL9H-yhBUbeaahYm7KO7OiKQGM13s1S8I9Zz8WdEqEsUHiuh5CIjpW3O76UhQoLL7cY_AWy4pvRqxqGIWjc0Hf5oY3lOcKLixIzd1JKYWcCjp5MqBgcmhWUNMNLF2-9NzzGm8HpMjL1Q9ugm_fDxiwKEEO5JAzo8TAeyt2eFQFbLR4YokWeysDnvq5vgDR_IByQDqda1rx2MLclk_uDL7Bd5D1elj9nP-CQuWVJP_yEqkgM0dktnk9RzFu-YKaqNcbvEf_eDh2TXrMezE-3B7XYtVx9sUctPbVlEAxBrh7NQdcsjeLc1obrRH2CqXFgY1-7GUTzWqckHsE1wv_UQ_EN78r6WwbacVEZOcnVOPiaL6jqZllWl2Xns5PltdU-OV3800o4F42qfzyLl3B52y9Yiekujb4SNjuNYIxIKlCt_FKt4QHEKJ1jir91uFsSi-CDIaPY4bI7uOmU2M2uLSgQ3Dac8JBvvlHC8lgk96yzE54J56Hp5WaLdApdFFHAuV8VezoU0vuL7Nk5Fni5MhZnNldztKsSIwNF0wLjMGsZJsL3zluYJu3AoSYN6I7arXkbEiMVaf_3qs27DM97dmCjxx7zSohFXMc0_jmoTl58cBQvcn-bc02340ygKlKfw4FG-6V9e7DDD0Peu5nyg5hu2dS8DqqmoSUmIpB_2ZftLWmGW29vZGF1g0rkohP6P82sRdJvX5TW8LFCqpsGOJsdh_h-z4XiuzbUfJtOphsErtulcNHa5FZrrbXsBHJas2Kb7No26BvrhLQsKeUQs3iXOirI4mCHbJc_I4KI2IkTW41tqvFn1nsZ6cSSJNypRG4BR26COgAEOLqdrZX2PuKKNsk1zrtTY6LxdEgRpTqE327e_sn2iv1WvnkbFayeO5pdeOXOTP25eJvftSXPAh5tJZA3N1OTE9_ADoqIAlsE2KpRtM6EPYV1tMLU4jHIi_99pmXBOiwJbj3EB2AEMiP80hVq2EYd_HrfHd25xFCl0u55fir5UFn6vHLNZHtfFJdaoNnNWthoRDd4GQzL3b4WNyy1NJKoZ9BobSQ24y_269xzpxcSyseGzXskCjSjst3dkjtdjmQQ3mY8rIuWjsDA-sAQkzfcZXBRL3OFia7IMi6QC5T4y25zjOdrXb630eLBsOyfNOTmIhRvv4QR3V8ES-c2H0-CJHVGU2rxavjMW0OUlVnfpllQSj9E_-0_N4j5AScCFkAIBVf5ll6f_FTYg9-sSfrRgEhPkE1qslel9CAubpYfZnmrz6G-q7ioqiyl1560x-YEa_5psvgEFSyKTx0RvjbrdbNjYtaFwqUPSq7o7Zn4juglWPBgucZ8iOtszXWIg0qM3KSPjEpnd3Tc6N3u5L-agKUFLRpILF3KyqB1Nkp6dNXwrx-LumUys10eWZfNsIdDV6ANjXLPheMs-aQgcwfQmaYdbnf5aSk7zPR91KeDpFpjrC1kfwafQJOME7AykB0igxjyv-IEtLa44FR37SGZIOhHSxN2KkYkSFM2PuFpvx8wj9iWGX2xncTXjHHAkIuatpj43eq-qg5XBck7fL_jZ4mIA",
            "time": 1592105642,
            "type": "consensus_group_v1"
        }
    ]
El
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots/:address/challenges" %}
{% api-method-summary %}
Hotspot Challenges
{% endapi-method-summary %}

{% api-method-description %}
Lists the challenge \(receipts\) that the given hotspot a challenger, challengee or a witness in. This route is paged using a `cursor`.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="addresss" type="string" required=false %}
B58 address of the hotspot to look up
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for the page to fetch
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Fetches the challenges that the hotspot with `11DvZivbwHVRx4PbQwAd5w2DQEAcfSCRVzsW7gjRKQ86nCEJxHJ` was involved in.
{% endapi-method-response-example-description %}

```javascript
{
  "data": [
    {
      "type": "poc_receipts_v1",
      "time": 1593711283,
      "secret": "AGzlnZfDnyFn1F_aLLlgYErFiEIAtFH0qTVV68pAibwNBOaVB2Wvnn2ZeF_unWN55Ld_7VXemk64lPHnjsOG_1YLXDnP7RT4EGELD9xriv1AZbNCoMAfY-xPhRHlf3YVPms",
      "path": [
        {
          "witnesses": [
            {
              "timestamp": 1593710795471113454,
              "signal": -78,
              "packet_hash": "5AN5Y3hcAVqZk_9KFetSbh-Z_qPGSeN-MFcH7neSyNM",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60c37aa5ff",
              "gateway": "112QWbkXGkZ5dSkP2511A6aYGLyabeLRRnd7un22WhQNShfSbXNc"
            },
            {
              "timestamp": 1593710795456164133,
              "signal": -77,
              "packet_hash": "5AN5Y3hcAVqZk_9KFetSbh-Z_qPGSeN-MFcH7neSyNM",
              "owner": "14cSUPEX76FLdhjgyT6Y6fBFYzeJdTjTMDDrHDnpeA8tSXmYrfq",
              "location": "8c2ab60c46e4bff",
              "gateway": "1112cKvndYQE1X3BxpRtuycvh36ehEuA4yqpiSzJqMGzrcQGUER"
            },
            {
              "timestamp": 1593710795454238307,
              "signal": -94,
              "packet_hash": "5AN5Y3hcAVqZk_9KFetSbh-Z_qPGSeN-MFcH7neSyNM",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60c170b9ff",
              "gateway": "112LxPghCf7qXigCBRz74LTAKKvPtfYPjqPxbBpkie9E9BcrMDdc"
            },
            {
              "timestamp": 1593710795459449071,
              "signal": -71,
              "packet_hash": "5AN5Y3hcAVqZk_9KFetSbh-Z_qPGSeN-MFcH7neSyNM",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60c4b46dff",
              "gateway": "11iYaU281c2Yjo2tvMxyeu1t95Cv7aLWuAoBYte51gZ7bKijzpj"
            },
            {
              "timestamp": 1593710795447538617,
              "signal": -78,
              "packet_hash": "5AN5Y3hcAVqZk_9KFetSbh-Z_qPGSeN-MFcH7neSyNM",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60c426e7ff",
              "gateway": "1128s66jgeG9oxw33FV7Gw52wfNukPSKGupB2C7N3w1poid5LeRC"
            }
          ],
          "receipt": {
            "timestamp": 1593710793585261540,
            "signal": 0,
            "origin": "p2p",
            "gateway": "11a44i7ry5WQ2ZuPTL5Hpx7RkQBHevNwiQkpU6sZgGxkYQ9K59o",
            "data": "o9w"
          },
          "geocode": {
            "short_street": "Washington Ave",
            "short_state": "MI",
            "short_country": "US",
            "short_city": "Port Huron",
            "long_street": "Washington Avenue",
            "long_state": "Michigan",
            "long_country": "United States",
            "long_city": "Port Huron"
          },
          "challengee_owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
          "challengee_lon": -82.43305482993941,
          "challengee_location": "8c2ab60e3c14bff",
          "challengee_lat": 42.98855335905615,
          "challengee": "11a44i7ry5WQ2ZuPTL5Hpx7RkQBHevNwiQkpU6sZgGxkYQ9K59o"
        },
        {
          "witnesses": [
            {
              "timestamp": 1593710797368850439,
              "signal": -95,
              "packet_hash": "viJWqE5v96u8eKCRwTqm-bf2IlD2m87N3A0SKs7Yf4c",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60c37aa5ff",
              "gateway": "112QWbkXGkZ5dSkP2511A6aYGLyabeLRRnd7un22WhQNShfSbXNc"
            },
            {
              "timestamp": 1593710797331238274,
              "signal": -102,
              "packet_hash": "viJWqE5v96u8eKCRwTqm-bf2IlD2m87N3A0SKs7Yf4c",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60c170b9ff",
              "gateway": "112LxPghCf7qXigCBRz74LTAKKvPtfYPjqPxbBpkie9E9BcrMDdc"
            },
            {
              "timestamp": 1593710797335494047,
              "signal": -93,
              "packet_hash": "viJWqE5v96u8eKCRwTqm-bf2IlD2m87N3A0SKs7Yf4c",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60c4b46dff",
              "gateway": "11iYaU281c2Yjo2tvMxyeu1t95Cv7aLWuAoBYte51gZ7bKijzpj"
            },
            {
              "timestamp": 1593710797325570974,
              "signal": -99,
              "packet_hash": "viJWqE5v96u8eKCRwTqm-bf2IlD2m87N3A0SKs7Yf4c",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60c426e7ff",
              "gateway": "1128s66jgeG9oxw33FV7Gw52wfNukPSKGupB2C7N3w1poid5LeRC"
            },
            {
              "timestamp": 1593710797326235913,
              "signal": -81,
              "packet_hash": "viJWqE5v96u8eKCRwTqm-bf2IlD2m87N3A0SKs7Yf4c",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60e3c14bff",
              "gateway": "11a44i7ry5WQ2ZuPTL5Hpx7RkQBHevNwiQkpU6sZgGxkYQ9K59o"
            }
          ],
          "receipt": null,
          "challengee_owner": "14cSUPEX76FLdhjgyT6Y6fBFYzeJdTjTMDDrHDnpeA8tSXmYrfq",
          "challengee_lon": -82.4633534637547,
          "challengee_location": "8c2ab60c024adff",
          "challengee_lat": 42.94538752297601,
          "challengee": "1123VfBqFkbBfLtMZiYMR2WoUew2tZWWdZcoVHGRG2KSq7pYtCpJ"
        },
        {
          "witnesses": [],
          "receipt": null,
          "challengee_owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
          "challengee_lon": -82.46035597096102,
          "challengee_location": "8c2ab60c14219ff",
          "challengee_lat": 42.941715433247545,
          "challengee": "11DvZivbwHVRx4PbQwAd5w2DQEAcfSCRVzsW7gjRKQ86nCEJxHJ"
        },
        {
          "witnesses": [],
          "receipt": null,
          "challengee_owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
          "challengee_lon": -82.49094619308394,
          "challengee_location": "8c2ab60c37aa5ff",
          "challengee_lat": 42.93231949041608,
          "challengee": "112QWbkXGkZ5dSkP2511A6aYGLyabeLRRnd7un22WhQNShfSbXNc"
        }
      ],
      "onion_key_hash": "YM1oa4GmFBucT2g5NXHSN4CH907uuEo7waMnDIVG85k",
      "height": 397058,
      "hash": "tmWvGykf9sIjix1VxkYQwRjz1jzwuluGvVxDnMwWAZ4",
      "fee": 0,
      "challenger_owner": "14ZxnCvJq9wNgdFjLGatcYCjxdnT3RfzJ6dkVHNB9Wkwq5FHLj4",
      "challenger_lon": -118.49635947992698,
      "challenger_location": "8c29a19ab59c1ff",
      "challenger_lat": 34.02420568554961,
      "challenger": "118AgJni9yvsbX1nJF8ZRhXXtdPqEsSoshaZV9G9fyYz1Miwk2b"
    },
    {
      "type": "poc_receipts_v1",
      "time": 1593709051,
      "secret": "AA-QE2YLG0iIIc1KO4FA7zJSiGDYVTgxoi7bKtn7TcfABNru4ZZmh5Wo_j88yUGDXW7m_jmYc1nq8Rn8b3rmxkCBUVw31SW88BtNyWYdI4RqwHXWmtA-fqrq-Ksr0KvgA_I",
      "path": [
        {
          "witnesses": [
            {
              "timestamp": 1593708823109097719,
              "signal": -103,
              "packet_hash": "bAxUoDw2Ypgv1qY6ZzFZBYun99Fa_ch4VPqKhdBZJD8",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60e38113ff",
              "gateway": "112bM2Comn8VD9KXMYdKZYeSUKwRuJDWUJc2YbfKbDgHwArnt46a"
            },
            {
              "timestamp": 1593708823089884139,
              "signal": -91,
              "packet_hash": "bAxUoDw2Ypgv1qY6ZzFZBYun99Fa_ch4VPqKhdBZJD8",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60c389c5ff",
              "gateway": "112rzgdhF48KqLKUUuJe6FKQX6yVaCte639JuuixtybHkezL2iAB"
            },
            {
              "timestamp": 1593708823101331551,
              "signal": -99,
              "packet_hash": "bAxUoDw2Ypgv1qY6ZzFZBYun99Fa_ch4VPqKhdBZJD8",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60c170b9ff",
              "gateway": "112LxPghCf7qXigCBRz74LTAKKvPtfYPjqPxbBpkie9E9BcrMDdc"
            },
            {
              "timestamp": 1593708823100783822,
              "signal": -91,
              "packet_hash": "bAxUoDw2Ypgv1qY6ZzFZBYun99Fa_ch4VPqKhdBZJD8",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60c58341ff",
              "gateway": "112BgzGtWwcCsL98Xpcz6p5bJeaS1KrcevDeYnrZSKDzqgBngW1a"
            },
            {
              "timestamp": 1593708823104408242,
              "signal": -99,
              "packet_hash": "bAxUoDw2Ypgv1qY6ZzFZBYun99Fa_ch4VPqKhdBZJD8",
              "owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
              "location": "8c2ab60e318e7ff",
              "gateway": "119td1MLCtGEAjnGJjMXTh6dcyq3FwW2gxoU9Ev5jrmE1f6aZQh"
            }
          ],
          "receipt": {
            "timestamp": 1593708821274903421,
            "signal": 0,
            "origin": "p2p",
            "gateway": "112mBp6av2P1Ko7aXQZSSBiZLPxi9dP2YL1E1M8ysBx9MbKPR4FJ",
            "data": "zw0"
          },
          "geocode": {
            "short_street": "Military St",
            "short_state": "MI",
            "short_country": "US",
            "short_city": "Port Huron",
            "long_street": "Military Street",
            "long_state": "Michigan",
            "long_country": "United States",
            "long_city": "Port Huron"
          },
          "challengee_owner": "14cSUPEX76FLdhjgyT6Y6fBFYzeJdTjTMDDrHDnpeA8tSXmYrfq",
          "challengee_lon": -82.42495037863101,
          "challengee_location": "8c2ab60c5b05bff",
          "challengee_lat": 42.961154068414594,
          "challengee": "112mBp6av2P1Ko7aXQZSSBiZLPxi9dP2YL1E1M8ysBx9MbKPR4FJ"
        },
        {
          "witnesses": [],
          "receipt": null,
          "challengee_owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
          "challengee_lon": -82.46035597096102,
          "challengee_location": "8c2ab60c14219ff",
          "challengee_lat": 42.941715433247545,
          "challengee": "11DvZivbwHVRx4PbQwAd5w2DQEAcfSCRVzsW7gjRKQ86nCEJxHJ"
        },
        {
          "witnesses": [],
          "receipt": null,
          "challengee_owner": "13gXUZcSK6RBAByDQmETVNgqXBQcSi7agTe1gN7mWevVJSY6qsp",
          "challengee_lon": -82.45085880023731,
          "challengee_location": "8c2ab60c426e7ff",
          "challengee_lat": 42.9667313386322,
          "challengee": "1128s66jgeG9oxw33FV7Gw52wfNukPSKGupB2C7N3w1poid5LeRC"
        }
      ],
      "onion_key_hash": "py6G-BruPSyZQaTAoakOtOlHH5R7CVA_Ttn3ALt6j90",
      "height": 397017,
      "hash": "azI_l34BanrX73rYT7E7rKbqzEK_NqoKWckPRQUrvMo",
      "fee": 0,
      "challenger_owner": "13NjZfyLXDWks8mhgrwN7Mw9tN2Fm1qJ7XG6LVTqvdUHgCRYz2f",
      "challenger_lon": -73.98415801053285,
      "challenger_location": "8c2a100d225ebff",
      "challenger_lat": 40.731030047462795,
      "challenger": "11iaWmYt7ixwXqbWkCaYf5b9tS24GNy7Fq3af1MSNkfGGvKVPX5"
    }
  ],
  "cursor": "eyJ0eXBlcyI6InBvY19yZWNlaXB0c192MSIsImJsb2NrIjozOTcwMDAsImFuY2hvcl9ibG9jayI6Mzk3MDAwfQ"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots/:address/rewards" %}
{% api-method-summary %}
Rewards for a Hotspot
{% endapi-method-summary %}

{% api-method-description %}
Returns rewards for a given hotspot per reward block the hotspot is in, for a given timeframe. Timestamps are given in ISO 8601 format. The block that contains the `max_time` timestamp is **excluded** from the result.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
B58 address of the hotspot to lookup
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for the next page of rewards to fetch
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
Rewards for a hotspot with time range: `max_time=2020-08-29&min_time=2020-08-27`
{% endapi-method-response-example-description %}

```javascript
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

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots/:address/rewards/sum" %}
{% api-method-summary %}
Reward Total for a Hotspot
{% endapi-method-summary %}

{% api-method-description %}
Returns the total rewards earned for a given hotspot over a given time range. Timestamps are given in ISO 8601 format. The block that includes the `max_time` timestamp is **excluded** from the result.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
B58 addres for hotspot to look up
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="min\_time" type="string" required=true %}
First timestamp to include rewards for
{% endapi-method-parameter %}

{% api-method-parameter name="max\_time" type="string" required=true %}
Last timestamp to include rewards for
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "data": {
        "max_time": "2020-08-29T00:00:00Z",
        "min_time": "2020-08-27T00:00:00Z",
        "sum": "164942208"
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/hotspots/:address/witnesses" %}
{% api-method-summary %}
Witnesses for a Hotspot
{% endapi-method-summary %}

{% api-method-description %}
Retrieves the last known list of witnesses for a given hotspot.In addition to the hotspot result information, the result will also include a `witness_for` and a `witness_info`field which are the given hotspot address and bucket histogram information on witnessed signal strengths.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=false %}
B58 address for a hotspot to look up
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "data": [
        {
            "address": "1117PRWasdEhTUEeGykmjx5bcQbsRQ7mCuYRHERtrgb4hqBio4u",
            "block": 290247,
            "block_added": 192280,
            "geocode": {
                "city_id": "YXRsYW50YWdlb3JnaWF1bml0ZWQgc3RhdGVz",
                "long_city": "Atlanta",
                "long_country": "United States",
                "long_state": "Georgia",
                "long_street": "West Peachtree Street Northwest",
                "short_city": "Atlanta",
                "short_country": "US",
                "short_state": "GA",
                "short_street": "W Peachtree St NW"
            },
            "lat": 33.779308359988256,
            "lng": -84.38786168354673,
            "location": "8c44c1a8e2737ff",
            "name": "small-neon-finch",
            "nonce": 1,
            "owner": "14C18AnFwMVXovgR4mskV5AyDH8n9vAx2PPNEjM5NVjFuK9GaTN",
            "score": 0.25,
            "score_update_height": 290229,
            "status": {
                "height": 468420,
                "online": "online"
            },
            "witness_for": "112hYxknRPeCP9PLtkAy3f86fWpXaRzRffjPj5HcrS7qePttY3Ek",
            "witness_info": {
                "first_time": 1581085089619105739,
                "histogram": {
                    "-100": 0,
                    "-108": 0,
                    "-116": 3,
                    "-124": 0,
                    "-132": 0,
                    "-60": 0,
                    "-68": 0,
                    "-76": 0,
                    "-84": 0,
                    "-92": 0,
                    "28": 0
                },
                "recent_time": 1581506570759026847
            }
        },
        {
            "address": "11TdnjY3VAL71LLd1KMMhY4SzMUAiYo1uP9bgBJSZJhDZ8rUfNh",
            "block": 290247,
            "block_added": 226358,
            "geocode": {
                "city_id": "YXRsYW50YWdlb3JnaWF1bml0ZWQgc3RhdGVz",
                "long_city": "Atlanta",
                "long_country": "United States",
                "long_state": "Georgia",
                "long_street": "14th Street Northeast",
                "short_city": "Atlanta",
                "short_country": "US",
                "short_state": "GA",
                "short_street": "14th St NE"
            },
            "lat": 33.78595728279224,
            "lng": -84.3810410259127,
            "location": "8c44c1a8a8e41ff",
            "name": "long-chartreuse-goat",
            "nonce": 4,
            "owner": "13YuCz3mZ55HZ6hJJvQHCZXGgE8ooe2CSvbtSHQR3m5vZ1EVCNZ",
            "score": 0.05584716796875,
            "score_update_height": 290195,
            "status": {
                "height": 468407,
                "online": "online"
            },
            "witness_for": "112hYxknRPeCP9PLtkAy3f86fWpXaRzRffjPj5HcrS7qePttY3Ek",
            "witness_info": {
                "first_time": 1583557733646152170,
                "histogram": {
                    "-100": 1,
                    "-108": 7,
                    "-116": 10,
                    "-124": 2,
                    "-132": 0,
                    "-60": 0,
                    "-68": 0,
                    "-76": 0,
                    "-84": 0,
                    "-92": 0,
                    "28": 2
                },
                "recent_time": 1586567745906235190
            }
        }
    ]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

