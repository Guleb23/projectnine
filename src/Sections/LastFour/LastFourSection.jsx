import Header from '../NewSecond/Header'
import Diagramm from './Diagramm'
import Light from './Light'

const LastFourSection = () => {
    return (
        <div id='diagramm' className='w-screen relative md:h-screen h-fit pt-[1%] flex flex-col items-center gap-14 md:pb-0 pb-16'>
            <Header
                top={`TECHNOLOGY DEVELOPMENT`}
                mid={`From Lab to Global Dominance`}
                bottom={`Our path to redefine AI hardware standards`}
            />
            <Light />
            {/* Только на мобильных: горизонтальный скролл */}
            <div className="w-full overflow-x-auto sm:overflow-x-visible px-4 md:flex md:justify-center md:items-center">


                <Diagramm />
            </div>
        </div>
    )
}

export default LastFourSection

