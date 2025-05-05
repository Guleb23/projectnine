import React from 'react'

const FourCard = ({ text, customPosition }) => {
    return (

        <div
            className={`bg-white/5 h-fit w-fit px-4 py-2 lg:px-8 lg:py-4 text-white relative z-40 backdrop-blur-md ${customPosition || ""}`}
            style={{
                clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)',
            }}
        >

            <p
                className="lg:text-base mono gradient-text-green text-[10px] "
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>

    )
}

export default FourCard
