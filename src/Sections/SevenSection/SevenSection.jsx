import React from 'react'
import Fone from "./Fone"
import Header from '../NewSecond/Header'
import Card from './Card'
import Table from './Table'

const SevenSection = () => {
    return (
        <Fone>
            <div className='w-full h-full flex flex-col'>
                <Header top={`BEHIND THE BREAKTHROUGH`} mid={`The Minds Rewriting<br/> AI’s Future`} bottom={`20+ years at IBM, Google, and top research labs<br/> — now united to solve AI’s hardest problem`} />
                <div className='flex'>
                    <div className='flex-[0_0_50%]'>
                        <Card customPosition={`ml-[13%] mt-[17%]`} img={`/Seven/People.png`} name={`Dr. Dmitry<br/> Leshchiner`} work={`Chief Technology Officer`} desc={`AI algorithms & neuromorphic<br/> technologies; SW development:<br/> 
20+ years @ Google, Yahoo, Yandex`} />
                    </div>
                    <div className='flex-[0_0_50%]'>

                        <Card customPosition={`justify-self-end mr-[12%] -mt-[29%]`} img={`/Seven/People.png`} name={`Dr. Konstantin<br/> Zvezdin`} work={`CEO`} desc={`R&D MRAM and microwave<br/> spintronics: 20+ years @ Fiat,<br/> European Projects`} />
                        <Card customPosition={`justify-self-center ml-[15%] mt-[20%]`} img={`/Seven/People.png`} name={`Dr. Nir Karasikov`} work={`Chairman`} desc={`Senior leadership in the High-<br/>Tech industry and business: 25+<br/> year executive @ Nanomotion`} />
                    </div>
                </div>
                <div className='px-[6%]'>
                    <p className='text-[13px] mono bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text'>AND ALSO</p>
                    <h2 className='gradient-text-green text-[37px] font-bold'>Team members<br /> and Advisors</h2>
                    <Table />
                </div>

            </div>

        </Fone>
    )
}

export default SevenSection
