import React from 'react'
import Card from './Card'

const SecondImage = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center relative mb-[80px] pt-2'>
            <img width={950} height={435} src="/NewSecond/secTwo.png" />

            <img className=' select-none pointer-events-none w-[1008px] h-[263px] hidden md:block' src='/NewSecond/lines.png' />
            <div className='flex max-w-[87%] justify-evenly gap-[70px] pt-8 lg:flex-nowrap flex-wrap'>
                <Card
                    customStyle={`text-center`}
                    num={`01`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">$30–50 billion</span> in annual <br/> global energy savings`}
                />
                <Card
                    customStyle={`text-center`}
                    num={`02`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">Exponentially</span> faster AI<br/>progress`}
                />
                <Card
                    customStyle={`text-center`}

                    num={`03`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">Less energy</span> → fewer <br/> emissions`}
                />
                <Card
                    customStyle={`text-center`}

                    num={`04`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">From AI to aerospace,</span><br/>medicine, and smart cities`}
                />
            </div>
        </div>
    )
}

export default SecondImage
