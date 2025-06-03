import { Suspense, lazy, useEffect, useState } from "react";
import HeroSection from "./Sections/HeroSection";

// Отдельно сохраняем загрузчики (для прелоада)
const loaders = [
  () => import("./Sections/NewSecond/NewSecondSection"),
  () => import("./Sections/SecondSection"),
  () => import("./Sections/ThreeScetion"),
  () => import("./Sections/FourSection/FourSection"),
  () => import("./Sections/SevenSection/SevenSection"),
  () => import("./Sections/EightSection/EightSection"),
  () => import("./Sections/NineSection/NineSection"),
];

// Ленивые компоненты
const LazySections = loaders.map(loader => lazy(loader));

// Достаем компоненты для удобства
const NewSecondSection = LazySections[0];
const SecondSection = LazySections[1];
const ThreeSection = LazySections[2];
const FourSection = LazySections[3];
const SevenSection = LazySections[4];
const EightSection = LazySections[5];
const NineSection = LazySections[6];

const SectionLoader = () => (
  <div className="min-h-[30vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" />
  </div>
);

function App() {
  const [loadNewSecond, setLoadNewSecond] = useState(false);
  const [loadSecondAndThree, setLoadSecondAndThree] = useState(false);
  const [loadOthers, setLoadOthers] = useState(false);

  const handleHeroAnimationComplete = () => {
    setLoadNewSecond(true);
  };

  useEffect(() => {
    if (loadNewSecond) {
      const timer = setTimeout(() => {
        setLoadSecondAndThree(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [loadNewSecond]);

  useEffect(() => {
    if (loadSecondAndThree) {
      const timer = setTimeout(() => {
        setLoadOthers(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loadSecondAndThree]);

  return (
    <main>
      <section>
        <HeroSection onAnimationComplete={handleHeroAnimationComplete} />
      </section>

      {loadNewSecond && (
        <Suspense fallback={<SectionLoader />}>
          <section>
            <NewSecondSection />
          </section>
        </Suspense>
      )}

      {loadSecondAndThree && (
        <>
          <Suspense fallback={<SectionLoader />}>
            <section>
              <SecondSection />
            </section>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section>
              <ThreeSection />
            </section>
          </Suspense>
        </>
      )}

      {loadOthers && (
        <>
          <Suspense fallback={<SectionLoader />}>
            <section>
              <FourSection />
            </section>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section>
              <SevenSection />
            </section>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section>
              <EightSection />
            </section>
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <section>
              <NineSection />
            </section>
          </Suspense>
        </>
      )}
    </main>
  );
}

export default App;
