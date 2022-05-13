# Vault
Defi app where user can deposit Ether into our smart contract and get paid periodically (every month).

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React)
- [Web3](https://web3js.sreadthedocs.io/en/v1.5.2/) (Blockchain Interaction)
- [Truffle](https://www.trufflesuite.com/docs/truffle/overview) (Development Framework)
- [MetaMask](https://metamask.io/) (Ethereum Wallet)

## Requirements
- [NodeJS](https://nodejs.org/en/) version v14.17.0
- [MetaMask](https://metamask.io/) Ethereum browser.
- [Truffle](https://www.trufflesuite.com/docs/truffle/overview) (To create our project)
- [Infura API key](https://infura.io/) to connect to the Kovan testnet

## Setting Up
### 1. Clone/Download the Repository:
```
$ git clone linkFromRepo
```

### 2. Install Dependencies:
```
$ npm install 
```
### 3. Test the smart contract
```
$ ganache-cli
```
```
$ truffle test
```

### 4. Deploy to Kovan Testnet:
- get test Link and Ether on Kovan testnet 
- replace the address in App.js with your address
- write your seedphrase in mnemonicPhrase variable in truffle.config.js
- write your infura api key in the HDWalletProvider object in truffle.config.js
```
$ truffle deploy --network kovan --reset
```

- Register your contract for Upkeep at chainlink

### 5. Run Frontend Application
```
$ npm start
```