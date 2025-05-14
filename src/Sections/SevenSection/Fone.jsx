import React, { useRef } from 'react'
import Header from '../NewSecond/Header'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Fone = ({ id, children }) => {
    const foneRef = useRef(null);
    const blurRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(foneRef.current, {
            scale: 0.9,
            opacity: 0,
        }, {
            opacity: 1,
            scale: 1,
            duration: 3,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        })


    }, [])


    return (
        <section ref={sectionRef} id={id} className='bg-black w-screen h-full relative   pt-[1%] pb-[3%]'>
            <div className='min-w-screen min-h-screen h-[135vh] absolute'>

                <img ref={foneRef} src='/Seven/Fone.png' className='absolute  -translate-y-1/2 top-[55%] -translate-x-1/2 left-1/2' />
                <img ref={blurRef} src='/Seven/Blur.png' className='absolute ' />


            </div>
            <img
                className="absolute inset-0  h-full m-auto select-none pointer-events-none z-0 rounded-4xl"
                src="/Second/whiteblur.png"
                alt="White Blur"
            />
            {children}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none" />


        </section>
    )
}

export default Fone
