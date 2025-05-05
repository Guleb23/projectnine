import React from 'react'
import ThreeBigCard from './ThreeBigCard'

const ThreeFone = ({ children, id }) => {
    return (
        <section
            id={id}
            className="bg-black w-screen min-h-screen h-fit relative pb-40 overflow-x-hidden"
        >
            <img
                className="absolute inset-0 min-h-screen h-full m-auto select-none pointer-events-none z-0 rounded-4xl"
                src="/Second/whiteblur.png"
                alt="White Blur"
            />
            <div className="grid grid-rows-4 gap-6 md:grid-cols-2 md:grid-rows-2 w-screen min-h-screen h-full  md:h-[130vh] 2xl:h-[120vh]">
                {children}
            </div>
            <ThreeBigCard />
            <div className="absolute opacity-50 top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none" />
            <div className="absolute opacity-70 bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
        </section>
    )
}

export default ThreeFone
