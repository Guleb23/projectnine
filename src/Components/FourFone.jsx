import React from 'react'

const FourFone = ({ id, children, heightBlur }) => {
    return (
        <section
            id={id}
            className="bg-black w-screen h-full relative "
        >
            <img
                className={`absolute inset-0 top-0    mx-auto select-none pointer-events-none z-0 rounded-4xl`}
                style={{ height: `${heightBlur}px` }}
                src="/Second/whiteblur.png"
                alt="White Blur"
            />
            <div className=" w-full h-full flex flex-col">
                {children}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
        </section>
    )
}

export default FourFone
