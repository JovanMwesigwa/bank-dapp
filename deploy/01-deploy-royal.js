const { network, ethers } = require('hardhat')
const { networkConfig } = require('../helper-hardhat-config')

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId
  const tokens = networkConfig[chainId].tokens

  const waitConfirmations = chainId != 31337 && 3

  log('Deploying Royal contract:')
  await deploy('Royal', {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: waitConfirmations,
  })
  log('Contracts deployed..')
  log('------------------------------------------------------')

  // Get the contract
  const royalContract = await ethers.getContract('Royal')

  const listedTokens = await royalContract.getTokenCount()
  console.log(listedTokens.toString())
}

module.exports.tags = ['all', 'deploy']
