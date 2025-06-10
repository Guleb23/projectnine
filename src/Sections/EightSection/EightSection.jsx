import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import Fone from './Fone';
import Header from '../NewSecond/Header';
import Card from './Card';

const EightSection = () => {
    const [open, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const firstRef = useRef(null);
    const secondRef = useRef(null);

    // Мемоизируем начальную высоту контейнера
    const initialHeight = useMemo(() => 515, []);

    // Мемоизируем функцию для анимации открытия/закрытия
    const animateContainer = useCallback((isOpen) => {
        if (!containerRef.current) return;

        const fullHeight = containerRef.current.scrollHeight;
        const animations = [];

        // Анимация высоты контейнера
        const containerAnimation = gsap.to(containerRef.current, {
            height: isOpen ? fullHeight : initialHeight,
            duration: 1,
            ease: "power2.inOut"
        });
        animations.push(containerAnimation);

        // Анимация прозрачности для первого блока
        const firstAnimation = gsap.to(firstRef.current, {
            opacity: isOpen ? 100 : 0,
            duration: 1,
            ease: "power2.inOut"
        });
        animations.push(firstAnimation);

        // Анимация прозрачности для второго блока
        const secondAnimation = gsap.to(secondRef.current, {
            opacity: isOpen ? 100 : 0,
            duration: 1,
            ease: "power2.inOut"
        });
        animations.push(secondAnimation);

        // Возвращаем функцию очистки
        return () => {
            animations.forEach(animation => animation.kill());
        };
    }, [initialHeight]);

    useEffect(() => {
        const cleanup = animateContainer(open);
        return () => {
            if (cleanup) cleanup();
        };
    }, [open, animateContainer]);

    // Мемоизируем стили для контейнера
    const containerStyles = useMemo(() => ({
        height: `${initialHeight}px`
    }), [initialHeight]);

    // Мемоизируем стили для кнопки
    const buttonStyles = useMemo(() => ({
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '2px solid rgba(0, 218, 145, 0.19)',
        borderRadius: '0.5rem',
        padding: '13px 22px',
        marginTop: '50px',
        width: '120px',
        height: '50px'
    }), []);

    return (
        <Fone id="eight">
            <Header
                top="INSIGHTS & INNOVATION"
                mid="Read also:"
                bottom="Cutting-edge research, industry trends,<br/> and SpinEdge breakthroughs"
            />
            <div
                ref={containerRef}
                className="flex z-50 pt-[4%] px-[6%] gap-8 xl:justify-center flex-wrap overflow-y-hidden overflow-x-visible"
                style={containerStyles}
            >
                <div className='flex'>
                    <Card
                        top="Category"
                        mid="Blog title heading will go here 1"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/one.png"
                    />
                    <Card
                        top="Category"
                        mid="Blog title heading will go here 2"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/two.png"
                    />
                    <Card
                        top="Category"
                        mid="Blog title heading will go here 3"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                </div>
                <div ref={firstRef} className='flex'>
                    <Card
                        top="Category"
                        mid="Blog title heading will go here"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                    <Card
                        top="Category"
                        mid="Blog title heading will go here"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                    <Card
                        top="Category"
                        mid="Blog title heading will go here"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                </div>
                <div ref={secondRef} className='flex'>
                    <Card
                        top="Category"
                        mid="Blog title heading will go here"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                    <Card
                        top="Category"
                        mid="Blog title heading will go here"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                    <Card
                        top="Category"
                        mid="Blog title heading will go here"
                        bottom="Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros."
                        img="/Eight/three.png"
                    />
                </div>
            </div>
            <div className='flex w-full justify-center items-center'>
                <button
                    onClick={() => setIsOpen(!open)}
                    style={buttonStyles}
                >
                    <p className='bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text font-bold text-[15px]'>
                        {open ? 'Hide' : 'View all'}
                    </p>
                </button>
            </div>
        </Fone>
    );
};

export default React.memo(EightSection);