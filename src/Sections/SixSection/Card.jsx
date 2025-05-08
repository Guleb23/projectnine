import React from 'react'

const Card = ({ img,
    text }) => {
    return (
        <div className='flex flex-col justify-start items-start gap-3.5'>
            <img src={img} width={45} height={45} />
            <p className='mono text-[17px] gradient-text-green' dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
}

export default Card
