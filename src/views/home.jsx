import { HomeAbout } from "../components/home/about"
import { HomeGameAudio } from "../components/home/game-audio"
import { Hero } from "../components/home/hero"
import { HomeCinema } from "../components/home/cinema"

export const Home = () => {
    return <main className="home">
        <Hero />
        <HomeCinema />
        <HomeGameAudio />
        <HomeAbout />
    </main>
}