import React from 'react'
import {freeHero, freepoka} from '../assets'

const Free = () => {
  return (
    <div className='min-h-[60vh] -z-20 relative flex flex-col md:flex-row items-center px-[5rem] py-[2rem] w-full bg-[#FFE9E7]'>
      <div className='flex-1 mt-8 md:mt-0'>
        <h1 className='z-20 w-full text-4xl text-center md:text-left md:text-5xl tracking-wide leading-14 md:w-1/2 px-8 font-bold'>Free Forever for your <span className='text-red-400'>salary payments</span></h1>
        <p className='text-center md:text-left text-lg px-8 mt-8'>subscribe to easipay today</p>

        <div className="hidden md:flex px-8 gap-5 Poppins items-center mt-4">
           <button className="px-2 py-2 bg-white flex shadow-md ">
            <div>

            </div>
            <p className="Poppins">Download on App Store </p>
            
          </button>
          <button className="px-2 py-2 bg-white flex shadow-md">
            <div></div>
            <p className="Poppins">Download on Play Store </p>
          </button>
     </div>
      </div>
      <div className='flex-1 mt-8 md:mt-0'>
        <img src={freeHero} alt="" />
      </div>
      <img src={freepoka} alt="free poka" className='absolute -z-10 top-0 left-[5rem]' />
    </div>
  )
}

export default Free