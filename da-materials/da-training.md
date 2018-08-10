## Welcome!
Welcome, Decentralization Ambassadors, to the Hydro DA program! Thank you for all your contributions, past and future, to contributing to Hydro’s vision as a decentralized ecosystem. As you start your role as a DA, the first document with which you should familiarize yourself is the DA Community Overview. This breathing document frames the community standards by which you should hold yourselves and other DAs accountable. This training guide will point you to some commonly used resources and equip you to get started as a DA.

## Resources
We recommend that new DAs start learning about Hydro by reviewing the AMA recaps about the project.
* https://medium.com/hydrogen-api/hydro-ama-recap-dfab076025d4
* https://medium.com/hydrogen-api/hydro-x-bcm-ama-recap-9942c04e501d
* https://medium.com/hydrogen-api/hydro-coinex-telegram-ama-recap-9650d6de5b9d

These AMAs demonstrate the project growth thus far. DAs should also keep in mind the general vision for the project in the future. DAs can focus on helping to expedite the achievement of the goals of the existing [Hydro roadmap](https://medium.com/hydrogen-api/project-hydro-features-in-depth-look-39faa29f0d61) or expanding the scope of the roadmap with ancillary products and protocols. For more detail on the features of the roadmap, DAs should review, and contribute to the [Hydro white papers](https://github.com/hydrogen-dev/hydro-docs) available on github.

Once DAs have a conceptual understanding of the scope and vision for Hydro products, they should aim to understand Hydro products on a more technical level.

While DAs by no means need to learn how to code in order to contribute to the ecosystem, they should build a general technical understanding of the context in which Hydro functions. DAs should first dedicate considerable time to learning the overarching principles of [smart contracts](https://blockgeeks.com/guides/smart-contracts/) and [blockchain technology](https://blockgeeks.com/guides/what-is-blockchain-technology/). Additionally, DAs should learn, at least at a high level, about the functionality of [APIs](https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82).

Armed with this context, DAs should review Hydrogen’s [documentation](https://www.hydrogenplatform.com/docs/hydro/v1/) which covers the scope in which Hydrogen interacts with Hydro smart contracts to serve its end users. This documentation should serve to inspire DAs to think critically about the scope of Hydro smart contracts and how that scope can be broadened and improved. More technically minded DAs should further review the existing guides on Hydro implementations.
* [Server-side Raindrop Walkthrough](https://medium.com/hydrogen-api/server-side-raindrop-walkthrough-e58da52a0dc0)
* [Client-side Raindrop Implementation Guide](https://medium.com/hydrogen-api/client-side-raindrop-an-implementation-guide-4e61c84e9dda)
* [How to interface directly with the Client Raindrop smart contract](https://medium.com/hydrogen-api/how-to-use-client-raindrop-without-using-the-hydrogen-api-bb04934ae293) (no coding needed).

Additionally, to learn more about the progress of the Hydrogen team’s work on Project Hydro, DAs are encouraged to read articles in the [Hydrogen publication](https://medium.com/hydrogen-api).


## DA Communication
Please sign up for the dedicated Slack channel for DAs (link provided separately) where you will be able to check in and stay in communication with other DAs. In addition to staying in communication with one another, DAs should stay engaged with the broader Hydro community. For general chat, DAs may leverage the [Project Hydro telegram](https://t.me/projecthydro), and for more developer-oriented chat, they may leverage the [Project Hydro Discord](https://discordapp.com/invite/gxAUagw). Additionally, as both development and non-development work for the project is completed on GitHub, all DAs are expected to actively contribute to [GitHub projects](https://github.com/hydrogen-dev). Finally, DAs are encouraged to stay engaged through [Reddit](http://www.reddit.com/r/projecthydro), [BitcoinTalk](https://bitcointalk.org/index.php?topic=2778123.0), and other public mediums.

## About Hydro - Frequently Asked Questions

**Q: What is Hydro?**

**A:**
Hydro aims to decentralize financial services by bringing the public blockchain to traditionally private systems. It allows developers around the world to enhance their platforms and applications by leveraging blockchain technology. Below is an overview of Hydro’s features.

**Q: What are Hydro’s current products?**

**A:**
Server-side Raindrop: Authentication layer to secure large databases and APIs that forces a completion of an on-chain micro-transaction before granting access to a private system. Leaves an immutable paper-trail of access attempts, helps prevent data breaches and identify breach attempts.
Client-side Raindrop: Authentication layer optimized for securing user accounts. Similar to U2F authentication; biggest value-add here is that it prevents the need for a user to pass a website an entire public key to implement U2F authentication on a mobile device. U2F uses public key cryptography, unlike the shared secret used in most user-facing authentication protocols. Also, the Client-Raindrop smart contract generates a unique HydroID for each user, which is a gateway into using the broader suite of Hydro smart contracts.
Under Development
Snowflake: Ubiquitous identity management protocol. Acts as a singular connector for a user to manage data from any smart contract. Snowflake allows different forms of on-chain data to be compatible with private systems from one source managed by the user, so programs can drive business logic from on-chain data, seamlessly tied to a user’s ownership.
This means no single identity standard needs to be accepted globally; any number of standards can be defined and accepted around the worlds. This is analogous to how identity works right now, with different governments issue different identifying docs that contain different information; Snowflake makes all standards cross-compatible by linking data to a base protocol.
Snowflake is based on a non-fungible token ownership model, similar to the ERC-721 standard.

**Q: What are the tokenomics?**

**A:**
Tokens are required to call functions on our Smart Contract and build products in the Hydro ecosystem. For Server-side Raindrop, an on-chain micro transaction must be conducted in Hydro before access to a system is granted. For Client-side Raindrop, any party that wishes to onboard users into the Hydro ecosystem by creating HydroIDs must maintain a balance of Hydro. For snowflake, in order for new resolvers entering the ecosystem to leverage the network effect of existing resolvers, they must use a certain sum of Hydro tokens upon deployment. Further, snowflake includes native token-transfer functionality that enables developers to easily and rapidly develop dApps that directly interact with users through token transfers.

**Q: When was Hydro’s ICO?**

**A:**
Hydro did not do an ICO, all tokens were airdropped on February 16th, 2018 for developers who signed up on the Hydrogen site.

**Q: Who are Hydro’s Competitors?**

**A:**
Due to the wide range of Hydro products, Hydro competes with a variety of projects in many ways. In general, though, Hydro competes with centralized financial services infrastructure, and entities that aim to leverage private or permissioned blockchain technologies to create products in the financial services face. Hydro carries the vision that the benefits of transparency and individual autonomy are essential to the impact that blockchain will have in the financial services space, and can only be achieved using public blockchain technology.

**Q: What type of blockchain is Hydro on?**
**A:**
Hydro is built on Ethereum

**Q: Will Hydro have its own blockchain soon?**
**A:**
There are no current plans to build our own blockchain. We are closely monitoring scaling solutions and alternative approaches as needed for when we move to later phases of our roadmap, and we have contingency measures in place to migrate off of Ethereum if needed; however, currently, we see no need to do so, and we believe that Ethereum is the best platform for Hydro's future.
