import React, { useRef } from 'react'
import FourCard from './FourCard'
import ThreeMiniSect from './ThreeMiniSect'
import Head from '../Sections/FourSection/Head'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import AnimatedImg from '../Sections/FourSection/AnimatedImg'
import AnimatedCircle from './AnimatedCircle'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const FourLeft = () => {
    const circleRef = useRef(null);
    const firstLeft = useRef(null);
    const leftCard = useRef([])
    const containerRef = useRef(null);
    const lightRef = useRef(null);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: circleRef.current,
            start: 'center center',     // когда circle входит в зону видимости
            end: 'center center',
            onLeave: () => {
                gsap.to(lightRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            },
            onEnterBack: () => {
                gsap.to(lightRef.current, {
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            },
        });
        // Пример липкой анимации, если circle движется вместе с блоком
        gsap.to(circleRef.current, {
            y: () => {
                const height = containerRef.current.offsetHeight;
                return height - 500; // настраиваемое смещение
            },
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: '20% center',
                end: '85% center',
                scrub: 1.5, // увеличиваем плавность

            },
        });
        gsap.fromTo(firstLeft.current, {
            x: -350,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut',
        })

        gsap.fromTo(firstLeft.current, {
            x: -350,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        });

        leftCard.current.forEach((card, index) => {
            gsap.fromTo(card, {
                x: -100,
                opacity: 0
            }, {
                scrollTrigger: {
                    trigger: card,
                    start: "top center",

                },
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            });
        });

    }, [])
    return (
        <div ref={containerRef} className='flex flex-col gap-6 2xl:mb-[30%] xl:mb-[35%] lg:mb-[35%] md:mb-[50%]' >
            <Head />
            <div ref={firstLeft} className='flex flex-col sm:pt-3  gap-12 relative mb-14'>
                <p className='mono sm:text-[15px] text-[12px] gradient-text-green'>GPUs are hitting physical limits —<br /> while we rewrite the rules</p>
                <div className='hidden sm:block mono text-[12px] gradient-text-green'>*Passed the rigorous technological<br /> assessment by European Innovation Council<br /> and Israel Innovation Authority

                </div>


            </div>
            <div className='relative h-full block sm:hidden'>
                <AnimatedImg customStyle={`!w-[250px] !h-[250px] !top-20 !left-[75%]`} />
                {/* FourCard — точно привязаны к точкам картинки */}

                <FourCard

                    customPosition="absolute -top-14 -right-[12%] "
                    text={`Analog inference<br /> through the Ohm’s<br /> law I = V G`}
                />
                <FourCard

                    customPosition="absolute -right-[77%] -top-28 "
                    text={`Analog data<br/> (voltages)`}
                />
                <FourCard

                    customPosition="absolute   top-3 -right-[75%] "
                    text={`Analog output<br/> (currents) `}
                />
                <FourCard

                    customPosition="absolute   left-[28%] -bottom-[20%] "
                    text={`Integration with<br/> CMOS circuitry`}
                />
                <FourCard
                    customPosition={'!absolute  hidden 2xl:bottom-[44%] 2xl:-left-[15%] xl:bottom-[45%] xl:-left-[15%] lg:bottom-[45%] lg:-left-[25%] lg:-right-[10%] md:bottom-[53%] md:-left-[22%] md:-right-[10%] md:block'} text={`Spintronic<br/> Synapse`} />
                <FourCard

                    customPosition={'!absolute  !py-[5px] !px-[10px] hidden 2xl:bottom-[55%] 2xl:left-[2%] xl:bottom-[57%] xl:left-[6%] lg:bottom-[57%] lg:left-[5%] lg:-right-[10%] md:bottom-[60%] md:-left-[2%] md:-right-[10%] md:block'} text={`100 nm`} />
                <div className='relative 
            -top-42 -left-10 '>
                    <img ref={lightRef} className='absolute left-[56px] w-[150px] -top-[28px]' src='/Four/light.png' />
                    <AnimatedCircle lottieRef={circleRef} customStyle={`sticky `} width={`100`} height={`100`} />
                </div>
            </div>

            <div className='flex flex-col gap-15 md:items-start items-end'>

                <ThreeMiniSect ref={el => leftCard.current[0] = el} num={`01`} Title={`Eliminates the Memory Bottleneck`} sub={`Performs energy-efficient MAC operations directly in memory, removing data transfer costs`} />
                <ThreeMiniSect ref={el => leftCard.current[1] = el} num={`02`} Title={`Kirchhoff's Laws at Quantum Scale`} sub={`Spintronic crossbars enable ultra-low power parallel computation through electron spin dynamics`} />
                <ThreeMiniSect ref={el => leftCard.current[2] = el} num={`03`} Title={`Scalable Accuracy for Real-World AI`} sub={`Proprietary multi-bit cell design and smart quantization maintain precision in massive 32K×32K arrays`} />
                <ThreeMiniSect ref={el => leftCard.current[3] = el} num={`04`} Title={`Future-Proof AI Acceleration`} sub={`Compact non-volatile technology pairs with existing digital systems for instant upgrades`} />
            </div>
        </div>
    )
}

export default FourLeft
