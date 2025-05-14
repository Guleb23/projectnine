import React, { useEffect, useRef } from 'react'
import Header from "../NewSecond/Header"
import LastCard from '../../Components/LastCard'
import AnimatedCircle from '../../Components/AnimatedCircle'
import { Vector3419 } from '../LastFour/Vector3419'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FourLastSection = () => {
    const containerRef = useRef(null);


    const centerImgRef = useRef(null);
    const bigImgRef = useRef(null);
    const topCircle = useRef(null);
    const bottomCircle = useRef(null);
    const topImage = useRef(null);
    const btmImage = useRef(null);
    const circle = useRef(null);
    const cardsRef = useRef([]);

    // внутри компонента
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%', // когда верх контейнера дойдет до 70% окна
                    toggleActions: 'play none none none',

                },
                defaults: { ease: "power2.out" }
            });

            // bigImage появляется
            tl.fromTo(bigImgRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1 }
            );

            // круги и изображения сверху/снизу
            tl.fromTo(topCircle.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 }, "-=0.5"
            );
            tl.fromTo(bottomCircle.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 }, "-=0.7"
            );
            tl.fromTo(topImage.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 }, "-=0.6"
            );
            tl.fromTo(btmImage.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 }, "-=0.7"
            );
            tl.fromTo(cardsRef.current,
                { x: 200, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.2, stagger: 0.2 }, "-=0.7"
            );
            // center image просто с opacity
            tl.fromTo(centerImgRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1.2 }, "-=0.5"
            );

            tl.fromTo(circle.current,
                { opacity: 0 },
                { opacity: 1, duration: 1.2 }, "-=0.2"
            );
        });




    }, []);
    return (
        <div className='w-screen min-h-screen h-full relative flex lg:justify-start lg:items-start items-center justify-center sm:pt-[3%] pt-[20%]'>

            <div ref={containerRef} className='absolute w-[1259px] h-[904px]  -top-[38%]  2xl:-left-[5%]  2xl:-top-[33%] xl:-left-[23%] lg:-left-[32.3%] hidden lg:block '>
                <img ref={bigImgRef} src='/Four/bigLeft.png' className=' hidden lg:block ' width={1259} height={904} />

                <div className='absolute w-[654px] h-[1009px] top-1/2 mt-16 -translate-y-1/2 -translate-x-1/2 left-1/2'>
                    <img ref={topCircle} src='/Four/top.png' className='-mb-40 hidden lg:block relative' width={654} height={654} />
                    <img ref={bottomCircle} src='/Four/btm.png' className=' -mt-70 hidden lg:block ' width={654} height={654} />
                    <img ref={topImage} src='/Four/topImg.png' className='2xl:bottom-1/3 bottom-1/4 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:block relative' />
                    <img ref={btmImage} src='/Four/btmImg.png' className='absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:block ' />
                    <div className='w-[954px] h-[258px] absolute top-1/2 -translate-y-1/2 left-[29%] ' >
                        <div className='relative w-[284px] h-[258px]'>
                            <img ref={centerImgRef} width={284} height={258} src='/center.png' />
                            <AnimatedCircle lottieRef={circle} width={`130`} height={`130`} customStyle={`!pt-0 select-none pointer-events-none top-[64%] left-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:block`} />
                            <Vector3419 customStyle={`absolute left-1/2 -top-[34%]`} />
                        </div>


                    </div>
                </div>
            </div>






            <img src='/Four/Blur.png' className='absolute xl:-top-[25%] xl:-right-[15%] hidden lg:block' width={1442} height={815} />

            <div className='flex-[0_0_49%] w-0 hidden lg:block  '>

            </div>
            <div className='lg:flex-[0_0_51%] flex-[1_1_100%] w-full lg:items-start  items-center flex flex-col  lg:gap-46'>
                <Header
                    four={innerWidth > 640}
                    customStyles={`lg:!text-left text-left lg:items-start items-center -mt-[14%] sm:w-[500px] w-[335px] `}
                    top={`The Quantum Leap in AI Hardware`}
                    mid={`From Lab to Launch — No Fab Needed`}
                    bottom={`Our non-volatile memory and magnetic sensors are already built, tested, and production-ready. Spintronic components integrate seamlessly with existing microelectronics — no custom fabs, no exotic processes.`} />

                <div className='  w-[500px] h-[704px]  relative lg:hidden block'>
                    <img src='/Four/bigLeft.png' className=' absolute ' width={1259} height={904} />

                    <img src='/Four/leftLeft.png' className='absolute  right-[19%] h-[700px]' />

                    <img src='/Four/fone.png' className='absolute   -translate-y-1/2  -translate-x-1/2 left-[36%] top-[50%]' />
                    <AnimatedCircle width={`80`} height={`80`} customStyle={`!pt-0 select-none pointer-events-none top-[53%] left-[28%] -translate-y-1/2 `} />


                </div>
                <div className='flex  sm:gap-15  pt-[6px]'>
                    <LastCard ref={el => cardsRef.current[0] = el} img={`/Four/cardLeft.png`} Title={`Non-Volatile<br/> Memory`} sub={`Spintronics non-volatile memory retains data without power, crucial for automotive and low-power AI applications`} />
                    <LastCard ref={el => cardsRef.current[1] = el} img={`/Four/cardRight.png`} Title={`Advanced Magnetic Sensors`} sub={`Spintronic sensors are<br/> the best fit for edge<br/> and IoT devices`} />

                </div>
            </div>

        </div>
    )
}

export default FourLastSection
