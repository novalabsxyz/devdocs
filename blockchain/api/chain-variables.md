---
description: Get the chain configuration variables
---

# Chain Variables

{% api-method method="get" host="https://api.helium.io" path="/v1/vars" %}
{% api-method-summary %}
Get chain variables
{% endapi-method-summary %}

{% api-method-description %}
Gets the current set of chain variables
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```javascript
{
    "data": {
        "allow_zero_amount": false,
        "alpha_decay": 0.0035,
        "batch_size": 400,
        "beta_decay": 0.002,
        "block_time": 60000,
        "block_version": "v1",
        "chain_vars_version": 2,
        "consensus_percent": 0.1,
        "dc_payload_size": 24,
        "dc_percent": 0,
        "dkg_curve": "SS512",
        "election_bba_penalty": 0.001,
        "election_cluster_res": 4,
        "election_interval": 30,
        "election_removal_pct": 40,
        "election_replacement_factor": 4,
        "election_replacement_slope": 20,
        "election_restart_interval": 5,
        "election_seen_penalty": 0.0033333,
        "election_selection_pct": 1,
        "election_version": 3,
        "h3_exclusion_ring_dist": 6,
        "h3_max_grid_distance": 120,
        "h3_neighbor_res": 12,
        "max_open_sc": 2,
        "max_payments": 50,
        "max_staleness": 100000,
        "max_subnet_num": 5,
        "max_subnet_size": 65536,
        "max_xor_filter_num": 5,
        "max_xor_filter_size": 102400,
        "min_assert_h3_res": 12,
        "min_expire_within": 15,
        "min_score": 0.15,
        "min_subnet_size": 8,
        "monthly_reward": 500000000000000,
        "num_consensus_members": 16,
        "poc_centrality_wt": 0.5,
        "poc_challenge_interval": 60,
        "poc_challenge_sync_interval": 90,
        "poc_challengees_percent": 0.35,
        "poc_challengers_percent": 0.15,
        "poc_good_bucket_high": -70,
        "poc_good_bucket_low": -130,
        "poc_max_hop_cells": 2000,
        "poc_path_limit": 7,
        "poc_target_hex_parent_res": 5,
        "poc_typo_fixes": true,
        "poc_v4_exclusion_cells": 8,
        "poc_v4_parent_res": 11,
        "poc_v4_prob_bad_rssi": 0.01,
        "poc_v4_prob_count_wt": 0.0,
        "poc_v4_prob_good_rssi": 1.0,
        "poc_v4_prob_no_rssi": 0.5,
        "poc_v4_prob_rssi_wt": 0.0,
        "poc_v4_prob_time_wt": 0.0,
        "poc_v4_randomness_wt": 0.5,
        "poc_v4_target_challenge_age": 300,
        "poc_v4_target_exclusion_cells": 6000,
        "poc_v4_target_prob_edge_wt": 0.0,
        "poc_v4_target_prob_score_wt": 0.0,
        "poc_v4_target_score_curve": 5,
        "poc_v5_target_prob_randomness_wt": 1.0,
        "poc_version": 8,
        "poc_witnesses_percent": 0.05,
        "predicate_callback_fun": "version",
        "predicate_callback_mod": "miner",
        "predicate_threshold": 0.95,
        "price_oracle_height_delta": 10,
        "price_oracle_price_scan_delay": 3600,
        "price_oracle_price_scan_max": 90000,
        "price_oracle_public_keys": [
            "13Btezbvbwr9LhKmDQLgBnJUgjhZighEjNPLeu79dqBbmXRwoWm",
            "13CFFcmPtMvNQCpWQRXCTqXPnXtcsibDWVwiQRKpUCt4nqtF7RE",
            "1431WVQvoV7RAJpoLCaBrTKner1Soed4bk69DddcrHUTCWHV6pj",
            "136n9BEbreGUNgXJWtyzkBQcXiNzdMQ5GBoP8L2J6ZReFUAwUjy",
            "14sqAYg1qxzjKTtyHLYZdH6yDtA3KgyoARhWN1cvLZ94dZw5vEc",
            "145J6Aye86pKTJrUHREiXu7qqppZBcWY1bvWo8id7ZjxyuainYj",
            "13dUGHis1PdrSwxdseoyZKzQhc8WuWcueAWdT95sDVGDNhGRWV9",
            "14EzXp4i1xYA7SNyim6R4J5aXN1yHYKNiPrrJ2WEvoDnxmLgaCg",
            "147yRbowD1krUCC1DhhSMhpFEqnkwb26mHBow5nk9q43AakSHNA"
        ],
        "price_oracle_refresh_interval": 10,
        "reward_version": 2,
        "sc_grace_blocks": 100,
        "securities_percent": 0.35,
        "snapshot_interval": 720,
        "snapshot_version": 1,
        "var_gw_inactivity_threshold": 600,
        "vars_commit_delay": 1,
        "witness_refresh_interval": 10080,
        "witness_refresh_rand_n": 1000
    }
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.helium.io" path="/v1/vars/:name" %}
{% api-method-summary %}
Get the value of a chain variable
{% endapi-method-summary %}

{% api-method-description %}
Gets the value of the chain variable with the given name
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="name" type="string" required=false %}
The name of a chain variable
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
This fetched the \`block\_time\` chain variable
{% endapi-method-response-example-description %}

```javascript
{
    "data": 60000
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

