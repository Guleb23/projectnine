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
            <p
                ref={(el) => (elementsRef.current[0] = el)}
                className="mono text-sm  gradient-text-green pb-6"
            >
                Our Solution
            </p>
            <div className="flex flex-col gap-2">
                <h2
                    ref={(el) => (elementsRef.current[1] = el)}
                    className="text-[37px] font-bold gradient-text-green leading-[120%]"
                >
                    SpinEdge cuts energy use vs. GPUs/TPUs
                </h2>
                <h2
                    ref={(el) => (elementsRef.current[2] = el)}
                    className="text-[97px] xl:text-8xl font-bold bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text h-29"
                >
                    by 200x
                </h2>
            </div>
        </div>
    )
}

export default Head