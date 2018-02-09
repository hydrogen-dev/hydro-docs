# Raindrop

## Whitelist

You must whitelist every user you desire to authenticate with this service. This can be an end user or another developer utilizing your platform/API. Whitelisted addresses will be stored both on the blockchain and in our private database. Each address is tied directly to your API key. They will be assigned a hydro_address_id variable which is returned and must be used in all of the following calls. All authentication requests will have to be sent with this username/key combo and a whitelisted hydroAddressId which is created one time on initial setup using the following process:

Parameter | Type | Description
------------- | ------- | -----------------------------------------------
`address` | string | The hydro address that will be used for subsequent calls
`username` | string | Your API username for the Hydro API
`key` | string | Your API key for the Hydro API

> Example Request

```curl
curl -X POST \
  "http://localhost:9090/whitelist/0xFE30578259e5454415654374ac86cd2F236281D7" \
  -H "content-type: application/json" \
  -d '{
        "username":"uspd2qunj8h2ra62nb50rk29gu",
        "key":"9kbspd941u06o8udn49hphlcvk"
      }'
```

> Example Response

```
5
```


#### HTTP REQUEST

`POST /whitelist/{address}`

## Challenge

Requesting a challenge is required to perform authentication. This request requires the hydro_address_id that is returned from the call to whitelist an address. This request will return 3 core values, amount, challenge_string and partner_id. After recieving these values, you will need to send them in an authentication attempt to the Hydro Smart Contract, so make sure to keep them safe.

Parameter | Type | Description
------------- | ------- | -----------------------------------------------
`hydro_address_id` | Long | The hydro address id for your whitelisted address
`username` | string | Your API username for the Hydro API
`key` | string | Your API key for the Hydro API

> Example Request

```curl
curl -X POST \
  "http://localhost:9090/challenge?hydro_address_id=5" \
  -H "content-type: application/json" \
  -d '{
        "username":"uspd2qunj8h2ra62nb50rk29gu",
        "key":"9kbspd941u06o8udn49hphlcvk"
      }'
```

> Example Response

```
{
    "amount": 313823208533000000,
    "partner_id": 1,
    "challenge_string": 445253481902
}
```

#### HTTP REQUEST

`POST /challenge?hydro_address_id={hydro_address_id}`

## Authenticate

Once the raindrop has been completed and confirmed in the blockchain final authentication can be performed. This function will return a boolean of whether or not the hydro_address_id sent has performed a proper raindrop.

Parameter | Type | Description
------------- | ------- | -----------------------------------------------
`hydro_address_id` | Long | The hydro address id for your whitelisted address
`username` | string | Your API username for the Hydro API
`key` | string | Your API key for the Hydro API

> Example Request

```curl
curl -X POST \
  "http://localhost:9090/authenticate?hydro_address_id=5" \
  -H "content-type: application/json" \
  -d '{
        "username":"uspd2qunj8h2ra62nb50rk29gu",
        "key":"9kbspd941u06o8udn49hphlcvk"
      }'
```

> Example Response

```
true
```


#### HTTP REQUEST

`POST /authenticate?hydro_address_id={hydro_address_id}`