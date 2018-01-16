# hydro-docs
Documentation for the Hydro Blockchain
<H2>Introduction</H2>
<p>Hydro is the blockchain application of <a href="https://www.hydrogenplatform.com" target="_blank">Hydrogen</a>, an API platform that allows developers to build sophisticated fintech apps in minutes.</p>
<H3>Resources</H3>
<p><a href="https://github.com/hydrogen-dev/smart-contract">Hydro Smart Contract</a></p>
<p><a href="https://www.hydrogenplatform.com/sign-up" target="_blank">Hydrogen Developer Signup</a></p>
<H2>Getting Started</H2>
<H3>Registration</H3>
<p>You must <a href="https://www.hydrogenplatform.com/sign-up">register with Hydrogen</a> to become a developer. Once your application has been approved we will provide you an API username and key which are required to make calls to the API.</p>
<h3>Whitelisting</h3>
<p>You must whitelist every user you desire to authenticate with this service. This can be an end user or another developer utilizing your platform/API.</p>
<p>Whitelisted addresses will be stored both on the blockchain and in our private database. Each address is tied directly to your API key.</p> 
<p>All authentication requests will have to be sent with this username/key combo and a whitelisted <code>hydroAddressId</code> which is created one time on initial setup using the following process:</p>
<ul>
<p>1. POST to <code>/whitelist/{address}</code> with your API username/key combo, and the user’s Ethereum/Hydro address.</p>
<p>2. Returns <code>hydroAddressId</code> if the address has been successfully whitelabeled</p>
<p>3. The user must use the <code>hydroAddressId</code> for all subsequent API calls. For security purposes, this id will only be generated one time. Please store it in a safe place such as a database or key file. If the hydroAddressId is lost, the user will need to whitelist a new wallet address and potentially transfer any hydro over.</p>
</ul>
<H2>Authentication</H2>
<p>After you have been setup in our system it's now time to use our Authentication API called "Raindrop". Authentication is a 3 step process: requesting a challenge, performing the raindrop, and final authentication.</p>
<H3>Step One: Requesting a Challenge</H3>
<ul>
<p>1. POST to <code>/challenge?hydroAddressId={hydroAddressId}</code> with the appropriate <code>hydroAddressId</code> received from initial whitelisting. You must also provide your API username and key in the POST body. This response may take some time, as the challenge must be stored on the Ethereum blockchain.</p>
<p>2. This POST will return a JSON object with <code>amount</code>, <code>challengeString</code> and <code>partnerId</code>. Make sure to store these values as you will need them for the raindrop.</p>
</p>
</ul>
<H3>Step Two: Performing the Raindrop</H3>
<p>The owner of the Hydro address who performed the challenge must now authenticate on the Hydro smart contract, which needs to happen outside of the Hydro API. This can be done in a few ways:</p>
</ul>
