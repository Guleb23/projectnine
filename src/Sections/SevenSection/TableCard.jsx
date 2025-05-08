import React from 'react'

const TableCard = ({ img, name, work, desc }) => {
    return (
        <div className='w-[344px] h-[118px] flex-col flex gap-2  gradient-text-green'>
            <div className='flex text-left gap-[15px] items-center'>
                <img width={70} height={70} src={img} className='rounded-full' />
                <div className='flex flex-col'>
                    <p className='font-bold text-[23px]' dangerouslySetInnerHTML={{ __html: name }} />
                    <p className='font-medium text-[13px] mono' dangerouslySetInnerHTML={{ __html: work }} />
                </div>

            </div>
            <p className='font-medium text-[13px] mono' dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
    )
}

export default TableCard


