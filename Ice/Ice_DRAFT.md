# HYDRO ICE: DECENTRALIZED DOCUMENT MANAGEMENT 

### July 2018


## TABLE OF CONTENTS
- Abstract
- Background
- From Physical to Cloud
- The Centralization of Cloud Storage
- Problems with Financial Documents
- Flaws with E-Signature Providers
- E-Signatures Leading To Fraud
- Introducing Ice
- Document Signing
- Document Stamping
- Document Sealing
- Financial Notarization
- Ice Interoperability
- HYDRO Tokens In Ice
- Open Architecture Framework
- Ice: Technical Details
- Ice Smart Contracts
- Ice API and Hydro Mobile App
- Technical Diagrams and Workflows
- Implications for Land & Real Estate Rights
- Implications for Financial Account Opening
- Ice dApp Store
- Problems with Notarization
- A Decentralized Notarization Ecosystem
- Risks
- Conclusion
- Sources


## Abstract
Hydro’s mission is to become the public ledger for financial services, empowering a new decentralized global economy. This ecosystem consists of standard smart contracts that can be used by financial applications, connected through APIs. These standardized smart contracts and API connections reduce the need for firms to hire blockchain developers and allow them to add decentralization to existing systems. 

A core component of the financial ecosystem is the notion of secure and enforceable documents, in the form of legal contracts and agreements. Once a foundation of identity and authentication are established, as the global Hydro community has built with the Raindrop and Snowflake protocols, an ecosystem can then have a free flow of commerce, built on standardized legal frameworks. With the growth of cloud storage, proper document management becomes even more crucial to the future economy.

In this paper, we propose a new paradigm for document management in financial services that leverages a public and decentralized blockchain: Ice. Users can take their unique ID on the blockchain, created in our Snowflake protocol, and the security features of our Raindrop authentication protocol, combined with the capacity of the Ethereum blockchain, to seal, stamp, sign, and store documents. This can include routine documents, such as bank account applications and consents, to complex long-term documents such as insurance contracts. 

This proposed document platform can help to solve multiple problems:

- Decentralized cloud storage for important financial documents that are prone to hacking
- Increased security for easily compromised e-signature document management software
- Audit capability for financial contract types that are often disputed
- Creating a trustless financial notary system, free of corruption
- Instituting a dApp marketplace to encourage a more open source and available document signing framework

Hydro’s Ice can create a global standard for document management that will bring the benefits of decentralization to billions of contracts and agreements, allowing those in emerging markets to have safer and more enforceable financial transactions.

## Background
In our first white paper, we examined the need for proper authentication of users within a technology ecosystem. Our second white paper offered a robust and secure identity management framework. These tools serve as a base to start a financial technology platform, which must then be combined with proper usage of documents to make the ecosystem both legally and operationally sound.

Document management poses some critical questions for financial services. Can the ecosystem store documents that are critical to its trustworthiness? Can the ecosystem verify those documents? Can the ecosystem be sure the documents are secure from theft? Can the ecosystem create standards for legal and contractual documentation?

#### The Origins Of Financial Documents

Financial documents are as old as human civilization itself. Many historians believe one of the chief causes of written language was to record financial transactions such as interest rates on loans. In Mesopotamia, it is believed clay tablets were inscribed with symbols to show commodities trading and transactions. There is even evidence of contracts and documents on tablets that represent mortgages and joint business ventures. Property rights were an important financial document that became central to revolutions across Europe. John Locke’s Two Treatises on Government declared “Life, Liberty, and Estate (Property)”, as inalienable rights in a civil society directly tied to financial documents themselves.

#### From Physical to Cloud

For thousands of years financial documents were stored physically: on tablets, scripts, or paper. The computer revolution has changed this paradigm.

Cloud computing is a relatively new concept. In fact, the term was invented in 1997 by University of Texas PhD student, and now Emory University Professor, Ramnath Chellappa. Although used in the military for years, cloud computing wasn’t popularized in the business world until the 2000s, with the founding of Salesforce, and the start of Amazon’s Elastic Compute Cloud (EC2) in 2007, an infrastructure-as-a-service that allowed companies around the world to rent computing power to run their applications. Cloud storage for individuals quickly followed, with the 2007 creation of Dropbox, Inc, by MIT students. 

Over time, the cost of cloud storage has decreased dramatically. A gigabyte of storage cost at the time of Salesforce’s founding was approximately $7.70. Today, this much storage is priced as low as $0.02.

#### The Centralization of Cloud Storage

Cloud storage is dominated by just five companies: Amazon, IBM, Microsoft, Google, and Alibaba. File storage and sharing company Dropbox has amassed 500 million consumers. This centralization has exposed massive security concerns.

A 2012 hack exposed 68 Million Dropbox customer email and password credentials, but the true size of the breach was never revealed until 2016.

#### Problems with Financial Documents

For millennia, certain problems have repeated themselves with drafting, signing, storing, and enforcing financial documents. 

Personal letters, official proclamations, tax records, and other documents were created by Egyptian scribes. The recording of events was so highly valued that Pharaoh Tutankhamen even included writing equipment in his tomb for the afterlife. During the Roman Empire the “Notarius” as they were called, served to prepare contracts, wills, and other important documents for a fee. The Knights Templar are credited with the creation of the modern system of banking, mortgages, and loans. The Clergy of the Order became important Notaries for all Templar business, official documents, & proclamations.

The common theme throughout history has been the centralization of the notarization of documents. The most educated in societies were responsible for drafting financial documents, leading to immense power and corruptibility. Even as education has increased, the Notary still has power in modern times, to not draft documents, but verify parties have signed and agreed to contract terms. 

Document tampering is another pitfall for financial documents. Seals have been used throughout history, in an attempt to combat tampering. The seal, typically in wax, has served to authenticate documents and their originality, yet there are guides that exist on how to falsify seals, break them, or replace them with simple tools. 

#### Flaws with E-Signature Providers

Because e-signatures typically consist of a typed or cursive font version of a signature, anyone with access to an internet can sign documents electronically on behalf of the intended signer. This includes relatives, business associates, secretaries, and even hackers. Even if a signer intend to electronically sign a document, a simple mistake such as leaving an open email connection or open WiFi can lead to access to potentially important documents. Imagine if this means signing an important business deal before the terms have been duly accepted. Can this then be disputed in court? The answer depends on jurisdiction and interpretation of electronic laws. 

#### E-Signatures Leading To Fraud

Loans, mortgages, and other complex financial transactions typically come with very lengthy consents, agreements, and contracts, along with intermediaries that process the documents. Fraud and forgery is increasingly easier in these industries, due to the ease of adding a fake e-signature to any of od the documents.

According to a Forbes investigation, some unethical car dealers have used e-contracts to charge more than the agreed-upon sales price or tacked on hundreds or thousands of dollars in extra add-ons that consumers didn’t agree to buy. They have further overcharged for government fees and engaged in other illegal practices – such as e-signing consumers’ names without showing buyers the contract.


## Introducing Ice

To solve the problems mentioned thus far, the team introduces Hydro Ice - decentralized document management for financial services. Why call it Ice? The public blockchain can act to “freeze” in time important documents, preserving them forever.

The Ethereum network has experienced 100% uptime since its launch in July 2015. As of the time of this writing, there are over 13,000 Ethereum nodes, and the network is highly decentralized. When this infrastructure is combined with the protocols Hydrogen has already built on top of the Ethereum network, Raindrop and Snowflake, the Ice protocol can create a secure and decentralized way to create, sign, store, and verify financial documents.

#### Document Signing

Ice enables an alternative to off-chain protocols such as DocuSign or Adobe Sign, that are popular in the financial industry. Public-key cryptography enables an observing party to know that a signature came from the appropriate signatory, unlike “type-in” or “on-click” signatures. This is generally the purpose of a signature - it should not be replicable by a malicious actor. Snowflake’s identity management functionality connects a signatory’s signature to an actual identity rather than to an arbitrary key-pair. This can be used to sign documents off-chain that carry meaning due to on-chain associations.

#### Document Stamping

This is the most basic on-chain function of the Ice protocol. Using the public ledger function of the Ethereum blockchain, Ice can be used to “stamp” a document and store it on the blockchain. The stamping function provides an authentication of the party or parties that own the document (or have legally executed the document), and a timestamp of the document upload. 

The stamping function is important for financial documents, because it can be combined with the Hydro Raindrop protocol to authenticate documents, and the Hydro Snowflake protocol to tie the authentication to a validated HydroID on the blockchain. This serves as a basis for a trustless document protocol.

Structurally, this would function as follows: An institution passes a user a PDF of a document to sign through traditional communication structures such as a client gateway. If the document necessitates two-party signing, the institution can sign the document with their own private key. The user downloads the unsigned PDF to the local storage in their Hydro mobile app. Using the wallet stored on their device, the user signs the PDF with their unforgeable digital signature using public-key cryptography. The Hydro mobile app creates two versions of the document - a hashed version, and a version encrypted by the institution’s public key. Both versions are passed to the Hydro API which relays the hashed version to the Ethereum blockchain and the unhashed version to the institution for their local recordkeeping. Both parties now retain local versions of the document which are indisputably signed by the appropriate parties. Further, any dispute about the validity of a signature can be resolved when either party compares a hash of their plain-text version against the hashed on-chain version. This creates a mechanism for external authorities to confirm the authenticity of any signature upon request, which is important when any legal recourse or enforcement is necessary.

#### Document Sealing

This is a more advanced function that is layered on top of the document stamping. This locks a financial document in an on-chain escrow smart contract. The seal can only be broken by solving an on-chain challenge, similar to the Enterprise Raindrop challenge. The Ice seal can permanently keep documents frozen until a spring thaw. 

Structurally this will involve incorporation of on-chain privacy technology. A basic implementation would be storing the non-confidential elements of a document on-chain and dispersing pertinent private information, formally called a “witness” to various associated parties. Using Zero-Knowledge proof, the relevant parties could use their witnesses to verify whether certain conditions of the contract have been met without revealing their identity. This framework would allow the development of various forms of contractual agreements to be built in a privacy-preserving way. Sophisticated implementations could leverage privacy technologies at the computational level to enable the on-chain contract functionality itself to remain confidential.

#### Financial Notarization

The Ice protocol also introduces the possibility of a financial notarization dApp built by the Hydro development community. In the modern world, notaries are now used for acknowledgments, jurats, verbal oaths, and affirmations. The maximum fee that can be charged in the United States for many of these actions can reach as high as $10. 

The system is also based on a trust of not only the notary themselves, but also the notary associations that certify them. In a decentralized world, it is imperative to build trustlessness. A notary also must verify that a signer of a document understands the importance of what he or she is signing and that the document was signed willingly. Again, these are subjective matters that are based on judgment and trust. Ice bridges the gap between real-world notaries and the digital world, by allowing dApps that can lead to cheaper, faster, and more secure notarization by decentralizing the tasks among many individuals globally. 

#### Ice Interoperability

There is a lot of interoperability potential between Ice and other document protocols, both on-chain and off-chain. The Ice team of developers and product managers globally will focus on specific financial services use cases, rather than creating the expensive underlying infrastructure that creates the data storage capabilities. 

- IPFS a peer to peer hypermedia protocol that was created to make the web faster, safer, and more secure.

- Storj: a decentralized cloud storage network, that rents unused hard drive and bandwidth capacity around the globe. With an AWS S3 compatible interface, each file is encrypted, and broken up into pieces across the network. Only the files owner has the keys to access their encrypted files. 

- MaidSafe: the SAFE Network removes people from the management of our information to protect the world's data. The SAFE network is autonomous and decentralised. It is not a set of federated servers, or owned storage locations, or identifiable nodes, nor does it contain a blockchain.

- Sia: a decentralized storage platform secured by blockchain technology. The Sia Storage Platform leverages underutilized hard drive capacity around the world to create a data storage marketplace that is more reliable and lower cost than traditional cloud storage providers.

#### HYDRO Tokens In Ice

The Hydro token plays a vital role in the Ice ecosystem. Tokens are used in core functions of the protocol, such as document stamping - to incentivize good actors, and sealing - to hold documents in escrow. Tokens can also be used in dApps to integrate with document signing software, e.g. Docusign can build a dApp that requires tokens instead of a USD subscription. Finally, tokens can be used in a notary dApp, as a staking mechanism, to encourage only the highest quality notaries. As a comparison, in the United States, notaries are required to be bonded, with amounts totaling as high as $10,000 in some cases. By having a robust token ecosystem between consumers, businesses, stakeholders, and app providers, Hydro is ensuring a vibrant and trustless ecosystem for document management.

#### Open Architecture Framework

Like the Snowflake protocol, Ice is built with an open architecture. This means other document management solutions, both decentralized and centralized, can be hooked into the core Ice protocol. This is done through the Ice Application Programming Interface (API), or by building a dApp that interacts with the Ice smart contracts. Guides and tutorials will be provided by the core Hydro dev team to fully leverage the power of Ice in other projects.

## Ice: Technical Details

TBD

#### Ice Smart Contracts

TBD

#### Ice API and Hydro Mobile App

TBD 

#### Technical Diagrams and Workflows

TBD

## Implications for Financial Services

The Ice protocol has massive implications for the global financial services ecosystem. The ability to securely authenticate and validate documents and their signatories can lay the foundation for a financial ecosystem that has sustainability, auditability, speed, efficiency, and lower costs.


#### Implications for Financial Account Opening

A critical part of financial onboarding is account creation. This typically involves the signing of documents to verify a user has read and understands terms and conditions, privacy policies, terms of the financial account (or things like interest rates, in the case of a loan), and is authorizing access to bank, personal, and other records. This process is also tied to a Know Your Customer (KYC) and Anti-Money Laundering (AML) practice in most countries. Therefore, it is not only a security and business risk to the customer and institution, but also a major regulatory risk. Furthermore, as criminal activity becomes more sophisticated and digital, there is greater risk that financial accounts can be tied to the funding of terrorism, directly or indirectly. A public blockchain, tied to a universal identity standard (Hydro Snowflake) and authentication standard (Hydro Raindrop), can provide a much greater paper trail for authorities to track down and discourage illicit behavior. 

#### Implications for Land & Real Estate Rights

As indicated in the preamble, the right to private property has been viewed as an inalienable right since the Renaissance. In many parts of the world, the system for protecting these rights lies in municipal and local governments, using antiquated and easily corruptible systems. The Ice protocol provides an immediate and very cost effective way to securely store, sign, and immutably guarantee land rights to property owners. Ice makes these documents borderless and tamper proof, and the blockchain is not regulated by any single government body. There are multiple dApps built on top of Snowflake that can tie these documents to identities, which can be individuals, businesses, groups of people, tribes, or any other entity.

##### Ice dApp Store

Any financial institution, financial intermediary, software provider, or service provider can build a dApp that gets offered in the Ice dApp store. This makes Ice extremely powerful as a means to interact with offline and private financial document protocol that are popular in industries such as mortgage, lending, and insurance.  

## Risks
The central risk of the Ice protocol is the adoption of public blockchain infrastructure for document storage, signing, authentication, and validation. The Hydro team is reliant on nascent protocols such as IPFS, Storj, Sia, and MaidSafe to create viable decentralized cloud storage capabilities that can be linked to the on-chain Ice events. The cost of decentralized data storage as the Ethereum network scales, is also unknown.

There have been private blockchain initiatives proposed by startups, governments, and infrastructure providers that threaten the core message of Ice. To combat the risk of low adoption and competition, it is imperative for the following things to happen:

- Acceptance by consumers of the concept of decentralization of data
- Continued privacy pushes, such as GDPR, by central governments globally
- Education about the risks of centralized document storage

## Conclusion
This proposed document platform can help to solve multiple problems:

- Decentralized cloud storage for important financial documents that are prone to hacking
- Increased security for easily compromised e-signature document management software
- Audit capability for financial contract types that are often disputed
- Creating a trustless financial notary system, free of corruption
- Instituting a dApp marketplace to encourage a more open source and available document signing framework

Hydro’s Ice can create a global standard for document management that can bring the benefits of decentralization to billions of contracts and agreements, and allow billions in emerging markets to have safer and more enforceable financial transactions.



## Sources

[http://viking.som.yale.edu/will/finciv/chapter1.htm](http://viking.som.yale.edu/will/finciv/chapter1.htm)

[https://www.computerworld.com/article/3182207/data-storage/cw50-data-storage-goes-from-1m-to-2-cents-per-gigabyte.html](https://www.computerworld.com/article/3182207/data-storage/cw50-data-storage-goes-from-1m-to-2-cents-per-gigabyte.html)

[https://www.forbes.com/sites/dianahembree/2017/04/15/e-contract-abuse-alert-how-car-dealers-can-fake-your-auto-loan/#4e0566b465c5](https://www.forbes.com/sites/dianahembree/2017/04/15/e-contract-abuse-alert-how-car-dealers-can-fake-your-auto-loan/#4e0566b465c5)

[https://www.washingtonpost.com/news/the-switch/wp/2016/09/07/hacked-dropbox-data-of-68-million-users-is-now-or-sale-on-the-dark-web/?utm_term=.61c7129b06fb](https://www.washingtonpost.com/news/the-switch/wp/2016/09/07/hacked-dropbox-data-of-68-million-users-is-now-or-sale-on-the-dark-web/?utm_term=.61c7129b06fb)

[https://www.lib.umich.edu/seals/slides.html](https://www.lib.umich.edu/seals/slides.html)

[https://www.nationalnotary.org/knowledge-center/about-notaries/notary-history](https://www.nationalnotary.org/knowledge-center/about-notaries/notary-history)

[https://www.ethernodes.org/network/1](https://www.ethernodes.org/network/1)

[https://www.nationalnotary.org/file%20library/nna/knowledge%20center/outside%20pdfs/state-notary-fees-chart.pdf](https://www.nationalnotary.org/file%20library/nna/knowledge%20center/outside%20pdfs/state-notary-fees-chart.pdf)
