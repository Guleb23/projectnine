import React from 'react'

const Card = ({ img, top, mid, bottom }) => {
    return (
        <div className='min-w-[400px] min-h-[433px] flex flex-col gap-6'>
            <img src={img} />
            <div className='flex flex-col gap-2'>
                <p className='mono text-sm bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text'>{top}</p>
                <p className='font-bold text-[23px] gradient-text-green'>{mid}</p>
                <p className='mono text-[13px] gradient-text-green' dangerouslySetInnerHTML={{ __html: bottom }} />
            </div>
        </div>
    )
}

export default Card
