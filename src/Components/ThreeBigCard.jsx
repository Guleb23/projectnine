import React, { useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ThreeBigCard = () => {
    const circ = useRef(null);

    useGSAP(() => {
        // Устанавливаем начальную прозрачность и размер
        gsap.set(circ.current, {
            y: 0,
            opacity: 1, // Шарик сразу видимый
            left: "50%",
            top: '20%',
            display: "none",
            scale: 0.7, // Начальный размер (меньше обычного)
        });

        // Анимация движения сверху вниз с увеличением размера
        gsap.to(circ.current, {
            y: 200,
            scale: 1, // Увеличиваем до обычного размера
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

            className="flex justify-center items-center pt-20 md:pt-35 relative w-full h-full md:h-[600px] min-h-[700px] px-4 overflow-hidden"
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
                    top: '20%',
                    left: "50%"
                }}
            />

            {/* Фон карточки */}
            <img
                id="card"
                className="select-none pointer-events-none absolute w-[150%] md:w-auto max-w-none z-0 "
                src="/Three/bigfone.png"
                alt="Big background"
            />

            {/* Контент карточки */}
            <div className="flex flex-col items-center gap-4 md:gap-[25px] z-50 text-center ">
                <p className="text-xl text-[37px] font-bold gradient-text-green max-w-[20ch] md:max-w-4xl leading-tight md:leading-[3rem]">
                    The global data volume is 200 trillion gigabytes now and <span className='bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text'>set to double</span><br /> within the next 4 years
                </p>
                <p className="mono text-[15px] md:text-sm gradient-text-green leading-snug">
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