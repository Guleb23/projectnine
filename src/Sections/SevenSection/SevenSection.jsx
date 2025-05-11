import React from 'react'
import Fone from "./Fone"
import Header from '../NewSecond/Header'
import Card from './Card'
import Table from './Table'

const SevenSection = () => {
    return (
        <Fone>
            <div className='w-full h-full flex flex-col '>
                <div className='w-full px-[21px]'>
                    <Header top={`BEHIND THE BREAKTHROUGH`} mid={`The Minds Rewriting<br/> AI’s Future`} bottom={`100+ years of combined experience at IBM, Google, and top<br/> research labs — now united to solve AI’s hardest problem`} />

                </div>
                <div className='w-full overflow-x-hidden sm:hidden block'>

                    <img src='/Seven/Fone.png' className='w-[1057px] h-[512px] object-center object-cover sm:hidden block' />
                </div>
                <div className='flex flex-col md:flex-row px-[20px] gap-[35px] md:gap-0'>
                    <div className='flex-[0_0_50%]'>
                        <Card customPosition={`md:ml-[13%] md:mt-[17%] justify-self-start`} img={`/Seven/People.png`} name={`Dr. Dmitry<br/> Leshchiner`} work={`Chief Technology Officer`} desc={`AI algorithms & neuromorphic<br/> technologies; SW development:<br/> 
20+ years @ Google, Yahoo, Yandex`} />
                    </div>
                    <div className='flex-[0_0_50%] '>

                        <Card customPosition={`justify-self-end md:mr-[12%] md:-mt-[29%]`} img={`/Seven/People.png`} name={`Dr. Konstantin<br/> Zvezdin`} work={`CEO`} desc={`R&D MRAM and microwave<br/> spintronics: 20+ years @ Fiat,<br/> European Projects`} />
                        <Card customPosition={`md:justify-self-center justify-self-start md:ml-[15%] md:mt-[20%] mt-[35px]`} img={`/Seven/People.png`} name={`Dr. Nir Karasikov`} work={`Chairman`} desc={`Senior leadership in the High-<br/>Tech industry and business: 25+<br/> year executive @ Nanomotion`} />
                    </div>
                </div>
                <div className='px-[6%] mt-[10px] '>
                    <p className='md:text-[13px] text-[10px] mono bg-[radial-gradient(circle,_#16F501,_#00DA90)] text-transparent bg-clip-text pt-[35px] pb-2'>AND ALSO</p>
                    <h2 className='gradient-text-green md:text-[37px] text-[19px] font-bold  pb-[25px]'>Team members<br /> and Advisors</h2>
                    <div className='flex justify-start'>
                        <Table />
                    </div>

                </div>

            </div>

        </Fone>
    )
}

export default SevenSection
