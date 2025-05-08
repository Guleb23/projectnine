import React, { useRef } from 'react'
import NavBar from '../Components/NavBar'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import AnimatedCircle from '../Components/AnimatedCircle'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import FirstFone from '../Components/FirstFone'
gsap.registerPlugin(ScrollToPlugin);
const HeroSection = ({ styles }) => {
    const overlayRef = useRef(null)
    const firstElems = useRef([])
    const lastLeft = useRef([])
    const circleRef = useRef(null)
    const lastRight = useRef([])
    const superLast = useRef([])
    const navbarRef = useRef(null);
    const toumanRef = useRef(null);
    const getVisible = (arr) =>
        arr.filter(el => el && el.offsetParent !== null);
    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Скрытие overlay
        tl.to(overlayRef.current, {
            opacity: 0,
            duration: 1.5,
            ease: 'power2.inOut',
            delay: 0.5,
        });

        // 2. Появление текста
        tl.fromTo(
            firstElems.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.1,
            },
            '-=1'
        );

        // 3. Navbar
        tl.fromTo(
            navbarRef.current,
            { opacity: 0, y: -20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
            },
            '+=0.2'
        );

        // ✅ 4. Touman (падает сверху и появляется одновременно с Navbar)
        tl.fromTo(
            toumanRef.current,
            {
                opacity: 0,
                yPercent: -100, // Начало выше экрана (падение сверху)
                transform: 'translateX(-50%)', // Центрируем по горизонтали
            },
            {
                opacity: 1,
                yPercent: 0, // Падаем на место
                duration: 1,
                ease: 'power2.out',
                transform: 'translateX(-50%)', // Сохраняем центрирование
            },
            '-=1' // Синхронизируем с Navbar, чтобы они анимировались одновременно
        );
        tl.fromTo(
            circleRef.current,
            {
                opacity: 0,
                scale: 0.5,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.out',
            },
            '-=1' // одновременно с toumanRef и navbarRef
        );
        // 5. Анимация для lastLeft элементов
        const visibleLastLeft = getVisible(lastLeft.current);
        if (visibleLastLeft.length) {
            tl.fromTo(
                visibleLastLeft,
                { opacity: 0, yPercent: 20 },
                {
                    opacity: 1,
                    yPercent: 0,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.2,
                },
                '+=0.5'
            );
        }

        // 6. lastRight
        const visibleLastRight = getVisible(lastRight.current);
        if (visibleLastRight.length) {
            tl.fromTo(
                visibleLastRight,
                { opacity: 0, yPercent: 20 },
                {
                    opacity: 1,
                    yPercent: 0,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.2,
                },
                '-=0.5'
            );
        }

        // 7. superLast
        const visibleSuperLast = getVisible(superLast.current);
        if (visibleSuperLast.length) {
            tl.fromTo(
                visibleSuperLast,
                { opacity: 0, yPercent: 0 },
                {
                    opacity: 1,
                    yPercent: 0,
                    duration: 1,
                    ease: 'power2.out',
                    stagger: 0.2,
                },
                '+=0.2'
            );


        }
        gsap.fromTo(circleRef.current,
            {
                scale: 1 // Начальное значение (нормальный размер)
            },
            {
                scale: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: circleRef.current,
                    start: "50% 20%",
                    endTrigger: "#sec",
                    end: "20% 90%",
                    scrub: 1,
                    pin: true,
                    immediateRender: false
                }
            }
        );
    }, []);






    const word = ["S", "P", "I", "N", "E", "D", "G", "E"];
    const subText = ["200x faster", "1000x cheaper", "500W → 2W per chip", ">$1.2M saving"]

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
                className="absolute z-1 top-10 left-1/2 max-w-full h-auto select-none pointer-events-none"
                src="/Hero/touman.png"
                alt="Touman"
                style={{
                    transform: 'translateX(-50%)', // ✅ Центрируем вручную
                }}
            />


            {/* TEXT */}
            <div className="relative flex flex-col items-center text-white text-center pb-32 pt-30 2xl:pb-40 w-full mx-auto">
                <p
                    ref={el => firstElems.current[0] = el}
                    className="gradient-text-green font-bold text-3xl leading-[120%] first"
                >
                    GPUs crave power.
                </p>
                <p
                    ref={el => firstElems.current[1] = el}
                    className="gradient-text-green font-bold text-3xl leading-[120%] first"
                >
                    SpinEdge saves it.
                </p>
                <AnimatedCircle ref={circleRef} />
                <img
                    ref={el => lastRight.current[0] = el}
                    className="hidden lg:block absolute top-16 right-[7%] h-auto max-h-[400px] select-none pointer-events-none z-0 lastLast"
                    src="/Hero/Code.png"
                    alt="code"
                    style={{
                        WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskSize: '100% 100%',
                        maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                        maskRepeat: 'no-repeat',
                        maskSize: '100% 100%',
                    }}
                />

                <p ref={el => lastLeft.current[0] = el} className="hidden lg:block absolute top-[84%] left-[6%] h-auto max-h-[400px] select-none pointer-events-none z-0 text-left mono gradient-text-green lastLeft">
                    The world’s first<br />
                    spintronic AI accelerator
                </p>
            </div>

            {/* SpinEdge letters */}
            <div className="font-bold flex flex-col justify-center items-center w-screen gap-7 pt-[5%]">
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-[87%] flex flex-col items-center gap-7">
                        <div className='flex w-full justify-between first' ref={el => firstElems.current[2] = el}>
                            {word.map((w, index) => (
                                <p
                                    className='text-5xl lg:text-7xl 2xl:text-8xl gradient-text-green text-center'
                                    key={index}
                                >
                                    {w}
                                </p>
                            ))}
                        </div>

                        {/* Подписи под буквами */}
                        <div className='flex w-full justify-between mono pt-[5px]' ref={el => firstElems.current[3] = el}>
                            {subText.map((w, index) => (
                                <p className={`gradient-text-green text-[12px] lg:text-sm w-44 text-center ${index === 0 && "text-start"} ${index === 3 && "text-end"}`} key={index}>
                                    {w}
                                </p>
                            ))}
                        </div>

                        {/* Нижние блоки */}
                        <div className='flex w-full justify-between items-start pt-12'>
                            <div ref={el => lastLeft.current[1] = el} className="hidden md:block relative w-[30%] text-sm lastLeft">
                                <div className="gradient-text-green font-bold text-transparent bg-clip-text mono">
                                    AI's Energy Diet<br />Starts Here
                                </div>
                                <div className="absolute inset-0 font-bold text-black/50 mix-blend-multiply pointer-events-none mono">
                                    AI's Energy Diet<br />Starts Here
                                </div>
                            </div>

                            <div ref={el => superLast.current[0] = el} className='w-full md:w-[30%] text-center gradient-text-green md:text-lg super'>
                                The revolution <span className='border-b-2 border-[#16F501]'>starts now.</span>
                            </div>

                            <div ref={el => lastRight.current[1] = el} className="hidden md:block relative w-[30%] text-right text-sm">
                                <div className="gradient-text-green font-bold text-transparent bg-clip-text mono">
                                    The Last Chip Humanity Will<br /> Ever Need. Where GPUs Sweat,<br /> SpinEdge Thrives.
                                </div>
                                <div className="absolute inset-0 font-bold text-black/50 mix-blend-multiply pointer-events-none mono">
                                    The Last Chip Humanity Will<br /> Ever Need. Where GPUs Sweat,<br /> SpinEdge Thrives.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p
                onClick={() => gsap.to(window, { duration: 1.5, scrollTo: '#second', ease: 'power2.inOut' })}
                ref={el => superLast.current[1] = el}
                className='cursor-pointer flex justify-center gradient-text-green text-transparent bg-clip-text items-center w-full absolute bottom-32 mono text-sm font-normal super'
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
