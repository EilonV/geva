import { Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { SoundDesign } from "./views/sound-design";
import { GameAudio } from "./views/game-audio";
import { MusicComposition } from "./views/music-composition";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sound-design' element={<SoundDesign />} />
      <Route path='/game-audio' element={<GameAudio />} />
      <Route path='/music-composition' element={<MusicComposition />} />
    </Routes>
  );
}

export default App;