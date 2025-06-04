import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Fone from './Fone';
import Header from '../NewSecond/Header';
import Card from './Card';

const EightSection = () => {
    const [open, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const firstRef = useRef(null);
    const secondRef = useRef(null);


    useEffect(() => {
        if (containerRef.current) {
            // Получаем полную высоту контента
            const fullHeight = containerRef.current.scrollHeight;

            if (open) {
                // Анимация открытия
                gsap.to(containerRef.current, {
                    height: fullHeight,
                    duration: 1,
                    ease: "power2.inOut"
                });
                gsap.to(firstRef.current, {
                    opacity: 100,
                    duration: 1,
                    ease: "power2.inOut"
                });
                gsap.to(secondRef.current, {
                    opacity: 100,
                    duration: 1,
                    ease: "power2.inOut"
                });
            } else {
                // Анимация закрытия
                gsap.to(containerRef.current, {
                    height: 515,
                    duration: 1,
                    ease: "power2.inOut"
                });
                gsap.to(firstRef.current, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.inOut"
                });
                gsap.to(secondRef.current, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.inOut"
                });
            }
        }
    }, [open]);

    return (
        <Fone id={`eight`}>
            <Header top={`INSIGHTS & INNOVATION`} mid={`Read also:`} bottom={`Cutting-edge research, industry trends,<br/> and SpinEdge breakthroughs`} />
            <div
                ref={containerRef}
                className="flex z-50 pt-[4%] px-[6%] gap-8 xl:justify-center flex-wrap overflow-y-hidden overflow-x-visible"
                style={{ height: '515px' }} // Начальная высота
            >
                <div className='flex'>
                    <Card top={`Category`} mid={`Blog title heading will go here 1`} bottom={`Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros.`} img={`/Eight/one.png`} />
                    <Card top={`Category`} mid={`Blog title heading will go here 2`} bottom={`Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros.`} img={`/Eight/two.png`} />
                    <Card top={`Category`} mid={`Blog title heading will go here 3`} bottom={`Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros.`} img={`/Eight/three.png`} />
                </div>
                <div ref={firstRef} className='flex '>
                    <Card top={`Category`} mid={`Blog title heading will go here`} bottom={`Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros.`} img={`/Eight/three.png`} />
                    <Card top={`Category`} mid={`Blog title heading will go here`} bottom={`Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros.`} img={`/Eight/three.png`} />
                    <Card top={`Category`} mid={`Blog title heading will go here`} bottom={`Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros.`} img={`/Eight/three.png`} />

                </div>
                <div ref={secondRef} className='flex '>
                    <Card top={`Category`} mid={`Blog title heading will go here`} bottom={`Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros.`} img={`/Eight/three.png`} />
                    <Card top={`Category`} mid={`Blog title heading will go here`} bottom={`Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros.`} img={`/Eight/three.png`} />
                    <Card top={`Category`} mid={`Blog title heading will go here`} bottom={`Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros.`} img={`/Eight/three.png`} />
                </div>
            </div>
            <div className='flex w-full justify-center items-center'>
                <button
                    onClick={() => setIsOpen(!open)}
                    className='bg-white/5 w-[120px] h-[50px] border-2 border-[#00da9131] rounded-lg px-[22px] py-[13px] mt-[50px]'
                >
                    <p className='bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text font-bold text-[15px]'>
                        {open ? 'Hide' : 'View all'}
                    </p>
                </button>
            </div>
        </Fone>
    );
};

export default EightSection;