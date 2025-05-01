import React from 'react'

const AnimatedCircle = ({ ref }) => {
    return (

        <img
            className='absolute pt-[2%]'
            ref={ref}
            width={250}
            height={250}
            src="/src/assets/ball.gif"
            alt="Animated Ball"
        />

    )
}

export default AnimatedCircle
