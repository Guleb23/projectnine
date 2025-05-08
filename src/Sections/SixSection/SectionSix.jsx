import React from 'react'
import Card from './Card'
import MiniCard from './MiniCard'

const SectionSix = () => {
    return (
        <div className='w-screen h-screen flex flex-row pt-[7%] relative mb-[125px]'>
            <div className='flex-[0_0_72%] pl-[18%] z-10'>
                <h1 className='text-[77px] gradient-text-green'>SpinEdge Key IP<br /> Advantages
                </h1>
                <div className='flex flex-col'>
                    <p className='text-[77px] font-bold bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text'>32K×32K</p>
                    <p className='mono text-[19px] gradient-text-green'>Massive crossbar architecture<br /> eliminating voltage imbalance</p>
                </div>
                <div className='flex gap-14 pt-18'>
                    <Card img={`/Six/left.png`} text={`Multi-bit non-volatile<br/> resistive synapse<br/> using SOT MTJ cells`} />
                    <Card img={`/Six/right.png`} text={`Proprietary algorithms<br/> that adapt neural networks<br/> to analog hardware physics`} />
                </div>
            </div>
            <div className='relative w-[670px] h-[710px] -ml-[11%] -mt-[4%]'>
                <MiniCard />
                <img src='/Six/Main.png' className='absolute' />
                <div className='absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[525px] h-[425px] rounded-full bg-[#00DA90] blur-[200px] opacity-30' />
            </div>
            <img src='/Six/LeftBigBlur.png' className='absolute w-[1004px] h-[1004px] -top-[20%] -left-[10%] z-1' />
        </div>
    )
}

export default SectionSix
