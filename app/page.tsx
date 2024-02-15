"use client"
import { Navbar, Hero, Features, Tools, About, More } from "@/components";
import { useRef } from "react";


export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToTools = () => {
    if (toolsRef.current) {
      toolsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToMore = () => {
    if (moreRef.current) {
      moreRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className='w-full h-full bg-black flex flex-col relative'>
      <div className="w-full h-full z-20">
        <Navbar onFeaturesClick={scrollToFeatures} onToolsClick={scrollToTools}
        onAboutClick={scrollToAbout} onMoreClick={scrollToMore}/>
      </div>
      <div className='w-[100%] h-[800px] bg-[url("/images/bgtwo.png")]'></div>
      <div className='w-[100%] h-[800px] absolute top-0' style={{background : 'rgba(0, 0, 0, 0.5)'}}>
          <div className=" w-[60%] h-[500px] mt-[160px] ml-[200px]">
            <Hero/>
          </div>
      </div>
      <div className="bg-[#172417] flex flex-col items-center ">
        <div className="w-[75%]">
          <div ref={featuresRef}>
          <Features/>
          </div>
          <div ref={toolsRef}>
          <Tools/>
          </div>
          <div ref={aboutRef}>
          <About/>
          </div>
        </div>
        <div className="w-full mt-64 bg-[#0F0F0F] flex justify-center">
          <div ref={moreRef} className="w-[75%]">
            <More/>
          </div>
        </div>
      </div>

      
    </main>
  );
}
