import React, { useRef } from 'react'
import ThreeBigCard from './ThreeBigCard'

const ThreeFone = ({ children, id }) => {

    return (
        <section
            id={id}
            className="bg-black w-screen min-h-screen h-full relative pb-30 overflow-x-hidden overflow-y-visible pt-[8.5%]"
        >
            <img
                className="absolute inset-0 min-h-screen h-full m-auto select-none pointer-events-none z-0 rounded-4xl"
                src="/Second/whiteblur.png"
                alt="White Blur"
            />
            <div className="grid 2xl:mx-[3%] grid-rows-4 gap-6 md:grid-cols-2 md:grid-rows-2 w-screen mb-[14%] min-h-screen h-full  md:h-[130vh]  ">
                {children}
            </div>
            <ThreeBigCard />

            <div className="absolute opacity-50 top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none" />
            <div className="absolute opacity-70 bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
        </section>
    )
}

export default ThreeFone
