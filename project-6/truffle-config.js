// Allows us to use ES6 in our migrations and tests.
//require('babel-register')
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider("boat scorpion nice fun trade sight gallery congress link stay under domain", "https://rinkeby.infura.io/v3/a68c117be6e344c89ead078b58269e79")
      },
      network_id: '4',
      gas: 4500000,
      gasPrice: 10000000000,
    }
  },
  compilers: {
    solc: {
      version: "0.4.24",
    },
  }
};