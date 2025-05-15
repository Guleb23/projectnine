import React from 'react'

const FiveFone = ({ id, children }) => {
    return (
        <div id={id} className='min-h-screen  w-screen relative flex justify-center  z-0 pb-7'>
            <img src='/right.png' className='absolute w-[960px] top-0 right-0' />
            <img src='/left.png' className='absolute  w-[960px] top-0 left-0' />

            <div className='w-full'>
                {children}
            </div>
            <div className="absolute opacity-100 -bottom-20 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
        </div>
    )
}

export default FiveFone
