import React from 'react'
import NewSecondFone from './NewSecondFone'
import MainImage from './MainImage'
import Header from './Header'
import SecondImage from './SecondImage'
import ThreeIMage from './ThreeIMage'

const NewSecondSection = () => {
    const word = ["S", "P", "I", "N", "E", "D", "G", "E"];

    return (
        <NewSecondFone id={`sec`}>

            <Header
                top={`Beyond Silicon. Beyond Limits.`}
                mid={`Imagine the True Potential<br /> Technology of Spintronics`}
                bottom={`Spintronic computing slashes costs, saves<br /> energy, and reshapes the future.`} />
            <MainImage />
            <Header top={`BThe Hidden Cost of Artificial Intelligence`}
                mid={`And Let’s Talk About<br/> Data Centers`}
                bottom={`AI now consumes as much power as nations.`} />
            <SecondImage />
            <div className='w-full flex justify-center items-center pt-[1%] flex-col gap-[85px] mb-50'>
                <p className='text-[37px] leading-[120%] font-bold gradient-text-green'>— and these are just two<br /> sectors out of hundreds…</p>
                <ThreeIMage />
            </div>


            <div className='absolute -bottom-[1%] flex max-w-[732px] w-full justify-between ' >
                {word.map((w, index) => (
                    <p
                        className='text-[77px] leading-[120%] font-bold gradient-text-green text-center'
                        key={index}
                    >
                        {w}
                    </p>
                ))}
            </div>
            <div className="absolute opacity-70 bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
            <img
                src="/NewSecond/btmBlur.png"
                alt="Blur Effect"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-10"
            />
        </NewSecondFone>
    )
}

export default NewSecondSection
