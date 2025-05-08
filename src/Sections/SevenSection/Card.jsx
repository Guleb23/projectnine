import React from 'react'

const Card = ({ img, name, work, desc, customPosition }) => {
    return (
        <div className={`w-[260px] flex flex-col gap-5 ${customPosition || " "}`}>
            <img width={260} height={260} src={img} />
            <div className='flex flex-col gap-2 gradient-text-green text-left'  >
                <p className='font-bold text-[23px]' dangerouslySetInnerHTML={{ __html: name }} />
                <p className='font-medium text-[15px] mono' dangerouslySetInnerHTML={{ __html: work }} />
                <p className='font-medium text-[13px] mono' dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
        </div>
    )
}

export default Card
