import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import PieChart from './pie-graph';
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown, AiOutlineArrowDown } from 'react-icons/ai'
import Swap from './swap';

const style = {
  wrapper: `flex items-center`,
  content: `w-[100%] rounded-2xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
  transferPropContainer: `my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none w-full text`,
  currencySelector: `flex w-1/4`,
  currencySelectorContent: `w-full h-min flex justify-between items-center bg-indigo-400 hover:bg-indigo-600 rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  downArrow: `text-lg mx-auto`,
  confirmButton: `cursor-pointer bg-indigo-400 hover:bg-indigo-600 py-2 px-4 text-center rounded-2xl transition ease-in-out delay-25 duration-250`,
}

export default function Dashboard() {
  // have state for keeping track of the amount
  // have submit thing that calls metamask stuff
  const [type1, setType1] = useState(0);
  const [type2, setType2] = useState(7);
  const types = ["USDT", "DAI", "BUSD", "USDC", "TUSD", "UST", "DGX", "STB"]
  const [amount, setAmount] = useState();

  const handleSwap = () => {
    // call crypto functions here
    console.log(amount)
  }

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
            <div className='border-2 rounded-lg'>
              <div className='m-4'>
                Swap
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
                  <div
                    onClick={() => handleSwap()}
                    className={style.confirmButton}>
                    Swap / Connect Wallet
                  </div>
                </div>
              </div>
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
