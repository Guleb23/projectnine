
import FourSection from "./Sections/FourSection"
import HeroSection from "./Sections/HeroSection"
import SecondSection from "./Sections/SecondSection"

import ThreeScetion from "./Sections/ThreeScetion"

function App() {


  return (
    <main >
      <div className="w-full h-fit overflow-x-hidden">
        <HeroSection />
        <SecondSection />
        <ThreeScetion />

      </div>
      <FourSection />

    </main>
  )
}

export default App
