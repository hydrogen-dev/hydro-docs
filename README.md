# hydro-docs
Documentation for Project Hydro - The Fintech Blockchain
<H2>Introduction</H2>
<p>Hydro is the blockchain application of <a href="https://www.hydrogenplatform.com" target="_blank">Hydrogen</a>, an API platform that allows developers to build sophisticated fintech apps in minutes. We developed Hydro with the goal of creating a more secure, transparent, low cost, and accessible financial ecosystem for billions around the globe.</p>
<H3>Resources</H3>
<p><a href="https://github.com/hydrogen-dev/smart-contract">Hydro Smart Contract</a></p>
<p><a href="https://www.hydrogenplatform.com/sign-up" target="_blank">Hydrogen Developer Signup</a></p>
<p><a href="https://www.hydrogenplatform.com/Hydro_Raindrop_White_Paper.pdf" target="_blank">Hydro Raindrop White Paper</a></p>
<p><a href="https://www.youtube.com/watch?v=Rnic0JvXvPg&t=348s" target="_blank">Hydro Raindrop Intro Video</a></p>
<p><a href="http://www.projecthydro.com" target="_blank">Project Hydro Details</a></p>
<H2>Getting Started</H2>
<H3>Registration</H3>
<p>You must <a href="https://www.hydrogenplatform.com/sign-up">register with Hydrogen</a> to become a developer. Once your application has been approved we will provide you an API username and key which are required to make calls to the API.</p>
<H3>Base Url:</H3>
<p>Sandbox: NOT YET DEPLOYED</p>
<p>Live: NOT YET DEPLOYED</p>
<h3>Whitelisting</h3>
<p>You must whitelist every user you desire to authenticate with this service. This can be an end user or another developer utilizing your platform/API.</p>
<p>Whitelisted addresses will be stored both on the blockchain and in our private database. Each address is tied directly to your API key.</p> 
<p>All authentication requests will have to be sent with this username/key combo and a whitelisted <code>hydroAddressId</code> which is created one time on initial setup using the following process:</p>
<ul>
<p>1. POST to <code>/whitelist/{address}</code> with your API username/key combo, and the user’s Ethereum/Hydro address.</p>
<p>2. Returns <code>hydroAddressId</code> if the address has been successfully whitelabeled</p>
<p>3. The user must use the <code>hydroAddressId</code> for all subsequent API calls. For security purposes, this id will only be generated one time. Please store it in a safe place such as a database or key file. If the hydroAddressId is lost, the user will need to whitelist a new wallet address and potentially transfer any hydro over.</p>
</ul>
<H2>Instructions</H2>
<p>After you have been setup in our system it's now time to use our Authentication API called "Raindrop". Authentication is a 3 step process: requesting a challenge, performing the raindrop, and final authentication.</p>
<H3>Step One: Requesting a Challenge</H3>
<ul>
<p>1. POST to <code>/challenge?hydroAddressId={hydroAddressId}</code> with the appropriate <code>hydroAddressId</code> received from initial whitelisting. You must also provide your API username and key in the POST body. This response may take some time, as the challenge must be stored on the Ethereum blockchain.</p>
<p>2. This POST will return a JSON object with <code>amount</code>, <code>challengeString</code> and <code>partnerId</code>. Make sure to store these values as you will need them for the raindrop.</p>
</p>
</ul>
<H3>Step Two: Performing the Raindrop</H3>
<p>The owner of the Hydro address who performed the challenge must now authenticate on the <a href="https://github.com/hydrogen-dev/smart-contract">Hydro Smart Contract</a>, which needs to happen outside of the Hydro API. This can be done in a few ways:</p>
<h4><em>Manually through a service such as Ethereum Wallet</em></h4>
<ul>
<p>1. Open the Contracts tab and click "Watch Contract"</p>
<p>2. For Contract Address use:</p>
<p>Testnet: <code>0xed19C73C0caB93864986743378032798F1efA994</code></p>
<p>Mainnet: <code>NOT YET DEPLOYED</code></p>
<p>3. For Json Interface use:</p>
<p>Testnet: <a href="https://gist.github.com/AndyHydro/5df3a80a29bf61986db668ea6c90d4db">Testnet Gist</a></p>
<p>Mainnet: <code>NOT YET DEPLOYED</code></p>
<p>3. Click on the added contract and from the function dropdown on the left select "Authenticate"</p>
<ul>
- For the value put the <code>amount</code> returned from challenge<br/>
- For Data put the <code>challengeString</code> returned from challenge<br/>
- For the partner id put the <code>partnerId</code> returned from challenge<br/>
</ul>
<p>4. Once this is executed the raindrop has been completed. The transaction will fail if any values sent are incorrect.</p>
</ul>
<h4><em>Programmatically through a service such as Web3.js</em></h4>
<p>Web3.js has extensive documentation on how to transact with an Ethereum Smart Contract.</p>
<p>https://github.com/ethereum/wiki/wiki/JavaScript-API</p>
<p>https://web3j.readthedocs.io/en/latest/</p>
<p>**Sample apps will be released soon by the Hydro team for developers to use**</p>
<H3>Step Three: Authentication</H3>
<p>Once the raindrop has been completed and confirmed in the blockchain final authentication can be performed.</p>
<ul>
<p>1. POST to <code>/authenticate?hydroAddressId={hydroAddressId}</code> with the correct <code>hydroAddressId</code>. You must also provide your username and key in the post body</p>
<p>2. This will return a boolean value, which allows developers to use Hydro Auth as just one factor of a multifactor authentication alongside a token based system such as OAuth or JWT.</p>
<ul>
- If true is returned, the authentication process should continue<br/>
- If false is returned, the authentication process should fail
</ul>
</ul>
