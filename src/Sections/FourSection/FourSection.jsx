import React from 'react'
import FourFone from '../../Components/FourFone'

import FourImage from '../../Components/FourImage'
import FourLeft from '../../Components/FourLeft'
import FourLastSection from './FourLastSection'
import FiveSection from '../FiveSection/FiveSection'

const FourSection = () => {

    return (
        <FourFone id={"four"}>
            <div className='flex flex-col 2xl:pl-[25%] xl:pl-[17%] px-9 md:flex-row  items-start relative h-fit  '>
                <FourLeft />

                <FourImage />


            </div>
            <FourLastSection />
            <FiveSection />
        </FourFone>
    )
}

export default FourSection
