import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

export function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="font-mono ">
      {/* Hero page */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 h-[60rem] text-white animate-moving-bg bg-[length:500%_500%]">
        <div className="flex flex-row justify-between mx-[10rem]">
          <div data-aos="fade-right" className="mt-[10%] flex flex-col w-[50%]">
            <p className="text-9xl mt-auto mb-8 "
            >Stabler</p>
            <p className="text-2xl mb-4">Stabilizing the Crypto Ecosystem</p>
            <p className="text-lg mb-8">Stabler is a over-collateralized, decentralized, and diversified stablecoin that is deeply liquid, asset-backed, and used widely across Web3.</p>
            <Link to="/dashboard" className="text-xl mb-auto w-48 bg-indigo-400 hover:bg-indigo-600 py-2 px-4 text-center rounded transition ease-in-out delay-25 duration-250">
              Enter App
            </Link>
          </div>
          <div data-aos="fade-left" className="mt-[10%] w-[50%]">
            <img className="mx-auto object-fill h-[40rem] " src="Stabler.png" alt="Coin Image" />
          </div>
        </div>
      </div>
      {/* Info cards */}
      <div className="mx-[5rem] mt-10 mb-10">
        <div className="flex flex-row justify-between">

          <div data-aos="fade-down" data-aos-duration="1000" className="px-10 py-20 w-[35rem] rounded-lg bg-indigo-100 shadow-lg">
            <h5 className="mb-2 font-bold text-4xl text-gray-900">Diversification</h5>
            <p className="text-lg text-gray-700">Constructs a portfolio of decentralized stable coins to mitigate the risk of any one stable coin failing or depegging</p>
          </div>

          <div data-aos="fade-down" data-aos-duration="1750" className="px-10 py-20 w-[35rem] rounded-lg bg-indigo-100 shadow-lg">
            <h5 className="mb-2 font-bold text-4xl text-gray-900">Over-collateralization</h5>
            <p className="text-lg text-gray-700">An evergrowing ratio of total backed-assets to total STB in circulation establishing a positive feedback loop of evergrowing stability</p>
          </div>

          <div data-aos="fade-down" data-aos-duration="2500" className="px-10 py-20 w-[35rem] rounded-lg bg-indigo-100 shadow-lg">
            <h5 className="mb-2 font-bold text-4xl text-gray-900">Inflation-Resistant</h5>
            <p className="text-lg text-gray-700">Finally, to reach mass-adoption, we offer interest to counter inflation for simply using STB as part of our revolutionary tokenomic model </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;