import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-full flex justify-between flex-col'>
        <div>
            <div className=''>
                <h1 className='text-white text-[100px] drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)]'>ChessMania</h1>
            </div>
            <div className='text-white mt-7 text-[30px]'>
                   A game inspired from both Chess and Fire Emblem<br/> We hope you guys enjoy it!
            </div>
        </div>
        <div className='flex flex-row w-[330px] justify-between'>
            <div className='flex justify-center items-center'>
                <button className='w-[150px] bg-[#849480] rounded-md 
                outline outline-1 outline-white text-[20px]
                 h-[50px] text-white active:w-[145px] active:h-[45px]'>Download</button>
            </div>
            <div className='flex justify-center items-center'>
                <button className='w-[150px] bg-[rgba(0,0,0,0)] rounded-md 
                outline outline-1 outline-white text-[20px]
                 h-[50px] text-white active:w-[145px] active:h-[45px]'>Learn more</button>
            </div>
        </div>

    </div>
  )
}
