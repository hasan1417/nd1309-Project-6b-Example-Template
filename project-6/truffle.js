var mnemonic = "come online patrol sea tomorrow trip dune resist front evolve share master"
infura = "https://rinkeby.infura.io/v3/0f3d9f30356e48c7b048c0b6a6c8ceae"
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*", // Match any network id
      websockets: true,
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
      version: "0.8.10"
    }
  }
};