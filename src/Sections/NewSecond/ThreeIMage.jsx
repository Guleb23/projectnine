import React from 'react'
import AnimatedCircle from '../../Components/AnimatedCircle'

const ThreeIMage = () => {
    return (
        <div className='relative w-full h-full flex justify-center items-center'>
            <img src='/NewSecond/secThree.png' width={700} height={563} />
            <img
                src="/NewSecond/blur.png"
                alt="Blur Effect"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
            <AnimatedCircle customStyle={`pb-[4%]`} />
        </div>
    )
}

export default ThreeIMage
