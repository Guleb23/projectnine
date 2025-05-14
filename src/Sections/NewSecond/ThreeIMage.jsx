import React from 'react'
import AnimatedCircle from '../../Components/AnimatedCircle'
import TagCloud from './TagCloud'

const ThreeIMage = () => {
    return (
        <div className='relative w-full h-full flex justify-center items-center'>

            <img
                src="/NewSecond/blur.png"
                alt="Blur Effect"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
            <TagCloud />
            <AnimatedCircle customStyle={`mb-[4%]`} width={window.innerWidth < 640 ? 150 : 250} height={window.innerWidth < 640 ? 150 : 250} />
        </div>
    )
}

export default ThreeIMage
