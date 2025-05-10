import React from 'react'
import Fone from './Fone'
import CustomInput from './CustomInput'
import AnimatedCircle from '../../Components/AnimatedCircle'

const NineSection = () => {
    return (
        <Fone>
            <div className='w-full h-full flex justify-center items-center flex-col'>
                <div className='relative w-fit h-fit ml-[5%]'>
                    <img src='/Nine/MainBlur.png' className='absolute z-0 -top-[9%] left-0 select-none pointer-events-none' />
                    <img src='/Nine/Main.png' className=' relative z-20 select-none pointer-events-none' />
                    <AnimatedCircle width={`180px`} height={`180px`} customStyle={`select-none pointer-events-none top-[31%] left-[45.5%] -translate-y-1/2 -translate-x-1/2 z-50`} />
                </div>
                <h2 className='text-[46px] font-bold gradient-text-green 2xl:-mt-[4%] xl:-mt-[6%]'>
                    $7M buys the future. Miss it,<br /> and your competitors won’t.
                </h2>
                <div className='flex flex-col gap-3 pb-11'>
                    <CustomInput placeholder={`Business / Website`} id={`first`} />
                    <CustomInput placeholder={`E-mail address`} id={`second`} />
                    <CustomInput isBig={true} placeholder={`Business / Website`} id={`three`} />
                    <button className="bg-[radial-gradient(circle,_#16F501,_#00DA90)]  w-full h-10 md:h-12 rounded-lg text-sm md:text-[16px] font-bold">
                        Meet the Future →
                    </button>
                    <p className='gradient-text-green mono text-[12px]'>By clicking the button, I consent to the processing of my personal data.</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-6 pb-26 z-50'>
                    <img className='' src='/Nine/City.png' />
                    <div className='flex gradient-text-green mono text-[13px] justify-between w-full'>
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
