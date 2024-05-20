import { Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { SoundDesign } from "./views/sound-design";
import { GameAudio } from "./views/game-audio";
import { MusicComposition } from "./views/music-composition";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sound-design' element={<SoundDesign />} />
        <Route path='/game-audio' element={<GameAudio />} />
        <Route path='/music-composition' element={<MusicComposition />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;