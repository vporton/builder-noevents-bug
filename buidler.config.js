usePlugin("@nomiclabs/buidler-waffle");
usePlugin('buidler-deploy');
usePlugin("@nomiclabs/buidler-web3");

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
module.exports = {
  // This is a sample solc configuration that specifies which version of solc to use
  solc: {
    version: "0.6.8",
  },
  networks: {
    buidlerevm: {
      accounts: [
        {
          privateKey: '0xe0bb3d8b2933d3d9284a7ba24ff0c3cf86233912cfc75a92901b74c7e9470211',
          balance: '0xf0000000000000000',
        }
      ],
    },
    ganache: {
      gasLimit: 6000000000,
      defaultBalanceEther: 10,
      url: "http://localhost:8545",
    }
  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        //4: '0xffffeffffff', // but for rinkeby it will be a specific address
    },
  },
}
