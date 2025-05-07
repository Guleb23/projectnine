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
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#three", // Триггер на секцию
                start: "top 80%",  // Когда секция попадет в 80% видимости
                toggleActions: "play none none none",
            }
        });

        // Анимация для карточек, которые должны выезжать слева и справа
        cardRefs.current.forEach((card, index) => {
            const direction = index % 2 === 0 ? -200 : 200;  // Чередуем направления (лево/право)
            const opacityStart = 0;
            const opacityEnd = 1;
            const xStart = direction;
            const xEnd = 0;

            tl.fromTo(
                card,
                { x: xStart, opacity: opacityStart },
                { x: xEnd, opacity: opacityEnd, duration: 1, ease: "power3.out" }
            );
        });
    }, []);
    return (
        <ThreeFone id="three">
            <ThreeCard ref={addToRefs} img={`/Three/one.png`} mainText={`Physics’ Deadline`} customStyles={`justify-self-center ml-[31%]`} subText={`GPUs hit limits — 3nm chips improve efficiency by just 15%`} />
            <ThreeCard ref={addToRefs} img={`/Three/two.png`} mainText={`Billion-Dollar Burn`} customStyles={`self-end justify-self-center ml-[7%] -mb-[12%]`} subText={`AI hardware costs could exceed $880B by 2030 (Fortune)`} />
            <ThreeCard ref={addToRefs} img={`/Three/three.png`} mainText={`Energy Apocalypse`} customStyles={`self-start justify-self-center mr-[8%]`} subText={`Data centers may consume 21% 
of global electricity`} />
            <ThreeCard ref={addToRefs} img={`/Three/four.png`} mainText={`Precision Tax`} customStyles={`md:self-end justify-self-center mr-[30%] -mb-[15%]`} subText={`Every 1% accuracy increase 
costs $10M in energy.`} />

        </ThreeFone>
    )
}

export default ThreeScetion
