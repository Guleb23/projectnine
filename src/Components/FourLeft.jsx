import React from 'react'
import FourCard from './FourCard'
import ThreeMiniSect from './ThreeMiniSect'
import Head from '../Sections/FourSection/Head'
const FourLeft = () => {
    return (
        <div className='flex flex-col gap-6 2xl:mb-[30%] xl:mb-[35%] lg:mb-[35%] md:mb-[50%]' >
            <Head />
            <div className='flex flex-col pt-3 gap-12 relative mb-14'>
                <p className='mono text-[15px] gradient-text-green'>GPUs are hitting physical limits —<br /> while we rewrite the rules</p>
                <div className='mono text-[12px] gradient-text-green'>*Passed the rigorous technological<br /> assessment by European Innovation Council<br /> and Israel Innovation Authority

                </div>


            </div>
            <div className='flex flex-col gap-15'>

                <ThreeMiniSect num={`01`} Title={`Eliminates the Memory Bottleneck`} sub={`Performs energy-efficient MAC operations directly in memory, removing data transfer costs`} />
                <ThreeMiniSect num={`02`} Title={`Kirchhoff's Laws at Quantum Scale`} sub={`Spintronic crossbars enable ultra-low power parallel computation through electron spin dynamics`} />
                <ThreeMiniSect num={`03`} Title={`Scalable Accuracy for Real-World AI`} sub={`Proprietary multi-bit cell design and smart quantization maintain precision in massive 32K×32K arrays`} />
                <ThreeMiniSect num={`04`} Title={`Future-Proof AI Acceleration`} sub={`Compact non-volatile technology pairs with existing digital systems for instant upgrades`} />
            </div>
        </div>
    )
}

export default FourLeft
