import React from 'react'
import Card from './Card'

const MainImage = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center relative mb-[80px]'>
            <div className="relative mr-3">  {/* Этот div теперь "отслеживает" размеры картинки */}
                <img width={950} height={435} className='select-none pointer-events-none' src="/NewSecond/secOne.png" />
                <p className='absolute top-[10%] left-[4.5%]  mono text-sm leading-[150%] bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text'>TODAY, THE AVERAGE COST OF A SINGLE<br /> CHATGPT REQUEST IS $0.05</p>
                <p className='absolute bottom-[18%] left-[4.5%] mono text-sm leading-[150%] bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text'>WITH SPINTRONIC TECHNOLOGY, IT<br /> COULD DROP TO LESS THAN $0.0005</p>
            </div>
            <img className='w-[1008px] select-none pointer-events-none hidden lg:block' src='/NewSecond/lines.png' />
            <div className='flex max-w-[87%] justify-evenly gap-[70px] pt-8 flex-wrap lg:flex-nowrap text-center'>
                <Card
                    num={`01`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">100× cheaper</span> → AI becomes <br/> truly global`}
                />
                <Card
                    num={`02`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">No longer just for Big Tech</span><br/> — democratizing intelligence`}
                />
                <Card
                    num={`03`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">More models</span> = more<br/> breakthroughs`}
                />
                <Card

                    num={`04`}
                    text={`<span class="bg-[radial-gradient(circle,_#00E599,_#00E599)] text-transparent bg-clip-text">Acceleration at every level</span><br/> — from research to edge`}
                />
            </div>
        </div>
    )
}

export default MainImage
