import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

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
            <div className='border-2 h-20 rounded-lg'><div className='m-4'>STB PRICE</div></div>
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='border-2 h-20 rounded-lg'><div className='m-4'>TOTAL RESERVE</div></div>
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
