import React from 'react'

const Card = ({ num,
    text,
    customStyle }) => {
    return (
        <div className={`flex flex-col gap-4 w-[262px] items-center ${customStyle || " "}`}>
            <div className='w-16 h-11 bg-transparent relative text-center px-4 py-2.5'>
                <img src='/Four/miniRight.png' className='absolute top-0 right-0' />
                <img src='/Four/miniLeft.png' className='absolute bottom-0 left-0' />
                <p className='font-bold text-lg text-center gradient-text-green'>{num}</p>
            </div>
            <p
                className="lg:text-[15px] mono gradient-text-green text-[10px] "
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    )
}

export default Card
