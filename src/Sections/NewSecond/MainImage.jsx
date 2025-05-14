import React, { useEffect, useState } from 'react'
import Card from './Card'
import PricingGraph from '../../Components/PricingGraph'
const MainImage = () => {
    const [fText, setFText] = useState("TODAY, THE AVERAGE COST OF A SINGLE<br /> CHATGPT REQUEST IS $0.05");
    const [sText, setSText] = useState("WITH SPINTRONIC TECHNOLOGY, IT<br /> COULD DROP TO LESS THAN $0.0005");
    useEffect(() => {
        if (innerWidth < 640) {
            setFText(`TODAY, THE AVERAGE COST<br /> OF A SINGLE CHATGPT<br /> REQUEST IS $0.05`);
            setSText(`WITH SPINTRONIC<br /> TECHNOLOGY, IT COULD DROP<br /> TO LESS THAN $0.0005`)
        }
    }, [])
    return (
        <div className='w-full h-full flex flex-col justify-center items-center relative sm:mb-[80px] mb-[30px]'>
            <div className="relative mr-3 ">  {/* Этот div теперь "отслеживает" размеры картинки */}

                <PricingGraph customStyle={`hidden lg:block`} fText={fText} sText={sText} />
                <img width={950} height={435} className='block lg:hidden select-none pointer-events-none w-[335px] h-[205px] sm:w-[950px] sm:h-[435px]' src="/NewSecond/secOne.png" />
                <p className='block lg:hidden absolute top-[10%] left-[4.5%]  mono sm:text-sm text-[11px] leading-[150%] bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text' dangerouslySetInnerHTML={{ __html: fText }} />
                <p className='block lg:hidden absolute bottom-[18%] left-[4.5%] mono sm:text-sm text-[11px] leading-[150%] bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text' dangerouslySetInnerHTML={{ __html: sText }} />
            </div>
            <img className='w-[1008px] select-none pointer-events-none hidden lg:block' src='/NewSecond/lines.png' />
            <div className=' grid grid-cols-2 sm:flex max-w-full sm:max-w-[87%] justify-evenly sm:gap-[70px] gap-y-3 px-4 pt-8 flex-wrap lg:flex-nowrap text-center'>
                <Card
                    num={`01`}
                    customStyle={`text-left sm:text-center items-start sm:items-center`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">100× cheaper</span> → AI becomes <br/> truly global`}
                />
                <Card
                    num={`02`}
                    customStyle={`text-left sm:text-center items-start sm:items-center`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">No longer just for Big Tech</span><br/> — democratizing intelligence`}
                />
                <Card
                    num={`03`}
                    customStyle={`ext-left sm:text-center items-start sm:items-center`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">More models</span> = more<br/> breakthroughs`}
                />
                <Card

                    num={`04`}
                    customStyle={`text-left sm:text-center items-start sm:items-center`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">Acceleration at every level</span><br/> — from research to edge`}
                />
            </div>
        </div>
    )
}

export default MainImage
