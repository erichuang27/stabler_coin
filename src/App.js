import { Link } from "react-router-dom";
import Dashboard from './dashboard';

export function App() {
  return (
    <div className="font-mono">
      {/* Hero page */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-100 h-[60rem] text-white animate-moving-bg bg-[length:500%_500%]">
        <div className="flex flex-row justify-between mx-[10rem]">
          <div className="mt-[10%] flex flex-col w-[50%]">
            <p className="text-9xl mt-auto mb-8 "
            >Stabler</p>
            <p className="text-2xl mb-4">The Future Decentralized Reserve Currency</p>
            <p className="text-lg mb-8">Stabler is a over-collateralized, decentralized, and diversified stable coin that is deeply liquid, asset-backed, and used widely across Web3.</p>
            <Link to="/dashboard" className="mb-auto w-48 bg-indigo-400 hover:bg-indigo-600 py-2 px-4 text-center rounded transition ease-in-out delay-25 duration-250">
              Enter Dashboard
            </Link>
          </div>
          <div className="mt-[10%] w-[50%]">
            <img className="mx-auto object-fill h-[40rem] " src="coin.png" alt="Coin Image" />
          </div>
        </div>
      </div>
      {/* Info cards */}
      <div className="mx-[5rem] mt-10 mb-10">
        <div className="flex flex-row justify-between">

          <div className="px-10 py-20 w-[35rem] rounded-lg bg-indigo-100 shadow-lg">
            <h5 className="mb-2 font-bold text-4xl text-gray-900">Diversification</h5>
            <p className="text-lg text-gray-700">Constructs a portfolio of decentralized stable coins to mitigate the risk of any one stable coin failing or depegging</p>
          </div>

          <div className="px-10 py-20 w-[35rem] rounded-lg bg-indigo-100 shadow-lg">
            <h5 className="mb-2 font-bold text-4xl text-gray-900">Overcollateralization</h5>
            <p className="text-lg text-gray-700"></p>
          </div>

          <div className="px-10 py-20 w-[35rem] rounded-lg bg-indigo-100 shadow-lg">
            <h5 className="mb-2 font-bold text-4xl text-gray-900">Earn Interest</h5>
            <p className="text-lg text-gray-700">Finally, to reach mass-adoption, Stable must achieve high utility. Stable is rapidly building new protocols and partnering with community initiatives to continue to expand the use cases for Stable.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;