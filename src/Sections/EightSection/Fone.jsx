import React from 'react'

const Fone = ({ id, children }) => {
    return (
        <div id={id} className='w-screen bg-black min-h-screen relative pt-[6%] pb-[5%]'>
            <img src='/Seven/Blur.png' className='absolute w-full' />
            <img
                className="absolute inset-0  h-full m-auto select-none pointer-events-none z-0 rounded-4xl "
                src="/Second/whiteblur.png"
                alt="White Blur"
            />
            {children}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none" />
            <div className="absolute  bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
        </div>
    )
}

export default Fone
