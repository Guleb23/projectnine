import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SecondFone from '../Components/SecondFone';
import AnimatedCircle from "../Components/AnimatedCircle";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
    const imgRef = useRef(null);     // Картинка in.png
    const finalRef = useRef(null);   // Картинка final.png
    const mainRef = useRef(null);    // Картинка main.png
    const circleRef = useRef(null);  // Реф для AnimatedCircle

    useGSAP(() => {
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
                delay: 2, // Задержка появления
                ease: "power2.out",
                scrollTrigger: {
                    trigger: circleRef.current,
                    start: "top 50%",
                    toggleActions: "play none none none", // один раз проигрывается
                    once: true,
                },
            }
        );

        gsap.to(circleRef.current, {
            scrollTrigger: {
                trigger: circleRef.current,
                start: "top 25%",
                endTrigger: "#three",
                end: "92% 90%",
                pin: true,
                scrub: true,
                anticipatePin: 1,


            },
        });


    }, []);


    return (

        <SecondFone id="second">
            <div className="flex flex-col gap-10 z-50 overflow-hidden">
                <div className="flex flex-col gap-6 text-center">
                    <p className="mono text-sm gradient-text-green">AI’s Ticking Time Bomb</p>
                    <h1 className="text-4xl font-bold gradient-text-green">
                        The AI Energy Crisis:<br /> Why SpinEdge Matters
                    </h1>
                    <p className="mono text-sm gradient-text-green">AI is suffocating. Here’s why.</p>
                </div>
                <div className="flex justify-center items-center relative w-full h-full">
                    {/* Основная картинка */}
                    <img
                        ref={mainRef}


                        className="max-w-full max-h-full opacity-0  select-none pointer-events-none"
                        src="/Second/main.png"
                        alt="Main"
                    />
                    {/* Картинка in.png, которая появляется после main.png */}
                    <img
                        ref={imgRef}
                        className="absolute pt-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0  select-none pointer-events-none"
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


                    <img
                        className={`absolute pt-[2%] select-none pointer-events-none `}
                        ref={circleRef}
                        width={250}
                        height={250}
                        src="/ball.gif"
                        alt="Animated Ball"
                    />
                </div>


            </div>

        </SecondFone>

    );
};

export default SecondSection;
