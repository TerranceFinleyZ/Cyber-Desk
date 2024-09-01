import Navbar from "./componets/Navbar"
import "./App.css"
import Hero from "./componets/Hero"
import About from "./componets/About"

import Projects from "./componets/Projects"
import Last from "./componets/Last"
import Footer from "./componets/Footer"
import Services from "./componets/Services"



function App() {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Last />
      <Footer />
      
    </div>
  )
}

export default App
