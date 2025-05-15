import React from 'react'

const YearCard = ({ text, ref }) => {
    return (
        <div ref={ref} className='w-[168px] h-[50px] border border-[#1E2C2D] flex justify-center items-center rounded-lg'>
            <p className='text-[#6C8374] mono text-[15px] font-semibold'>{text}</p>
        </div>
    )
}

export default YearCard
