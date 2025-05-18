import Lottie from 'lottie-react';
import animationData from '/public/Ball/main.json'; // путь к Lottie JSON-файлу
import { useEffect } from 'react';


const AnimatedCircle = ({ lottieRef, customStyle, width, height, id }) => {

    return (
        <div
            id={id}
            ref={lottieRef}
            className={`absolute pt-[2%] select-none pointer-events-none ${customStyle || ""}`}

            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <Lottie animationData={animationData} loop autoplay style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default AnimatedCircle;

