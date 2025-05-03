import React from 'react'

const AnimatedCircle = ({ ref }) => {
    return (

        <img
            className='absolute pt-[2%] select-none pointer-events-none'
            ref={ref}
            width={250}
            height={250}
            src="/ball.gif"
            alt="Animated Ball"
        />

    )
}

export default AnimatedCircle
