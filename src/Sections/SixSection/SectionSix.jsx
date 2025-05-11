import React from 'react'
import Card from './Card'
import MiniCard from './MiniCard'
import Head from './Head'
import AnimatedCircle from '../../Components/AnimatedCircle'

const SectionSix = () => {
    return (
        <div className='w-screen h-full md:h-screen flex flex-row  pt-[8%] relative md:mb-[125px]'>
            <div className='flex-[0_0_72%] md:pl-[17%] pl-[5%] z-10'>
                <Head />
                <div className='flex flex-col  md:flex-row gap-14 pt-18'>
                    <Card img={`/Six/left.png`} text={`Multi-bit non-volatile<br/> resistive synapse<br/> using SOT MTJ cells`} />
                    <Card img={`/Six/right.png`} text={`Proprietary algorithms<br/> that adapt neural networks<br/> to analog hardware physics`} />
                </div>
            </div>
            <div className='relative w-[670px] h-[710px] -ml-[11%] -mt-[4%] hidden md:block'>
                <MiniCard />
                <div className='w-[582px] h-[710px] relative ml-0 mt-0 lg:-ml-[10%]  lg:mt-[6%]'>
                    <img src='/Six/btm.png' className='absolute top-[0px] left-[0px]' />


                    <AnimatedCircle width={`230px`} height={`230px`} customStyle={`select-none pointer-events-none top-[332px] left-[240px] -translate-y-1/2 -translate-x-1/2  z-50`} />
                    <img src='/Six/topLayer.png' className='absolute -translate-y-1/2 -translate-x-1/2 top-[350px] left-[245px] z-40' />
                    <div
                        className='w-[335px] h-[295px] rounded-[55px] bg-white/5 rounded-br-lg rounded-tl-2xl opacity-30 backdrop-blur-2xl absolute -translate-y-1/2 -translate-x-1/2 top-[355px] left-[250px]
   -skew-x-[24.5deg]  skew-y-[6deg] z-10'
                    />
                    <img src='/Six/mainBlur.png' className='absolute -ml-[10%]' />
                </div>

                <div className='absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[525px] h-[425px] rounded-full bg-[#00DA90] blur-[200px] opacity-30' />
            </div>


            <div className='relative -ml-[50%] -mt-12'>

                <div className='w-[582px] h-[710px] relative ml-0 mt-0 lg:-ml-[10%]  lg:mt-[6%] block md:hidden'>
                    <img src='/Six/btm.png' className='absolute -translate-y-1/2 -translate-x-1/2 top-[350px]  left-[245px] w-[367px]' />


                    <AnimatedCircle width={`150`} height={`150`} customStyle={`select-none pointer-events-none top-[332px] left-[240px] -translate-y-1/2 -translate-x-1/2  z-50`} />
                    <img src='/Six/topLayer.png' className='absolute -translate-y-1/2 -translate-x-1/2 top-[350px] w-[240px] left-[245px] z-40' />
                    <div
                        className='w-[240px] h-[210px] rounded-[55px] bg-white/5 rounded-br-lg rounded-tl-2xl opacity-30 backdrop-blur-2xl absolute -translate-y-1/2 -translate-x-1/2 top-[350px] left-[240px]
   -skew-x-[24.5deg]  skew-y-[6deg] z-10'
                    />
                    <img src='/Six/mainBlur.png' className='absolute -ml-[10%]' />
                </div>

                <div className='absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[525px] h-[425px] rounded-full bg-[#00DA90] blur-[200px] opacity-30' />
            </div>
            <img src='/Six/LeftBigBlur.png' className='absolute w-[1004px] h-[1004px] -top-[20%] -left-[10%] z-1' />
        </div>
    )
}

export default SectionSix
