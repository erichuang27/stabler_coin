import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(walletAddress) {
  return (
    <div className="font-mono p-0 m-0">
      <header className="w-full">
        <div className="px-8 py-3 flex justify-between w-full bg-indigo-500">
          <div className="flex align-middle">
            <Link className="transition linear delay-25 font-bold text-3xl text-white hover:text-black duration-250" to="/">Stabler</Link>
          </div>
          <div className="flex align-middle">
            <button className="transition ease-in-out delay-25 border-white border-2 px-2 rounded-xl text-white hover:scale-105 hover:bg-white hover:text-black hover:border-black duration-250">{walletAddress == '' ? "Connect wallet" : walletAddress}</button>
          </div>
        </div>
      </header>
    </div>
  )
}
