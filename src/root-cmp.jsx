import { Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Cinema } from "./views/cinema";
import { GameAudio } from "./views/game-audio";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Contact } from "./views/contact";
import { About } from "./views/about";
import { PersonalProjects } from "./views/personal-projects";
import { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import AOS from 'aos';
import ReactGA from "react-ga4";
import "plyr-react/plyr.css"
import 'aos/dist/aos.css';


function App() {
  const [headerClass, setHeaderClass] = useState('')
  const headerRef = useRef('')

  ReactGA.initialize('G-RW23B38X43')
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });

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