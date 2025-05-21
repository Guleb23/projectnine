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
                className="mono text-[10px] sm:text-sm   bg-[radial-gradient(91.74%_158.57%_at_left_center,#AAAAAA_0%,#00DA90_50%,rgba(225,255,222,0.25)_100%)] bg-clip-text text-transparent pb-6"
            >
                OUR SOLUTION
            </p>
            <div className="flex flex-col gap-2">
                <h2
                    ref={(el) => (elementsRef.current[1] = el)}
                    className="sm:text-[37px] text-[23px] font-bold gradient-text-green leading-[120%] lg:w-auto w-[320px]"
                >
                    SpinEdge cuts energy use vs. GPUs/TPUs
                </h2>
                <h2
                    ref={(el) => (elementsRef.current[2] = el)}
                    className="sm:text-[97px] text-[48px] xl:text-8xl font-bold bg-[radial-gradient(143.46%_554.36%_at_-75.93%_-93%,_#16F501_0%,_#00DA90_100%)] bg-[length:200%_100%] bg-left text-transparent bg-clip-text h-full"
                >
                    by 200x
                </h2>
            </div>
        </div>
    )
}

export default Head