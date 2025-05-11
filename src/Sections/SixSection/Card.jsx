import React from 'react'

const Card = ({ img,
    text }) => {
    return (
        <div className='flex flex-col justify-start items-start gap-3.5 '>
            <img src={img} width={45} height={45} />
            <p className='mono md:text-[17px] text-[11px] gradient-text-green w-[165px] md:w-auto' dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
}

export default Card
