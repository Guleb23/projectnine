import React from 'react'

const FirstFone = ({ children, id }) => {
    return (
        <section id={id} className='bg-black w-screen h-screen relative overflow-hidden overflow-x-hidden'>
            <img className='absolute lg:w-full w-[4432.25px]  h-screen select-none pointer-events-none -translate-x-1/2 left-1/2  ' src='/Hero/morp.png' />
            <img className='hidden lg:block absolute w-full select-none pointer-events-none' src='/Hero/blur.png' />
            <img className='block lg:hidden absolute w-full select-none pointer-events-none -translate-x-1/2 left-1/2 min-w-[860px] min-h-[276px] top-[30%]' src='/Hero/blur.png' />
            <img

                className="block lg:hidden sm:left-[8%] absolute top-16 left-0 h-auto max-h-[400px] select-none pointer-events-none z-0 lastLast"
                src="/Hero/Code.png"
                alt="code"
                style={{
                    WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskSize: '100% 100%',
                    maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                    maskRepeat: 'no-repeat',
                    maskSize: '100% 100%',
                }}
            />
            {children}
        </section>
    )
}

export default FirstFone
