import { ConnectButton } from '@web3uikit/web3'

const NavbarComponent: React.FC<any> = () => {
  return (
    <nav className="w-full h-20 py-4 px-10 flex items-center justify-between flex-row border-b-2 border-b-gray-300">
      <div className="flex-1">
        <h1 className="text-3xl text-blue-600">RoyalX</h1>
      </div>
      <ConnectButton moralisAuth={false} />
    </nav>
  )
}

export default NavbarComponent
