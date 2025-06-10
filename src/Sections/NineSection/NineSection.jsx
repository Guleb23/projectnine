import React, { useEffect, useRef, useCallback, useMemo } from 'react'
import Fone from './Fone'
import CustomInput from './CustomInput'
import AnimatedCircle from '../../Components/AnimatedCircle'
import MiniCard from "./MiniCard"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const NineSection = () => {
    const sectionRef = useRef(null)
    const mainRef = useRef(null)
    const circleRef = useRef(null)
    const blurRef = useRef(null)
    const navigate = useNavigate();
    const textRef = useRef(null)
    const underlineRef = useRef(null)

    // Мемоизируем размеры для мобильных устройств
    const circleSize = useMemo(() => ({
        width: window.innerWidth < 640 ? 120 : 160,
        height: window.innerWidth < 640 ? 120 : 160
    }), []);

    // Мемоизируем текст заголовка
    const titleText = useMemo(() =>
        `$7M buys the future.${window.innerWidth > 640 ? "" : <br />} Miss it,${window.innerWidth < 640 ? "" : <br />} and your${window.innerWidth > 640 ? "" : <br />} competitors won't.`
        , []);

    // Мемоизируем обработчики событий
    const handleMouseEnter = useCallback(() => {
        gsap.to(textRef.current, {
            opacity: 0.8,
            duration: 0.3,
            ease: 'power1.out',
            willChange: 'opacity'
        });
        gsap.to(underlineRef.current, {
            width: '100%',
            duration: 0.3,
            ease: 'power1.out',
            willChange: 'width'
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        gsap.to(textRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: 'power1.out',
            willChange: 'opacity'
        });
        gsap.to(underlineRef.current, {
            width: '0%',
            duration: 0.3,
            ease: 'power1.out',
            willChange: 'width'
        });
    }, []);

    const handleClick = useCallback(() => {
        navigate("/thanks")
    }, [navigate]);

    const handleClickPolicy = useCallback(() => {
        navigate("/privacy")
    }, [navigate]);

    // Мемоизируем стили для кнопки
    const buttonStyles = useMemo(() => ({
        background: 'radial-gradient(143.46% 554.36% at -75.93% -93%, #16F501 0%, #00DA90 100%)',
        width: '100%',
        height: 'var(--button-height, 2.5rem)',
        borderRadius: '0.5rem',
        fontSize: 'var(--button-font-size, 1rem)',
        fontWeight: 'bold'
    }), []);

    useEffect(() => {
        // Создаем временную шкалу для анимации
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        });

        // Начальное состояние элементов
        gsap.set(mainRef.current, { y: 100, opacity: 0, willChange: 'transform, opacity' });
        gsap.set(circleRef.current, { scale: 0, opacity: 0, willChange: 'transform, opacity' });
        gsap.set(blurRef.current, { opacity: 0, willChange: 'opacity' });

        // Последовательность анимаций
        tl.to(mainRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        })
            .to(circleRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.3")
            .to(blurRef.current, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.inOut"
            }, "-=0.4");

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <Fone id="nine">
            <div ref={sectionRef} id='body' className='w-full h-full relative flex justify-center items-center flex-col'>
                <div className='relative w-fit h-fit ml-[5%] md:scale-100 scale-[0.8]'>
                    <img
                        ref={blurRef}
                        id='blur'
                        src='/Nine/MainBlur.png'
                        className='absolute hidden lg:block z-0 -top-[9%] left-0 select-none pointer-events-none'
                        loading="lazy"
                        alt="Background blur"
                    />
                    <img
                        ref={mainRef}
                        id='main'
                        src='/Nine/Main.png'
                        className='relative z-20 select-none pointer-events-none'
                        loading="lazy"
                        alt="Main image"
                    />

                    <AnimatedCircle
                        id='circle'
                        lottieRef={circleRef}
                        width={circleSize.width}
                        height={circleSize.height}
                        customStyle={`select-none pointer-events-none top-[30%] left-[45.5%] -translate-y-1/2 -translate-x-1/2 z-50`}
                    />
                </div>

                <h2 className='md:text-[46px] text-[27px] text-center mb-[25px] -mt-[15%] md:mt-0 md:text-left font-bold gradient-text-green 2xl:-mt-[4%] xl:-mt-[6%]'>
                    {titleText}
                </h2>

                <div className='flex flex-col gap-3 pb-11 px-5 z-50'>
                    <CustomInput customStyle={`md:w-[730px] w-full`} placeholder={`Business / Website`} id={`first`} />
                    <CustomInput customStyle={`md:w-[730px] w-full`} placeholder={`E-mail address`} id={`second`} />
                    <CustomInput customStyle={`md:w-[730px] w-full`} isBig={true} placeholder={`Business / Website`} id={`three`} />

                    <button
                        onClick={handleClick}
                        style={buttonStyles}
                    >
                        Meet the Future →
                    </button>

                    <p className='lg:gradient-text-green lg:w-full text-[#5B6765] mono md:text-[12px] text-center md:text-left text-[10px]'>
                        By clicking the button, I consent to the processing of my <span className='underline'>personal data</span>.
                    </p>

                    <div className='flex justify-center items-center flex-col gap-6 lg:pb-26 pb-16 z-50 w-full pt-[65px] lg:pt-[45px]'>
                        <div className='relative w-full'>
                            <img
                                className='w-full object-cover object-top'
                                src='/Nine/btmHouse.png'
                                loading="lazy"
                                alt="Bottom house"
                            />
                            <div className='absolute bottom-2 left-2 z-50'>
                                <MiniCard />
                            </div>
                        </div>

                        <div className='flex mono md:text-[13px] text-[9px] justify-between w-full opacity-50 z-50'>
                            <p className='gradient-text-green'>© 2025, SpinEdge.</p>
                            <p className='gradient-text-green'>All rights reserved.</p>
                            <div className='relative cursor-pointer'>
                                <p
                                    className='gradient-text-green'
                                    onClick={handleClickPolicy}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    ref={textRef}
                                    style={{ opacity: 1 }}
                                >
                                    Privacy Policy
                                </p>
                                <span
                                    ref={underlineRef}
                                    className="absolute -bottom-1 left-0 h-[2px] bg-[radial-gradient(circle_at_center,rgba(225,255,222,0.5)_0%,rgba(225,255,222,0)_100%)]"
                                    style={{ width: '0%', transition: 'width 0.1s ease' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fone>
    );
};

export default React.memo(NineSection);

