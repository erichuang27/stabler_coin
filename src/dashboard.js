import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import PieChart from './pie-graph';

export default function Dashboard() {
  return (
    <div className='font-mono'>
      <Navbar />
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
              <div className='m-4'>EXCHANGE RATE</div>
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
              <div className='flex w-full justify-center'>
                <div className="w-1/2">
                  <PieChart />
                </div>
              </div>
            </div>
            <div className='border-2 h-20 rounded-lg'><div className='m-4'>TOTAL CIRCULATION</div></div>
          </div>
          <div className='py-5'>
            <div className='border-2 h-20 rounded-lg'><div className='m-4'>FILLER</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
