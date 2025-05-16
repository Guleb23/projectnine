import React, { useRef, useEffect } from 'react'
import Fone from "./Fone"
import Header from '../NewSecond/Header'
import Card from './Card'
import Table from './Table'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SevenSection = () => {
    const cardsRef = useRef([])
    const teamHeaderRef = useRef([])

    useEffect(() => {
        // Анимация карточек
        cardsRef.current.forEach((card, index) => {
            if (!card) return

            gsap.fromTo(
                card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            )

            // Параллакс эффект
            gsap.to(card, {
                y: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 3,
                },
            })
        })

        // Анимация заголовка "Team members and Advisors"
        if (teamHeaderRef.current) {
            gsap.fromTo(
                teamHeaderRef.current,
                { x: -160, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.6,
                    ease: 'power2.out',
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: teamHeaderRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            )
        }
    }, [])

    return (
        <Fone>
            <div className='w-full h-full flex flex-col pt-8'>
                <div className='w-full px-[21px]'>
                    <Header
                        top={`BEHIND THE BREAKTHROUGH`}
                        mid={`The Minds Rewriting<br/> AI’s Future`}
                        bottom={`100+ years of combined experience at IBM, Google, and top<br/> research labs — now united to solve AI’s hardest problem`}
                    />
                </div>

                <div className='w-full overflow-x-hidden sm:hidden block'>
                    <img
                        src='/Seven/Fone.png'
                        className='w-[1057px] h-[512px] object-center object-cover'
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[35px] md:gap-y-[0px] px-[20px] -mt-20 pb-10 md:-mt-0">
                    <div className="justify-self-start md:ml-[13%] md:mt-[17%]">
                        <Card
                            ref={el => (cardsRef.current[0] = el)}
                            img={`/Seven/People.png`}
                            name={`Dr. Dmitry<br/> Leshchiner`}
                            work={`Chief Technology Officer`}
                            desc={`AI algorithms & neuromorphic<br/> technologies; SW development:<br/> 20+ years @ Google, Yahoo, Yandex`}
                        />
                    </div>

                    <div className="justify-self-end md:mr-[12%] md:-mt-[29%]">
                        <Card
                            ref={el => (cardsRef.current[1] = el)}
                            img={`/Seven/People.png`}
                            name={`Dr. Konstantin<br/> Zvezdin`}
                            work={`CEO`}
                            desc={`R&D MRAM and microwave<br/> spintronics: 20+ years @ Fiat,<br/> European Projects`}
                        />
                    </div>
                    <div></div>
                    <div className="justify-self-start self-start md:self md:-mt-[25%] mt-[35px]">
                        <Card
                            ref={el => (cardsRef.current[2] = el)}
                            img={`/Seven/People.png`}
                            name={`Dr. Nir Karasikov`}
                            work={`Chairman`}
                            desc={`Senior leadership in the High-<br/>Tech industry and business: 25+<br/> year executive @ Nanomotion`}
                        />
                    </div>
                </div>

                <div className='px-[6%] mt-[10px]'>
                    <p ref={el => teamHeaderRef.current[0] = el} className='md:text-[13px] text-[10px] mono bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text pt-[35px] pb-2'>
                        AND ALSO
                    </p>
                    <h2
                        ref={el => teamHeaderRef.current[1] = el}
                        className='gradient-text-green md:text-[37px] text-[19px] font-bold pb-[25px]'
                    >
                        Team members<br /> and Advisors
                    </h2>
                    <div className='flex justify-start'>
                        <Table />
                    </div>
                </div>
            </div>
        </Fone>
    )
}

export default SevenSection
