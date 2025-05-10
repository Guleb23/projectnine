import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/Ball/Spin1_0008_250_80.json'; // путь к Lottie JSON-файлу

const AnimatedCircle = ({ lottieRef, customStyle, width = 250, height = 250 }) => {
    return (
        <div
            className={`absolute pt-[2%] select-none pointer-events-none ${customStyle || ""}`}
            ref={lottieRef}
            style={{ width, height }}
        >
            <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default AnimatedCircle;