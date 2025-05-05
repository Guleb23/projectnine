import React from 'react'

const FourFone = ({ id, children }) => {
    return (
        <section
            id={id}
            className="bg-black w-screen min-h-screen h-full relative "
        >
            <img
                className="absolute inset-0 min-h-screen h-full m-auto select-none pointer-events-none z-0 rounded-4xl"
                src="/Second/whiteblur.png"
                alt="White Blur"
            />
            <div className=" w-full h-full ">
                {children}
            </div>
            <div className="absolute opacity-50 top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none " />
            <div className="absolute opacity-70 bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
        </section>
    )
}

export default FourFone
