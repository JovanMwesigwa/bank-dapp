import type { NextPage } from 'next'
import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import { NavbarComponent, WalletComponent } from '../components'

const Home: NextPage = () => {
  const { isWeb3Enabled, chainId } = useMoralis()

  // console.log(isWeb3Enabled)
  return (
    <div className="py-0">
      <Head>
        <title>Royal Dapp</title>
        <meta name="description" content="Your dammy exchange platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComponent />
      <div className="flex flex-1 items-center justify-center">
        {isWeb3Enabled ? (
          <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <WalletComponent />
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center p-24">
            <h3>No wallet connected</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
