import React from 'react'

const Fone = ({ id, children }) => {
    const word = ["S", "P", "I", "N", "E", "D", "G", "E"];
    return (
        <div id={id} className='w-screen bg-black min-h-screen h-full relative pt-[6%] overflow-hidden'>


            <img src='/Nine/Blur.png' className='lg:block hidden absolute z-50 select-none -top-[10%] -left-[20%] pointer-events-none' />

            <img src='/Nine/Fone.png' className='absolute hidden lg:block  2xl:-left-[33%] xl:-left-[36%] -bottom-[32%] z-0 ' />

            <img src='/Nine/Fone.png' className='absolute hidden lg:block -bottom-[32%] 2xl:-right-[33%] xl:-right-[36%] z-0 ' />
            <img src='/Nine/Fone.png' className='absolute hidden lg:block bottom-[10%] 2xl:-left-[44%] xl:-left-[64%] z-0 ' />
            <img
                className="absolute min-w-[762px] -bottom-[30%] -translate-y-1/2 -translate-x-1/2 left-1/2 m-auto select-none pointer-events-none"
                src="/Nine/Fone.png"
            />
            <img src='/Nine/Fone.png' className='absolute hidden lg:block bottom-[10%] 2xl:-right-[44%] xl:-right-[64%] z-0 ' />

            <img src='/Nine/BottomBlur.png' className='absolute -bottom-[15%] w-full' />
            <img src='/Seven/Blur.png' className='absolute hidden lg:block top-[10%]  w-screen' />
            <img src='/Nine/LeftDirBlur.png' className='absolute z-20 rotate-90 select-none top-0 -right-[30%] pointer-events-none' />
            <img src='/Seven/Blur.png' className='absolute hidden lg:block top-[30%]' />
            <img src='/nine.png' className='absolute w-[760px] bottom-[15%]' />
            <img src='/Nine/Blur.png' className=' hidden lg:block absolute z-20 rotate-90 select-none top-[10%] -right-[30%] pointer-events-none' />
            {children}
            <div className='absolute lg:-bottom-[2%] bottom-1  flex sm:max-w-[732px] max-w-[335px] w-full justify-between -translate-x-1/2 left-1/2 z-50' >
                {word.map((w, index) => (
                    <p
                        className='sm:text-[77px] text-[35px] leading-[120%] font-bold gradient-text-green text-center'
                        key={index}
                    >
                        {w}
                    </p>
                ))}
            </div>

            <div className="absolute opacity-100 top-0 left-0 w-full h-12 bg-gradient-to-t from-transparent to-black z-10 pointer-events-none" />
            <img
                className="block md:hidden absolute w-screen   -bottom-[10%] -translate-y-1/2 -translate-x-1/2 left-1/2 m-auto select-none pointer-events-none  rounded-4xl"
                src="/bb.png"
                alt="White Blur"
            />
            <img
                className="block md:hidden absolute w-screen   -bottom-[15%] -translate-y-1/2 -translate-x-1/2 left-1/2 m-auto select-none pointer-events-none  rounded-4xl"
                src="/bb.png"
                alt="White Blur"
            />
        </div>
    )
}

export default Fone