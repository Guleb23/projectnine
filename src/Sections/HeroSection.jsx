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
        const tl = gsap.timeline({
            defaults: {
                duration: 0.4,
                ease: 'power2.out'
            }
        });

        // Оптимизированная последовательность анимаций
        tl.to(overlayRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.1
        })
            .fromTo(firstElems.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.05
                }
            )
            .fromTo([navbarRef.current, toumanRef.current],
                {
                    opacity: 0,
                    y: -10
                },
                {
                    opacity: 1,
                    y: 0,
                },
                '-=0.2'
            )
            .fromTo(ballRef.current,
                {
                    opacity: 0,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    scale: 1
                },
                '-=0.2'
            );

        // Оптимизированная анимация для боковых элементов
        const visibleElements = [
            ...getVisible(lastLeft.current),
            ...getVisible(lastRight.current),
            ...getVisible(superLast.current)
        ];

        if (visibleElements.length) {
            tl.fromTo(visibleElements,
                {
                    opacity: 0,
                    x: (i) => i < lastLeft.current.length ? -20 : 20
                },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.03
                }
            );
        }

        // Оптимизированный ScrollTrigger
        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            const { isDesktop } = context.conditions;

            gsap.to(ballRef.current, {
                scale: 0.7,
                ease: "none",
                scrollTrigger: {
                    trigger: ballRef.current,
                    start: "50% 20%",
                    endTrigger: "#sec",
                    end: isDesktop ? "20% 90%" : "20% center",
                    scrub: 0.5,
                    pin: true,
                    anticipatePin: 1
                }
            });
        });

    }, []);

    const [isMobile, setIsMobile] = useState(false);
    const [reorderedSubText, setReorderedSubText] = useState([
        "200x faster", "1000x cheaper", "500W → 2W per chip", ">$1.2M saving"
    ]);

    const subText = ["200x faster", "1000x cheaper", "500W → 2W per chip", ">$1.2M saving"];

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 640);
            setReorderedSubText(width < 640 ?
                ["200x faster", "500W → 2W per chip", ">$1.2M saving"] :
                subText
            );
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                    transform: 'translateX(-50%)',
                    willChange: 'transform'
                }}
            />


            {/* TEXT */}
            <div className="relative flex flex-col items-center sm:text-[35px] text-center pb-32 sm:pt-30 pt-26 2xl:pb-40 w-full mx-auto">
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
                <div className='reltive w-full h-full'>
                    <AnimatedCircle lottieRef={ballRef} width={window.innerWidth < 640 ? 100 : 190} height={window.innerWidth < 640 ? 100 : 190} customStyle={`sm:mt-0 mt-[12%] -translate-x-1/2 left-1/2 `} />
                </div>
                <Code ref={el => lastRight.current[0] = el} />
                <p ref={el => lastLeft.current[0] = el} className="hidden lg:block  text-[15px] absolute top-[83.5%] 2xl:left-[7%] xl:left-[88px] lg:left-[7%] h-auto max-h-[400px] select-none pointer-events-none z-0 text-left mono gradient-text-green lastLeft">
                    The world's first<br />
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
                            The world's first spintronic<br />
                            AI accelerator
                        </p>
                        {/* Нижние блоки */}
                        <div className='flex w-full sm:flex-col lg:flex-row  justify-between items-start pt-12 sm:gap-8 lg:gap-0'>
                            <div ref={el => lastLeft.current[1] = el} className="hidden mt-[8px] lg:block relative w-[30%] text-sm lastLeft">
                                <div className="gradient-text-green opacity-40 font-bold text-transparent bg-clip-text mono">
                                    AI's Energy Diet<br />Starts Here
                                </div>

                            </div>
                            <p className='hidden  sm:block lg:hidden mono text-center gradient-text-green w-full opacity-85 text-[19px]'>
                                The world's first
                                spintronic<br /> AI accelerator
                            </p>
                            <div ref={el => superLast.current[0] = el} className='w-full lg:w-[30%] sm:pt-0 pt-4 sm:text-[23px] text-center gradient-text-green md:text-lg super opacity-45'>
                                The revolution <span className='border-b-2 border-[#00DA90]'>starts now.</span>
                            </div>

                            <div ref={el => lastRight.current[1] = el} className="hidden lg:flex mt-[8px] relative w-[30%] text-left text-sm justify-end">
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
                onClick={() => gsap.to(window, { duration: 1, scrollTo: '#second', ease: 'power1.inOut' })}
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