import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductViewer from "./components/ProductViewer"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all"
import Showcase from "./components/Showcase"
import Performence from "./components/Performence"
import Features from "./components/Features"
import Highlights from "./components/Highlights"
import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performence />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App
