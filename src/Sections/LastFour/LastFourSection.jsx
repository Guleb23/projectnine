import Header from '../NewSecond/Header'

const LastFourSection = () => {
    return (
        <div className='w-screen h-screen pt-[1%] flex flex-col items-center gap-14'>
            <Header
                top={`TECHNOLOGY DEVELOPMENT`}
                mid={`From Lab to Global Dominance`}
                bottom={`Our path to redefine AI hardware standards`}
            />

            {/* Только на мобильных: горизонтальный скролл */}
            <div className="w-full overflow-x-auto sm:overflow-x-visible px-4 md:flex md:justify-center md:items-center">
                <img
                    src='/NewSeven/main.png'
                    className='min-w-[1260px] h-[452px] sm:w-[1260px] r'
                />
            </div>
        </div>
    )
}

export default LastFourSection

