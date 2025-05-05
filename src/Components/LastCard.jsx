import React from 'react'

const LastCard = ({ num,
    Title,
    sub }) => {
    return (
        <div className='flex flex-col gap-4  w-80 h-60'>
            <div className='w-16 h-11 bg-transparent relative text-center px-4 py-2.5'>
                <img src='/Last/Right.png' className='absolute top-0 right-0' />
                <img src='/Last/Left.png' className='absolute bottom-0 left-0' />
                <p className='font-bold text-lg text-center gradient-text-green'>{num}</p>
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

export default LastCard
