import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AnimatedCircle from './AnimatedCircle';

gsap.registerPlugin(ScrollTrigger);

const ThreeBigCard = () => {
    const circ = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Определяем, мобильный ли экран
    useEffect(() => {
        setIsMobile(window.innerWidth < 640);
    }, []);



    useGSAP(() => {
        const isMobile = window.innerWidth < 640;

        if (!isMobile && circ.current) {
            gsap.set(circ.current, {
                y: 0,
                opacity: 1, // Шарик сразу видимый
                left: "50%",
                top: '30%',
                display: "none",
            });

            // Анимация движения сверху вниз с увеличением размера
            gsap.to(circ.current, {
                y: 200,
                display: "block",
                scrollTrigger: {
                    trigger: '#card',
                    start: "top 28%",
                    end: "bottom center",
                    scrub: 0,

                },
                timeScale: 0.5, // Чем меньше значение, тем медленнее скролл
            });
        }
    }, []);

    return (
        <div className="flex justify-center items-center  md:pt-35 relative w-full h-full md:h-[600px] min-h-[370px] px-4 overflow-hidden">
            {/* Только для desktop */}
            {!isMobile && (
                <AnimatedCircle customStyle={`select-none -mt-[2%] pointer-events-none z-10 -translate-x-1/2 blur-md opacity-100`} width={'200'} height={`200`} lottieRef={circ} />
            )}

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
                <p className=" md:text-[37px] sm:text-[19px]  font-bold gradient-text-green max-w-[20ch] md:max-w-4xl leading-tight md:leading-[3rem]">
                    The global data volume is 200 trillion gigabytes now and <span className='bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text'>set to double</span><br /> within the next 4 years
                </p>
                <p className="mono sm:text-[15px] text-[13px] md:text-sm gradient-text-green leading-snug">
                    To sustainably manage AI's energy consumption,<br className="hidden md:block" />
                    radical new approaches in computation are essential.
                </p>
                <button className="bg-[radial-gradient(circle,_#16F501,_#00DA90)] w-48 md:w-56 h-10 md:h-12 rounded-lg text-sm md:text-[16px] font-bold">
                    Meet the Future →
                </button>
            </div>
        </div>
    );
};

export default ThreeBigCard;

