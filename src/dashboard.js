import React from 'react';
import { Link } from 'react-router-dom';
import { LineGraph } from './line-graph.tsx';
import Navbar from './navbar';
import PieChart from './pie-graph';
import { useState } from 'react';
import { ethers } from 'ethers';


export default function Dashboard() {
  const [walletAddress, setWalletAddress] = useState('')

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
    }
  }

  return (
    <div className='font-mono'>
      <div className="font-mono p-0 m-0">
        <header className="w-full">
          <div className="px-8 py-3 flex justify-between w-full bg-indigo-500">
            <div className="flex align-middle">
              <Link className="transition linear delay-25 font-bold text-3xl text-white hover:text-black duration-250" to="/">Stabler</Link>
            </div>
            <div className="flex align-middle">
              <button onClick={connectWallet}
                className="transition ease-in-out delay-25 border-white border-2 px-2 rounded-xl text-white hover:scale-105 hover:bg-white hover:text-black hover:border-black duration-250">{walletAddress == '' ? "Connect wallet" : walletAddress}</button>
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
            <div className='border-2 rounded-lg'><div className='m-4'>SWAP</div>
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
