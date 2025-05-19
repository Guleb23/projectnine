import { Suspense, lazy } from 'react'
import Loader from './Components/Loader'

const HeroSection = lazy(() => import("./Sections/HeroSection"))
const NewSecondSection = lazy(() => import("./Sections/NewSecond/NewSecondSection"))
const SecondSection = lazy(() => import("./Sections/SecondSection"))
const ThreeScetion = lazy(() => import("./Sections/ThreeScetion"))
const FourSection = lazy(() => import("./Sections/FourSection/FourSection"))
const SevenSection = lazy(() => import("./Sections/SevenSection/SevenSection"))
const NineSection = lazy(() => import("./Sections/NineSection/NineSection"))

function App() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <NewSecondSection />
        <SecondSection />
        <ThreeScetion />
        <FourSection />
        <SevenSection />
        <NineSection />
      </Suspense>
    </main>
  )
}

export default App
