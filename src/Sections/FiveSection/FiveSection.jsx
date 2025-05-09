import React from 'react'
import FiveFone from './FiveFone'
import Header from '../NewSecond/Header'
import Card from './Card'
import Table from './Table'

const FiveSection = () => {
    return (
        <FiveFone id={`five`} >
            <Header top={`Benchmark Results:<br/>Digital → Analog → Spintronic`}
                mid={`Outperforming the Giants`}
                bottom={`SpinEdge delivers 200x better efficiency than industry<br/> leaders — with seamless integration`} />
            <div className='flex flex-col lg:flex-row mt-4'>
                <div className='flex-[0_0_30%] flex justify-center lg:justify-end lg:pt-[3%]'>
                    <Card img={`/Five/Left.png`} text={`Delivers up to 1000 TOPS/W, 20<br/> TOPS/mm², and unparalleled<br/> cost-effectiveness`} title={`Superior Performance`} />
                </div>
                <div className='flex-[0_0_40%] flex justify-center'>
                    <img src='/Four/Phone.png' width={568} height={568} />
                </div>
                <div className='flex-[0_0_30%] flex lg:items-end lg:justify-start items-center justify-center'>
                    <Card img={`/Five/Right.png`} text={`Can be deployed as a chiplet or<br/> IP core, compatible with<br/> existing AI chips`} title={`Flexible Integration`} />
                </div>
            </div>
            <h3 className='flex justify-center items-center font-bold text-[23px] gradient-text-green text-center pt-[4%]'>
                Boosting client AI chips energy<br /> efficiency (TOPS/W)
            </h3>
            <h3 className='flex justify-center items-center font-medium mono text-[13px] gradient-text-green text-center pt-[1.5%]'>
                * SpinEdge Digital twin modeling
            </h3>
            <div className='flex justify-center items-center pt-[2%]'>

                <Table />
            </div>
        </FiveFone>
    )
}

export default FiveSection
