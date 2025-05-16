import React from 'react'
import Card from './Card'
import Spirit from './Spirit'

const SecondImage = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center relative mb-[80px]'>
            <img width={950} height={435} className='mb-[45px] select-none pointer-events-none w-[335px] h-[205px] sm:w-[950px] sm:h-[435px] block lg:hidden' src="/NewSecond/secTwo.png" />
            <Spirit customStyle={`hidden lg:flex`} />
            <img className=' select-none pointer-events-none w-[1008px] h-[263px] hidden md:block' src='/NewSecond/lines.png' />
            <div className='  grid grid-cols-2 sm:flex max-w-full sm:max-w-[87%] justify-evenly sm:gap-[70px] gap-y-[25px] px-4 flex-wrap lg:flex-nowrap text-center'>
                <Card
                    customStyle={`text-left sm:text-center items-start sm:items-center`}
                    num={`01`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">100× cheaper</span> → AI becomes <br/> truly global`}
                />
                <Card
                    customStyle={`text-left sm:text-center items-start sm:items-center`}
                    num={`02`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">Exponentially</span> faster AI<br/>progress`}
                />
                <Card
                    customStyle={`text-left sm:text-center items-start sm:items-center`}

                    num={`03`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">Less energy</span> → fewer <br/> emissions`}
                />
                <Card
                    customStyle={`text-left sm:text-center items-start sm:items-center`}

                    num={`04`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">From AI to aerospace,</span><br/>medicine, and smart cities`}
                />
            </div>
        </div>
    )
}

export default SecondImage
