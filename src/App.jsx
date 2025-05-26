import { Suspense, lazy, useEffect, useState } from "react"
import HeroSection from "./Sections/HeroSection"

// Lazy load all other sections
const NewSecondSection = lazy(() => import("./Sections/NewSecond/NewSecondSection"))
const SecondSection = lazy(() => import("./Sections/SecondSection"))
const ThreeScetion = lazy(() => import("./Sections/ThreeScetion"))
const FourSection = lazy(() => import("./Sections/FourSection/FourSection"))
const SevenSection = lazy(() => import("./Sections/SevenSection/SevenSection"))
const NineSection = lazy(() => import("./Sections/NineSection/NineSection"))

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="min-h-[30vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
  </div>
)

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isHeroLoaded, setIsHeroLoaded] = useState(false)

  // Preload next section
  useEffect(() => {
    if (isHeroLoaded) {
      const sections = [
        () => import("./Sections/NewSecond/NewSecondSection"),
        () => import("./Sections/SecondSection"),
        () => import("./Sections/ThreeScetion"),
        () => import("./Sections/FourSection/FourSection"),
        () => import("./Sections/SevenSection/SevenSection"),
        () => import("./Sections/NineSection/NineSection")
      ]

      if (currentSection < sections.length) {
        sections[currentSection]()
      }
    }
  }, [currentSection, isHeroLoaded])

  // Handle intersection observer for progressive loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection((prev) => prev + 1)
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <section onLoad={() => setIsHeroLoaded(true)}>
        <HeroSection />
      </section>

      {currentSection >= 1 && (
        <Suspense fallback={<SectionLoader />}>
          <section>
            <NewSecondSection />
          </section>
        </Suspense>
      )}

      {currentSection >= 2 && (
        <Suspense fallback={<SectionLoader />}>
          <section>
            <SecondSection />
          </section>
        </Suspense>
      )}

      {currentSection >= 3 && (
        <Suspense fallback={<SectionLoader />}>
          <section>
            <ThreeScetion />
          </section>
        </Suspense>
      )}

      {currentSection >= 4 && (
        <Suspense fallback={<SectionLoader />}>
          <section>
            <FourSection />
          </section>
        </Suspense>
      )}

      {currentSection >= 5 && (
        <Suspense fallback={<SectionLoader />}>
          <section>
            <SevenSection />
          </section>
        </Suspense>
      )}

      {currentSection >= 6 && (
        <Suspense fallback={<SectionLoader />}>
          <section>
            <NineSection />
          </section>
        </Suspense>
      )}
    </main>
  )
}

export default App