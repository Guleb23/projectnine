import React from 'react'

const Fone = ({ id, children }) => {
    const word = ["S", "P", "I", "N", "E", "D", "G", "E"];
    return (
        <div id={id} className='w-screen bg-black min-h-screen h-full relative pt-[6%] overflow-hidden'>
            <img src='/Seven/Blur.png' className='absolute' />


            <img src='/Nine/Fone.png' className='absolute -bottom-[35%] 2xl:-left-[33%] xl:-left-[64%] z-0 ' />

            <img src='/Nine/Fone.png' className='absolute -bottom-[35%] 2xl:-right-[33%] xl:-right-[64%] z-0 ' />
            <img src='/Nine/Fone.png' className='absolute bottom-[10%] 2xl:-left-[44%] xl:-left-[64%] z-0 ' />

            <img src='/Nine/Fone.png' className='absolute bottom-[10%] 2xl:-right-[44%] xl:-right-[64%] z-0 ' />

            <img src='/Nine/BottomBlur.png' className='absolute -bottom-[15%] w-full' />
            <img src='/Seven/Blur.png' className='absolute top-[30%]' />
            {children}
            <div className='flex w-full justify-center items-center absolute bottom-3'>
                <div className='absolute flex max-w-[732px] w-full justify-between ' >
                    {word.map((w, index) => (
                        <p
                            className='text-[77px] leading-[120%] font-bold gradient-text-green text-center'
                            key={index}
                        >
                            {w}
                        </p>
                    ))}
                </div>
            </div>
            <div className="absolute opacity-50 top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none" />

        </div>
    )
}

export default Fone