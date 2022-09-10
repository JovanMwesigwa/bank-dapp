const WalletTokensComponent: React.FC<any> = () => {
  return (
    <div className="flex flex-1 w-full h-full my-10 rounded-md flex-col items-center justify-center border-2 border-gray-300">
      <h3 className="text-2xl my-4">My Wallet</h3>
      <div className="flex flex-1 flex-col w-full">
        <ul className="p-4 ">
          <li className="flex flex-1 flex-row w-full p-4 items-center justify-between">
            <div className="w-10 h-10 bg-gray-400 rounded-sm"></div>
            <p className="text-xl">ETH</p>
            <p className="text-xl text-blue-400 font-medium">0.0</p>
          </li>
          <li className="flex flex-1 flex-row w-full p-4 items-center justify-between">
            <div className="w-10 h-10 bg-gray-400 rounded-sm"></div>
            <p className="text-xl">Tether</p>
            <p className="text-xl text-blue-400 font-medium">0.0</p>
          </li>
          <li className="flex flex-1 flex-row w-full p-4 items-center justify-between">
            <div className="w-10 h-10 bg-gray-400 rounded-sm"></div>
            <p className="text-xl">DAI</p>
            <p className="text-xl text-blue-400 font-medium">0.0</p>
          </li>
          <li className="flex flex-1 flex-row w-full p-4 items-center justify-between">
            <div className="w-10 h-10 bg-gray-400 rounded-sm"></div>
            <p className="text-xl">Polygon</p>
            <p className="text-xl text-blue-400 font-medium">0.0</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WalletTokensComponent
