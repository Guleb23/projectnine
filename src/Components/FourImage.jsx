import React from 'react'
import FourCard from './FourCard'
import AnimatedCircle from './AnimatedCircle'
const FourImage = () => {
    return (


        <div className="relative hidden md:block md:sticky md:top-44 w-full h-[560px] sm:h-[700px] md:h-[752px] ">

            <img
                src="/Four/main.png"
                className="absolute left-1/2 top-1/2  2xl:top-[42%] xl:top-[37%] lg:top-[35%] md:top-[35%] -translate-x-1/2 -translate-y-1/2
               w-[260px] sm:w-[400px] md:w-[500px] lg:w-[668px]
               h-auto object-contain z-0"
                alt="main diagram"
            />

            {/* FourCard — точно привязаны к точкам картинки */}
            <FourCard
                customPosition="absolute 2xl:-right-[18%] 2xl:bottom-[2%]  xl:bottom-[2%] xl:-right-[4%] lg:left-[5%] lg:-top-[5%] md:-bottom-[13%] md:-right-[3%]  -bottom-[22%] -right-[7%] "
                text={`Analog inference<br /> through the Ohm’s<br /> law I = V G`}
            />
            <FourCard
                customPosition="absolute 2xl:bottom-[16%] 2xl:-right-[58%] xl:bottom-[15%] lg:bottom-[22%] lg:left-[60%]  md:-bottom-[5%] md:-right-[60%] -right-[58%] -bottom-[14%] "
                text={`Analog data<br/> (voltages)`}
            />
            <FourCard
                customPosition="absolute 2xl:-right-[57%] 2xl:-bottom-[7%] xl:-bottom-[4%] lg:-bottom-[1%] lg:left-[60%] md:-bottom-[15%] md:-right-[59%] -bottom-[25%] -right-[55%] "
                text={`Integration with<br/> CMOS circuitry`}
            />
            <FourCard
                customPosition="absolute 2xl:left-[32%] xl:bottom-[2%] xl:left-[21%] lg:left-[27%] lg:bottom-[2%] md:-bottom-[13%] md:left-[21%] left-[22%] -bottom-[20%] "
                text={`Analog output<br/> (currents)`}
            />
            <FourCard customPosition={'!absolute hidden 2xl:bottom-[50%] 2xl:-left-[15%] xl:bottom-[45%] xl:-left-[15%] lg:bottom-[45%] lg:-left-[25%] lg:-right-[10%] md:bottom-[53%] md:-left-[22%] md:-right-[10%] md:block'} text={`Spintronic<br/> Synapse`} />
            <FourCard
                customPosition={'!absolute !py-[5px] !px-[10px] hidden 2xl:bottom-[61%] 2xl:left-[2%] xl:bottom-[57%] xl:left-[2%] lg:bottom-[57%] lg:-left-[2%] lg:-right-[10%] md:bottom-[60%] md:-left-[2%] md:-right-[10%] md:block'} text={`100 nm`} />
            <div className='relative 
            2xl:-top-50 2xl:-left-40 2xl:rotate-8 
            lg:-top-54 lg:-left-40 lg:rotate-2
            -top-24 -left-40 rotate-2'>
                <img className='absolute left-[96px] w-[350px] lg:h-[210px] h-[195px] 2xl:h-[210px] xl:h-[202px] -top-[22px]' src='/Four/light.png' />
                <AnimatedCircle customStyle={`relative `} />
            </div>

        </div>

    )
}

export default FourImage
