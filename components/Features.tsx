"use client"
import React from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'


export default function Features() {
    const myFirstTarget = useRef<HTMLDivElement>(null);
    const mySecondTarget = useRef<HTMLDivElement>(null);
    const myThirdTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress:scrollYProgressF } = useScroll({
        target: myFirstTarget,
        offset:["start end", "end start"]
    });
    const { scrollYProgress:scrollYProgressS } = useScroll({
        target: mySecondTarget,
        offset:["start end", "end start"]
    });
    const { scrollYProgress:scrollYProgressT } = useScroll({
        target: myThirdTarget,
        offset:["start end", "end start"]
    });
    const opacityf = useTransform(scrollYProgressF, [0,0.2,0.5], [0,0,1]);
    const xf = useTransform(scrollYProgressF, [0.1, 0.2, 0.3], ["20%", "10%", "0%"])

    const opacitys = useTransform(scrollYProgressS, [0, 0.5], [0, 1]);
    const xs = useTransform(scrollYProgressS, [0.1, 0.2, 0.3], ["20%", "10%", "0%"])

    const opacityt = useTransform(scrollYProgressT, [0, 0.5], [0, 1]);
    const xt = useTransform(scrollYProgressT, [0.1, 0.2, 0.3], ["-20%", "-10%", "0%"])
    return (
        <div className='mt-20  flex flex-col'>
            <div>
                <h1 className='text-[50px] w-[320px] text-white hover:text-[#DAFED3] transition duration-300 ease-in-out cursor-pointer'>Main Features</h1>
            </div>
            <div className='mt-10 w-full justify-between flex flex-row'>
                <div className='w-[400px] h-[400px] bg-black rounded-lg opacity-[50%]'></div>
                <motion.div style={{x : xf, opacity:opacityf}} ref={myFirstTarget} className='w-[1000px] 2xl:w-[800px] xl:w-[700px] h-[400px] bg-[#42563D] rounded-lg'></motion.div>
            </div>
            <div className='mt-5 w-full justify-between flex flex-row'>
                <motion.div style={{x : xt, opacity:opacityt}} ref={myThirdTarget} className='w-[1000px] 2xl:w-[800px] xl:w-[700px] md:w-[100px] h-[400px] bg-[#344630] rounded-lg'></motion.div>
                <div className='w-[400px] h-[400px] bg-black rounded-lg opacity-[50%]'></div>
            </div>
            <div className='mt-5 w-full justify-between flex flex-row'>
                <div className='w-[400px] h-[400px] bg-black rounded-lg opacity-[50%]'></div>
                <motion.div style={{x : xs, opacity:opacitys}} ref={mySecondTarget} className='w-[1000px] 2xl:w-[800px] xl:w-[700px] h-[400px] bg-[#2E3A17] rounded-lg'></motion.div>
            </div>
        </div>
    )
}
