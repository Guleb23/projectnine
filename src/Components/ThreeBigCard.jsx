import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AnimatedCircle from './AnimatedCircle';


const ThreeBigCard = () => {

    return (
        <div className="flex justify-center items-center  md:pt-35 relative w-full h-full md:h-[700px] min-h-[370px] px-4 overflow-hidden">



            {/* Фон карточки */}
            <img
                id="card"
                className="sm:hidden select-none pointer-events-none absolute  md:w-auto max-w-none z-0"
                src="/Three/mobile.png"
                alt="Big background"
            />
            <img
                id="card"
                className="hidden sm:block select-none pointer-events-none absolute  md:w-auto max-w-none z-0"
                src="/Three/bigfone.png"
                alt="Big background"
            />

            {/* Контент карточки */}
            <div className="flex flex-col items-center gap-4 md:gap-[25px] z-50 text-center ">
                <p className=" md:text-[37px] text-[19px]  font-bold gradient-text-green max-w-[20ch] md:max-w-4xl leading-tight md:leading-[3rem]">
                    The global data volume is 200 trillion gigabytes now and <span className='text-[#00DA90]'>set to double</span><br /> within the next 4 years
                </p>
                <p className="mono  md:w-auto w-[350px]  text-[13px] md:text-sm gradient-text-green leading-[1.5rem]">
                    To sustainably manage AI's energy consumption,<br className="hidden md:block" />
                    radical new approaches in computation are essential.
                </p>
                <button className="relative overflow-hidden w-[194px] md:w-64 min-h-[43px] md:min-h-[50px] rounded-lg text-sm md:text-[18px] font-bold text-white group flex items-center justify-center">
                    <span className="absolute inset-0 bg-[radial-gradient(143.46%_554.36%_at_-75.93%_-93%,_#16F501_0%,_#00DA90_100%)] bg-[length:200%_100%] bg-left rounded-lg transition-[background-position] duration-500 ease-in-out group-hover:bg-right"></span>
                    <span className="relative z-10 text-black">Meet the Future →</span>
                </button>

            </div>
        </div>
    );
};

export default ThreeBigCard;