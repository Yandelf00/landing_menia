"use client"
import React from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Features() {
    // const myFirstTarget = useRef<HTMLDivElement>(null);
    // const mySecondTarget = useRef<HTMLDivElement>(null);
    // const myThirdTarget = useRef<HTMLDivElement>(null);
    // const { scrollYProgress:scrollYProgressF } = useScroll({
    //     target: myFirstTarget,
    //     offset:["start end", "end start"]
    // });
    // const { scrollYProgress:scrollYProgressS } = useScroll({
    //     target: mySecondTarget,
    //     offset:["start end", "end start"]
    // });
    // const { scrollYProgress:scrollYProgressT } = useScroll({
    //     target: myThirdTarget,
    //     offset:["start end", "end start"]
    // });
    // const opacityf = useTransform(scrollYProgressF, [0,0.2,0.5], [0,0,1]);
    // const xf = useTransform(scrollYProgressF, [0.1, 0.2, 0.3], ["20%", "10%", "0%"])

    // const opacitys = useTransform(scrollYProgressS, [0, 0.5], [0, 1]);
    // const xs = useTransform(scrollYProgressS, [0.1, 0.2, 0.3], ["20%", "10%", "0%"])

    // const opacityt = useTransform(scrollYProgressT, [0, 0.5], [0, 1]);
    // const xt = useTransform(scrollYProgressT, [0.1, 0.2, 0.3], ["-20%", "-10%", "0%"])
    return (
        <div className='mt-20  flex flex-col'>
            <div>
                <h1 className='text-[50px] w-[320px] text-white hover:text-[#DAFED3] transition duration-300 ease-in-out cursor-pointer'>Main Features</h1>
            </div>
            <div className='mt-10 w-full justify-between flex flex-row'>
                <div className='w-[400px] h-[400px] flex justify-center items-center '>
                    <div className='rounded-lg'>
                        <Image className='rounded-lg' src="/images/one.png" alt='' height={500} width={500}/>
                    </div>
                </div>
                <div className='w-[1000px] 2xl:w-[800px] xl:w-[700px] lg:w-[600px] h-[400px] flex flex-col  bg-[#42563D] text-white rounded-lg'>
                    <h1 className='text-white ml-5 mt-10 font-semibold text-[40px]'>A turn based system</h1>
                    <p className='text-white mt-5 ml-5 text-[25px]'>Just like Chess and Fire Emblem, Chessmania is a turn based game, each player 
                    has his turn where he can either move the pieces, attack, or use skills. The actions you can make during your turn will depend on
                    the coins you have, each attack, move or skill costs a certain amount of coins, and you can use them as you please. </p>
                </div>
            </div>
            <div className='mt-5 w-full justify-between flex flex-row'>
                <div  className='w-[1000px] 2xl:w-[800px] xl:w-[700px] lg:w-[600px] h-[400px] flex flex-col bg-[#344630] rounded-lg'>
                    <h1 className='text-white ml-5 mt-10 font-semibold text-[40px]'>Strategy oriented system</h1>
                    <p className='text-white mt-5 ml-5 text-[25px]'>As you could have guessed it, Chessmania is a strategy game, again just like chess and fire emblem ! 
                    Chessmania contains a lot of features that makes it a good strategy game, the turn based system, the different attacks, moves, and skills, wether they are passive or active etc..
                    </p>
                </div>
                <div className='w-[400px] h-[400px] flex justify-center items-center '>
                    <div className='rounded-lg'>
                        <Image className='rounded-lg' src="/images/two.png" alt='' height={500} width={500}/>
                    </div>
                </div>
            </div>
            <div className='mt-5 w-full justify-between flex flex-row'>
                <div className='w-[400px] h-[400px] flex justify-center items-center '>
                    <div className='rounded-lg'>
                        <Image className='rounded-lg' src="/images/three.png" alt='' height={500} width={500}/>
                    </div>
                </div>
                <div  className='w-[1000px] 2xl:w-[800px] xl:w-[700px] lg:w-[600px] h-[400px] flex flex-col bg-[#2E3A17] rounded-lg'>
                    <h1 className='text-white ml-5 mt-10 font-semibold text-[40px]'>Diverse skillset</h1>
                    <p className='text-white mt-5 ml-5 text-[25px]'>In Chessmania, each piece has its own set of skills, 
                    some can buff, other can debuff, some skills help more with defense, 
                    others help more with attacks, and more and more pieces and skills will 
                    be coming in the future to make the game more interesting!
                    </p>
                </div>
            </div>
        </div>
    )
}
