const { ethers, getNamedAccounts, deployments, network } = require('hardhat')
const { assert, expect } = require('chai')
const { networkConfig } = require('../helper-hardhat-config')

describe('Royal', function () {
  let royalContract, royalAddress, deployer, contractAddress

  beforeEach(async function () {
    const { deployer: extractedDeployer } = await getNamedAccounts()
    deployer = extractedDeployer
    // Deploy the contracts
    await deployments.fixture(['all'])

    // Get the deployed contract
    royalContract = await ethers.getContract('Royal')
    royalAddress = royalContract.address

    contractAddress = networkConfig[network.config.chainId].contractAddress
  })

  describe('Constructor', function () {
    it('Should return the proper contract address', async function () {
      assert.equal(royalAddress.toString(), contractAddress.toString())
    })

    it('Should set the correct deployer address', async function () {
      // Get the set owner address
      const contractOwner = await royalContract.getOwner()
      assert.equal(contractOwner.toString(), deployer.toString())
    })
  })
})
