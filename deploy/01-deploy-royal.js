const { network } = require('hardhat')

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId

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
}

module.exports.tags = ['all', 'deploy']
