import React from 'react'

const FiveFone = ({ id, children }) => {
    return (
        <div id={id} className='min-h-screen  w-screen relative flex justify-center  z-0 pb-7'>
            <img src='/Four/Blur.png' className='absolute w-full z-50 -top-[30%]' height={815} />

            <div className='w-full'>
                {children}
            </div>

        </div>
    )
}

export default FiveFone
