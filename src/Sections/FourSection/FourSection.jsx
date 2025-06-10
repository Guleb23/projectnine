import FourFone from '../../Components/FourFone'
import FourImage from '../../Components/FourImage'
import FourLeft from '../../Components/FourLeft'
import FourLastSection from './FourLastSection'
import FiveSection from '../FiveSection/FiveSection'
import SectionSix from '../SixSection/SectionSix'
import NewSevenSection from '../NewSevenSection/NewSevenSection'
import LastFourSection from '../LastFour/LastFourSection'
import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import React from 'react'

const FourSection = () => {
    const topSectionRef = useRef(null);
    const [blurHeight, setBlurHeight] = useState(0);

    // Мемоизируем функцию обновления высоты
    const updateBlurHeight = useCallback(() => {
        if (topSectionRef.current) {
            const height = topSectionRef.current.offsetHeight;
            setBlurHeight(height);
        }
    }, []);

    // Используем ResizeObserver для отслеживания изменений размера
    useEffect(() => {
        if (!topSectionRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            updateBlurHeight();
        });

        resizeObserver.observe(topSectionRef.current);

        // Очистка при размонтировании
        return () => {
            resizeObserver.disconnect();
        };
    }, [updateBlurHeight]);

    // Мемоизируем стили для контейнера
    const containerStyles = useMemo(() => ({
        paddingBottom: '6%'
    }), []);

    // Мемоизируем стили для внутреннего контейнера
    const innerContainerStyles = useMemo(() => ({
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 'var(--padding-left, 1.25rem)',
        alignItems: 'flex-start',
        position: 'relative',
        height: 'fit-content'
    }), []);

    return (
        <FourFone heightBlur={blurHeight}>
            <div
                id="four"
                ref={topSectionRef}
                className='pb-[6%]'
                style={containerStyles}
            >
                <div
                    id="stop"
                    className='flex flex-col 2xl:pl-[25%] xl:pl-[17%] px-5 md:flex-row items-start relative h-fit'
                    style={innerContainerStyles}
                >
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
    );
};

export default React.memo(FourSection);
