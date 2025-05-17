import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '/public/Ball/Spin1_0009_300_60.json';

const AnimatedCircle = ({ customStyle, width, height, id }) => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);
    const rafId = useRef(null);

    // текущий кадр и цель
    const currentFrame = useRef(0);
    const targetFrame = useRef(80);

    useEffect(() => {
        if (!containerRef.current) return;

        const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData,
        });

        animationRef.current = anim;

        // стартовый кадр
        anim.goToAndStop(0, true);
        currentFrame.current = 0;

        // этапы анимации (фазы)
        // 0: 0-80 вправо (loop)
        // 1: 81-160 переход (один раз)
        // 2: 161-240 влево (loop)
        // 3: 240-0 плавный возврат к началу (новая фаза)
        // 4: 0-80 снова (цикл)
        let phase = 0;

        function onSegmentComplete() {
            switch (phase) {
                case 0: // 0-80 вправо
                    phase = 1;
                    targetFrame.current = 160;
                    step();
                    break;
                case 1: // 81-160 переход
                    phase = 2;
                    targetFrame.current = 240;
                    step();
                    break;
                case 2: // 161-240 влево
                    phase = 3;
                    targetFrame.current = 0; // плавный возврат к 0
                    step();
                    break;
                case 3: // плавный возврат с 240 до 0
                    phase = 4;
                    currentFrame.current = 0; // сброс для плавного цикла
                    targetFrame.current = 80;
                    step();
                    break;
                case 4: // 0-80 снова (цикл)
                    phase = 0;
                    targetFrame.current = 80;
                    step();
                    break;
            }
        }

        // функция плавного шага к targetFrame
        function step() {
            const anim = animationRef.current;
            if (!anim) return;

            let cf = currentFrame.current;
            let tf = targetFrame.current;

            // сравнение с небольшим допуском для плавности
            if (Math.abs(cf - tf) < 0.01) {
                currentFrame.current = tf;
                anim.goToAndStop(tf, true);

                cancelAnimationFrame(rafId.current);
                rafId.current = null;
                onSegmentComplete();
                return;
            }

            const stepSize = 0.2; // скорость шага

            if (cf < tf) {
                cf = Math.min(cf + stepSize, tf);
            } else {
                cf = Math.max(cf - stepSize, tf);
            }

            currentFrame.current = cf;
            anim.goToAndStop(cf, true);

            rafId.current = requestAnimationFrame(step);
        }

        // запускаем анимацию с первой фазы
        targetFrame.current = 80;
        step();

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
            anim.destroy();
        };
    }, []);

    return (
        <div
            id={id}
            ref={containerRef}
            className={`absolute pt-[2%] select-none pointer-events-none  ${customStyle || ''}`}
            style={{ width: `${width}px`, height: `${height}px`, zIndex: 10 }}
        />
    );
};

export default AnimatedCircle;
