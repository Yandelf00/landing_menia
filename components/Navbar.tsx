import React from 'react'
type NavbarProps = {
  onFeaturesClick: () => void;
  onToolsClick:()=>void;
  onMoreClick:()=>void;
  onAboutClick:()=>void;
}
export default function Navbar({ onFeaturesClick, onToolsClick, onMoreClick, onAboutClick } : NavbarProps) {
  return (
    <div className='w-full absolute flex justify-center top-0 h-[85px]' style={{background :'rgba(21,29,17,0.7)'}}>
        <div className='w-[80%] flex  items-center justify-between '>
            <div className='text-[20px]'>
                <h1 className='text-white'>CM</h1>
            </div>
            <div className='flex flex-row text-[20px] w-[30%] justify-between'>
                <h1 onClick={onFeaturesClick} className='text-white hover:text-[#DAFED3] cursor-pointer'>features</h1>
                <h1 onClick={onToolsClick} className='text-white hover:text-[#DAFED3] cursor-pointer'>tools</h1>
                <h1 onClick={onAboutClick} className='text-white hover:text-[#DAFED3] cursor-pointer'>about</h1>
                <h1 onClick={onMoreClick} className='text-white hover:text-[#DAFED3] cursor-pointer'>more</h1>
            </div>
        </div>
        
    </div>
  )
}
