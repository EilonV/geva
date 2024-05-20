import { HomeAbout } from "../components/home/about"
import { HomeGameAudio } from "../components/home/game-audio"
import { Hero } from "../components/home/hero"
import { HomeMusicComposition } from "../components/home/music-composition"
import { HomeSoundDesign } from "../components/home/sound-design"

export const Home = () => {
    return <main className="home">
        <Hero />
        <HomeSoundDesign />
        <HomeGameAudio />
        <HomeMusicComposition />
        <HomeAbout />
    </main>
}