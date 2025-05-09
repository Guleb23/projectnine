import React from 'react'
import FourFone from '../../Components/FourFone'

import FourImage from '../../Components/FourImage'
import FourLeft from '../../Components/FourLeft'
import FourLastSection from './FourLastSection'
import FiveSection from '../FiveSection/FiveSection'
import SectionSix from '../SixSection/SectionSix'
import NewSevenSection from '../NewSevenSection/NewSevenSection'
import LastFourSection from '../LastFour/LastFourSection'

const FourSection = () => {

    return (
        <FourFone id={"four"}>
            <div className='flex flex-col 2xl:pl-[25%] xl:pl-[17%] px-9 md:flex-row  items-start relative h-fit  '>
                <FourLeft />

                <FourImage />


            </div>
            <FourLastSection />
            <FiveSection />
            <SectionSix />
            <NewSevenSection />
            <LastFourSection />
        </FourFone>
    )
}

export default FourSection
