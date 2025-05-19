import FourFone from '../../Components/FourFone'
import FourImage from '../../Components/FourImage'
import FourLeft from '../../Components/FourLeft'
import FourLastSection from './FourLastSection'
import FiveSection from '../FiveSection/FiveSection'
import SectionSix from '../SixSection/SectionSix'
import NewSevenSection from '../NewSevenSection/NewSevenSection'
import LastFourSection from '../LastFour/LastFourSection'
import { useEffect, useRef, useState } from 'react'

const FourSection = () => {
    const topSectionRef = useRef(null);  // Ссылка на контейнер до FiveSection
    const [blurHeight, setBlurHeight] = useState();
    useEffect(() => {
        if (topSectionRef.current) {
            const height = topSectionRef.current.offsetHeight;
            const rect = topSectionRef.current.getBoundingClientRect();
            const absoluteTop = rect.top + window.scrollY;
            setBlurHeight(topSectionRef.current.offsetHeight)
        }
    }, []);
    return (
        <FourFone heightBlur={blurHeight} id={"four"}>
            <div ref={topSectionRef}>
                <div id="stop" className='flex flex-col 2xl:pl-[25%] xl:pl-[17%] px-9 md:flex-row  items-start relative h-fit  '>
                    <FourLeft />

                    <FourImage />


                </div>
                <FourLastSection />
                <FiveSection />
            </div>

            <SectionSix />
            <NewSevenSection />
            <LastFourSection />
        </FourFone>
    )
}

export default FourSection
