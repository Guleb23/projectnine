import { lazy, Suspense, useState, useEffect } from 'react';

const Lottie = lazy(() => import('lottie-react'));

const AnimatedCircleLazy = ({ lottieRef, customStyle, width, height, id, animationData }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (animationData) {
            setIsLoaded(true);
        }
    }, [animationData]);

    return (
        <div
            id={id}
            ref={lottieRef}
            className={`absolute pt-[2%] select-none pointer-events-none ${customStyle || ''}`}
            style={{ width: `${width}px`, height: `${height}px`, willChange: 'transform, opacity' }}
        >
            {!isLoaded && (
                <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-20 rounded-full">
                    {/* Простой прелоадер, можно заменить на что угодно */}
                    <svg
                        className="animate-spin h-6 w-6 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                    </svg>
                </div>
            )}

            {animationData && (
                <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
                    {isLoaded && (
                        <Lottie
                            animationData={animationData}
                            loop
                            autoplay
                            style={{ width: '100%', height: '100%' }}
                        />
                    )}
                </Suspense>
            )}
        </div>
    );
};

export default AnimatedCircleLazy;
