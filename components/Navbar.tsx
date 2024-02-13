import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full absolute flex justify-center top-0 h-[85px]' style={{background :'rgba(21,29,17,0.7)'}}>
        <div className='w-[80%] flex  items-center justify-between '>
            <div className='text-[20px]'>
                <h1 className='text-white'>CM</h1>
            </div>
            <div className='flex flex-row text-[20px] w-[30%] justify-between'>
                <h1 className='text-white hover:text-[#DAFED3] cursor-pointer'>features</h1>
                <h1 className='text-white hover:text-[#DAFED3] cursor-pointer'>tools</h1>
                <h1 className='text-white hover:text-[#DAFED3] cursor-pointer'>about</h1>
                <h1 className='text-white hover:text-[#DAFED3] cursor-pointer'>more</h1>
            </div>
        </div>
        
    </div>
  )
}
