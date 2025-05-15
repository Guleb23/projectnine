import React from 'react'
import Fone from './Fone'
import CustomInput from './CustomInput'
import AnimatedCircle from '../../Components/AnimatedCircle'

const NineSection = () => {
    return (
        <Fone>
            <div className='w-full h-full relative flex justify-center items-center flex-col'>

                <div className='relative w-fit h-fit ml-[5%]'>
                    <img src='/Nine/MainBlur.png' className='absolute z-0 -top-[9%] left-0 select-none pointer-events-none' />
                    <img src='/Nine/Main.png' className=' relative z-20 select-none pointer-events-none' />

                    <AnimatedCircle width={window.innerWidth < 640 ? 120 : 160} height={window.innerWidth < 640 ? 120 : 160} customStyle={`select-none pointer-events-none top-[30%] left-[45.5%] -translate-y-1/2 -translate-x-1/2 z-50 `} />
                </div>
                <h2 className='md:text-[46px] text-[27px] text-center mb-[25px] md:mt-0 md:text-left font-bold gradient-text-green 2xl:-mt-[4%] xl:-mt-[6%]'>
                    $7M buys the future. Miss it,{window.innerWidth < 640 ? "" : <br />} and your competitors won’t.
                </h2>
                <div className='flex flex-col gap-3 pb-11 px-5'>
                    <CustomInput customStyle={`md:w-[730px] w-full`} placeholder={`Business / Website`} id={`first`} />
                    <CustomInput customStyle={`md:w-[730px] w-full`} placeholder={`E-mail address`} id={`second`} />
                    <CustomInput customStyle={`md:w-[730px] w-full`} isBig={true} placeholder={`Business / Website`} id={`three`} />
                    <button className="bg-[radial-gradient(circle,_#16F501,_#00DA90)]  w-full h-10 md:h-12 rounded-lg text-sm md:text-[16px] font-bold">
                        Meet the Future →
                    </button>
                    <p className='gradient-text-green mono md:text-[12px] text-center md:text-left text-[10px]'>By clicking the button, I consent to the processing of my personal data.</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-6 pb-26 z-50 md:px-0 px-5'>
                    <img className='w-[335px] h-[270px] object-cover object-top md:h-auto md:w-auto' src='/Nine/City.png' />
                    <div className='flex gradient-text-green mono md:text-[13px] text-[9px] justify-between w-full'>
                        <p>
                            © 2025, SpinEdge.
                        </p>
                        <p>
                            All rights reserved.
                        </p>
                        <p>
                            Privacy Policy
                        </p>
                    </div>

                </div>
            </div>
        </Fone>
    )
}

export default NineSection
