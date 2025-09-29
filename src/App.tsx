import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Projects from "./components/Projects";
import Achievements from "./components/Achivements";
import ContactForm from "./components/Contact";
const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Achievements />
      <ContactForm />
    </div>
  )
}

export default App