import vid from '../assets/videos/catch.mp4'
import mikmak from '../assets/videos/games/MikMak.mp4'
import cover from '../assets/images/catch cover.png'
// import solitaire from '../assets/images/games/solitaire.jpg'

export const GameAudio = () => {
    return <section className="game-audio page">
        <div className="main-games">
            <div className="main-game">
                <div className="text">
                    <h2>Catch me if you can</h2>
                    <p>CMIYC - Rougelike Puzzle Indice Video Game for PC.
                        This game started as a project for AI Course During my Masters but since then it has evolved into much more.
                        Release - T.B.C</p>
                    <span>
                        Game Designer - Yaron Kantor
                        <br />
                        Unity Dev - Nisim Gerbi
                        <br />
                        Sound SFX - Geva Hason
                    </span>

                </div>
                <video className='js-player' id="player" playsInline controls data-poster={cover}>
                    <source src={vid} type="video/mp4" />
                </video>

            </div>
            <div className="main-game">
                <div className="text">
                    <h2>MikMak World</h2>
                    <p>MikMak is a social hub game for children developed by D.I.C.
                        the video display a WIP of the City map of the 2nd iteration of the game.
                        game is released and can be purchased on https://www.mikmak.co.il/ </p>
                    <span>
                        Game Designer & Publisher - D.I.C Network (all rights reserved)
                        <br />
                        Sound SFX - Geva Hason
                    </span>
                </div>
                <video className='js-player' id="player" playsInline controls>
                    <source src={mikmak} type="video/mp4" />
                </video>
            </div>
        </div>

        <div className="games-fx">
            <div className="game-fx solitaire">
                <div className="text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum a iusto nesciunt vero quibusdam odio distinctio sed quam vel.</p>
                </div>
                <div className="audio">
                    <p>audio here bro</p>
                    <p>audio here bro</p>
                    <p>audio here bro</p>
                    <p>audio here bro</p>
                </div>
            </div>

        </div>
    </section>
}