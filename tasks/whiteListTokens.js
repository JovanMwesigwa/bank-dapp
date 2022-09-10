task(
  'whitelist',
  'Adds new tokens to the bank',
  async function (taskArguments, hre, runSuper) {
    const { ethers, getNamedAccounts, deployments } = hre
    const { deployer } = await getNamedAccounts()

    // deploy
    await deployments.fixture(['all'])

    // Get the deployed contract
    const royalContract = await ethers.getContract('Royal')
    console.log(royalContract.address)
  }
)
