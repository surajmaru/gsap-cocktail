import { ScrollSmoother, ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap/gsap-core.js'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />

    </main>
  )
}

export default App