import React from 'react'

const FiveFone = ({ id, children }) => {
    return (
        <div id={id} className='min-h-screen  w-screen relative flex justify-center  z-0 '>
            <img src='/right.png' className='absolute w-[960px] top-0 right-0' />
            <img src='/left.png' className='absolute  w-[960px] top-0 left-0' />

            <div className='w-full'>
                {children}
            </div>

        </div>
    )
}

export default FiveFone
