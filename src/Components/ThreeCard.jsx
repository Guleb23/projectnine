import React from 'react'

const ThreeCard = ({ img, mainText, subText, customStyles, ref }) => {
    return (
        <div ref={ref} className={`flex grow-0 shrink-0 flex-col gap-5 w-[249px] ${customStyles || ""}`}>
            <img className='select-none pointer-events-none' width={249} height={249} src={img} alt='img' />
            <div className='flex flex-col gap-2'>
                <p className='mono text-2xl font-bold gradient-text-green'>{mainText}</p>
                <p className='mono text-sm gradient-text-green'>{subText}</p>
            </div>
        </div>
    )
}

export default ThreeCard
