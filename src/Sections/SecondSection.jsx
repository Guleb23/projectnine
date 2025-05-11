import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SecondFone from '../Components/SecondFone';
import AnimatedCircle from "../Components/AnimatedCircle";
import Header from './NewSecond/Header';

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
    const imgRef = useRef(null);     // Картинка in.png
    const finalRef = useRef(null);   // Картинка final.png
    const mainRef = useRef(null);    // Картинка main.png
    const circleRef = useRef(null);  // Реф для AnimatedCircle

    useGSAP(() => {
        const isMobile = window.innerWidth < 640;
        // Появление main.png
        gsap.fromTo(
            mainRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // in.png как эффект перекраски — появляется с blur
        gsap.fromTo(
            imgRef.current,
            { opacity: 0, filter: 'blur(8px)' },
            {
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1.5,
                delay: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Плавный кроссфейд на финальное изображение (final.png)
        gsap.to(
            finalRef.current,
            {
                opacity: 1,
                duration: 1.5,
                delay: 2.3, // немного позже in.png
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: finalRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // 1. Показываем шарик через 1 сек после входа
        gsap.fromTo(
            circleRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                delay: 3, // Задержка появления
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#second",
                    start: "top 50%",
                    toggleActions: "play none none none", // один раз проигрывается
                    once: true,
                    markers: true
                },
            }
        );

        if (!isMobile) {
            // Только если экран >= sm
            gsap.to(circleRef.current, {
                scrollTrigger: {
                    trigger: circleRef.current,
                    start: "top 25%",
                    endTrigger: "#card",
                    end: "bottom 70%",
                    pin: true,
                    scrub: true,
                    anticipatePin: 1,
                },
            });

            gsap.fromTo(
                circleRef.current,
                { filter: "blur(0px)" },
                {
                    filter: "blur(10px)",
                    scrollTrigger: {
                        trigger: "#card",
                        start: "top 45%",
                        end: "top 25%",
                        scrub: true,
                    },
                }
            );
        }

    }, []);


    return (

        <SecondFone id="second">
            <div className="flex flex-col gap-10 z-50 overflow-hidden sm:pt-0 pt-[21%]">

                <Header top={`AI’s Ticking Time Bomb`} mid={` The AI Energy Crisis:<br /> Why SpinEdge Matters`} bottom={`AI is suffocating. Here’s why.`}>

                </Header>
                <div className="flex justify-center items-center relative w-full h-full sm:mb-0 mb-[165px]">
                    {/* Основная картинка */}
                    <img
                        ref={mainRef}


                        className="sm:max-w-full max-w-[213px] sm:max-h-full max-h-[222px] opacity-0  select-none pointer-events-none"
                        src="/Second/main.png"
                        alt="Main"
                    />
                    {/* Картинка in.png, которая появляется после main.png */}
                    <img
                        ref={imgRef}
                        className="absolute pt-2 top-1/2 left-1/2 transform md:scale-100 scale-50 -translate-x-1/2 -translate-y-1/2 opacity-0  select-none pointer-events-none"
                        src="/Second/in.png"
                        alt="In"
                    />
                    {/* Картинка final.png, которая появляется после in.png */}
                    <img
                        ref={finalRef}

                        className="absolute max-w-full max-h-full opacity-0 select-none pointer-events-none"
                        src="/Second/final.png"
                        alt="Final"
                    />
                    {/* Анимированный круг, который появляется в финале */}

                    <AnimatedCircle width={window.innerWidth < 640 ? 130 : 200} height={window.innerWidth < 640 ? 130 : 200} lottieRef={circleRef} />
                </div>


            </div>

        </SecondFone>

    );
};

export default SecondSection;
