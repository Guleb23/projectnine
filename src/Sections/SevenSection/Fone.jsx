import React from 'react'
import Header from '../NewSecond/Header'

const Fone = ({ id, children }) => {
    return (
        <section id={id} className='bg-black w-screen h-full relative   pt-[1%] pb-[3%]'>
            <div className='w-screen min-h-screen h-[135vh] absolute'>

                <img src='/Seven/Fone.png' className='absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2' />
                <img src='/Seven/Blur.png' className='absolute ' />


            </div>
            <img
                className="absolute inset-0  h-full m-auto select-none pointer-events-none z-0 rounded-4xl"
                src="/Second/whiteblur.png"
                alt="White Blur"
            />
            {children}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none" />
            <div className="absolute  bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
        </section>
    )
}

export default Fone
