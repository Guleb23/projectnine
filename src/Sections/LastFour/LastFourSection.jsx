import Header from '../NewSecond/Header'
import Diagramm from './Diagramm'
import Light from './Light'

const LastFourSection = () => {
    return (
        <div id='diagramm' className='w-screen relative md:h-screen h-fit pt-[1%] flex flex-col items-center lg:gap-14 gap-6 md:pb-0 pb-16'>
            <Header
                top={`TECHNOLOGY DEVELOPMENT`}
                mid={`From Lab to Global Dominance`}
                bottom={window.innerWidth < 640 ? "Our path to redefine<br/> AI hardware standards" : "Our path to redefine AI hardware standards"}
            />
            <img src='/Last/light.png' className='block lg:hidden absolute top-0 right-0 opacity-40' />
            <div className='relative w-full h-full py-2'>
                <img src='/hand.svg' className='block lg:hidden absolute top-0 right-12' />
            </div>
            <Light />

            <div className="w-full overflow-x-auto sm:overflow-x-visible px-4 pb-[10%] md:flex md:justify-center md:items-center relative">


                <Diagramm />
            </div>
        </div>
    )
}

export default LastFourSection

