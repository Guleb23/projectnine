import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Header = ({ top, mid, bottom, customStyles, four = false }) => {
    const containerRef = useRef(null)
    const elementsRef = useRef([])

    useEffect(() => {
        if (!containerRef.current) return

        gsap.fromTo(
            elementsRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        )
    }, [])

    return (
        <div
            ref={containerRef}
            className={`flex flex-col text-center gap-6 items-center justify-between ${customStyles || ""}`}
        >
            <p
                ref={el => (elementsRef.current[0] = el)}
                className={`${four ? "w-[500px]" : ""} bg-[radial-gradient(circle,_#00DA90_0%,_#4d5645_80%)] bg-clip-text text-transparent w-full mono sm:text-[19px] text-[10px] font-normal`}
                dangerouslySetInnerHTML={{ __html: top }}
            />
            <h1
                ref={el => (elementsRef.current[1] = el)}
                className={`${four ? "w-[500px]" : ""} sm:text-[35px] text-[23px] w-full leading-[120%] font-bold gradient-text-green`}
                dangerouslySetInnerHTML={{ __html: mid }}
            />
            <p
                ref={el => (elementsRef.current[2] = el)}
                className={`${four ? "w-[500px]" : ""} mono text-[12px] sm:text-[19px] gradient-text-green`}
                dangerouslySetInnerHTML={{ __html: bottom }}
            />
        </div>
    )
}

export default Header
