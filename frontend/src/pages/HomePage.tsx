import About from "../components/About/About"
import Header from "../components/Header/Header"
import { Hero } from "../components/Hero/Hero"

export const HomePage = () => {
    return (
      <div >
        <Header/>
        <Hero/>
        <About/>
        
      </div>
    )
  }