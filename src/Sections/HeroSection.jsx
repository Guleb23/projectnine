import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../Components/NavBar'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import AnimatedCircle from '../Components/AnimatedCircle'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import FirstFone from '../Components/FirstFone'
import Code from './Code'
gsap.registerPlugin(ScrollToPlugin);
const HeroSection = ({ styles }) => {
    const overlayRef = useRef(null)
    const firstElems = useRef([])
    const lastLeft = useRef([])
    const ballRef = useRef(null)
    const lastRight = useRef([])
    const superLast = useRef([])
    const navbarRef = useRef(null);
    const toumanRef = useRef(null);
    const getVisible = (arr) =>
        arr.filter(el => el && el.offsetParent !== null);



    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Скрытие overlay — быстрее
        tl.to(overlayRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            delay: 0.2, // меньше задержка
        });

        // 2. Текст появляется быстрее и плотнее
        tl.fromTo(
            firstElems.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                stagger: 0.08,
            },
            '-=0.6'
        );

        // 3. Navbar
        tl.fromTo(
            navbarRef.current,
            { opacity: 0, y: -20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
            },
            '-=0.4' // быстрее после текста
        );

        // 4. Touman + Ball (одновременно с Navbar)
        tl.fromTo(
            toumanRef.current,
            {
                opacity: 0,
                yPercent: -100,
                transform: 'translateX(-50%)',
            },
            {
                opacity: 1,
                yPercent: 0,
                duration: 0.6,
                ease: 'power2.out',
                transform: 'translateX(-50%)',
            },
            '-=0.6'
        );

        tl.fromTo(
            ballRef.current,
            {
                opacity: 0,
                scale: 0.5,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
            },
            '-=0.6'
        );

        // 5. lastLeft
        const visibleLastLeft = getVisible(lastLeft.current);
        if (visibleLastLeft.length) {
            tl.fromTo(
                visibleLastLeft,
                { opacity: 0, xPercent: -40 },
                {
                    opacity: 1,
                    xPercent: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.12,
                }
            );
        }

        // 6. lastRight
        const visibleLastRight = getVisible(lastRight.current);
        if (visibleLastRight.length) {
            tl.fromTo(
                visibleLastRight,
                { opacity: 0, xPercent: 40 },
                {
                    opacity: 1,
                    xPercent: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.12,
                }
            );
        }

        // 7. superLast
        const visibleSuperLast = getVisible(superLast.current);
        if (visibleSuperLast.length) {
            tl.fromTo(
                visibleSuperLast,
                { opacity: 0, yPercent: 10 },
                {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                }
            );
        }

        // 🎯 ScrollTrigger на шар
        gsap.fromTo(ballRef.current,
            {
                scale: 1,
            },
            {
                scale: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ballRef.current,
                    start: "50% 20%",
                    endTrigger: "#sec",
                    end: "20% 90%",
                    scrub: 1,
                    pin: true,
                    immediateRender: false,
                }
            }
        );
    }, []);


    const [isMobile, setIsMobile] = useState(false);
    const [reorderedSubText, setReorderedSubText] = useState([
        "200x faster", "1000x cheaper", "500W → 2W per chip", ">$1.2M saving"
    ]); // Изначальный порядок

    const subText = ["200x faster", "1000x cheaper", "500W → 2W per chip", ">$1.2M saving"];

    // useEffect без зависимости от subText, чтобы избежать перерисовок.
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);

            if (window.innerWidth < 640) {
                // На мобильных устройствах показываем только 3 элемента в новом порядке
                setReorderedSubText([
                    "200x faster", "500W → 2W per chip", ">$1.2M saving"
                ]);
            } else {
                // На больших экранах возвращаем все 4 элемента в исходном порядке
                setReorderedSubText(subText);
            }
        };

        handleResize(); // При первом рендере
        window.addEventListener('resize', handleResize); // Подписка на изменение размера экрана

        return () => window.removeEventListener('resize', handleResize); // Очистка при размонтировании
    }, []); // Пустой массив зависимостей




    const word = ["S", "P", "I", "N", "E", "D", "G", "E"];


    return (
        <FirstFone id='main' >
            {/* Overlay */}
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-black z-[150] pointer-events-none"
            />

            <NavBar ref={navbarRef} />

            <img
                ref={toumanRef}
                className="absolute z-1 top-10 left-1/2 max-w-full h-auto select-none pointer-events-none min-w-[485px] min-h-[520px]"
                src="/Hero/touman.png"
                alt="Touman"
                style={{
                    transform: 'translateX(-50%)', // ✅ Центрируем вручную
                }}
            />


            {/* TEXT */}
            <div className="relative flex flex-col items-center text-white text-center pb-32 sm:pt-30 pt-26 2xl:pb-40 w-full mx-auto">
                <p
                    ref={el => firstElems.current[0] = el}
                    className="gradient-text-green font-bold sm:text-3xl text-[23px]  leading-[120%] first"
                >
                    GPUs crave power.
                </p>
                <p
                    ref={el => firstElems.current[1] = el}
                    className="gradient-text-green font-bold sm:text-3xl text-[23px] leading-[120%] first"
                >
                    SpinEdge saves it.
                </p>
                <div ref={ballRef} className='reltive w-full h-full'>
                    <AnimatedCircle width={window.innerWidth < 640 ? 150 : 220} height={window.innerWidth < 640 ? 150 : 220} customStyle={`sm:mt-0 mt-[12%] -translate-x-1/2 left-1/2 `} />
                </div>
                <Code ref={el => lastRight.current[0] = el} />
                <p ref={el => lastLeft.current[0] = el} className="hidden lg:block  text-[15px] absolute top-[83.5%] 2xl:left-[7%] xl:left-[88px] lg:left-[7%] h-auto max-h-[400px] select-none pointer-events-none z-0 text-left mono gradient-text-green lastLeft">
                    The world’s first<br />
                    spintronic AI accelerator
                </p>
            </div>

            {/* SpinEdge letters */}
            <div className="font-bold flex flex-col justify-center items-center w-screen gap-7 sm:pt-[5%] pt-[8%]">
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-[87%] flex flex-col items-center sm:gap-7 ">
                        <div className='flex w-full justify-between first' ref={el => firstElems.current[2] = el}>
                            {word.map((w, index) => (
                                <p
                                    className='sm:text-5xl text-[35px] lg:text-7xl 2xl:text-8xl gradient-text-green text-center'
                                    key={index}
                                >
                                    {w}
                                </p>
                            ))}
                        </div>

                        {/* Подписи под буквами */}
                        <div className='flex w-full justify-between mono pt-[5px]' ref={el => firstElems.current[3] = el}>
                            {reorderedSubText.map((w, index) => (
                                <p
                                    className={`gradient-text-green sm:text-[12px] text-[11px] lg:text-sm sm:w-44 w-fit text-center 
                    ${index === 0 && "text-start"} 
                    ${index === 3 && "text-end"}`}
                                    key={index}
                                >
                                    {w}
                                </p>
                            ))}
                        </div>
                        <p className='mono gradient-text-green text-[13px] text-center pt-18 sm:hidden'>
                            The world’s first spintronic<br />
                            AI accelerator
                        </p>
                        {/* Нижние блоки */}
                        <div className='flex w-full justify-between items-start pt-12'>
                            <div ref={el => lastLeft.current[1] = el} className="hidden mt-[8px] md:block relative w-[30%] text-sm lastLeft">
                                <div className="gradient-text-green opacity-40 font-bold text-transparent bg-clip-text mono">
                                    AI's Energy Diet<br />Starts Here
                                </div>

                            </div>

                            <div ref={el => superLast.current[0] = el} className='w-full md:w-[30%] sm:pt-0 pt-4 text-center gradient-text-green md:text-lg super'>
                                The revolution <span className='border-b-2 border-[#00DA90]'>starts now.</span>
                            </div>

                            <div ref={el => lastRight.current[1] = el} className="hidden md:flex mt-[8px] relative w-[30%] text-left text-sm justify-end">
                                <div className="gradient-text-green opacity-40 font-bold text-transparent bg-clip-text mono">
                                    <p className=''>
                                        The Last Chip Humanity Will<br /> Ever Need. Where GPUs Sweat,<br /> SpinEdge Thrives.
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p
                onClick={() => gsap.to(window, { duration: 1.5, scrollTo: '#second', ease: 'power2.inOut' })}
                ref={el => superLast.current[1] = el}
                className='cursor-pointer flex justify-center bg-[radial-gradient(circle,_#00DA90_0%,_#E1FFDE_100%)] bg-clip-text text-transparent items-center w-full absolute bottom-24  sm:bottom-12 mono text-sm font-normal super'
            >
                Meet the Future ↓
            </p>

            <img
                className="absolute z-1 bottom-10 w-full h-auto select-none pointer-events-none"
                src="/Hero/bottom.png"
                alt="botom"
            />
            <img
                className="absolute z-10 bottom-0 -translate-x-1/2  left-[50%]  select-none pointer-events-none"
                src="/Hero/btmBlur.png"
                alt="botom"
            />
        </FirstFone>
    )
}

export default HeroSection;
