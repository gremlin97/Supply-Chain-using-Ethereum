# Supply Chain using Ethereum

## Project write-up - UML
All the uml diagrams are in the diagrams folder.

## Project write-up - Libraries
The `Roles` library was used by different access control contracts for easy add and remove in the supply chain 
`truffle-hd-wallet-provider` to sign transactions for addresses.

## IPFS
IPFS is not used in this project

## Program Versions numbers
Node: v10.15.3
Solidity: v0.4.24
Truffle: v5.0.25
Web3.js: v1.0.0-beta37 

## Contract address on the Rinkeby test network (Etherscan):
https://rinkeby.etherscan.io/tx/0x31842db9d92500f0a735fbc338c5fe59031d0a33d2e3b5c0b1076e804bdbc477

## Transaction ID and contract address / details


```

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > block number:        6480754
   > block timestamp:     1589366739
   > account:             0x243C5A0e6b5180aAF8DdE6185D698526C596bF87
   > balance:             2.99776406
   > gas used:            223594 (0x3696a)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00223594 ETH

   -------------------------------------
   > Total cost:          0.00223594 ETH


2_deploy_contracts.js
=====================

   Replacing 'FarmerRole'
   ----------------------
   > block number:        6480756
   > block timestamp:     1589366756
   > account:             0x243C5A0e6b5180aAF8DdE6185D698526C596bF87
   > balance:             2.9931305
   > gas used:            436008 (0x6a728)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00436008 ETH


   Replacing 'DistributorRole'
   ---------------------------
   > block number:        6480757
   > block timestamp:     1589366771
   > account:             0x243C5A0e6b5180aAF8DdE6185D698526C596bF87
   > balance:             2.98876958
   > gas used:            436092 (0x6a77c)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00436092 ETH


   Replacing 'RetailerRole'
   ------------------------
   > block number:        6480758
   > block timestamp:     1589366785
   > account:             0x243C5A0e6b5180aAF8DdE6185D698526C596bF87
   > balance:             2.98440878
   > gas used:            436080 (0x6a770)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0043608 ETH


   Replacing 'ConsumerRole'
   ------------------------
   > block number:        6480759
   > block timestamp:     1589366799
   > account:             0x243C5A0e6b5180aAF8DdE6185D698526C596bF87
   > balance:             2.98004822
   > gas used:            436056 (0x6a758)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00436056 ETH


   Replacing 'SupplyChain'
   -----------------------
   > block number:        6480760
   > block timestamp:     1589366841
   > account:             0x243C5A0e6b5180aAF8DdE6185D698526C596bF87
   > balance:             2.94813948
   > gas used:            3190874 (0x30b05a)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03190874 ETH

   -------------------------------------
   > Total cost:           0.0493511 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.05158704 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x31842db9d92500f0a735fbc338c5fe59031d0a33d2e3b5c0b1076e804bdbc477
   > Blocks: 1            Seconds: 17
   > contract address:    0x440C637cd8ceDaAFB2FbBF79c88EF7F2611Cb941
   > block number:        6480763
   > block timestamp:     1589366885
   > account:             0x243C5A0e6b5180aAF8DdE6185D698526C596bF87
   > balance:             2.99761406
   > gas used:            238594 (0x3a402)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00238594 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00238594 ETH


2_deploy_contracts.js
=====================

   Replacing 'FarmerRole'
   ----------------------
   > transaction hash:    0xeaad26360827afb9a12a32f9b6842253d374c590d799a3152d3ade42ab5ead88
   > Blocks: 0            Seconds: 9
   > contract address:    0x382e06959AacE9f7EeAeD258487eaDC1Ca7eCFFa
   > block number:        6480765
   > block timestamp:     1589366915
   > account:             0x243C5A0e6b5180aAF8DdE6185D698526C596bF87
   > balance:             2.9926805
   > gas used:            451008 (0x6e1c0)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00451008 ETH


   Replacing 'DistributorRole'
   ---------------------------
   > transaction hash:    0x86161a507ccd7210091eba894dd669b7682453c6e023c65106e3b5e177af9745
   > Blocks: 1            Seconds: 9
   > contract address:    0x9d87e6dC7EBCfcB7b0cc438D45D1023e5C038E2b
   > block number:        6480766
   > block timestamp:     1589366930
   > account:             0x243C5A0e6b5180aAF8DdE6185D698526C596bF87
   > balance:             2.98816958
   > gas used:            451092 (0x6e214)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00451092 ETH


   Replacing 'RetailerRole'
   ------------------------
   > transaction hash:    0xa3c8c78e3905b04ce33bfad024a928fdfd386c3f4d05e9bed6d4275f94c1e9b4
   > Blocks: 1            Seconds: 9
   > contract address:    0x7f94e03545dA6F12DDaceEB6C5897E9D926f4952
   > block number:        6480767
   > block timestamp:     1589366945
   > account:             0x243C5A0e6b5180aAF8DdE6185D698526C596bF87
   > balance:             2.98365878
   > gas used:            451080 (0x6e208)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0045108 ETH


   Replacing 'ConsumerRole'
   ------------------------
   > transaction hash:    0x4b141753eda2544989cdd32244c5972efef6ae075ba2343328a99e8807b4c873
   > Blocks: 0            Seconds: 5
   > contract address:    0x68925EE5640309233428a33D8c1cAD8C609aFe35
   > block number:        6480768
   > block timestamp:     1589366960
   > account:             0x243C5A0e6b5180aAF8DdE6185D698526C596bF87
   > balance:             2.97914822
   > gas used:            451056 (0x6e1f0)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00451056 ETH


   Replacing 'SupplyChain'
   -----------------------
   > transaction hash:    0x60796f49c9e6eda089fbe7864af87bb726ab5dc11d282b2e4d5208d31183178c
   > Blocks: 0            Seconds: 9
   > contract address:    0xc2190663fD63b0dd5A00eb96e810eeF130650313
   > block number:        6480769
   > block timestamp:     1589366975
   > account:             0x243C5A0e6b5180aAF8DdE6185D698526C596bF87
   > balance:             2.94618948
   > gas used:            3295874 (0x324a82)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03295874 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0510011 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.05338704 ETH

```


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "<Use mnemonic>"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.



## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS




