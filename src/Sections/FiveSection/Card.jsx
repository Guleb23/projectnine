import React from 'react'

const Card = ({ img, title, text }) => {
    return (
        <div className='px-[30px] py-[32px] bg-white/5 backdrop-blur-md flex flex-col gap-6 w-[346px] h-[246px]'
            style={{
                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
            }}>
            <div className='w-16 h-11 bg-transparent relative text-center '>
                <img src={img} />
            </div>
            <div className='flex flex-col text-left gap-1.5 gradient-text-green'>
                <p className='font-bold text-[23px]'>{title}</p>
                <p className='font-medium mono text-[15px]' dangerouslySetInnerHTML={{ __html: text }} />
            </div>
            <img src='/Four/left.png' className='absolute  top-0 left-0 ' />
            <img src='/Four/right.png' className='absolute bottom-0 right-0 ' />
        </div>
    )
}

export default Card
