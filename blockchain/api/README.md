# Blockchain API

![](../../.gitbook/assets/artboard-copy-19.jpg)

## Endpoints

The Helium [blockchain API](https://github.com/helium/blockchain-http) serves up the blockchain from a database that is filled by a [blockchain node](https://github.com/helium/blockchain-etl) that populates the database as blocks come in.

While anyone can run a node and a corresponding API, the Helium hosted version offers up the API through two endpoints.

| Endpoint | Purpose |
| :--- | :--- |


<table>
  <thead>
    <tr>
      <th style="text-align:left"><code>https://api.helium.io</code>
      </th>
      <th style="text-align:left">
        <p>Stable, scalable production service.</p>
        <p>Connected to mainnet.</p>
      </th>
    </tr>
  </thead>
  <tbody></tbody>
</table><table>
  <thead>
    <tr>
      <th style="text-align:left"><code>https://api.helium.wtf</code>
      </th>
      <th style="text-align:left">
        <p>Beta, scalable endpoint for new features and tests</p>
        <p>Currently connected to mainnet</p>
        <p>Submitted transactions may get dropped</p>
      </th>
    </tr>
  </thead>
  <tbody></tbody>
</table>{% api-method method="get" host="https://api.helium.io" path="/v1/blocks" %}
{% api-method-summary %}
Get Blocks
{% endapi-method-summary %}

{% api-method-description %}
Retrieve a list of the most recent blocks and associated hashes, timestamps, and transaction counts.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="before" type="number" %}
Return blocks prior to this block height.
{% endapi-method-parameter %}

{% api-method-parameter name="limit" type="number" %}
Limit the number of blocks returned.
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
    "data": [{
        "hash": "r4KEJQNWqCRh5TDt-QTFI8T52EUMb-R7FD1jdZCDQ9o",
        "height": 237936,
        "time": 1583635451,
        "transaction_count": 65
    }, {
        "hash": "XY-RftGj9kFEt2xTSH3wZWw4QRx-AsLnMY2MXnjkFmE",
        "height": 237935,
        "time": 1583635394,
        "transaction_count": 21
    }, {
        "hash": "2emlPfEIPst_Cb1fQ_COhopuT2CPyWKNzfcaH3v7vFk",
        "height": 237934,
        "time": 1583635337,
        "transaction_count": 86
    }, {
        "hash": "Rj6gc_1yh7HRMdWyzYUux-J79sWYdVo7Ni0rl-kmoeA",
        "height": 237933,
        "time": 1583635280,
        "transaction_count": 30
    }, {
        "hash": "EdPQdxVyNJ89S1Trl71SvQElzr6xD7FGlx0tHM-62DQ",
        "height": 237932,
        "time": 1583635223,
        "transaction_count": 86
    }, {
        "hash": "4uRJqHGHTmZKyNcA_YVJJxsYPTCLH-eoHFrvCwPDk1c",
        "height": 237931,
        "time": 1583635166,
        "transaction_count": 49
    }, {
        "hash": "f5Jbj-RCvvUSl0l05gxEJGxA5o7ZdOK1dX0G2TPjgnk",
        "height": 237930,
        "time": 1583635109,
        "transaction_count": 2
    }, {
        "hash": "hGf55-ygEpQ-dNN59JYMeaPfjvx_vWgUU6OXT-cpjFE",
        "height": 237929,
        "time": 1583635052,
        "transaction_count": 80
    }, {
        "hash": "7SlFyFVkgPHGTGbQg5e8XKtrIKsnIW3NaFVNocuaR_8",
        "height": 237928,
        "time": 1583634995,
        "transaction_count": 26
    }, {
        "hash": "--42Rd5oMUol5_ii5RliMjn5HQ5VQKJFyCbGSEUBxVM",
        "height": 237927,
        "time": 1583634938,
        "transaction_count": 60
    }, {
        "hash": "zOtiDrJhNEgA8OBlS71jQwjZ8zCSEspr49beCVG44BI",
        "height": 237926,
        "time": 1583634881,
        "transaction_count": 64
    }, {
        "hash": "dW9KfiGj34j7jogBBJEJzDUkM6_rqOxltEE9izvR1rM",
        "height": 237925,
        "time": 1583634824,
        "transaction_count": 51
    }, {
        "hash": "QOSOCbMGm0Eo7Sm83igT6Y885snxzqoDM6oSL_vUuLs",
        "height": 237924,
        "time": 1583634767,
        "transaction_count": 51
    }, {
        "hash": "U6YsHDFWrtlZZxzcYoLGxDx6ej5yoFiDuK68_W7IUtg",
        "height": 237923,
        "time": 1583634710,
        "transaction_count": 81
    }, {
        "hash": "CaoVNJCD5xbKmgVlJwA4cN7Bjjk5MKDBdnh6hwvl6hI",
        "height": 237922,
        "time": 1583634653,
        "transaction_count": 20
    }, {
        "hash": "bSB4MLsRq1C8du6PDx_GqEclI7RNOPaAaHw72WPVRoY",
        "height": 237921,
        "time": 1583634596,
        "transaction_count": 97
    }, {
        "hash": "UrBVjIY6r4XpxKCjNHfpMpHxgIbqlMKXDz7Jza_BXf8",
        "height": 237920,
        "time": 1583634539,
        "transaction_count": 14
    }, {
        "hash": "JHfeF1fQALS83C_ngfFVs3EK-DM3lvx8g6o1KrKCD08",
        "height": 237919,
        "time": 1583634482,
        "transaction_count": 79
    }, {
        "hash": "T3H7DVDw4yGdYhe2wvW0sD8qVf6XSCfm7teGEKj-Fiw",
        "height": 237918,
        "time": 1583634425,
        "transaction_count": 58
    }, {
        "hash": "olqsXdMOBEq5f8RRTpvBX-1Zu_wvnNEyjt_R_KLwI9k",
        "height": 237917,
        "time": 1583634368,
        "transaction_count": 34
    }, {
        "hash": "nKtPg5SjqpsEYtNUTRdkJB29oC0caanzNIYAe-Si79w",
        "height": 237916,
        "time": 1583634311,
        "transaction_count": 76
    }, {
        "hash": "GB1slXDTE75OByycqCuzuRnwdUp1UfFtyN2tshMBt0M",
        "height": 237915,
        "time": 1583634254,
        "transaction_count": 21
    }, {
        "hash": "DvDCpb_tTnzTURHphFXLIIz7CrzXgL1f6HPJizxkDTE",
        "height": 237914,
        "time": 1583634197,
        "transaction_count": 106
    }, {
        "hash": "a_w5QTI7zAQxxtl9YS7v_Wfo82SAOfVjJhnNbdFMlpw",
        "height": 237913,
        "time": 1583634140,
        "transaction_count": 47
    }, {
        "hash": "Ja0FE83AJ62d6qRM0tSuF9TCadjLFLTQmSnbiE50vY0",
        "height": 237912,
        "time": 1583634083,
        "transaction_count": 50
    }, {
        "hash": "RiINMm9NzpruxQxxn0rdf6jchDHLqb4safDdYnC6V4k",
        "height": 237911,
        "time": 1583634026,
        "transaction_count": 88
    }, {
        "hash": "7PnYaTmGOSMvkqfhpWpcfHD3Uq_pPYgy9NMZz7KI1Kk",
        "height": 237910,
        "time": 1583633969,
        "transaction_count": 50
    }, {
        "hash": "kpfFO7fL4B4B8gPzcUHB88qv3iSep_J3VRZjSlJehSI",
        "height": 237909,
        "time": 1583633912,
        "transaction_count": 4
    }, {
        "hash": "Ex4928qyNdB1dsHNdvWS9Ge9evLoDaUBk-mmir3GDFE",
        "height": 237908,
        "time": 1583633855,
        "transaction_count": 108
    }, {
        "hash": "NdcTGZ61JEUI0jbM7g-K6Ksqri6N3njE8PnCRNVzawU",
        "height": 237907,
        "time": 1583633798,
        "transaction_count": 9
    }, {
        "hash": "WssLjM06ek1g3yeJTFfyk-ixk1FuSOlebCO877kouj4",
        "height": 237906,
        "time": 1583633741,
        "transaction_count": 97
    }, {
        "hash": "tfNLgly7X77JF23ZqW4gj4RBVfM6Mp3V_qP1sSnEhCM",
        "height": 237905,
        "time": 1583633684,
        "transaction_count": 11
    }, {
        "hash": "GTLWYW9wfaCfeS5yjR2-SNOXfKiYDGoveB6GPPWZBNU",
        "height": 237904,
        "time": 1583633627,
        "transaction_count": 88
    }, {
        "hash": "fPwmrm6KDhPo-Q9KJw64la5Ll_2dEMvDVNW0bPyJRX4",
        "height": 237903,
        "time": 1583633570,
        "transaction_count": 32
    }, {
        "hash": "mwJxHl5-qfutWokdoKN9PoQERWgmiLVAbUXxYbpmzqQ",
        "height": 237902,
        "time": 1583633513,
        "transaction_count": 75
    }, {
        "hash": "xfvLgqWYYw7MzH1shKODy7Ei1Q7F2C2epVt98zvfCAo",
        "height": 237901,
        "time": 1583633456,
        "transaction_count": 55
    }, {
        "hash": "-G671fucF76QiJVFvP5Avuepmkkt1LFIaQjpuWiyvrA",
        "height": 237900,
        "time": 1583633399,
        "transaction_count": 17
    }, {
        "hash": "BmoynWNMj_689lSl61D97n_ptNRNdEKGcJ3bAY37020",
        "height": 237899,
        "time": 1583633342,
        "transaction_count": 105
    }, {
        "hash": "Halxz1qYaS7RLJfpE0BtH8OIK14q3yOfJtPCvBx2-PA",
        "height": 237898,
        "time": 1583633285,
        "transaction_count": 23
    }, {
        "hash": "AT8B3hwjqinIhdPeqPWKmLioiV5DWWLytpBBWQ0YtWM",
        "height": 237897,
        "time": 1583633228,
        "transaction_count": 94
    }, {
        "hash": "Zf3O2MGgIfHGORzjNE1hinhReY4DJP719N1aUQiegrA",
        "height": 237896,
        "time": 1583633171,
        "transaction_count": 45
    }, {
        "hash": "e-QUNqf-w6U01QQ2gcnxV5fYQTQ7uPjfnAiulauV1l4",
        "height": 237895,
        "time": 1583633114,
        "transaction_count": 78
    }, {
        "hash": "q3hAedhrUZ4PUSFJYeDvEw7RMOFn49EdZxQBmL7Dcgo",
        "height": 237894,
        "time": 1583633057,
        "transaction_count": 63
    }, {
        "hash": "oX6qOVdbli363M5TYiYizAaVJPrli020yHDvPgtlvKI",
        "height": 237893,
        "time": 1583633000,
        "transaction_count": 2
    }, {
        "hash": "Mj-8OC3OBqMFa4O2pptoBD1YF7pbTMOFi2syIHMVbsU",
        "height": 237892,
        "time": 1583632943,
        "transaction_count": 95
    }, {
        "hash": "gT0aGvE18efXjwD0pvj8eFQaCG-eAWsc0u9adxUac7E",
        "height": 237891,
        "time": 1583632886,
        "transaction_count": 20
    }, {
        "hash": "1fsMFZ3QUuQL7TfgbKitHA2_hGNrx2f0U1PUUgRNXBs",
        "height": 237890,
        "time": 1583632829,
        "transaction_count": 81
    }, {
        "hash": "hP4UnVZhiCXu8GwJx3g5rKAzmBPJ5Pr8FsGSMVMDceM",
        "height": 237889,
        "time": 1583632772,
        "transaction_count": 11
    }, {
        "hash": "2xwvCFPt7kjYX_pITkV8FOOKeaUWawgm233OJTjUPi0",
        "height": 237888,
        "time": 1583632715,
        "transaction_count": 92
    }, {
        "hash": "odjEhRWxnqEIC3msaSExxIK8VfEPK7e2KOk_8_mYcd4",
        "height": 237887,
        "time": 1583632658,
        "transaction_count": 9
    }, {
        "hash": "Ikvtvb8e1vAw8lkQ5HFYryvux8RTVzJYnqjREfJd2sU",
        "height": 237886,
        "time": 1583632601,
        "transaction_count": 108
    }, {
        "hash": "GcngOthiIFmDCYOEt344ospiPso-bq6K9bRWib2bn_0",
        "height": 237885,
        "time": 1583632544,
        "transaction_count": 26
    }, {
        "hash": "ApvW8mM6zVyKK2hHVI1kcKJcFnWzbjHLUcc2F7pYaX0",
        "height": 237884,
        "time": 1583632487,
        "transaction_count": 93
    }, {
        "hash": "gXqD-vb0kTEncui42jh8wQ_RLVcMXM3KNuySSa8Cr50",
        "height": 237883,
        "time": 1583632430,
        "transaction_count": 8
    }, {
        "hash": "iKDXbNRIGSbfpQZNxx05r72QbefXyz8pHa2lunk3FeE",
        "height": 237882,
        "time": 1583632373,
        "transaction_count": 78
    }, {
        "hash": "xXYpW9ra9gXjR8IQkL_jFh8HVVpRBrQzJIJXaUhLeKw",
        "height": 237881,
        "time": 1583632316,
        "transaction_count": 21
    }, {
        "hash": "DbLCpQy0QLI1uX8U5lnne7osqISv65ZOT3hIe34N9Dk",
        "height": 237880,
        "time": 1583632259,
        "transaction_count": 95
    }, {
        "hash": "bSI38wyD5915Xy-VG6MRN0oIWI4M0hrCRbgMkaJdE-A",
        "height": 237879,
        "time": 1583632202,
        "transaction_count": 47
    }, {
        "hash": "ATmYqpuKC8mNb1XiRmytcx0rpPLGoVAyUAIWhWQN0GA",
        "height": 237878,
        "time": 1583632145,
        "transaction_count": 27
    }, {
        "hash": "nX4VXKKOlR-o8vbmQF85EtRp0hah5Xj0LbMwTfJ7NUw",
        "height": 237877,
        "time": 1583632088,
        "transaction_count": 91
    }, {
        "hash": "DXs-1YgB2i9jT9EYJZ4C6ZwAUgrrJskOXHm47-yu3Bo",
        "height": 237876,
        "time": 1583632031,
        "transaction_count": 42
    }, {
        "hash": "rfWEnfMbh6AbpxTfBxWgrFhKxFrpfEswBeDmIW4-jWw",
        "height": 237875,
        "time": 1583631974,
        "transaction_count": 68
    }, {
        "hash": "UFpvubtY3JC4qDdFQNCr4qR7GhXmEGMyERKJYHpxKwE",
        "height": 237874,
        "time": 1583631917,
        "transaction_count": 22
    }, {
        "hash": "vJ-quTGOW1t4x_D-TpC6vMjb-gEuxI1MfCiRXBUpnNM",
        "height": 237873,
        "time": 1583631860,
        "transaction_count": 84
    }, {
        "hash": "4LJTMVU4-eETGQbDBKzl2Zac4LrbN_B_BaO2EhIarS8",
        "height": 237872,
        "time": 1583631803,
        "transaction_count": 15
    }, {
        "hash": "0bi8o8WjT-YCvjV3-bVI-Rjdf5vom3SGTTZJEvLXONM",
        "height": 237871,
        "time": 1583631746,
        "transaction_count": 78
    }, {
        "hash": "YqIaLOqi7F2nBm8ih5y1haWVHK1FhVt-Hy6V7mLyueE",
        "height": 237870,
        "time": 1583631689,
        "transaction_count": 27
    }, {
        "hash": "6NM__HUQbIO4Es032oHbynJdXxcqYrkKQrYs3Y5jgT0",
        "height": 237869,
        "time": 1583631632,
        "transaction_count": 81
    }, {
        "hash": "ipVO-lvWV9BczECULPCTgod-XNNC8ROT5gFxVAurqNo",
        "height": 237868,
        "time": 1583631575,
        "transaction_count": 40
    }, {
        "hash": "WUb5SoLohkhnakXRNCuZEHdyHoHeNSpPKPOWAsfThHw",
        "height": 237867,
        "time": 1583631518,
        "transaction_count": 77
    }, {
        "hash": "0HRpyYG4PqHc3W8WeJW03ijywuVdSk8Fn7FwZRqzOX4",
        "height": 237866,
        "time": 1583631461,
        "transaction_count": 30
    }, {
        "hash": "vZyDm0SO-TXpXbVuJs02OjfoDgjCY3wLVZBtH-_8r2U",
        "height": 237865,
        "time": 1583631404,
        "transaction_count": 94
    }, {
        "hash": "a_bNubtdJIxqOZEkd3gpXoFLRqZq8gZB2UbiWnlIEus",
        "height": 237864,
        "time": 1583631347,
        "transaction_count": 42
    }, {
        "hash": "LcB0cdzjHoNcs11qri94WoJCd0TOqRUGQmUXzBeLwjU",
        "height": 237863,
        "time": 1583631290,
        "transaction_count": 50
    }, {
        "hash": "KhLQTPR0RRIBRbt5wE17fa2FzEk6BLAaXHHA_3eeeGw",
        "height": 237862,
        "time": 1583631227,
        "transaction_count": 44
    }, {
        "hash": "g7ItruPkc3cfxGVF1igX6tMURI2xreCD1dhEervsVLU",
        "height": 237861,
        "time": 1583631170,
        "transaction_count": 97
    }, {
        "hash": "1PrA6RwwPSv1qp7gvYSDK2PgiTruCXlYcJtnBDlZGbQ",
        "height": 237860,
        "time": 1583631113,
        "transaction_count": 2
    }, {
        "hash": "GK_-ypsGqMxnYsp5ZWIw4UNC17AYcpoSvLq0xVtZnxs",
        "height": 237859,
        "time": 1583631056,
        "transaction_count": 16
    }, {
        "hash": "TkSmPRIZmIhWw2YveS_14EMMvvGK2HKdZbtS40wen7o",
        "height": 237858,
        "time": 1583630999,
        "transaction_count": 81
    }, {
        "hash": "18ZWGJvPDWEzcpyMepX8I91lhg9oEBfkfuC-Og9zQQg",
        "height": 237857,
        "time": 1583630942,
        "transaction_count": 27
    }, {
        "hash": "4uvjcjr0V2GlTqX0LmvS8ZSAGpPr0vHn9QSsrrPz4F4",
        "height": 237856,
        "time": 1583630885,
        "transaction_count": 70
    }, {
        "hash": "_DnsPcGCC1wJ3lfKcsY56bibp3bO26KJ22R766OvNnA",
        "height": 237855,
        "time": 1583630828,
        "transaction_count": 54
    }, {
        "hash": "ublj-cXHVPyvAVyz1fu_zKJrWfWJcV6bqewb4mT4Z9I",
        "height": 237854,
        "time": 1583630771,
        "transaction_count": 51
    }, {
        "hash": "rLTq8UYn8tST3sQzNxvY8CWnzpdK_XW_k2wYQSoBIAo",
        "height": 237853,
        "time": 1583630714,
        "transaction_count": 15
    }, {
        "hash": "ZM6PCIwPp9FxOoETfwNsXNV_DAWEBP8lnMOKoG-H9BA",
        "height": 237852,
        "time": 1583630657,
        "transaction_count": 139
    }, {
        "hash": "BZ7DAO9KUbA-B624fMn8Ceb25hwtp2d88nLV3YLqykc",
        "height": 237851,
        "time": 1583630600,
        "transaction_count": 23
    }, {
        "hash": "ihdlx0xmAKDuuRCSptGkV5zZXJ1TWPHgwlWQyJGAIfE",
        "height": 237850,
        "time": 1583630543,
        "transaction_count": 8
    }, {
        "hash": "CYfGm2KCxknHKUJ4PBJZDj1V3qCIraznOGevVdHWddM",
        "height": 237849,
        "time": 1583630486,
        "transaction_count": 123
    }, {
        "hash": "422TX6pRWtsbvlw4dlxKVqlBfNvOQ976aSOpCPqofXI",
        "height": 237848,
        "time": 1583630429,
        "transaction_count": 42
    }, {
        "hash": "ASDU94hjxa5vqD8cZiyA39VpYrbeudhJAOg8Kc5Iq8k",
        "height": 237847,
        "time": 1583630372,
        "transaction_count": 90
    }, {
        "hash": "L-AnQE-JPVaf1105Qf5D7lr41woejBmoPJqDgD13khg",
        "height": 237846,
        "time": 1583630315,
        "transaction_count": 57
    }, {
        "hash": "Qw9F2ok4CBshFeVPm3-0EYcwTDFYUuzu0jopSbHlU98",
        "height": 237845,
        "time": 1583630258,
        "transaction_count": 51
    }, {
        "hash": "4d1W1xeMjpcIk516GBQjPs1B7kEH3IBmfF1yGECONZo",
        "height": 237844,
        "time": 1583630201,
        "transaction_count": 6
    }, {
        "hash": "Y2RPh9AJfQsuCXJGiIhovqGcG-H-uVFOj9GnJrZPD2Q",
        "height": 237843,
        "time": 1583630144,
        "transaction_count": 113
    }, {
        "hash": "z-jJG71X8z5HKkE-0D22DKn_WPH7uyZZ2tu8k7ku9eU",
        "height": 237842,
        "time": 1583630087,
        "transaction_count": 12
    }, {
        "hash": "_-Zv16oA8uxiqTkjznQ2cA6Bds28SIuGvlHAf0ODx_A",
        "height": 237841,
        "time": 1583630030,
        "transaction_count": 111
    }, {
        "hash": "gMbwJ3BbzY1t_UAjczn1LiifV0bwK_5AKlw2uNVAMZk",
        "height": 237840,
        "time": 1583629973,
        "transaction_count": 47
    }, {
        "hash": "2-87coD7nUTzEj8NEZcd8xbYTkAV60g44-1sHvlTfIc",
        "height": 237839,
        "time": 1583629916,
        "transaction_count": 51
    }, {
        "hash": "GiGqQ0QvYUyEbAlxxJBO7WEUsWivf-ZyHqZJ9PwyZKo",
        "height": 237838,
        "time": 1583629859,
        "transaction_count": 75
    }, {
        "hash": "oHGijH427z2p-BD1rH_BGtkjjr76heWO4hNntttC4to",
        "height": 237837,
        "time": 1583629802,
        "transaction_count": 8
    }]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/blocks/height" %}
{% api-method-summary %}
Get blockchain Height
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
Get block at height
{% endapi-method-summary %}

{% api-method-description %}
Retrieve a specific block by a given height.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="height" type="number" required=true %}
The block height to rertrieve
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
        "hash": "rZr1w0PzmVUxiwKBO-NpMhsQ8DbLRZKiJqNgRJ4nC4E",
        "height": 2,
        "time": 1564436673,
        "transaction_count": 0,
        "transactions": []
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
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="hash" type="string" required=true %}
The block hash to retrieve.
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
        "hash": "rZr1w0PzmVUxiwKBO-NpMhsQ8DbLRZKiJqNgRJ4nC4E",
        "height": 2,
        "time": 1564436673,
        "transaction_count": 0,
        "transactions": []
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
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="before" type="string" required=false %}
Return accounts before the given address
{% endapi-method-parameter %}

{% api-method-parameter name="limit" type="number" required=false %}
Limit the number of accounts returned.
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
        "address": "12x2jWNiew24QLMTd99K1AiGqxFpPL7A82AsYy9xFvpwSQm4QHw",
        "balance": 164653422383,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12x2TZVsG4NwQ9TKPssNRE7S4bnrK55vRhnJTcCvRFSf26B8WvT",
        "balance": 1280986992818,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12xjVLaegpQCJUr4s8zLW5scgdA6a5W8vQv42mafdirqvZzaTm7",
        "balance": 70592130476,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12xmzQjDaDVx7Gq9A7JZcf243iomAfQ4sew4orNSKfUydzGPrZR",
        "balance": 288347576970,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 3,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12xUZ6oxgLq59dcmn2sb2mk3scwZWTtKeZVDvdgxgtbwefvA53z",
        "balance": 427649944572,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12y97TP2rraHqoKHTSNYoxsqpjzum6TJymCvwhG1vCyVPofjiDG",
        "balance": 316424819858,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12yATrzBxvYMqqnMXRVgXbUjbttxyoBPTkcWwYrUm5rMeNcVLp7",
        "balance": 45128221846,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12ympRCZHDKM6TFHuKTsd1E96fj9hhVGsSFjcYJvm7ndRSNM1VA",
        "balance": 360967653731,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12ysy5KEvCskKsirR3Tb58Asrpv4G9L4vzcBFXxkVYWe3EtMbDr",
        "balance": 113279126614,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12yuQMzrtJLKb4wvesQBkGUDu6mj6D84iyWUSDxVuPe4mWsSpbD",
        "balance": 1157173803820,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12yvRKXoGec2dpSdXLDUDVWvVuh7HPRo7DvPd4MpLNKnYUod6iQ",
        "balance": 244097996797,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 307228558,
        "sec_nonce": 0
    }, {
        "address": "12yWQEebhi9uxDXC9mtMoUBxgnRcvpL1D7S22BbSc9bWEcEFQfn",
        "balance": 383539246135,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12yyntxFfPhqXDKuEvmAWABNTRnXtYmcgS33WN4tk5YtyaBLDXo",
        "balance": 132042354514047,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 166192196300,
        "sec_nonce": 0
    }, {
        "address": "12z4nUiayZnbW46azcegBBB9yGkchFb1Zm7EPuh6eV1r2HT1NgC",
        "balance": 31236190781606,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 46,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12zd3rQYo8wMdCCdGb6MxSZf98C5GxgaRetNNR519dGFQHwRFzt",
        "balance": 104121302298,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12zg3JEib9pJfr9rpLvEb2FtWrfMz9E37rF1z2gvRHQy1Degzmy",
        "balance": 116849018460,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12zsponFb4S5veu51dTwZ5Kp55m43AjXd6SjsQmhJLz3Y4H96eD",
        "balance": 1032575588290,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 1,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "12zWg5P6TcQ1QKonEcLvXWuutqXDXL9bFvAyWCuj74NCDSReNEf",
        "balance": 80751499774,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "131bXvjrCHguJEjVtSyV2hpiJDoxnPiWmjEKVot9PaKPf6CvzNT",
        "balance": 2763608386715,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "131e665Nsbze84R44YPD2omjrgnFXHEygpaHUVsjj36RZkykQvM",
        "balance": 111955832452,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "131gWgn5ERXfypMdnUjJZ7JiX5hs9SFTmid6yk4y1g8fKLZrdt7",
        "balance": 307840264693,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "131iYftAj8YmBpCFuNpj5E59pGScXqJzCcHDMgKRjhKsPFoBoBQ",
        "balance": 56322457036,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "131QxGvroUv8ZE9DemTcAawGgsJhLkCub2DT8d4VBrgk5c3p3Mb",
        "balance": 151258608303,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "131uJzWiF6PFE2GiGTzwap3Ckos1W2SqtQHrkKLKGNx6PTgyXqr",
        "balance": 1711979893059,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "131uuuyiYrPczy1aCKDBhvxYTG7ZMNfnZnKgemesd3CZEe3y6EU",
        "balance": 250379958873,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "131yGcW6jZf7NyTMk3CQnV5hVhwRAUgnXcnqrzPeaCDcke9oAq3",
        "balance": 161688887184,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "132AEMNGDHEJsogEmWCAm7uAC5GvMptkmhbMwMw3DQEn2A6wk6K",
        "balance": 910725377590,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "132Am9nQC5AuB2KWoUC5FSmnHbeGPR9XNo3AiusQmByBi583Jvn",
        "balance": 240320200874,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "132aoAL2czLdPEtTQ2Eo1JpF5Gm9qeFK6a1oxrc16K2knMFhn7q",
        "balance": 106310488240,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "132CWNPXPtY5eRnAE6G7NW2GrnkStgUmYrwvNrX7RmrX3MDVA5P",
        "balance": 100898176387,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "132eU1snuq5BzsjrFPbm94jhkHwiVuG6c2gc9z4NpB473T5zysh",
        "balance": 132636563336,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "132RCVJmsdXhh7RDZbhACu8mKgtWxqrKshmNW2m9WD1dCRYHUZq",
        "balance": 1330312125445,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "132rj3jsJSk3SPsogZAERcn4KFJVPfLnYYhAiGpDwN8h5URJ2kn",
        "balance": 35169080955,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "132s1pnmtrrkRsU7KstKrA9fkhydxkxr8DoGwVXktreLEuH1TdP",
        "balance": 34203653746,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "132ZTZXjV9kzb6kEcAhf3DYj2M98iMdUefZCak6EXr2HN5S2neF",
        "balance": 683996023730,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1331j6Fw1mjtyKGTBF7yV1PdgVEGjmATLGSGu6wqdSohBgjLTuw",
        "balance": 1283921948408,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1333GzJoHiMUUWb2b1aRU9H41vJeyyNfhAZXfRM2RXDwXpNH9X4",
        "balance": 292887088854,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "133c7BsZbkUeYYV6wZYBYX48LK1Y66dPhoHaKbm32F6T92evyjV",
        "balance": 671305884502,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "133PjQY4FFU8iWC7CwAK4kvy7vv4jNG9DTKrG28KuZfsZqPFpLo",
        "balance": 705244338146,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "133TCFJKAxf6cVUcb6863HYhjvNAizc9KytuFLCYpnAVmb2QoYv",
        "balance": 240462150238,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "133tLv9QcBe1aN8tthHhRbZfEniziJ5bKBDyPN6PJYRY5GyXuum",
        "balance": 103440784806,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "133tqTTcsqtJweTETy1aZpAyrPdnB4FE7HMV1XPz8ZQQ3oY4V1t",
        "balance": 260689952582,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 19,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "13433ARG986FSPmzkqFAqkEPNb4bX5sVkwzwuDpzFmGdWG8s6Sf",
        "balance": 1616223391960,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1343aqPpoRfboijVbCW5nF1RnSPaRkThu83LUrCbP6CW2pyd6mR",
        "balance": 82821509923,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "134ArR8gjR13rJr1i6BRvQ6Mnx5vLqVo4gy1k43aS1Y87hpWzrj",
        "balance": 164327809867,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "134D1m8xK2SRdHRbQuUx2dJQRTYVGKLbr72y32tPitLZ8ugPZcE",
        "balance": 307154404817,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "134HxTC5tMwjbivjYifhfqYmXuzXfmxbU17xic5DQCS15uiN9oF",
        "balance": 382839627724,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "134ihnf7zWshtDjkQHMYhw77qFWHwnTu355xa97wFez5UoMwLA5",
        "balance": 3905123377,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "134L3ByKe3JEHh5HHgLWUMRo6QszPDzsEJW5xRjfe3Zvmrak5C5",
        "balance": 108663255642,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "134NTaVU8KH1VsNcEWwkMDfCAv252G64Ci76iAQBacfb972MLAd",
        "balance": 103629513439,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "134T5xaDeXnZU7N5q6jaehngHP34WM4uvWDDK1ZjTA9641S7iNg",
        "balance": 443752493231,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "134yzi1FToqp8HVjgjgQnwyx3wx9XN9SNkCkhguwB1gdb7C2AjA",
        "balance": 318901065975,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1354oLvMNBsusQn9jaCFksuLiYUeTYmgTzq4FguAVH7jVu3Cpzy",
        "balance": 123556024716,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1355RCA4fpK5pYCB8LsxDZnB4rTs2BenVeBPeMrbBeDZcMGztS3",
        "balance": 42608195493,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1358veb3jSskqLDFYCmntaEAQpt9L1fFHgZBiYxuYzRuEkwDZEf",
        "balance": 196983086283,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "135bB6B7gGrsdPNcFwvcn12KPjTktSNZvmVbvSBKubCtEgxkpPJ",
        "balance": 73365618642755,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 92340017260,
        "sec_nonce": 0
    }, {
        "address": "135J3Qa3XuQuJPqzEZL3FeQtnq21kAhN9EJZwP1ZtmzFK2SvdCA",
        "balance": 4254001471150,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "135NGDaPFPsJzhMtCd9CjEEB4KjMjLka4rPCkznmM2ggZwboSWN",
        "balance": 156805720170,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "135SUwbieAFXYXEbZbNZdHW8U9kAkyRCAguojRp3Sv2reWjsyhd",
        "balance": 325896503882,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1361vkEKbSmzzzLYMzFCzH8cjKMrN2PLivGNtfrjtMzgVgw8BPa",
        "balance": 132811175070,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1367WrXMhixnWL6fehHLRBwaApumkF8TPucTX6JnYsVrRvJUBz7",
        "balance": 162446676744,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "136cT9qcq4qT3ATPQ2Qc6yKnweA5pJYvNg2duf5FZkPCNFhaTAM",
        "balance": 1891507231742,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "136dXWfN7tqBRqK6WRxpufQChMKA2cijmhnmeS9vAtmPskQCMct",
        "balance": 128620086044,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "136hweg4birNYZt1f7Kv9X23D5qDEk6jB6iz1gfYdF1uDY97B4F",
        "balance": 16182174664,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "136LsvhFXjkXUP1SP9ygA6VMkMtrzFgh8StMrDHV1F5oSGFhx5M",
        "balance": 10837160170869,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "136tUUrMZwbSkBU9SkXGCzKnRg2WEhCCD5EPunoKYomzqq9GBc2",
        "balance": 48676896012,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1373AqVQ2ZoMnzC5eHmzuRfMkmeFumdarza2GcLxbA9SrkoN8LK",
        "balance": 2897252139824,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1378sFkMGsvYC5cP3SF2K6guMtGucd1f7CaUGbH3r8Wimtaxzig",
        "balance": 13103547065403,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "137ah69UE8eE48T3pFGbNQ2ceBB9ALT2si7YtmV7HcJ6s7GHP4o",
        "balance": 1819048318828,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "137bHtLnVukLBtYqM8eBfHTU88kgFsCVzSBhskGJ3QZqvNnwmY4",
        "balance": 134351813003,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "137Eu99UptBn9ky1iuP44Y8mbBX48mGFYfU6A79itvoJ1NHAKgw",
        "balance": 133339533695,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "137JiH7hGdkcaYbCiyrCxT4xsKaY6cuE1T1JYTWYmVDWZto2Pu6",
        "balance": 175366805878,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "137m6ES9JCQNXpbJQixSqEb3Vnvy4UtyiSqnj2aGvFAhECid8yQ",
        "balance": 69531607059,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "137XRxes3v9jSDGfC7GFpwNvV88k6f4CJkgGnrNPEZZNxjeXyDf",
        "balance": 171824715575,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1383ziQFpmSiW4Q6Nw73eaR6f5oTP4PsjzaECbf3mGVd2TrqKqq",
        "balance": 11740292336996,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 2,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1383zPn7xZRSsQb6SXSXXhPCSZaNazuz7uSu9nch9kmGErFrdxF",
        "balance": 563572915922,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1388c7gtakSYsekMiS51hfxsPj4obbtSparGb9AW99UAuatGYSK",
        "balance": 65899125755,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1388sGaXWoytvTe83SEFC2wbjbT6XcNvmAQhshh9SwKspqQqYPS",
        "balance": 306190030097,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "138aFP4ms5Q2c8V9qEyasbvQgaLVXuCi7yAXG87LfNYZVMdskhB",
        "balance": 94587941960,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "138gL1sy4MzPzhAhwjaqNY3EELhdw8x15XVmtKCB5ioMwmN4Y2n",
        "balance": 553129484898,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "138mkCALmvtBc2PKej4VZTvAdEY4sAcDGYJBGfDSxupT5oCZFgM",
        "balance": 65188878000,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "138SpQhc4x9FFf2Uw2JqzBao2cvmMX9agcFhfdVV7AYwrtpZcR1",
        "balance": 400776808144,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "138WjBicVc8EuhqFWhsNFTKyadafgUUPvXrvzNMWa6vhcMA1Jd5",
        "balance": 213644812298,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "138WoGHPvtaG65dgUzhLQD4u9sVJXRJjVR21uAvQypPhQx9Wwrm",
        "balance": 409052360825,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1395TYEX77N4B46VkyzHeces3kTAmpfzCUPu18ZHDxndfE1PGWX",
        "balance": 40733142102,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "1398hLeHESZHE5jVtaLAV5fdg2vrUeZEs2B92t7TzeQTtugr8dL",
        "balance": 285855399471498,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 351543978600,
        "sec_nonce": 0
    }, {
        "address": "139cTTkXN7bng5bM8vbyoetAcZYtN9aSZ7AaVkFZdSRxvag2E25",
        "balance": 297401709265,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "139fB6vVKDLvYBXBASuZYAUJem9LQgmKi5xbdsWem1MANjgKEFS",
        "balance": 506119395762,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "139fc6sZ4GWyKRtayqjchJmcpD1NJ8cq8x6KVzeAs76KRLybZvv",
        "balance": 126834113291,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "139fiM2t9SGU8yB1QG5GxRy9qztpcnjr1F5u7Paop9Lsh7G31sn",
        "balance": 33596238853,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "139Gm5sqQaAkJb5nXTRzVmyqismRfR4ju2mqVsZZAW6HSQABnRD",
        "balance": 555630417337,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "139tg9qGZuYvo8GYNAytKFzR9hDwRibpd3qDGWwns47LejimxUV",
        "balance": 329793590561,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "139UyhECSMDAsndaimRDf4eBWLBYwpy9iFTy7Q8aSKH9h7A8D9S",
        "balance": 127689612185,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "139YmfhGXq8umpyNixNCvcx7bDimCFyijCvLJHa9kxjQMkayGB5",
        "balance": 3362050846138,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 2,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "13A1Z5x8vpG3sqpudFKpknXxj8KDLakRCPZY2ZZFoSm9K5TVZpc",
        "balance": 732025381226,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
    }, {
        "address": "13A6VB9ooTuFdx8CWvpuQ3eN5zM5V2KY2DvmJ5KWxziEYb7GgM6",
        "balance": 137990631889,
        "dc_balance": 0,
        "dc_nonce": 0,
        "nonce": 0,
        "sec_balance": 0,
        "sec_nonce": 0
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
    }]
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
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="address" type="string" required=true %}
A base58 formatted address.
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="limit" type="number" required=false %}
Number of Hotspots to return.
{% endapi-method-parameter %}

{% api-method-parameter name="before" type="string" required=false %}
Return hotspots prior to the given address.
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
        "address": "11Jk5i3Qy1UNWhDGRrbiSrrsfVwmuB9Xr6zfNRpqaa8YR1Bc4xD",
        "geocode": {
            "long_city": "Chicago",
            "long_country": "United States",
            "long_state": "Illinois",
            "long_street": "North Lincoln Avenue",
            "short_city": "Chicago",
            "short_country": "US",
            "short_state": "IL",
            "short_street": "N Lincoln Ave"
        },
        "lat": 4.19436435565467888864e+01,
        "lng": -8.76714629907219205052e+01,
        "location": "8c2664c167923ff",
        "name": "blunt-canvas-barracuda",
        "owner": "12wqnqnkouzCN54Ur9oqa9iBo6DBfxazH1CphCVFSpKLhkfidaW",
        "score": 2.50000000000000000000e-01,
        "score_update_height": 237908
    }, {
        "address": "11cbkvzMy9MXuE6FCYRkqTky7Nku8g1nkypCV8JJHjehcnpQURN",
        "geocode": {
            "long_city": "Chicago",
            "long_country": "United States",
            "long_state": "Illinois",
            "long_street": "North Keeler Avenue",
            "short_city": "Chicago",
            "short_country": "US",
            "short_state": "IL",
            "short_street": "N Keeler Ave"
        },
        "lat": 4.19530135944254993774e+01,
        "lng": -8.77320233661960742211e+01,
        "location": "8c2664ca6a813ff",
        "name": "tiny-khaki-canary",
        "owner": "12wqnqnkouzCN54Ur9oqa9iBo6DBfxazH1CphCVFSpKLhkfidaW",
        "score": 2.50000000000000000000e-01,
        "score_update_height": 237897
    }, {
        "address": "11bEdRrKLuGZqh1itBe14K25RwW6H6qkbVr6zErN5ybhUSYayq8",
        "geocode": {
            "long_city": "Chicago",
            "long_country": "United States",
            "long_state": "Illinois",
            "long_street": "West Division Street",
            "short_city": "Chicago",
            "short_country": "US",
            "short_state": "IL",
            "short_street": "W Division St"
        },
        "lat": 4.19032593986416657117e+01,
        "lng": -8.76731576271772610198e+01,
        "location": "8c2664cac04bbff",
        "name": "helpful-heather-millipede",
        "owner": "12wqnqnkouzCN54Ur9oqa9iBo6DBfxazH1CphCVFSpKLhkfidaW",
        "score": 2.50000000000000000000e-01,
        "score_update_height": 237890
    }, {
        "address": "112nv94DKBiqWrAN5GqhwjFD8P38LmypZXsBFwT21WwmEkUmbkfM",
        "geocode": {
            "long_city": "Chicago",
            "long_country": "United States",
            "long_state": "Illinois",
            "long_street": "North Milwaukee Avenue",
            "short_city": "Chicago",
            "short_country": "US",
            "short_state": "IL",
            "short_street": "N Milwaukee Ave"
        },
        "lat": 4.19048087042112058498e+01,
        "lng": -8.76679799290878349893e+01,
        "location": "8c2664cacaabbff",
        "name": "blurry-linen-llama",
        "owner": "12wqnqnkouzCN54Ur9oqa9iBo6DBfxazH1CphCVFSpKLhkfidaW",
        "score": 2.25555419921875000000e-01,
        "score_update_height": 237882
    }, {
        "address": "112vtLtdenCg4ZewuzxoKUt9BG223FECUHmkThsEUum6Cq1t7hj7",
        "geocode": {
            "long_city": "Chicago",
            "long_country": "United States",
            "long_state": "Illinois",
            "long_street": "West Carroll Avenue",
            "short_city": "Chicago",
            "short_country": "US",
            "short_state": "IL",
            "short_street": "W Carroll Ave"
        },
        "lat": 4.18882865093287222180e+01,
        "lng": -8.76559761323551924761e+01,
        "location": "8c2664cad0ee1ff",
        "name": "uneven-yellow-nightingale",
        "owner": "12wqnqnkouzCN54Ur9oqa9iBo6DBfxazH1CphCVFSpKLhkfidaW",
        "score": 2.50000000000000000000e-01,
        "score_update_height": 235260
    }, {
        "address": "11crUY5RD46q1c3FDqBUgzy9Dtj3b9S3kz31b9AeC6RcYXFRC5V",
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
        "lat": 4.18892940026846432033e+01,
        "lng": -8.76559543496044284439e+01,
        "location": "8c2664cad0e43ff",
        "name": "cheery-lilac-dragon",
        "owner": "12wqnqnkouzCN54Ur9oqa9iBo6DBfxazH1CphCVFSpKLhkfidaW",
        "score": 2.50000000000000000000e-01,
        "score_update_height": 235260
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
{% api-method-parameter name="before" type="string" required=false %}
Return Hotspots prior to the given address.
{% endapi-method-parameter %}

{% api-method-parameter name="limit" type="number" required=false %}
Number of Hotspots to return.
{% endapi-method-parameter %}

{% api-method-parameter name="owner" type="string" required=false %}
Only return Hotspots owned by this base58 encoded address.
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Successfully returned all Hotspots.
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
      "address": "1128zVhAVJKHLQdADP6b49QfPvmgBKsKf94M8ycntAsgJidyi4EP",
      "geocode": {
        "long_city": "Hull",
        "long_country": "United States",
        "long_state": "Massachusetts",
        "long_street": "Touraine Avenue",
        "short_city": "Hull",
        "short_country": "US",
        "short_state": "MA",
        "short_street": "Touraine Ave"
      },
      "lat": 42.284852214384,
      "lng": -70.87973561981863,
      "location": "8c2a3028c21d7ff",
      "name": "hollow-jade-hare",
      "owner": "13WwwtoFSaw8bDcx6xWZwbsFPG4aDCaADWPoG8yY2PDg5vgN4uG",
      "score": 0.25,
      "score_update_height": 228972
    },
    {
      "address": "1129M4ZENRrp1r6p8nRR3yzdCVBmuEb9A1bpmuX3xzDmx93yoKwN",
      "geocode": {
        "long_city": "New York",
        "long_country": "United States",
        "long_state": "New York",
        "long_street": "East 62nd Street",
        "short_city": "New York",
        "short_country": "US",
        "short_state": "NY",
        "short_street": "E 62nd St"
      },
      "lat": 40.76169280330261,
      "lng": -73.96146149291673,
      "location": "8c2a100d6b15dff",
      "name": "acrobatic-orchid-puma",
      "owner": "13aVqJDHnMtkVop4ggaQgo8BAzr2jaUicTjz6yvZNNV6HwXTowJ",
      "score": 0.0227813720703125,
      "score_update_height": 228972
    },
    {
      "address": "112AA84yHoo25BkagFAEqtupm2rYop5VgtZWJWSfSfC1DLChjCaR",
      "geocode": {
        "long_city": "Santa Clara",
        "long_country": "United States",
        "long_state": "California",
        "long_street": "Kellogg Way",
        "short_city": "Santa Clara",
        "short_country": "US",
        "short_state": "CA",
        "short_street": "Kellogg Way"
      },
      "lat": 37.326434125058924,
      "lng": -121.98412193034378,
      "location": "8c28347043765ff",
      "name": "salty-bubblegum-chipmunk",
      "owner": "14NHk7ajkBnsBsSfZSmmHRD5SHb1UvWyLdwz5z9MCEDyjezFWXD",
      "score": 0.9694976806640625,
      "score_update_height": 228972
    },
    {
      "address": "112cmB9nFVScUmwsc7brW2mS7mfdCrVefy4pX6AuokssjXroW3LA",
      "geocode": {
        "long_city": "Dania Beach",
        "long_country": "United States",
        "long_state": "Florida",
        "long_street": "Southeast 1st Avenue",
        "short_city": "Dania Beach",
        "short_country": "US",
        "short_state": "FL",
        "short_street": "SE 1st Ave"
      },
      "lat": 26.05067170915643,
      "lng": -80.13538254099859,
      "location": "8c44a10ed0d19ff",
      "name": "upbeat-rusty-shrimp",
      "owner": "13dT56DwL4hDxPZS498nfYZmK4nygPPcVvMz2gSEVQnQNAAU7T4",
      "score": 0.25,
      "score_update_height": 228972
    },
    {
      "address": "112dFZxdQZeWXyk6BUa5ZDghZpWecHdPfYHvLiNcNiuzqhNrxWQa",
      "geocode": {
        "long_city": "McKeesport",
        "long_country": "United States",
        "long_state": "Pennsylvania",
        "long_street": "Trimble Avenue",
        "short_city": "McKeesport",
        "short_country": "US",
        "short_state": "PA",
        "short_street": "Trimble Ave"
      },
      "lat": 40.3347216593527,
      "lng": -79.86356853904596,
      "location": "8c2a84772603dff",
      "name": "tart-ceramic-cuckoo",
      "owner": "14FUSqWYcWfQd7KQjrDSPXehsxvtJqxFf2q2QdxakbH4597KCz9",
      "score": 0.02410888671875,
      "score_update_height": 228972
    },
    {
      "address": "112dN5qSVxw6KjZRuG3W8vhHxvjY7DxjibfKxNtYh7qF47hk7sn5",
      "geocode": {
        "long_city": "Seattle",
        "long_country": "United States",
        "long_state": "Washington",
        "long_street": "Pine Street",
        "short_city": "Seattle",
        "short_country": "US",
        "short_state": "WA",
        "short_street": "Pine St"
      },
      "lat": 47.61330135921255,
      "lng": -122.33171493173714,
      "location": "8c28d542c026dff",
      "name": "wonderful-honey-wren",
      "owner": "14PXLYYBC68NQt2RBXErap7Xos6jAmrKMNtnWpkS1C3SuJw7wFB",
      "score": 0.2311553955078125,
      "score_update_height": 228972
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
  ]
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
    "address": "11QgEnNnBK1jiWLEe3N6RBEPQaztt4vaW3P9J31Jt82FkSSVzME",
    "geocode": {
      "long_city": "Brooklyn",
      "long_country": "United States",
      "long_state": "New York",
      "long_street": "Humboldt Street",
      "short_city": "Brooklyn",
      "short_country": "US",
      "short_state": "NY",
      "short_street": "Humboldt St"
    },
    "lat": 40.7150356102252,
    "lng": -73.94307342213261,
    "location": "8c2a100d12893ff",
    "name": "wide-rose-otter",
    "owner": "14sD2zx93PAVsdfpRcBHPKLy1zct3249tsNbiSwDedS2kz16wgg",
    "score": 0.9825286865234375,
    "score_update_height": 228976
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
        "challenger": "112t9bHVnGEkmvegyVMqRidJZCvc7TzcJBeWEXMSvmjBfjvV1ULz",
        "fee": 0,
        "hash": "fxgywWl7Jrk7KIzckBV7a7Xh65nD-bEtudmpNMDHn6M",
        "height": 240095,
        "lat": 4.36088243165191045136e+01,
        "lng": -7.08250638245599475340e+01,
        "location": "14kCAfBHLM7bczXo7H26DWggkSERG37A9hx9nBa7sC6NuhHmV7B",
        "onion": "TSN8mSI5TTgj_DT7HDmpMtjPTbSL6-ZBt7v9rgfpU4A",
        "owner": "14kCAfBHLM7bczXo7H26DWggkSERG37A9hx9nBa7sC6NuhHmV7B",
        "signature": "MEYCIQDKYnWFpoOiWwATGITsg6-nse7iP9pQTlbMVbcU6vI0PAIhAOdw8sSWkqDq9iz8V1sgi4DM33XG3Ckfi9UGkWk8Tycz",
        "type": "poc_request_v1"
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

