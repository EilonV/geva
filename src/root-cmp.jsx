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
import Plyr from "plyr";
import "plyr-react/plyr.css"

function App() {
  const [headerClass, setHeaderClass] = useState('')
  const headerRef = useRef('')

  const listenScrollEvent = () => {
    window.scrollY > 100
      ? setHeaderClass("black")
      : setHeaderClass("transparent")
  }

  useEffect(() => {
    Array.from(document.querySelectorAll('.js-player')).map((p) => {
      new Plyr(p);
      return null;
    });

    Array.from(document.querySelectorAll('.js-player-audio')).map((p) => {
      new Plyr(p, {
        controls: [
          'play',            // Play/pause button
          'progress',        // Progress bar
          'current-time',    // Current time display
          'mute',            // Mute button
          'volume'           // Volume control
        ]
      });
      return null;
    });

    Array.from(document.querySelectorAll('.js-player-game-audio')).map((p) => {
      new Plyr(p, {
        controls: [
          'play',            // Play/pause button
          'progress',        // Progress bar
          // 'current-time',    // Current time display
        ]
      });
      return null;
    });
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