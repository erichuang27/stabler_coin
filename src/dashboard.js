import { Link } from 'react-router-dom';
import { LineGraph } from './line-graph.tsx';
import Navbar from './navbar';
import PieChart from './pie-graph';
import { useState } from 'react';
import { ethers } from 'ethers';
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown, AiOutlineArrowDown } from 'react-icons/ai'
import Swap from './swap';


export default function Dashboard() {
  const [walletAddress, setWalletAddress] = useState('');
  const [provider, setProvider] = useState(null);
  const [type1, setType1] = useState(0);
  const [type2, setType2] = useState(7);
  const types = ["USDT", "DAI", "BUSD", "USDC", "TUSD", "UST", "DGX", "STB"]
  const [amount, setAmount] = useState();

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
      setProvider(provider);
    }
  }

  const style = {
    wrapper: `flex items-center`,
    content: `w-[100%] rounded-2xl p-4`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none w-full text`,
    currencySelector: `justify-end flex w-1/4`,
    currencySelectorContent: `text-white w-full h-min flex justify-between items-center bg-indigo-400 hover:bg-indigo-600 rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    downArrow: `text-lg mx-auto`,
    confirmButton: `text-2xl text-white cursor-pointer bg-indigo-400 hover:bg-indigo-600 py-2 px-4 text-center rounded-2xl transition ease-in-out delay-25 duration-250`,
  }

  const handleSwap = () => {
    // call crypto functions here
    console.log(amount)
  }

  return (
    <div className='font-mono'>
      <div className="font-mono p-0 m-0">
        <header className="w-full">
          <div className="px-8 py-3 flex justify-between w-full bg-indigo-500">
            <div className="flex align-middle">
              <Link className="transition linear delay-25 font-bold text-3xl text-white hover:text-black duration-250" to="/">STABLER</Link>
            </div>
            <div className="flex align-middle">
              <button onClick={connectWallet}
                className="transition ease-in-out delay-25 border-white border-2 px-2 rounded-xl text-white hover:scale-105 hover:bg-white hover:text-black hover:border-black duration-250">{walletAddress == '' ? "CONNECT WALLET" : walletAddress}</button>
            </div>
          </div>
        </header>
      </div>
      <div className='mx-8'>
        <header className='py-4 text-left font-bold text-5xl'>
          DASHBOARD
        </header>
        <div>
          <div className='py-5'>
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='border-2 rounded-lg'>
              <div className='m-4'>
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
                  {walletAddress == '' ? (
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
            <div className='border-2 rounded-lg'>
              <div className='mx-4 mt-4'>EXCHANGE RATE</div>
              <div className='grid grid-cols-3 gap-4'>
                <div className='mx-4 flex justify-center items-center'>
                  1 STB
                </div>
                <div className='mx-4 flex justify-center items-center'>
                  =
                </div>
                <div className='my-4 justify-center items-center'>
                  <div>
                    1 USDT
                  </div>
                  <div>
                    1 USDC
                  </div>
                  <div>
                    1 UST
                  </div>
                  <div>
                    1 DAI
                  </div>
                </div>
              </div>
            </div>
            <div className='border-2 rounded-lg'>
              <div className='m-4'>TOTAL RESERVE</div>
              <div className='flex w-full h-full justify-center'>
                <div className="w-1/2 p-5">
                  <PieChart />
                </div>
                <div className="relative bottom-7 flex flex-col align-middle my-auto">
                  <p>Total Deposit</p>
                  <p>$XXXXX</p>
                </div>
              </div>
            </div>
            <div className='border-2 rounded-lg'><div className='m-4'>TOTAL CIRCULATION</div>
              <div className="p-5"> <LineGraph /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

