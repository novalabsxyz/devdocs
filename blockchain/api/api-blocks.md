# Blocks

{% api-method method="get" host="https://api.helium.io" path="/v1/blocks/height" %}
{% api-method-summary %}
Get Blockchain Height
{% endapi-method-summary %}

{% api-method-description %}
Gets the current block height of the API. Since the API tracks the Helium blockchain this value will update as blocks are added to the chain.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
    "data": {
        "height": 213787
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.heliun.io" path="/v1/blocks" %}
{% api-method-summary %}
Get Block List
{% endapi-method-summary %}

{% api-method-description %}
Retrieves block descriptions.   
 Blocks descriptions are paged. A `cursor` field will be in the response when more results are available.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
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
            "transaction_count": 115,
            "time": 1585753494,
            "prev_hash": "bGahPQRxcSDly5DGvySSW7R-49aV065XfikEJWeQYXM",
            "height": 273262,
            "hash": "b3-ImNYD9FLYV7ae4287mTqbDvktRWhg-bdvBVhl4jo"
        },
        {
            "transaction_count": 2,
            "time": 1585753436,
            "prev_hash": "osyNxGTmAgYJlgR5reUoDJ3eAAcuOXIx86t_IN3Upa4",
            "height": 273261,
            "hash": "bGahPQRxcSDly5DGvySSW7R-49aV065XfikEJWeQYXM"
        },
        {
            "transaction_count": 16,
            "time": 1585753378,
            "prev_hash": "Ldo6cu2mCI1zAhSLMnDh96763mf1M_ITjOQGuq0Citw",
            "height": 273260,
            "hash": "osyNxGTmAgYJlgR5reUoDJ3eAAcuOXIx86t_IN3Upa4"
        },
        {
            "transaction_count": 77,
            "time": 1585753320,
            "prev_hash": "-ga3Onp-EHLM0DgKuKBgEZ9HwLYkl4cPU25N6UN1KQE",
            "height": 273259,
            "hash": "Ldo6cu2mCI1zAhSLMnDh96763mf1M_ITjOQGuq0Citw"
        },
        {
            "transaction_count": 45,
            "time": 1585753262,
            "prev_hash": "lYmUFl_TC2b7kgDFT442Xzq0t0PSpW3PNwlDNdSdu-Q",
            "height": 273258,
            "hash": "-ga3Onp-EHLM0DgKuKBgEZ9HwLYkl4cPU25N6UN1KQE"
        },
        {
            "transaction_count": 73,
            "time": 1585753204,
            "prev_hash": "YkmK7W6Z8zJqYtFoXdUdBYT1bEr82SS3cfvdjwXNTrg",
            "height": 273257,
            "hash": "lYmUFl_TC2b7kgDFT442Xzq0t0PSpW3PNwlDNdSdu-Q"
        },
        {
            "transaction_count": 56,
            "time": 1585753146,
            "prev_hash": "uecvaFx8iVgd1yUkf3aggiC8v-aaQmU37juR2Y4Mb4k",
            "height": 273256,
            "hash": "YkmK7W6Z8zJqYtFoXdUdBYT1bEr82SS3cfvdjwXNTrg"
        },
        {
            "transaction_count": 63,
            "time": 1585753088,
            "prev_hash": "9SWFwiCL8C--Qf3VKR0BvsBTlRxJy-5gWgSxmVJI-GE",
            "height": 273255,
            "hash": "uecvaFx8iVgd1yUkf3aggiC8v-aaQmU37juR2Y4Mb4k"
        },
        {
            "transaction_count": 50,
            "time": 1585753030,
            "prev_hash": "sJLdcHAAulXwYdaE6fqGu94eK0OUbeiAv4ZWg_MXNlE",
            "height": 273254,
            "hash": "9SWFwiCL8C--Qf3VKR0BvsBTlRxJy-5gWgSxmVJI-GE"
        },
        {
            "transaction_count": 45,
            "time": 1585752972,
            "prev_hash": "JERcpLw4JR9BtlT29M8JwGEFwuRYQMUNFwxFRkLhlgY",
            "height": 273253,
            "hash": "sJLdcHAAulXwYdaE6fqGu94eK0OUbeiAv4ZWg_MXNlE"
        },
        {
            "transaction_count": 74,
            "time": 1585752914,
            "prev_hash": "GZQV-Y5W-QFGE1iGDFaJHvRKN5Leoh34SgmRUK5YFuo",
            "height": 273252,
            "hash": "JERcpLw4JR9BtlT29M8JwGEFwuRYQMUNFwxFRkLhlgY"
        },
        {
            "transaction_count": 45,
            "time": 1585752856,
            "prev_hash": "34-k4ZRXn0e50Z5og89m9NI6Ph9JFhBDAVxvHdzo6Sw",
            "height": 273251,
            "hash": "GZQV-Y5W-QFGE1iGDFaJHvRKN5Leoh34SgmRUK5YFuo"
        },
        {
            "transaction_count": 59,
            "time": 1585752798,
            "prev_hash": "zqfACgoAV4VnFbOvsSE5tn7e9dKc_yXo5alurzONwrg",
            "height": 273250,
            "hash": "34-k4ZRXn0e50Z5og89m9NI6Ph9JFhBDAVxvHdzo6Sw"
        },
        {
            "transaction_count": 47,
            "time": 1585752740,
            "prev_hash": "0y6puH2K8RkqiB8dBoftAZclYsSdxpcpIaO7HPisWGk",
            "height": 273249,
            "hash": "zqfACgoAV4VnFbOvsSE5tn7e9dKc_yXo5alurzONwrg"
        },
        {
            "transaction_count": 55,
            "time": 1585752682,
            "prev_hash": "Rqn-c7fCYCzjS6S-jbbzwDOrbEUhW_IvddOu1YPEyAE",
            "height": 273248,
            "hash": "0y6puH2K8RkqiB8dBoftAZclYsSdxpcpIaO7HPisWGk"
        },
        {
            "transaction_count": 14,
            "time": 1585752624,
            "prev_hash": "7RmxXVTROv_1b4OdygRVGP63Yt73w2OC8XQYmwgMsUU",
            "height": 273247,
            "hash": "Rqn-c7fCYCzjS6S-jbbzwDOrbEUhW_IvddOu1YPEyAE"
        },
        {
            "transaction_count": 76,
            "time": 1585752566,
            "prev_hash": "10A9wyO60_h2ycWg1zDdBwSy_NS8ajU_gINLpHTZSpc",
            "height": 273246,
            "hash": "7RmxXVTROv_1b4OdygRVGP63Yt73w2OC8XQYmwgMsUU"
        },
        {
            "transaction_count": 50,
            "time": 1585752508,
            "prev_hash": "cGGZ4vWL6mdhNtPmerJ5rbdUMbDjonmFSgzm9zCJJHo",
            "height": 273245,
            "hash": "10A9wyO60_h2ycWg1zDdBwSy_NS8ajU_gINLpHTZSpc"
        },
        {
            "transaction_count": 59,
            "time": 1585752450,
            "prev_hash": "EBf3OliDFvf1VcxX0MorJE6Fbj13RDT5XaTeVH8iwaU",
            "height": 273244,
            "hash": "cGGZ4vWL6mdhNtPmerJ5rbdUMbDjonmFSgzm9zCJJHo"
        },
        {
            "transaction_count": 16,
            "time": 1585752392,
            "prev_hash": "DRomPDvw2lRDiQAeU0efGzCdYuD1mD7bXLv9e8LHWgE",
            "height": 273243,
            "hash": "EBf3OliDFvf1VcxX0MorJE6Fbj13RDT5XaTeVH8iwaU"
        },
        {
            "transaction_count": 100,
            "time": 1585752334,
            "prev_hash": "xS9xtA4Zf99QcCsVoUo6lfbhd1tGCXMWPOlQ1XBVEYs",
            "height": 273242,
            "hash": "DRomPDvw2lRDiQAeU0efGzCdYuD1mD7bXLv9e8LHWgE"
        },
        {
            "transaction_count": 39,
            "time": 1585752276,
            "prev_hash": "Px1mcVs9VuXkXikstDbCkaXH1KIlVMVWFA_VxtYQz6I",
            "height": 273241,
            "hash": "xS9xtA4Zf99QcCsVoUo6lfbhd1tGCXMWPOlQ1XBVEYs"
        },
        {
            "transaction_count": 23,
            "time": 1585752218,
            "prev_hash": "ZXiJA6H-vJyoVno2Ir4Oi3KXdY6sXk-DjYtYyoVDoWM",
            "height": 273240,
            "hash": "Px1mcVs9VuXkXikstDbCkaXH1KIlVMVWFA_VxtYQz6I"
        },
        {
            "transaction_count": 59,
            "time": 1585752160,
            "prev_hash": "X0lsd2aE_2d2ATv_uJOMXMJHz5DNwRJRPRqZa2jQATk",
            "height": 273239,
            "hash": "ZXiJA6H-vJyoVno2Ir4Oi3KXdY6sXk-DjYtYyoVDoWM"
        },
        {
            "transaction_count": 26,
            "time": 1585752102,
            "prev_hash": "tTAptjzULY1oRVnHEXz3Yv2PzsKx_8ij4r-9Xr2vZ4U",
            "height": 273238,
            "hash": "X0lsd2aE_2d2ATv_uJOMXMJHz5DNwRJRPRqZa2jQATk"
        },
        {
            "transaction_count": 99,
            "time": 1585752044,
            "prev_hash": "HlMabXsbnN66TsOXEOve1Gis5pVyqWU-630i-_28Oi8",
            "height": 273237,
            "hash": "tTAptjzULY1oRVnHEXz3Yv2PzsKx_8ij4r-9Xr2vZ4U"
        },
        {
            "transaction_count": 33,
            "time": 1585751986,
            "prev_hash": "PZle1KYJZU3ZBBFv-fiIJiFa869sfLEKxQ2kUri1xv0",
            "height": 273236,
            "hash": "HlMabXsbnN66TsOXEOve1Gis5pVyqWU-630i-_28Oi8"
        },
        {
            "transaction_count": 34,
            "time": 1585751928,
            "prev_hash": "7UaEFoCHSQwhjST2ae-VWLEHt-XMaTfbPZHKZYbs-jk",
            "height": 273235,
            "hash": "PZle1KYJZU3ZBBFv-fiIJiFa869sfLEKxQ2kUri1xv0"
        },
        {
            "transaction_count": 99,
            "time": 1585751870,
            "prev_hash": "xPVBVGKNqwtQ_2JmFG9WZ8c-AHtJHtwyXnuu3FFsB3M",
            "height": 273234,
            "hash": "7UaEFoCHSQwhjST2ae-VWLEHt-XMaTfbPZHKZYbs-jk"
        },
        {
            "transaction_count": 38,
            "time": 1585751812,
            "prev_hash": "LG-dC6t4xJtthjkBlmY17Pe8N7JA4730PIONdFm34Dk",
            "height": 273233,
            "hash": "xPVBVGKNqwtQ_2JmFG9WZ8c-AHtJHtwyXnuu3FFsB3M"
        },
        {
            "transaction_count": 53,
            "time": 1585751754,
            "prev_hash": "uyctof395MdpgWlWlBkthGrXjLT82OWmh2b773KKlhU",
            "height": 273232,
            "hash": "LG-dC6t4xJtthjkBlmY17Pe8N7JA4730PIONdFm34Dk"
        },
        {
            "transaction_count": 55,
            "time": 1585751696,
            "prev_hash": "OSAHsgd31WjwCKBmU7wftngeK4OJCLiIsmXESZlYcGc",
            "height": 273231,
            "hash": "uyctof395MdpgWlWlBkthGrXjLT82OWmh2b773KKlhU"
        },
        {
            "transaction_count": 63,
            "time": 1585751634,
            "prev_hash": "sGhVp8ddZNR9CTbd-sVOv1V2qbhTn2DM5XY0-xGLRE8",
            "height": 273230,
            "hash": "OSAHsgd31WjwCKBmU7wftngeK4OJCLiIsmXESZlYcGc"
        },
        {
            "transaction_count": 110,
            "time": 1585751575,
            "prev_hash": "8P-DalTDPalFKi6gkoHaC-n2wnTtw2_S6xjr8SdoXqw",
            "height": 273229,
            "hash": "sGhVp8ddZNR9CTbd-sVOv1V2qbhTn2DM5XY0-xGLRE8"
        },
        {
            "transaction_count": 2,
            "time": 1585751498,
            "prev_hash": "LszR0BARiaFzmCcheaTgJgw-jcgJO8xbhG2frjgrStE",
            "height": 273228,
            "hash": "8P-DalTDPalFKi6gkoHaC-n2wnTtw2_S6xjr8SdoXqw"
        },
        {
            "transaction_count": 59,
            "time": 1585751439,
            "prev_hash": "2S0X48qOhtRjrYdqeOeR3fMz7N2LSfXNcx8YXM1TshQ",
            "height": 273227,
            "hash": "LszR0BARiaFzmCcheaTgJgw-jcgJO8xbhG2frjgrStE"
        },
        {
            "transaction_count": 33,
            "time": 1585751381,
            "prev_hash": "QHmmc9vXcmgvcBa7Zyc9140v6x04bVRaOZg8g9IfJXo",
            "height": 273226,
            "hash": "2S0X48qOhtRjrYdqeOeR3fMz7N2LSfXNcx8YXM1TshQ"
        },
        {
            "transaction_count": 64,
            "time": 1585751323,
            "prev_hash": "s3oJmKI-wylyuBCEF_RgHYQ6S7NPqogMb9P2LXRWjq8",
            "height": 273225,
            "hash": "QHmmc9vXcmgvcBa7Zyc9140v6x04bVRaOZg8g9IfJXo"
        },
        {
            "transaction_count": 47,
            "time": 1585751265,
            "prev_hash": "HRK8xM4mWWyuxceq32GvBNmSeGM1T4l61FrJEtVm0J0",
            "height": 273224,
            "hash": "s3oJmKI-wylyuBCEF_RgHYQ6S7NPqogMb9P2LXRWjq8"
        },
        {
            "transaction_count": 63,
            "time": 1585751207,
            "prev_hash": "P-BTaFyBAQrXJ8fR5ZMbEyczH3nIdRnteN_eKmdCJGk",
            "height": 273223,
            "hash": "HRK8xM4mWWyuxceq32GvBNmSeGM1T4l61FrJEtVm0J0"
        },
        {
            "transaction_count": 47,
            "time": 1585751149,
            "prev_hash": "k62jB2IrkrKY5C8OloRBnVzCWqymCpDSrg49cuRwkj0",
            "height": 273222,
            "hash": "P-BTaFyBAQrXJ8fR5ZMbEyczH3nIdRnteN_eKmdCJGk"
        },
        {
            "transaction_count": 110,
            "time": 1585751091,
            "prev_hash": "jI5XblbuWg85wnu6kY4jjIkEcnvsL9c4O7E7pMmlKHU",
            "height": 273221,
            "hash": "k62jB2IrkrKY5C8OloRBnVzCWqymCpDSrg49cuRwkj0"
        },
        {
            "transaction_count": 37,
            "time": 1585751033,
            "prev_hash": "CBpkoKx3mdAqv-hg4CR6eOoXoIz7ClfaHzAdRMqhbRo",
            "height": 273220,
            "hash": "jI5XblbuWg85wnu6kY4jjIkEcnvsL9c4O7E7pMmlKHU"
        },
        {
            "transaction_count": 52,
            "time": 1585750973,
            "prev_hash": "H1zlgrdyselw8fESiL21MB_iulfk7FaSaKS5R-7qjmc",
            "height": 273219,
            "hash": "CBpkoKx3mdAqv-hg4CR6eOoXoIz7ClfaHzAdRMqhbRo"
        },
        {
            "transaction_count": 92,
            "time": 1585750914,
            "prev_hash": "F1fqzlUkZxMhThzjk5YMZnADLee5hxWSGK8FFmhdyzo",
            "height": 273218,
            "hash": "H1zlgrdyselw8fESiL21MB_iulfk7FaSaKS5R-7qjmc"
        },
        {
            "transaction_count": 51,
            "time": 1585750856,
            "prev_hash": "1HVSMWieDoQJWZujr1FpEluUCNW54lS_2YQufLeof90",
            "height": 273217,
            "hash": "F1fqzlUkZxMhThzjk5YMZnADLee5hxWSGK8FFmhdyzo"
        },
        {
            "transaction_count": 50,
            "time": 1585750798,
            "prev_hash": "nBbhcCY_TQcnbX5ZfZ0yGQS4TIc2ebr8b9nWIafSog4",
            "height": 273216,
            "hash": "1HVSMWieDoQJWZujr1FpEluUCNW54lS_2YQufLeof90"
        },
        {
            "transaction_count": 73,
            "time": 1585750740,
            "prev_hash": "xWa55IzV_47Kh_LjIUDNpej2R4ko-3fMUhXPYE53EGA",
            "height": 273215,
            "hash": "nBbhcCY_TQcnbX5ZfZ0yGQS4TIc2ebr8b9nWIafSog4"
        },
        {
            "transaction_count": 63,
            "time": 1585750682,
            "prev_hash": "ThPeX_K4MmcwsbehAh9FSnPR4TFQDjMsB20wnGhgrDw",
            "height": 273214,
            "hash": "xWa55IzV_47Kh_LjIUDNpej2R4ko-3fMUhXPYE53EGA"
        },
        {
            "transaction_count": 46,
            "time": 1585750624,
            "prev_hash": "BaiFRzhBiwcjWY-i4-dekicV8Hmyul8ToQzf8MD1Z4Q",
            "height": 273213,
            "hash": "ThPeX_K4MmcwsbehAh9FSnPR4TFQDjMsB20wnGhgrDw"
        },
        {
            "transaction_count": 55,
            "time": 1585750566,
            "prev_hash": "DBNuR6_E-jzeeKBgAO0tNnCg10Gm12q9I4o8znPjv14",
            "height": 273212,
            "hash": "BaiFRzhBiwcjWY-i4-dekicV8Hmyul8ToQzf8MD1Z4Q"
        },
        {
            "transaction_count": 30,
            "time": 1585750508,
            "prev_hash": "Q73RdUMINbpGPI6JvIq8HU4G3L_QmVRUVSfanYFH5KI",
            "height": 273211,
            "hash": "DBNuR6_E-jzeeKBgAO0tNnCg10Gm12q9I4o8znPjv14"
        },
        {
            "transaction_count": 62,
            "time": 1585750450,
            "prev_hash": "rnCzulygGafr1c_2DQ6mkZ4yeHVWsQy6PXPobJOg6P8",
            "height": 273210,
            "hash": "Q73RdUMINbpGPI6JvIq8HU4G3L_QmVRUVSfanYFH5KI"
        },
        {
            "transaction_count": 69,
            "time": 1585750392,
            "prev_hash": "BnNXRZbNmGqun2BwRA8ZWfGGAZA_2mCqBfJnkDkVnIw",
            "height": 273209,
            "hash": "rnCzulygGafr1c_2DQ6mkZ4yeHVWsQy6PXPobJOg6P8"
        },
        {
            "transaction_count": 30,
            "time": 1585750334,
            "prev_hash": "KN9NuN1xWQIz0Vcvg1df1md07ar7Wo8qIDkVVE1JwyM",
            "height": 273208,
            "hash": "BnNXRZbNmGqun2BwRA8ZWfGGAZA_2mCqBfJnkDkVnIw"
        },
        {
            "transaction_count": 68,
            "time": 1585750276,
            "prev_hash": "anKgEbhe3vWIoWirzhUkUiZxpCa3dyTAyRjVdibJOBc",
            "height": 273207,
            "hash": "KN9NuN1xWQIz0Vcvg1df1md07ar7Wo8qIDkVVE1JwyM"
        },
        {
            "transaction_count": 56,
            "time": 1585750218,
            "prev_hash": "vwqt-9WR8u7YG6CFiNbEoJuT5fArbGEnTDtznLcL18o",
            "height": 273206,
            "hash": "anKgEbhe3vWIoWirzhUkUiZxpCa3dyTAyRjVdibJOBc"
        },
        {
            "transaction_count": 66,
            "time": 1585750160,
            "prev_hash": "M-d-KlJFEQNkBk_pijcpOy3i-H-Vc2JWzQKir4DjvRw",
            "height": 273205,
            "hash": "vwqt-9WR8u7YG6CFiNbEoJuT5fArbGEnTDtznLcL18o"
        },
        {
            "transaction_count": 44,
            "time": 1585750102,
            "prev_hash": "Sl-QvpwgrKyM78Wn-qm4YXbXYhBRWOMJQWWr7ve01b4",
            "height": 273204,
            "hash": "M-d-KlJFEQNkBk_pijcpOy3i-H-Vc2JWzQKir4DjvRw"
        },
        {
            "transaction_count": 96,
            "time": 1585750044,
            "prev_hash": "869J8Qm7zy-46m4_0WSj9biaI5d5ipceGlR0Yt0ltkM",
            "height": 273203,
            "hash": "Sl-QvpwgrKyM78Wn-qm4YXbXYhBRWOMJQWWr7ve01b4"
        },
        {
            "transaction_count": 54,
            "time": 1585749986,
            "prev_hash": "Xxjx-VIgKV5j8VKdEEmIuWMhB272Im4l2wBLhy9HDbI",
            "height": 273202,
            "hash": "869J8Qm7zy-46m4_0WSj9biaI5d5ipceGlR0Yt0ltkM"
        },
        {
            "transaction_count": 73,
            "time": 1585749928,
            "prev_hash": "TctUPAeU0pVG8kUE24cimoBKV8r85ojp7yy5vEfocZ8",
            "height": 273201,
            "hash": "Xxjx-VIgKV5j8VKdEEmIuWMhB272Im4l2wBLhy9HDbI"
        }
    ],
    "cursor": "eyJiZWZvcmUiOjI3MzIwMX0"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/blocks/:height" %}
{% api-method-summary %}
Block at Height
{% endapi-method-summary %}

{% api-method-description %}
Get block descriptor for block at height
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="height" type="number" required=true %}

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
    "transaction_count": 37,
    "time": 1582192928,
    "prev_hash": "Xj6vrBi_IcP0vqHHawf0FFWkG1qn18I9thQKOEhblXg",
    "height": 213787,
    "hash": "o5o8cBL1Zvp1KmA1d8vYJ38wXXWVxf1HW2e1uZxVJYg"
  }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/blocks/:height/transactions" %}
{% api-method-summary %}
Block at Height Transactions
{% endapi-method-summary %}

{% api-method-description %}
Get transactions for a block at a given height.   
The list of returned transactions is paged. A `cursor` field is present if more results are available.  
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="height" type="number" required=true %}
Block height to fetch transaction for
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for the  page to fetch
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

{% api-method method="get" host="https://api.helium.io" path="/v1/blocks/:hash" %}
{% api-method-summary %}
Block at Hash
{% endapi-method-summary %}

{% api-method-description %}
Get block descriptor for the given block hash. 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hash" type="string" required=true %}
Block hash for the block to fetch
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

{% api-method method="get" host="https://api.helium.io" path="/v1/blocks/:hash/transactions" %}
{% api-method-summary %}
Block at Hash Transactions
{% endapi-method-summary %}

{% api-method-description %}
Get transactions for a block at a given block hash.   
The list of returned transactions is paged. A `cursor` field is present if more results are available. 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hash" type="string" required=true %}
Hash of block to fetch transactions for
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="cursor" type="string" required=false %}
Cursor for next page to fetch
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

