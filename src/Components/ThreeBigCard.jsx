import React, { useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ThreeBigCard = () => {
    const circ = useRef(null);

    useGSAP(() => {
        // Устанавливаем начальную прозрачность
        gsap.set(circ.current, {
            y: 0,
            opacity: 1, // Шарик сразу видимый
            left: "50%",
            top: 0,
            display: "none"
        });

        // Анимация движения сверху вниз с появлением
        gsap.to(circ.current, {
            y: 200,
            display: "block",
            scrollTrigger: {
                trigger: '#card',
                start: "top 28%",
                end: "bottom center",
                scrub: true,
            }
        });

    }, []);

    return (
        <div
            id="card"
            className="flex justify-center items-center pt-20 md:pt-36 relative w-full h-[500px] md:h-[600px] px-4 overflow-hidden"
        >
            {/* Анимированный шарик */}
            <img
                className="absolute select-none pointer-events-none z-10 -translate-x-1/2 blur-md opacity-100"
                ref={circ}
                width={250}
                height={250}
                src="/ball.gif"
                alt="Animated Ball"
                style={{
                    top: 0,
                    left: "50%"
                }}
            />

            {/* Фон карточки */}
            <img
                className="select-none pointer-events-none absolute w-[150%] md:w-auto max-w-none z-0 "
                src="/Three/bigfone.png"
                alt="Big background"
            />

            {/* Контент карточки */}
            <div className="flex flex-col items-center gap-4 md:gap-6 z-50 text-center">
                <p className="text-xl md:text-4xl font-bold gradient-text-green max-w-[20ch] md:max-w-4xl leading-tight md:leading-[3rem]">
                    The global data volume is 200 trillion gigabytes now and set to double within the next 4 years
                </p>
                <p className="mono text-xs md:text-sm gradient-text-green leading-snug">
                    To sustainably manage AI's energy consumption,<br className="hidden md:block" />
                    radical new approaches in computation are essential.
                </p>
                <button className="bg-[radial-gradient(circle,_#16F501,_#00DA90)] w-48 md:w-56 h-10 md:h-12 rounded-lg text-sm md:text-[16px] font-bold">
                    Meet the Future →
                </button>
            </div>
        </div>
    )
}

export default ThreeBigCard;