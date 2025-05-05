import React from 'react'

const ThreeMiniSect = ({ num,
    Title,
    sub }) => {
    return (
        <div className='flex flex-col gap-4 w-80 h-60'>
            <div className='w-16 h-11 bg-transparent relative text-center px-4 py-2.5'>
                <img src='/Four/miniRight.png' className='absolute top-0 right-0' />
                <img src='/Four/miniLeft.png' className='absolute bottom-0 left-0' />
                <p className='font-bold text-lg text-center bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text'>{num}</p>
            </div>
            <p className=' gradient-text-green font-bold text-2xl'>
                {Title}
            </p>
            <p className=' gradient-text-green mono text-base'>
                {sub}
            </p>
        </div>
    )
}

export default ThreeMiniSect
