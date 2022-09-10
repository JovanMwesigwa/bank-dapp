const { ethers, getNamedAccounts, network, deployments } = require('hardhat')
const { networkConfig } = require('../helper-hardhat-config')
require('dotenv').config()

const provider = new ethers.providers.JsonRpcProvider(
  process.env.GOERLI_RPC_URL
)

async function main() {
  const { deployer } = await getNamedAccounts()
  const chainID = network.config.chainId
  const contractAddress = networkConfig[chainID].contractAddress

  console.log(`Chain ID: ${chainID}`)
  // Get the deployed contract
  const royalContract = await ethers.getContractAt(
    'Royal',
    contractAddress,
    deployer
  )

  const allTokens = await royalContract.getOwner()
  console.log(allTokens)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
