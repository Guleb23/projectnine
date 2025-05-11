import React from 'react'

function LogoComponent() {
    return (
        <div className='flex items-center gap-2'>
            <p className='gradient-text-green font-bold sm:text-2xl text-[17px]'>Spin</p>
            <img width={54} height={54} className='sm:w-[54px] sm:h-[54px] w-[40px] h-[40px]' src='/Hero/logo.png' />
            <p className='gradient-text-green font-bold sm:text-2xl text-[17px]'>Edge</p>
        </div>
    )
}

export default LogoComponent 