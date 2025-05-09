import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SecondFone = ({ children, id }) => {
    const sectionRef = useRef(null);
    const blurRef = useRef(null);
    const firstAnimation = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        // Анимируем greenBlur (index 1)
        tl.fromTo(
            firstAnimation.current[1],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 2, delay: 1, ease: 'power2.out' }
        );

        // Анимируем step2 (index 2)
        tl.fromTo(
            firstAnimation.current[2],
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' },
            '<' // немного перекрываем с предыдущей
        );


    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className="bg-black w-screen h-screen relative z-50 flex  justify-center items-center overflow-hidden pt-[8%]"
        >
            <img
                ref={el => firstAnimation.current[2] = el}
                className="absolute top-0 h-full max-h-screen max-w-full m-auto select-none pointer-events-none z-0"
                src="/Second/step2.png"
                alt="Step 2"
            />
            <img
                className="absolute inset-0 m-auto select-none pointer-events-none z-1 opacity-40"
                src="/Second/blur.png"
                alt="Blur"
            />
            <img
                className="absolute inset-0 h-full m-auto select-none pointer-events-none z-0 rounded-4xl"
                src="/Second/whiteblur.png"
                alt="White Blur"
            />
            <img
                ref={el => firstAnimation.current[1] = el}
                className="absolute w-full select-none pointer-events-none z-1 opacity-40"
                src="/Second/greenBlur.png"
                alt="Green Blur"
            />
            <img
                ref={blurRef}
                className="hidden" // если больше не нужен — можно убрать из DOM или скрыть
                alt="Hidden Blur"
            />
            {children}
            <div className="absolute opacity-70 bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
        </section>
    );
};

export default SecondFone;
