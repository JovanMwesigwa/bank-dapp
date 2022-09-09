task(
  'address',
  'Prints Contract address',
  async function (taskArguments, hre, runSuper) {
    const { ethers, getNamedAccounts, deployments } = hre
    const { deployer } = await getNamedAccounts()
    // Get the deployed contract
    const bankContract = await ethers.getContract('Bank')
    console.log(bankContract.address)
  }
)
