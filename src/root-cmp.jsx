import { Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Cinema } from "./views/sound-design";
import { GameAudio } from "./views/game-audio";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Contact } from "./views/contact";
import { About } from "./views/about";
import { PersonalProjects } from "./views/personal-projects";
import { useEffect, useRef, useState } from "react";


function App() {
  const [headerClass, setHeaderClass] = useState('')
  const headerRef = useRef('')

  const listenScrollEvent = () => {
    window.scrollY > 100
      ? setHeaderClass("black")
      : setHeaderClass("transparent")
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  return (
    <div className="app" >
      <Header headerRef={headerRef} headerClass={headerClass} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game-audio' element={<GameAudio />} />
        <Route path='/cinema-and-commercials' element={<Cinema />} />
        <Route path='/personal-projects' element={<PersonalProjects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;