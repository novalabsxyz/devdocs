# Blockchain API

![](../../.gitbook/assets/artboard-copy-19.jpg)

## Endpoints

The Helium [blockchain API](https://github.com/helium/blockchain-http) serves up the blockchain from a database that is filled by a [blockchain node](https://github.com/helium/blockchain-etl) that populates the database as blocks come in.

While anyone can run a node and a corresponding API, the Helium hosted version offers up the API through two endpoints.

* **https://api.helium.wtf**  — Beta, scalable endpoint for new features and tests. Currently connected to mainnet. This endpoint is used for feature development. Submitted transactions may get dropped. 
* **https://api.helium.io** — Stable, scalable production service. Connected to mainnet. 

## Routes

The API routes are grouped together in sub-pages of this page. Refer to the subpages for details.  

