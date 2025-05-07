import React from 'react'
import Header from "../NewSecond/Header"
import LastCard from '../../Components/LastCard'

const FourLastSection = () => {
    return (
        <div className='w-screen h-screen relative flex lg:justify-start lg:items-start items-center justify-center'>
            <img src='/Four/bigLeft.png' className='absolute 2xl:-top-[38%] 2xl:-left-[6%] xl:-top-[35%] xl:-left-[22%] lg:-top-[35%] lg:-left-[22%] hidden lg:block' width={1259} height={904} />
            <img src='/Four/leftLeft.png' className='absolute 2xl:-top-[36%] 2xl:left-[10.5%] xl:-top-[33%] xl:-left-[2%] lg:-top-[23%] lg:-left-[8.5%] hidden lg:block' />
            <img src='/Four/centerImg.png' className='absolute 2xl:left-[20.5%] 2xl:top-[1%] xl:left-[11%] xl:top-[5.5%] lg:left-[6%] lg:top-[5.5%] hidden lg:block' />
            <img src='/Four/Blur.png' className='absolute xl:-top-[25%] xl:-right-[15%]' width={1442} height={815} />
            <img
                className={`absolute select-none pointer-events-none 2xl:left-[24.2%] 2xl:top-[11.2%] xl:left-[16%] xl:top-[16.5%] lg:left-[11.6%] lg:top-[13.8%] hidden lg:block`}
                width={140}
                height={140}
                src="/ball.gif"
                alt="Animated Ball"
            />
            <div className='flex-[0_0_49%] w-0 hidden lg:block  '>

            </div>
            <div className='lg:flex-[0_0_51%] flex-[1_1_100%] flex flex-col  gap-46'>
                <Header
                    four
                    customStyles={`!text-left items-start -mt-[14%]`}
                    top={`The Quantum Leap in AI Hardware`}
                    mid={`Spintronics: Where<br/> physics meets profit.`}
                    bottom={`Spintronics leverages the intrinsic spin of<br/> electrons, providing faster, more energy-efficient<br/> computation compared to tradition electronics`} />
                <div className='flex gap-15'>
                    <LastCard img={`/Four/cardLeft.png`} Title={`Non-Volatile<br/> Memory`} sub={`Spintronics non-volatile memory retains data without power, crucial for automotive and low-power AI applications`} />
                    <LastCard img={`/Four/cardRight.png`} Title={`Advanced Magnetic Sensors`} sub={`Spintronic sensors are<br/> the best fit for edge<br/> and IoT devices`} />

                </div>
            </div>

        </div>
    )
}

export default FourLastSection
