import React from 'react'

const FiveFone = ({ id, children }) => {
    return (
        <div id={id} className='min-h-screen  w-screen relative flex justify-center  z-0 pb-7'>
            <img src='/Four/Blur.png' className='absolute w-full z-50 -top-[30%]' height={815} />

            <div className='w-full'>
                {children}
            </div>
            <div className="absolute opacity-100 -bottom-20 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
        </div>
    )
}

export default FiveFone
