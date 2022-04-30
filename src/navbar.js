import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="font-mono">
      <header className="w-screen">
        <div className="px-8 py-3 flex justify-between w-full bg-indigo-500">
          <div className="flex align-middle">
            <Link className="transition linear delay-25 font-bold text-3xl text-white hover:text-black duration-250" to="/">Stabler Coin </Link>
          </div>
          <div className="flex align-middle">
            <button className="transition ease-in-out delay-25 border-white border-2 px-2 rounded-xl text-white hover:scale-105 hover:bg-white hover:text-black hover:border-black duration-250">Connect Wallet</button>
          </div>
        </div>
      </header>
    </div>
  )
}