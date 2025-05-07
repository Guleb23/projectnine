import React from 'react'

const LastCard = ({ customStyles,
    Title,
    sub,
    img }) => {
    return (
        <div className={`flex flex-col gap-4  w-80 h-60 ${customStyles || " "}`}>
            <div className='w-16 h-11 bg-transparent relative text-center '>
                <img src={img} />
            </div>
            <p className=' gradient-text-green font-bold text-2xl' dangerouslySetInnerHTML={{ __html: Title }} />
            <p className=' gradient-text-green mono text-base' dangerouslySetInnerHTML={{ __html: sub }} />
        </div>
    )
}

export default LastCard
