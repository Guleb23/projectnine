import React from 'react'
import Fone from './Fone'
import Header from '../NewSecond/Header'
import Card from './Card'

const EightSection = () => {
    return (
        <Fone id={`eight`}>
            <Header top={`INSIGHTS & INNOVATION`} mid={`Where AI Meets Tomorrow`} bottom={`Cutting-edge research, industry trends,<br/> and SpinEdge breakthroughs`} />
            <div className='flex z-50 pt-[4%] px-[6%] gap-8 justify-center'>
                <Card top={`Category`} mid={`Blog title heading will go here`} bottom={`Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros.`} img={`/Eight/one.png`} />
                <Card top={`Category`} mid={`Blog title heading will go here`} bottom={`Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros.`} img={`/Eight/two.png`} />
                <Card top={`Category`} mid={`Blog title heading will go here`} bottom={`Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Suspendisse varius enim in eros.`} img={`/Eight/three.png`} />
            </div>
            <div className='flex w-full justify-center items-center'>

                <button className='bg-white/5 w-[120px] h-[50px] border-2 border-teal-900 rounded-lg px-[22px] py-[13px] mt-[50px]'>
                    <p className='bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text font-bold text-[15px]'>View all</p>
                </button>
            </div>
        </Fone>
    )
}

export default EightSection
