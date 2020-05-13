const HDWalletProvider = require('truffle-hdwallet-provider');
const infura = "https://rinkeby.infura.io/v3/10c3a4d61a6b47f39ae4e83a36c050b0";
const mnemonic = "<Insert your metamask mnemonic here>";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      websockets: true,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infura),
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};
