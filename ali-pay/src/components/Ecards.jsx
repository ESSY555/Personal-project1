import React from 'react'


const Ecards = ({name ,image, position , gender , amount}) => {
  return (
    <div className='w-full my-[2rem]'>
    <div className='flex bg-white items-center'>
      <div className='self-start'><img  src={image} alt="" /></div>
      <div className='flex w-full flex-col gap-1'>
        <h3 className='font-bold text-lg'>{name}</h3>
        <p>{position}</p>
        <div className='flex justify-between items-center w-full'>
            <p>{gender} | monthly</p>
            <p className='text-primary-green font-bold' >{amount}</p>
        </div>
      
      </div>
    </div>
  </div>
  )
}

export default Ecards