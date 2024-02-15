import React from 'react'
import Image from 'next/image'

export default function Tools() {
  return (
    <div className='mt-20 mb-5 flex flex-col'>
        <div>
            <h1 className='text-[50px] w-[400px] text-white hover:text-[#DAFED3] transition duration-300 ease-in-out cursor-pointer'>Main used Tools</h1>
        </div>
        <div className='flex mt-10 justify-center'>
            <div className='w-[95%] justify-between flex flex-row'>
                <div className='bg-[#DAFED3] lg:w-[400px]  2xl:w-[510px] w-[600px] h-[600px] flex flex-col rounded-3xl'>
                  <div className='flex justify-center'>
                    <Image src="/images/asepritelogothree.png" alt='' width={250} height={250}/>
                  </div>
                  <div>
                    <p className='text-[#172417] mt-5 ml-5 lg:text-[20px] text-[25px]'>
                    Aseprite is a versatile and user-friendly pixel art and 
                    animation tool designed primarily for game developers, pixel artists, 
                    and graphic designers. It allows users to create and edit pixel-based artwork 
                    with precision and ease
                    </p>
                  </div>
                </div>
                <div className='bg-[#DAFED3] lg:w-[400px]  2xl:w-[510px] w-[600px] h-[600px] flex flex-col rounded-3xl'>
                <div className='flex justify-center'>
                    <Image src="/images/godotlogothree.png" alt='' width={250} height={250}/>
                  </div>
                  <div>
                    <p className='text-[#172417] mt-5 ml-5 lg:text-[20px] text-[25px]'>
                    Godot is a feature-rich, open-source game engine that 
                    provides developers with a comprehensive set of tools 
                    for creating 2D and 3D games, interactive simulations, and other 
                    multimedia projects. It offers a user-friendly interface and a flexible 
                    scripting system, making it accessible to both beginners and experienced developers.
                    </p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
