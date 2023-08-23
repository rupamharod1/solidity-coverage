require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require('solidity-coverage')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const RINKEBY_ETHERSCAN_API_KEY = process.env.RINKEBY_ETHERSCAN_API_KEY
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL



module.exports = {
  skipFiles: ['Routers/EtherRouter.sol'],
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      }
    ],
  },
  defaultNetwork: "private",
  networks: {
    private: {  // You can use any name you prefer for the network
      url: "http://143.110.190.194:8447", // URL of your network
      chainId: 111000, // Chain ID of your network
      blockConfirmations: 1,
      forking: {
        url: "http://143.110.190.194:8447",
      },
      accounts: ["2267c1f9495f31f7af294c0b81d75b4a408950690d958ca335c222213e3cf1bd"], // Replace with your private key or an array of private keys
    },
  },
  coverage: {
    url: 'http://143.110.190.194:8447', // URL of your network for coverage
  }
};
