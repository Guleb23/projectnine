import React from 'react'

const FourCard = ({ text, customPosition, ref = null }) => {
    return (

        <div
            ref={ref}
            style={{
                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
            }}
            className={`bg-white/5 h-fit w-fit px-4 py-2 lg:px-8 lg:py-4  relative z-40 backdrop-blur-md ${customPosition || ""}`}

        >

            <img src='/Four/left.png' className='absolute  top-0 left-0 ' />
            <img src='/Four/right.png' className='absolute bottom-0 right-0 ' />
            <p
                className="lg:text-[15px] mono gradient-text-green text-[10px] "
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>


    )
}

export default FourCard
