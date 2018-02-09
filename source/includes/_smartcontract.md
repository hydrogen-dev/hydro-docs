# Smart Contract

## Authenticate

The owner of the Hydro address who performed the challenge must now authenticate on the Hydro Smart Contract, which needs to happen outside of the Hydro API. There are many ways to do this. We recommend that it is done programatically through a service such as Web3.js.

Parameter | Type | Description
------------- | ------- | -----------------------------------------------
`amount` | BigInt | The hydro address that will be used for subsequent calls
`challenge_string` | BigInt | Your API username for the Hydro API
`partner_id` | BigInt | Your API key for the Hydro API

> Example Request

```Node
metaMaskAccount = eth.accounts[0];
HydroToken.authenticate(amount, challenge, partner, { from: metaMaskAccount })
.then(function (txHash) {
	waitForTxToBeMined(txHash)
})

async function waitForTxToBeMined (txHash) {
	let txReceipt
	while (!txReceipt) {
	  try {
	    txReceipt = await eth.getTransactionReceipt(txHash)
	  } catch (err) {
	    return alert(err)
	  }
	}
	alert("Authentication Successful!")
}
```
```Python
# Unlock account
w3.personal.unlockAccount(w3.eth.accounts[0], 'Account Password')

# Send the authentication attempt
trxHash = hydroConctract.authenticate(respJson['amount'], respJson['challenge_string'], respJson['partner_id'], transact={'from':w3.eth.accounts[0]})

# Wait for the transaction to be mined
while (w3.eth.getTransactionReceipt(trxHash) == None):
    print("Waiting for transaction to be mined")
    time.sleep(5)

```

> Example Response

```

```