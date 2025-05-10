import React, { useRef, useEffect } from 'react'
import FiveFone from './FiveFone'
import Header from '../NewSecond/Header'
import Card from './Card'
import Table from './Table'
import AnimatedImg from './AnimatedImg'
import { gsap } from 'gsap'

const FiveSection = () => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const containerRef = useRef(null); // отслеживаем только эту часть

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const delay = 0.3;

                    // Animate left card
                    if (leftRef.current) {
                        gsap.fromTo(leftRef.current, {
                            x: -100,
                            opacity: 0,
                        }, {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            ease: 'power2.out',
                            delay,
                        });
                    }

                    // Animate right card
                    if (rightRef.current) {
                        gsap.fromTo(rightRef.current, {
                            x: 100,
                            opacity: 0,
                        }, {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            ease: 'power2.out',
                            delay,
                        });
                    }

                    observer.disconnect(); // анимация 1 раз
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <FiveFone id="five">
            <Header
                top={`Benchmark Results:<br/>Digital → Analog → Spintronic`}
                mid={`Outperforming the Giants`}
                bottom={`SpinEdge delivers 200x better efficiency than industry<br/> leaders — with seamless integration`}
            />

            {/* Только эту часть мы анимируем */}
            <div ref={containerRef} className='flex flex-col lg:flex-row mt-4 min-h-[500px]'>
                <div ref={leftRef} className='flex-[0_0_30%] flex justify-center lg:justify-end lg:pt-[3%]'>
                    <Card
                        img={`/Five/Left.png`}
                        text={`Delivers up to 1000 TOPS/W, 20<br/> TOPS/mm², and unparalleled<br/> cost-effectiveness opacity-0`}
                        title={`Superior Performance`}
                    />
                </div>

                <div className='flex-[0_0_40%] flex justify-center'>
                    <AnimatedImg customStyle={`z-50`} />
                </div>

                <div ref={rightRef} className='flex-[0_0_30%] flex lg:items-end lg:justify-start items-center justify-center opacity-0'>
                    <Card
                        img={`/Five/Right.png`}
                        text={`Can be deployed as a chiplet or<br/> IP core, compatible with<br/> existing AI chips`}
                        title={`Flexible Integration`}
                    />
                </div>
            </div>

            <h3 className='flex justify-center items-center font-bold text-[23px] gradient-text-green text-center pt-[4%]'>
                Boosting client AI chips energy<br /> efficiency (TOPS/W)
            </h3>

            <h3 className='flex justify-center items-center font-medium mono text-[13px] gradient-text-green text-center pt-[1.5%]'>
                * SpinEdge Digital twin modeling
            </h3>

            <div className='flex justify-center items-center pt-[2%]'>
                <Table />
            </div>
        </FiveFone>
    )
}

export default FiveSection
