import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ThreeFone from '../Components/ThreeFone';
import ThreeCard from '../Components/ThreeCard';

gsap.registerPlugin(ScrollTrigger);

const ThreeScetion = () => {
    const cardRefs = useRef([]);
    cardRefs.current = [];

    // Добавление ссылок на карточки
    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    useEffect(() => {
        cardRefs.current.forEach((card, index) => {
            const image = card.querySelector('.card-img');
            const title = card.querySelector('.card-title');
            const subtitle = card.querySelector('.card-sub');
            const fromX = index % 2 === 0 ? -50 : 50; // чередуем вылет слева/справа

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: 'top center',
                    toggleActions: 'play none none none',
                }
            });

            // Zoom-in для картинки
            tl.fromTo(image,
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
            );

            // Вылет заголовка
            tl.fromTo(title,
                { x: fromX, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.5, ease: 'power2.out' },
                "-=1.2" // почти одновременно с концом картинки
            );

            // Вылет подзаголовка с задержкой
            tl.fromTo(subtitle,
                { x: fromX, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.5, ease: 'power2.out' },
                "-=1.0" // 0.2 сек позже заголовка
            );
        });
    }, []);

    return (
        <ThreeFone id="three">
            <ThreeCard ref={addToRefs} img={`/Three/one.png`} mainText={`Physics’ Deadline`} customStyles={`sm:justify-self-center justify-self-start lg:ml-[31%]`} subText={`GPUs hit limits — 3nm chips improve efficiency by just 15%`} />
            <ThreeCard ref={addToRefs} img={`/Three/two.png`} mainText={`Billion-Dollar Burn`} customStyles={`self-end sm:justify-self-center justify-self-end lg:ml-[7%] lg:-mb-[26.6%]`} subText={`AI hardware costs could exceed $880B by 2030 (Fortune)`} />
            <ThreeCard ref={addToRefs} img={`/Three/three.png`} mainText={`Energy Apocalypse`} customStyles={`self-start  sm:justify-self-center justify-self-start lg:mr-[8%] lg:mt-[6%] `} subText={`Data centers may consume 21% 
of global electricity`} />
            <ThreeCard ref={addToRefs} img={`/Three/four.png`} mainText={`Precision Tax`} customStyles={`md:self-end sm:justify-self-center justify-self-end lg:mr-[32%] lg:-mb-[32%]`} subText={`Every 1% accuracy increase 
costs $10M in energy.`} />

        </ThreeFone>
    )
}

export default ThreeScetion
