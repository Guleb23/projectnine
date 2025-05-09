import React from 'react'

const ThreeCard = ({ img, mainText, subText, customStyles, ref }) => {
    return (
        <div ref={ref} className={`flex grow-0 shrink-0 flex-col gap-6 w-[294px] ${customStyles || ""}`}>
            <img className='select-none pointer-events-none' width={294} height={294} src={img} alt='img' />
            <div className='flex flex-col gap-2'>
                <p className='mono text-[23px] font-bold gradient-text-green'>{mainText}</p>
                <p className='mono text-[15px] gradient-text-green'>{subText}</p>
            </div>
        </div>
    )
}

export default ThreeCard
