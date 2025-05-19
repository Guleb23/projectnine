import React from 'react'
import AnimatedCircle from '../../Components/AnimatedCircle'
import TagCloud from './TagCloud'
import MobileTag from './MobileTag'

const ThreeIMage = () => {
    return (
        <div className='relative w-full h-full flex justify-center items-center'>

            <img
                src="/NewSecond/blur.png"
                alt="Blur Effect"
                className="block lg:hidden  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
            <TagCloud customStyle={`hidden md:block`} />
            <MobileTag customStyle={`block md:hidden`} />
            <div className="absolute w-[190px] h-[190px] -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2  blur-[120px] rounded-full bg-[#16CDDE] opacity-90 pointer-events-none z-0" />
            <AnimatedCircle customStyle={`mb-[4%]`} width={window.innerWidth < 640 ? 110 : 200} height={window.innerWidth < 640 ? 110 : 200} />
        </div>
    )
}

export default ThreeIMage
