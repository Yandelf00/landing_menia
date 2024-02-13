"use client"
import { Navbar, Hero, Features, Tools, About, More } from "@/components";


export default function Home() {
  return (
    <main className='w-full h-full bg-black flex flex-col relative'>
      <div className="w-full h-full z-20">
        <Navbar/>
      </div>
      <div className='w-[100%] h-[800px] bg-[url("/images/bgtwo.png")]'></div>
      <div className='w-[100%] h-[800px] absolute top-0' style={{background : 'rgba(0, 0, 0, 0.5)'}}>
          <div className=" w-[60%] h-[500px] mt-[160px] ml-[200px]">
            <Hero/>
          </div>
      </div>
      <div className="bg-[#172417] flex flex-col items-center ">
        <div className="w-[75%]">
          <Features/>
          <Tools/>
          <About/>
        </div>
        <div className="w-full mt-64 bg-[#0F0F0F] flex justify-center">
          <div className="w-[75%]">
            <More/>
          </div>
        </div>
      </div>

      
    </main>
  );
}
