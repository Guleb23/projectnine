import React from 'react';

const CustomInput = ({ id, placeholder = "", isBig = false, customStyle }) => {
    return (
        <div id={id} className={`${isBig && 'h-[220px]'} w-[730px] bg-white/5 rounded-md overflow-hidden z-50 relative ${customStyle || ''}`}>
            <input
                placeholder={placeholder}
                type='text'
                className='w-full md:h-[60px] h-[50px] mono text-[13px] md:text-base bg-transparent px-4 text-white placeholder-white/50 focus:outline-none'

            />
            <img src='/Four/miniLeft.png' className='absolute bottom-0 left-0' />
            <img src='/Four/miniRight.png' className='absolute top-0 right-0' />
        </div>
    );
};

export default CustomInput;