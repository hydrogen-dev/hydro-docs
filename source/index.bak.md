---
title: API Reference

language_tabs:
  - bash
  - javascript
  - python
  - java
  - ruby

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='http://github.com/mpociot/whiteboard'>Documentation Powered by Whiteboard</a>

includes:
  - errors

search: true
---

# Introduction

The Hydrogen platform features powerful REST APIs with modules built for fintech. Take a look at our features below to see how we can help.

# Authentication

## Get authentication key

> To authorize, use this code:

```bash
curl -X POST \
  '<AUTH URI>/oauth/token?grant_type=client_credentials' \
  -H 'Authorization: Basic <BASE 64 ENCODE of USERNAME:PASSWORD>'
```

```javascript
var request = require("request");

var options = {
  method: 'POST',
  url: '<AUTH URI>/oauth/token',
  qs: { grant_type: 'client_credentials' },
  headers: {
    Authorization: 'Basic <BASE 64 ENCODE of USERNAME:PASSWORD>'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

```python
import requests

url = "<AUTH URI>/oauth/token"
querystring = {"grant_type":"client_credentials"}
headers = {
  'Authorization': "Basic <BASE 64 ENCODE of USERNAME:PASSWORD>"
}

response = requests.request("POST", url, headers=headers, params=querystring)
print(response.text)
```

```java
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("<AUTH URI>/oauth/token?grant_type=client_credentials")
  .post(null)
  .addHeader("Authorization", "Basic <BASE 64 ENCODE of USERNAME:PASSWORD>")
  .build();

Response response = client.newCall(request).execute();
```

```ruby
require 'uri'
require 'net/http'

url = URI("<AUTH URI>/oauth/token?grant_type=client_credentials")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Authorization"] = 'Basic <BASE 64 ENCODE of USERNAME:PASSWORD>'

response = http.request(request)
puts response.read_body
```

> Make sure to replace `<BASE 64 ENCODE of USERNAME:PASSWORD>` with a base64encode of your username and password.<br/><br/>Also make sure to replace `<AUTH URI>` with the main URI to the authorization module.

You will need a valid username and password to receive the proper authentication to use any API module.

Your username and password will determine your permission level on what modules you can access.

#### HTTP Request

`POST /oauth/token?grant_type=client_credentials`

## Authorizing with API

The subsequent API available expects for the AUTH KEY to be included in all API requests to the server in a header that looks like the following:

`Authorization: 'Bearer <AUTH Key>'`

<aside class="notice">You must replace <code>&lt;API Key&gt;</code> with your personal API key.</aside>

# Accounts

## Client account information

Client account information description here.

### List all clients

```bash
curl -X GET \
  <API BASE URI>/client \
  -H 'Authorization: Bearer <AUTH Key>'
```

```javascript
var request = require("request");

var options = { method: 'GET',
  url: '<API BASE URI>/client',
  headers: {
    Authorization: 'Bearer <AUTH Key>'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
```

```python
import requests

url = "<API BASE URI>/client"
headers = {
  'Authorization': "Bearer <AUTH KEY>"
}

response = requests.request("GET", url, headers=headers)
print(response.text)
```

```java
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("<API BASE URI>/client")
  .get()
  .addHeader("Authorization", "Bearer <AUTH KEY>")
  .build();

Response response = client.newCall(request).execute();
```

```ruby
require 'uri'
require 'net/http'

url = URI("<API BASE URI>/client")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <AUTH KEY>'

response = http.request(request)
puts response.read_body
```

> Successful response sample:

```json
{
  "access_token": "bf2e04eb-fed2-4b10-bf08-cf006557c2d2",
  "token_type": "bearer",
  "expires_in": 24697,
  "scope": "all"
}
```

Get a list of all clients under a partner.

#### HTTP Request

`GET /client`

### List all accounts for a client

```bash
curl -X GET \
  <API BASE URI>/client/{clientid}/account \
  -H 'Authorization: Bearer <AUTH Key>'
```

```javascript
var request = require("request");

var options = { method: 'GET',
  url: '<API BASE URI>/client/{clientid}/account',
  headers: {
    Authorization: 'Bearer <AUTH Key>'
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
```

```python
import requests

url = "<API BASE URI>/client/{clientid}/account"
headers = {
  'Authorization': "Bearer <AUTH KEY>"
}

response = requests.request("GET", url, headers=headers)
print(response.text)
```

```java
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("<API BASE URI>/client/{clientid}/account")
  .get()
  .addHeader("Authorization", "Bearer <AUTH KEY>")
  .build();

Response response = client.newCall(request).execute();
```

```ruby
require 'uri'
require 'net/http'

url = URI("<API BASE URI>/client/{clientid}/account")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["Authorization"] = 'Bearer <AUTH KEY>'

response = http.request(request)
puts response.read_body
```

> Successful response sample:

```json
[
  {
    "client_id": 191846338,
    "client_account_association_id": 2,
    "client_account_id": 795479814,
    "name": "7PbrO9F5NHXpios715EKZMjad1ZzkgSNaJkr576k/P0=",
    "create_date": "2018-01-04 19:25:22.0",
    "managed": true,
    "account_type": 201,
    "owner_id": 191846341,
    "goal_id": [
      574201246
    ]
  },
  {
    "client_id": 191846338,
    "client_account_association_id": 2,
    "client_account_id": 795479813,
    "name": "/S9InG8D2AC1UEJAFa1s5itgTgZINpXosrj3nVG7c2U=",
    "create_date": "2018-01-04 19:25:22.0",
    "managed": true,
    "account_type": 201,
    "owner_id": 191846340,
    "goal_id": [
      574201246
    ]
  }
]
```

Get information for all accounts associated with a client. Must provide the <code>clientid</code>. To identify the appropriate <code>clientid</code>, use the GET /client endpoint to see all clients for your firm. Returns details such as the <code>accountid</code>, account type, the created date, account name, account owner, etc. for each account.

#### HTTP Request

`GET /client/{clientid}/account`

#### URL Parameters

Parameter | Description
--------- | -----------
clientid | Client id associated with account details
