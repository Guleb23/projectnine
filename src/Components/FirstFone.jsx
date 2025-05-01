import React from 'react'

const FirstFone = ({ children, id }) => {
    return (
        <section id={id} className='bg-black w-screen h-screen relative overflow-hidden'>
            <img className='absolute w-full select-none pointer-events-none' src='/Hero/morp.png' />
            <img className='absolute w-full select-none pointer-events-none' src='/Hero/blur.png' />
            {children}
        </section>
    )
}

export default FirstFone
