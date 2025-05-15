import React from 'react'

const MainCards = ({ text, customStyles, ref }) => {
    return (
        <div ref={ref} className={`w-[310px] h-[100px] bg-[#0ACF83]/5 rounded-lg flex justify-center items-center ${customStyles}`}>
            <p className='mono text-[15px] gradient-text-green '>
                {text}
            </p>

        </div>
    )
}

export default MainCards
