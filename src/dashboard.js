import { Link } from 'react-router-dom';
import { LineGraph } from './line-graph.tsx';
import PieChart from './pie-graph';
import { useState } from 'react';
import { ethers } from 'ethers';
import { AiOutlineArrowDown } from 'react-icons/ai'
import stablerabi from "./stablerERC20ABI.json";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

export default function Dashboard() {
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState(0);
  const [type1, setType1] = useState(0);
  const [type2, setType2] = useState(7);
  const types = ["USDT", "DAI", "BUSD", "USDC", "TUSD", "UST", "DGX", "STB"]
  const [amount, setAmount] = useState();

  const stablerContractAddress = "0x5dB42c8C270f9609105C03dE3743B5DBF031771a";
  async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists 
    if (window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    console.log()
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const erc20 = new ethers.Contract(stablerContractAddress, stablerabi, provider);
      const signer = await provider.getSigner();
      const signerAddress = await signer.getAddress();
      const balance = await erc20.balanceOf(signerAddress);
      setBalance(ethers.utils.formatEther(balance))
    }
  }

  const style = {
    wrapper: `flex items-center`,
    content: `w-[100%] rounded-2xl p-4`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none w-full text`,
    currencySelector: `justify-end flex w-1/4`,
    currencySelectorContent: `text-white h-min flex justify-between items-center bg-indigo-400 hover:bg-indigo-600 rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    downArrow: `text-lg mx-auto`,
    confirmButton: `text-2xl text-white cursor-pointer bg-indigo-400 hover:bg-indigo-600 py-2 px-4 text-center rounded-2xl transition ease-in-out delay-25 duration-400`,
  }

  const handleSwap = async () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(stablerContractAddress, stablerabi, signer)
    const options = { value: ethers.utils.parseEther(amount) }
    await erc20.safeMint(walletAddress, ethers.utils.parseEther(amount), options);
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='font-mono'>
      <div className="font-mono p-0 m-0">
        <header className="w-full">
          <div className="px-8 py-3 flex justify-between w-full bg-indigo-500">
            <div className="flex align-middle">
              <Link className="font-bold text-3xl text-white" to="/">STABLER</Link>
            </div>
            <div className="flex align-middle">
              <button onClick={connectWallet}
                className="transition ease-in-out delay-25 border-white border-2 px-2 rounded-xl text-white hover:scale-105 hover:bg-white hover:text-black hover:border-black duration-250">{walletAddress === '' ? "CONNECT WALLET" : walletAddress}</button>
            </div>
          </div>
        </header>
      </div>
      <div className='mx-8'>
        <header className='py-4 text-left font-bold text-5xl'>
          DASHBOARD
        </header>
        <div>
          <div className='grid grid-cols-2 gap-6'>
            <div data-aos="zoom-in" className='border-2 rounded-lg'>
              <div className='m-4 font-bold text-2xl'>
                SWAP
              </div>
              <div className={style.wrapper}>
                <div className={style.content}>
                  <div className={style.transferPropContainer}>
                    <input
                      type='text'
                      value={amount}
                      className={style.transferPropInput}
                      placeholder='0.0'
                      pattern='^[0-9]*[.,]?[0-9]*$'
                      onChange={e => setAmount(e.target.value)}
                    />
                    <button className={style.currencySelector}
                      onClick={() => setType1(type1 + 1)}>
                      <div className={style.currencySelectorContent}>
                        <div className={style.currencySelectorTicker} >{types[type1 % 8]}</div>
                      </div>
                    </button>
                  </div>
                  <AiOutlineArrowDown className={style.downArrow} />
                  <div className={style.transferPropContainer}>
                    <input
                      type='text'
                      value={amount}
                      className={style.transferPropInput}
                      placeholder='0.0'
                      pattern='^[0-9]*[.,]?[0-9]*$'
                      onChange={e => setAmount(e.target.value)}
                    />
                    <button
                      className={style.currencySelector}
                      onClick={() => setType2(type2 + 1)}>
                      <div className={style.currencySelectorContent}>
                        <div
                          className={style.currencySelectorTicker}
                        >{types[type2 % 8]}</div>
                      </div>
                    </button>
                  </div>
                  {walletAddress === '' ? (
                    <div
                      onClick={connectWallet}
                      className={style.confirmButton}>
                      CONNECT WALLET
                    </div>
                  ) : (
                    <div
                      onClick={() => handleSwap()}
                      className={style.confirmButton}>
                      SWAP
                    </div>
                  )}

                </div>
              </div>
            </div>
            <div className='h-full'>
              <div className='h-full grid grid-rows-2'>
                <div data-aos="zoom-in" className='border-2 mb-4 rounded-lg grid grid-rows-3'>
                  <div className='m-4 font-bold text-2xl'>CURRENT BALANCE</div>
                  <div className="w-full row-span-2 flex">
                    <div className="ml-10 text-6xl mt-5">{balance}</div>
                    <div className="text-xl ml-4 mt-4">
                      STB
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in" className='border-2 rounded-lg h-full'>
                  <div className='h-full grid grid-rows-3 mx-4'>
                    <div className='my-auto font-bold text-2xl'>INTEREST</div>

                    <div className="flex flex-row">
                      <div className='mt-3 mr-8'> Interest Per Year</div>
                      <div className='text-4xl'>1%</div>
                    </div>
                    <div className="flex flex-row">
                      <div className='mt-3 mr-8'> Expected Interest Per Year</div>
                      <div className='text-4xl'>${balance * 0.01}</div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className='border-2 rounded-lg'>
              <div className='m-4 font-bold text-2xl'>TOTAL RESERVE</div>
              <div className='flex w-full h-full justify-center'>
                <div className="w-3/5 p-5">
                  <PieChart />
                </div>
                <div className="relative bottom-9 flex flex-col align-middle my-auto">
                  <p>TOTAL</p>
                  <p>$1,402,708</p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className='border-2 rounded-lg'><div className='m-4 font-bold text-2xl'>TOTAL IN CIRCULATION & TREASURY</div>
              <div className="p-5"> <LineGraph /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

