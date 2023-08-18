import React from 'react'
import { bell, clogo, elipse, elipse2 } from '../assets'
import { FaChevronRight } from 'react-icons/fa'

const NavD = () => {
  return (
    <div className=' fixed top-0 w-[100vw] md:w-[82vw] h-[9vh] flex justify-between items-center right-0 bg-white shadow-md px-8 py-2'>
     <img src={clogo} className='hidden md:block' alt="" />

     <div className='justify-between w-full md:w-auto flex items-center gap-8'>
      <img src={bell} className='mr-[2rem] order-2 md:order-1'  alt="" />
    <div className='order-1 flex items-center md:order-2 gap-5'>
      <img src={elipse} className='hidden md:block' alt="" />
      <img src={elipse2} className='block md:hidden' alt="" />
      <div className='hidden md:block'>
        <p>Kalu Abiasama</p>
        <p className='flex text-gray-300 text-sm justify-between items-center'>Admin <FaChevronRight fontSize={10} /></p>
      </div>
      <div className='block md:hidden'><p>Hello Waisu</p></div>
    </div>
     </div>
    </div>
  )
}

export default NavD