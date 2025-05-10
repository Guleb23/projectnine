import FourCard from './FourCard'
import AnimatedCircle from './AnimatedCircle'
import AnimatedImg from '../Sections/FourSection/AnimatedImg'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const FourImage = () => {
    const leftCards = useRef([])
    const rightCards = useRef([])
    const containerRef = useRef(null)
    const lightRef = useRef(null)
    const circleRef = useRef(null) // 🌀 Добавим реф на AnimatedCircle

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const globalDelay = 2;

                    // 💡 Анимация "включения света"
                    if (lightRef.current) {
                        gsap.fromTo(lightRef.current, {
                            opacity: 0,
                            filter: 'brightness(0.3) blur(10px)',
                        }, {
                            opacity: 1,
                            filter: 'brightness(1) blur(0px)',
                            duration: 1.5,
                            ease: 'power2.out',
                            delay: globalDelay + 0.5,
                        });
                    }

                    // 🌀 Появление AnimatedCircle через 0.5 сек после света
                    if (circleRef.current) {
                        gsap.fromTo(circleRef.current, {
                            opacity: 0,
                            scale: 0.8,
                        }, {
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            ease: 'power2.out',
                            delay: globalDelay - 0.5,
                        });
                    }

                    // 🃏 Анимации карточек
                    leftCards.current.forEach((el, i) => {
                        if (el) {
                            gsap.fromTo(el, {
                                x: -100,
                                opacity: 0,
                            }, {
                                x: 0,
                                opacity: 1,
                                duration: 1.6,
                                ease: 'power2.out',
                                delay: globalDelay + i * 0.3,
                            });
                        }
                    });

                    rightCards.current.forEach((el, i) => {
                        if (el) {
                            gsap.fromTo(el, {
                                x: 100,
                                opacity: 0,
                            }, {
                                x: 0,
                                opacity: 1,
                                duration: 1.5,
                                ease: 'power2.out',
                                delay: globalDelay + i * 0.3,
                            });
                        }
                    });

                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);
    return (


        <div ref={containerRef} className="relative hidden md:block md:sticky md:top-44 w-full h-[560px] sm:h-[700px] md:h-[752px] ">


            <AnimatedImg />
            {/* FourCard — точно привязаны к точкам картинки */}

            <FourCard
                ref={el => leftCards.current[0] = el}
                customPosition="absolute opacity-0 2xl:left-[10%] 2xl:top-[2%]  xl:top-[1%] xl:left-[12%] lg:left-[5%] lg:top-[0%] md:top-[3%] md:left-[6%]  -bottom-[22%] -right-[7%] "
                text={`Analog inference<br /> through the Ohm’s<br /> law I = V G`}
            />
            <FourCard
                ref={el => rightCards.current[0] = el}
                customPosition="absolute opacity-0 2xl:-top-[8%] 2xl:left-[58%] xl:left-[65.5%] xl:bottom-[15%] lg:-top-[10%] lg:left-[70%]  md:-top-[2%] md:left-[60%] -right-[58%] -bottom-[14%] "
                text={`Analog data<br/> (voltages)`}
            />
            <FourCard
                ref={el => rightCards.current[1] = el}
                customPosition="absolute opacity-0 2xl:left-[53%] 2xl:top-[22%] xl:left-[68%] xl:top-[23%] lg:top-[24%] lg:left-[67%] md:-bottom-[19%] md:left-[55%] -bottom-[25%] -right-[55%] "
                text={`Analog output<br/> (currents) `}
            />
            <FourCard
                ref={el => leftCards.current[1] = el}
                customPosition="absolute opacity-0 2xl:left-[23%] xl:top-[10%] xl:left-[28%] lg:left-[17%] lg:top-[10%] md:-bottom-[13%] md:left-[21%] left-[22%] -bottom-[20%] "
                text={`Integration with<br/> CMOS circuitry`}
            />
            <FourCard ref={el => leftCards.current[2] = el}
                customPosition={'!absolute opacity-0 hidden 2xl:bottom-[44%] 2xl:-left-[15%] xl:bottom-[45%] xl:-left-[15%] lg:bottom-[45%] lg:-left-[25%] lg:-right-[10%] md:bottom-[53%] md:-left-[22%] md:-right-[10%] md:block'} text={`Spintronic<br/> Synapse`} />
            <FourCard
                ref={el => leftCards.current[3] = el}
                customPosition={'!absolute opacity-0 !py-[5px] !px-[10px] hidden 2xl:bottom-[55%] 2xl:left-[2%] xl:bottom-[57%] xl:left-[6%] lg:bottom-[57%] lg:left-[5%] lg:-right-[10%] md:bottom-[60%] md:-left-[2%] md:-right-[10%] md:block'} text={`100 nm`} />
            <div className='relative 
            2xl:-top-35 2xl:-left-40 2xl:rotate-2 
            xl:rotate-4 
            lg:-top-36 lg:-left-36 lg:rotate-2
            -top-24 -left-40 rotate-2'>
                <img ref={lightRef} className='absolute left-[96px] w-[350px] lg:h-[200px] h-[195px] 2xl:h-[200px] xl:h-[202px] -top-[55px]' src='/Four/light.png' />
                <AnimatedCircle lottieRef={circleRef} customStyle={`relative `} width={`200px`} height={`200px`} />
            </div>

        </div>

    )
}

export default FourImage
