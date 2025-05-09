import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Head = () => {
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
        <div ref={containerRef}>
            <h1
                ref={(el) => (elementsRef.current[0] = el)}
                className="text-[77px] leading-[120%] gradient-text-green"
            >
                SpinEdge Key IP<br /> Advantages
            </h1>
            <div className="flex flex-col">
                <p
                    ref={(el) => (elementsRef.current[1] = el)}
                    className="text-[77px] pt-[4%] font-bold bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text"
                >
                    32K×32K
                </p>
                <p
                    ref={(el) => (elementsRef.current[2] = el)}
                    className="mono text-[19px] gradient-text-green"
                >
                    Massive crossbar architecture<br /> eliminating voltage imbalance
                </p>
            </div>
        </div>
    )
}

export default Head