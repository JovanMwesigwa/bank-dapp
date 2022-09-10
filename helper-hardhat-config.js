const networkConfig = {
  31337: {
    name: 'hardhat',
    contractAddress: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    tokens: [
      {
        name: 'Polygon',
        address: '0xA108830A23A9a054FfF4470a8e6292da0886A4D4',
        symbol: 'MATIC',
      },
      {
        name: 'Dai Stable',
        address: '0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844',
        symbol: 'DAI',
      },
      {
        name: 'Tether',
        address: '0x509Ee0d083DdF8AC028f2a56731412edD63223B9',
        symbol: 'USDT',
      },
    ],
  },
  5: {
    name: 'goerli',
    contractAddress: '0x3c5e518fF8f3324e7B70483EEb79968B9FA0D58c',
    tokens: [
      {
        name: 'Polygon',
        address: '0xA108830A23A9a054FfF4470a8e6292da0886A4D4',
        symbol: 'MATIC',
      },
      {
        name: 'Dai Stable',
        address: '0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844',
        symbol: 'DAI',
      },
      {
        name: 'Tether',
        address: '0x509Ee0d083DdF8AC028f2a56731412edD63223B9',
        symbol: 'USDT',
      },
    ],
  },
}

const developmentChains = ['localhost', 'hardhat']

module.exports = {
  networkConfig,
  developmentChains,
}
