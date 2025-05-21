import { useEffect, useState, lazy, Suspense } from 'react';

const Lottie = lazy(() => import('lottie-react'));

const AnimatedCircle = ({ lottieRef, customStyle, width, height, id }) => {
    const [animationData, setAnimationData] = useState(null);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Задержка для сглаживания появления
        const timeout = setTimeout(() => {
            setShouldRender(true);

            // Асинхронная загрузка JSON файла
            import('/public/Ball/main.json')
                .then((data) => setAnimationData(data.default))
                .catch((err) => console.error("Failed to load animation JSON", err));
        }, 10);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            id={id}
            ref={lottieRef}
            className={`absolute pt-[2%] select-none pointer-events-none ${customStyle || ""}`}
            style={{ width: `${width}px`, height: `${height}px`, willChange: 'transform, opacity' }}
        >
            {shouldRender && animationData && (
                <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
                    <Lottie
                        animationData={animationData}
                        loop
                        autoplay
                        style={{ width: '100%', height: '100%' }}
                    />
                </Suspense>
            )}
        </div>
    );
};

export default AnimatedCircle;
