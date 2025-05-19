import React from 'react'
import Card from './Card'
import Spirit from './Spirit'
import FlowLines from '../../../public/NewSecond/FlowLines'

const SecondImage = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center relative mb-[20px]'>
            <img width={950} height={435} className='mb-[45px] select-none pointer-events-none w-[335px] h-[205px] sm:w-[950px] sm:h-[435px] block md:hidden' src="/NewSecond/secTwo.png" />
            <img className='block lg:hidden' src="/NewSecond/SeconImg/img.png" />
            <Spirit customStyle={`hidden lg:flex`} />
            <FlowLines id="second-image" />
            <div className='grid grid-cols-2 sm:flex max-w-full 2xl:max-w-[87%] xl:max-w-[100%] lg:max-w-[100%] justify-evenly sm:gap-[70px] gap-y-[25px] pt-[30px] flex-wrap lg:flex-nowrap text-center'>
                <Card
                    customStyle={`text-left md:text-left sm:text-center items-start sm:items-center`}
                    num={`01`}
                    text={`${innerWidth > 640 ?
                        `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">100× cheaper</span> → AI becomes <br/> truly global`
                        : `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">100× cheaper</span><br/> → AI becomes<br/>  truly global`}`}
                />
                <Card
                    customStyle={`text-left md:text-left sm:text-center items-start sm:items-center`}
                    num={`02`}
                    text={`${innerWidth > 640 ?
                        `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">No longer just for<br/> Big Tech —<br/> </span> democratizing intelligence`
                        : `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">No longer just for<br/> Big Tech —<br/> </span> democratizing intelligence`}`}
                />
                <Card
                    customStyle={`text-left md:text-left sm:text-center items-start sm:items-center`}

                    num={`03`}
                    text={`${innerWidth > 640 ?
                        `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">More models =<br/></span>more<br/> breakthroughs`
                        : `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">More models =<br/></span>more<br/> breakthroughs`}`}
                />
                <Card
                    customStyle={`text-left md:text-left sm:text-center items-start sm:items-center`}

                    num={`04`}
                    text={`${innerWidth > 640 ?
                        `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">Acceleration at every <br/>level<br/></span>— from research<br/> to edge`
                        : `<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">Acceleration at every <br/>level<br/></span>— from research<br/> to edge`}`}
                />
            </div>
        </div>
    )
}

export default SecondImage
