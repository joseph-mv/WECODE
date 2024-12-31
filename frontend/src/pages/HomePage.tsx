import About from "../components/About/About"
import Header from "../components/Header/Header"
import { Hero } from "../components/Hero/Hero"
import Values from "../components/Values/Values"

export const HomePage = () => {
    return (
      <div >
        <Header/>
        <Hero/>
        <About/>
        <Values/>
        
      </div>
    )
  }