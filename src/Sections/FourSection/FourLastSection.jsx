import React from 'react'
import Header from "../NewSecond/Header"
import LastCard from '../../Components/LastCard'
import AnimatedCircle from '../../Components/AnimatedCircle'

const FourLastSection = () => {
    return (
        <div className='w-screen min-h-screen h-full relative flex lg:justify-start lg:items-start items-center justify-center sm:pt-[3%] pt-[20%]'>

            <div className='absolute w-[1259px] h-[904px]  -top-[38%]  2xl:-left-[5%]  2xl:-top-[33%] xl:-left-[23%] lg:-left-[32.3%] hidden lg:block '>
                <img src='/Four/bigLeft.png' className=' hidden lg:block ' width={1259} height={904} />
                <div className='absolute w-[654px] h-[1009px] top-1/2 mt-16 -translate-y-1/2 -translate-x-1/2 left-1/2'>
                    <img src='/Four/leftLeft.png' className=' relative  hidden lg:block' />
                    <div className='w-[954px] h-[258px] absolute top-1/2 -translate-y-1/2 left-[29%] ' >

                        <img src='/Four/centerImg.png' />
                        <AnimatedCircle width={`130`} height={`130`} customStyle={`!pt-0 select-none pointer-events-none top-[64%] left-[8%] -translate-y-1/2 hidden lg:block`} />

                    </div>
                </div>
            </div>






            <img src='/Four/Blur.png' className='absolute xl:-top-[25%] xl:-right-[15%] hidden lg:block' width={1442} height={815} />

            <div className='flex-[0_0_49%] w-0 hidden lg:block  '>

            </div>
            <div className='lg:flex-[0_0_51%] flex-[1_1_100%] w-full lg:items-start  items-center flex flex-col  lg:gap-46'>
                <Header
                    four={innerWidth > 640}
                    customStyles={`lg:!text-left text-left lg:items-start items-center -mt-[14%] sm:w-[500px] w-[335px] `}
                    top={`The Quantum Leap in AI Hardware`}
                    mid={`From Lab to Launch — No Fab Needed`}
                    bottom={`Our non-volatile memory and magnetic sensors are already built, tested, and production-ready. Spintronic components integrate seamlessly with existing microelectronics — no custom fabs, no exotic processes.`} />

                <div className='  w-[500px] h-[704px]  relative lg:hidden block'>
                    <img src='/Four/bigLeft.png' className=' absolute ' width={1259} height={904} />

                    <img src='/Four/leftLeft.png' className='absolute  right-[19%] h-[700px]' />

                    <img src='/Four/fone.png' className='absolute   -translate-y-1/2  -translate-x-1/2 left-[36%] top-[50%]' />
                    <AnimatedCircle width={`80`} height={`80`} customStyle={`!pt-0 select-none pointer-events-none top-[53%] left-[28%] -translate-y-1/2 `} />


                </div>
                <div className='flex  sm:gap-15  pt-[6px]'>
                    <LastCard img={`/Four/cardLeft.png`} Title={`Non-Volatile<br/> Memory`} sub={`Spintronics non-volatile memory retains data without power, crucial for automotive and low-power AI applications`} />
                    <LastCard img={`/Four/cardRight.png`} Title={`Advanced Magnetic Sensors`} sub={`Spintronic sensors are<br/> the best fit for edge<br/> and IoT devices`} />

                </div>
            </div>

        </div>
    )
}

export default FourLastSection
