import React from 'react'

const NewSecondFone = ({ children, id }) => {
    return (
        <section
            id={id}
            className="bg-black w-screen min-h-screen h-fit relative overflow-y-hidden  overflow-x-hidden pt-[9%] "
        >
            <img src='/right.png' className='absolute w-[960px] top-0 right-0' />
            <img src='/left.png' className='absolute  w-[960px] top-0 left-0' />
            <img
                className="absolute inset-0 min-h-screen h-full m-auto select-none pointer-events-none z-0 rounded-4xl"
                src="/Second/whiteblur.png"
                alt="White Blur"
            />
            <div className='flex flex-col w-full h-full justify-center items-center gap-[45px] relative'>
                {children}
            </div>
        </section>
    )
}

export default NewSecondFone
