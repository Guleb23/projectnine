import React from 'react'
import { Logo } from './Logo'

function LogoComponent() {
    return (
        <div className='flex items-center gap-2'>
            <p className='gradient-text-green font-bold sm:text-2xl text-[17px]'>Spin</p>
            <Logo />

            <p className='gradient-text-green font-bold sm:text-2xl text-[17px]'>Edge</p>
        </div>
    )
}

export default LogoComponent 