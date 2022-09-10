const { ethers } = require('ethers')
require('dotenv').config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const ROYAL_ABI = require('./artifacts/contracts/Royal.sol/Royal.json')

const provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL)
const royalAddress = '0x3c5e518fF8f3324e7B70483EEb79968B9FA0D58c'

const signer = new ethers.Wallet(PRIVATE_KEY, provider)

const getAllTokens = async () => {
  // const connectedSigner = await signer.connect(provider)

  const royalContract = new ethers.Contract(royalAddress, ROYAL_ABI.abi, signer)

  const allListedTokens = await royalContract.getTokenCount()
  console.log(allListedTokens)
}

getAllTokens()
