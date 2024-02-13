import React from 'react'

export default function Tools() {
  return (
    <div className='mt-20 mb-5 flex flex-col'>
        <div>
            <h1 className='text-[50px] w-[400px] text-white hover:text-[#DAFED3] transition duration-300 ease-in-out cursor-pointer'>Main used Tools</h1>
        </div>
        <div className='flex mt-10 justify-center'>
            <div className='w-[95%] justify-between flex flex-row'>
                <div className='bg-[#DAFED3] w-[600px] h-[600px] rounded-3xl'></div>
                <div className='bg-[#DAFED3] w-[600px] h-[600px] rounded-3xl'></div>
            </div>
        </div>
    </div>
  )
}
