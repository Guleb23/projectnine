import React from 'react'

function LogoComponent() {
    return (
        <div className='flex items-center gap-2'>
            <p className='gradient-text-green font-bold text-2xl'>Spin</p>
            <img width={54} height={54} src='/src/assets/Hero/logo.png' />
            <p className='gradient-text-green font-bold text-2xl'>Edge</p>
        </div>
    )
}

export default LogoComponent