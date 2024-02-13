import React from 'react'

export default function Features() {
  return (
    <div className='mt-20  flex flex-col'>
        <div>
            <h1 className='text-[50px] w-[320px] text-white hover:text-[#DAFED3] transition duration-300 ease-in-out cursor-pointer'>Main Features</h1>
        </div>
        <div className='mt-10 w-full justify-between flex flex-row'>
            <div className='w-[400px] h-[400px] bg-black rounded-lg opacity-[50%]'></div>
            <div className='w-[1000px] 2xl:w-[800px] xl:w-[700px] h-[400px] bg-[#42563D] rounded-lg'></div>
        </div>
        <div className='mt-5 w-full justify-between flex flex-row'>
            <div className='w-[1000px] 2xl:w-[800px] xl:w-[700px] h-[400px] bg-[#344630] rounded-lg'></div>
            <div className='w-[400px] h-[400px] bg-black rounded-lg opacity-[50%]'></div>
        </div>
        <div className='mt-5 w-full justify-between flex flex-row'>
            <div className='w-[400px] h-[400px] bg-black rounded-lg opacity-[50%]'></div>
            <div className='w-[1000px] 2xl:w-[800px] xl:w-[700px] h-[400px] bg-[#2E3A17] rounded-lg'></div>
        </div>
    </div>
  )
}
