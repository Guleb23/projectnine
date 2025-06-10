import React, { useRef, useMemo } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SecondFone from '../Components/SecondFone';
import AnimatedCircle from "../Components/AnimatedCircle";
import Header from './NewSecond/Header';
import FixedRedCircle from './FixedRedCircle';
import ReactDOM from 'react-dom';
gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
    const imgRef = useRef(null);     // Картинка in.png
    const finalRef = useRef(null);   // Картинка final.png
    const mainRef = useRef(null);    // Картинка main.png
    const circleRef = useRef(null);  // Реф для AnimatedCircle
    const redCircleRef = useRef(null);  // Реф для AnimatedCircle

    // Мемоизируем размеры для мобильных устройств
    const circleSize = useMemo(() => ({
        width: window.innerWidth < 640 ? 100 : 180,
        height: window.innerWidth < 640 ? 100 : 180
    }), []);

    useGSAP(() => {
        const isMobile = window.innerWidth < 640;
        const mm = gsap.matchMedia();

        // Оптимизированная анимация для main.png
        const mainAnimation = gsap.fromTo(
            mainRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Оптимизированная анимация для in.png
        const inAnimation = gsap.fromTo(
            imgRef.current,
            { opacity: 0, filter: 'blur(8px)' },
            {
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1.5,
                delay: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Оптимизированная анимация для final.png
        const finalAnimation = gsap.to(finalRef.current, {
            opacity: 1,
            duration: 1.5,
            delay: 2.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: finalRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });

        // Оптимизированная анимация для переключения между final.png и red.png
        const switchAnimation = ScrollTrigger.create({
            trigger: circleRef.current,
            start: "top 20%",
            end: "top 10%",
            scrub: true,
            onEnter: () => {
                gsap.to(finalRef.current, { opacity: 0, duration: 0.5 });
                gsap.to(redCircleRef.current, { opacity: 1, duration: 0.5 });
            },
            onLeaveBack: () => {
                gsap.to(redCircleRef.current, { opacity: 0, duration: 0.5 });
                gsap.to(finalRef.current, { opacity: 1, duration: 0.5 });
            },
        });

        // Оптимизированная анимация для круга
        const circleAnimation = gsap.fromTo(
            circleRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                delay: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#second",
                    start: "top 50%",
                    toggleActions: "play none none none",
                    once: true,
                },
            }
        );

        // Оптимизированные медиа-запросы для мобильных устройств
        if (isMobile) {
            mm.add("(max-width: 768px)", () => {
                const mobileAnimation = gsap.to(circleRef.current, {
                    scrollTrigger: {
                        trigger: circleRef.current,
                        start: "top 25%",
                        endTrigger: "#card",
                        end: "90% center",
                        pin: true,
                        scrub: true,
                        anticipatePin: 1,
                    },
                });

                const blurAnimation = gsap.fromTo(
                    circleRef.current,
                    { filter: "blur(0px)" },
                    {
                        filter: "blur(10px)",
                        scrollTrigger: {
                            trigger: "#card",
                            start: "top 35%",
                            end: "top 25%",
                            scrub: true,
                        },
                    }
                );

                return () => {
                    mobileAnimation.kill();
                    blurAnimation.kill();
                };
            });
        }

        // Очистка анимаций при размонтировании
        return () => {
            mainAnimation.kill();
            inAnimation.kill();
            finalAnimation.kill();
            switchAnimation.kill();
            circleAnimation.kill();
        };
    }, []);

    return (
        <SecondFone id="second">
            <div className="flex flex-col gap-10 sm:pt-0 pt-[21%] z-30">
                <Header
                    top={`AI's Ticking Time Bomb`}
                    mid={` The AI Energy Crisis:<br /> Why SpinEdge Matters`}
                    bottom={`AI is suffocating. Here's why.`}
                />
                <div className="flex justify-center items-center relative w-full h-full sm:mb-0 mb-[165px] z-[60]">
                    <img
                        ref={mainRef}
                        className="sm:max-w-full max-w-[213px] sm:max-h-full max-h-[222px] opacity-0 select-none pointer-events-none"
                        src="/Second/main.png"
                        alt="Main"
                        loading="lazy"
                    />
                    <img
                        ref={imgRef}
                        className="absolute pt-2 top-1/2 left-1/2 transform md:scale-100 scale-50 -translate-x-1/2 -translate-y-1/2 opacity-0 select-none pointer-events-none"
                        src="/Second/in.png"
                        alt="In"
                        loading="lazy"
                    />
                    <img
                        ref={finalRef}
                        className="absolute max-w-full max-h-full opacity-0 select-none pointer-events-none"
                        src="/Second/final.png"
                        alt="Final"
                        loading="lazy"
                    />
                    <img
                        ref={redCircleRef}
                        className="absolute max-w-full max-h-full opacity-0 select-none pointer-events-none"
                        src="/Second/red.png"
                        alt="Red Circle"
                        loading="lazy"
                    />
                    <AnimatedCircle
                        id={`fromTop`}
                        customStyle={`z-30`}
                        width={circleSize.width}
                        height={circleSize.height}
                        lottieRef={circleRef}
                    />
                </div>
            </div>
        </SecondFone>
    );
};

export default React.memo(SecondSection);
