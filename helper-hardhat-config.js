const networkConfig = {
  31337: {
    name: 'hardhat',
    contractAddress: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  },
  5: {
    name: 'goerli',
    contractAddress: '0x2047FA1d51152dFa015559FC531b336451BcbBF9',
  },
}

const developmentChains = ['localhost', 'hardhat']

module.exports = {
  networkConfig,
  developmentChains,
}
