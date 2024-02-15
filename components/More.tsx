import React from 'react'
import Link from 'next/link'

export default function More() {
  return (
    <div className='mt-10 mb-5 min-h-[500px] w-full flex flex-col'>
        <div>
            <h1 className='text-[50px] w-[400px] text-white hover:text-[#DAFED3] transition duration-300 ease-in-out cursor-pointer'>More</h1>
        </div>
        <div>
        <p className='text-white mt-10  text-[25px]'>We barely started Chessmania, and there will be a lot to come in the future, new maps, new characters and even a whole storyline is being prepared, we will keep everyone updated and we hope that you will love it, stay tuned ! 
        </p>
        <p className='text-white mt-10 text-[25px]'>
          follow us for more ! <br/>
          Yandelf : <a className='text-blue-400' href="https://x.com/idonhaveaname7?t=2P95ehPqg0QPiCjl0ItXTA&s=09" target="_blank">Twitter</a> | <a className='text-blue-400' href="https://www.linkedin.com/in/zakaria-afyf-b70786266/" target="_blank">LinkedIn</a> <br/>
          Yeeloman : <a className='text-blue-400' href="https://twitter.com/Yeeloman" target="_blank">Twitter</a> | <a className='text-blue-400' href="https://www.linkedin.com/in/mohamed-kaddouri-9a774626b/" target="_blank">LinkedIn</a>
          Repository : <a className='text-blue-400' href="https://github.com/Yeeloman/Chessmania" target="_blank">Chessmania</a>
        </p>
        </div>
        
    </div>
  )
}
