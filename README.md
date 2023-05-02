# camelot-roundtable-list

This GitHub repo contains the protocols list of Round Table members.

## Adding your protocol

To add your protocol to the Round Table list, you should create your entry and submit a PR with it. 

**1. Fork this repo**

**2. Add your protocol in the relevant "blockchain".json file in src/protocols/.**

**3. Provide the following required information for your protocol.**

- chainId (number)
- id (string): must be unique, will be used as a slug on https://app.camelot.exchange/protocols/id
- logo (string): url, large format, will be used on the main protocol page
- logo-sm (string): url, small format, square, will be used in the project list
- tagline (string): one short sentence
- tags (array): up to 3
- description (string): up to 600 characters
- tokens (array): list of the addresses of all your token contracts. The first one will be considered as your "main" asset
- website (string): link to your app

**4. Provide the following optional links for your protocol.**

- twitter (string)
- discord (string)
- docs (string)
- medium (string)
- github (string)
- telegram (string)
- defillama (string)

### Disclaimer

Note filing an issue does not guarantee addition to the RoundTable list, 
and is reserved to already approved members only.