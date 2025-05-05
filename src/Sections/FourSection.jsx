import React from 'react'
import FourFone from '../Components/FourFone'

import FourImage from '../Components/FourImage'
import FourLeft from '../Components/FourLeft'

const FourSection = () => {

    return (
        <FourFone id={"four"}>
            <div className='flex flex-col 2xl:pl-[25%] xl:pl-[17%] px-9 md:flex-row pt-28 items-start relative h-full '>
                <FourLeft />

                <FourImage />

            </div>
        </FourFone>
    )
}

export default FourSection
