import vid from '../assets/videos/catch.mp4'
import mikmak from '../assets/videos/games/MikMak.mp4'
import cover from '../assets/images/catch cover.png'
import Plyr from 'plyr';
import { useEffect } from 'react';

const importAll = (r) => {
    let files = {};
    r.keys().map((item, index) => { files[item.replace('./', '')] = r(item); return null });
    return files;
};

export const GameAudio = () => {
    const solitaire = importAll(require.context('../assets/audio/games/Play Perfect/SS', false, /\.(wav|mp3)$/));
    const mikCafe = importAll(require.context('../assets/audio/games/MikMak World/MikCafe SFX', false, /\.(wav|mp3)$/));
    const mikDash = importAll(require.context('../assets/audio/games/MikMak World/MikDash SFX', false, /\.(wav|mp3)$/));
    const mikSpike = importAll(require.context('../assets/audio/games/MikMak World/MikSpike SFX', false, /\.(wav|mp3)$/));
    const mikBall = importAll(require.context('../assets/audio/games/MikMak World/MikBall SFX', false, /\.(wav|mp3)$/));
    const mikWitch = importAll(require.context('../assets/audio/games/MikMak World/MikWitch SFX', false, /\.(wav|mp3)$/));
    const Idie = importAll(require.context('../assets/audio/games/Idie', false, /\.(wav|mp3)$/));

    useEffect(() => {
        window.scrollTo(0, 0);
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
    }, [])

    return <section className="game-audio page">
        <div className="main-games">
            <div className="main-game">
                <div className="text">
                    <div className='flex column gap'>
                        <h2>Catch me if you can</h2>
                        <p>CMIYC - Rougelike Puzzle Indice Video Game for PC.
                            This game started as a project for AI Course During my Masters but since then it has evolved into much more.
                            Release - T.B.C</p>
                    </div>
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
                <div className="audio">
                    {/* Iterate over each audio file and render an <audio> element */}
                    {Object.entries(Idie).map(([fileName, src]) => (
                        <div className='player-wrapper' key={fileName}>
                            <p>{fileName}</p>
                            <audio className='js-player-game-audio' preload="none" id="player" controls>
                                <source src={src} type="audio/wav" />
                            </audio>
                        </div>
                    ))}

                </div>
            </div>
            <div className="main-game mik">
                <video className='js-player' id="player" playsInline controls>
                    <source src={mikmak} type="video/mp4" />
                </video>
                <div className="text">
                    <div className='flex column gap'>
                        <h2>MikMak World</h2>
                        <p>MikMak is a social hub game for children developed by D.I.C.
                            the video display a WIP of the City map of the 2nd iteration of the game.
                            game is released and can be purchased on</p>
                        <a href="https://www.mikmak.co.il/" target='noopener'>https://www.mikmak.co.il/</a>
                    </div>
                    <span>
                        Game Designer & Publisher - D.I.C Network (all rights reserved)
                        <br />
                        Sound SFX - Geva Hason
                    </span>
                </div>

            </div>
        </div>

        <div className="games-fx">
            <div className="game-fx solitaire">
                <div className="text">
                    <h3>Solitaire Smash</h3>
                </div>
                <div className="audio">
                    {/* Iterate over each audio file and render an <audio> element */}
                    {Object.entries(solitaire).map(([fileName, src]) => (
                        <div className='player-wrapper' key={fileName}>
                            <p>{fileName}</p>
                            <audio className='js-player-game-audio' preload="none" id="player" controls>
                                <source src={src} type="audio/wav" />
                            </audio>
                        </div>
                    ))}
                </div>
            </div>

            <div className="game-fx mikdash">
                <div className="text">
                    <h3>MikDash</h3>
                </div>
                <div className="audio">
                    {/* Iterate over each audio file and render an <audio> element */}
                    {Object.entries(mikDash).map(([fileName, src]) => (
                        <div className='player-wrapper' key={fileName}>
                            <p>{fileName}</p>
                            <audio className='js-player-game-audio' preload="none" id="player" controls>
                                <source src={src} type="audio/wav" />
                            </audio>
                        </div>
                    ))}

                </div>
            </div>

            <div className="game-fx mikspike">
                <div className="text">
                    <h3>MikSpike</h3>
                </div>
                <div className="audio">
                    {/* Iterate over each audio file and render an <audio> element */}
                    {Object.entries(mikSpike).map(([fileName, src]) => (
                        <div className='player-wrapper' key={fileName}>
                            <p>{fileName}</p>
                            <audio className='js-player-game-audio' preload="none" id="player" controls>
                                <source src={src} type="audio/wav" />
                            </audio>
                        </div>
                    ))}

                </div>
            </div>

            <div className="game-fx mikcafe">
                <div className="text">
                    <h3>MikCafe</h3>
                </div>
                <div className="audio">
                    {/* Iterate over each audio file and render an <audio> element */}
                    {Object.entries(mikCafe).map(([fileName, src]) => (
                        <div className='player-wrapper' key={fileName}>
                            <p>{fileName}</p>
                            <audio className='js-player-game-audio' preload="none" id="player" controls>
                                <source src={src} type="audio/wav" />
                            </audio>
                        </div>
                    ))}

                </div>
            </div>

            <div className="game-fx mikball">
                <div className="text">
                    <h3>MikBall</h3>
                </div>
                <div className="audio">
                    {/* Iterate over each audio file and render an <audio> element */}
                    {Object.entries(mikBall).map(([fileName, src]) => (
                        <div className='player-wrapper' key={fileName}>
                            <p>{fileName}</p>
                            <audio className='js-player-game-audio' preload="none" id="player" controls>
                                <source src={src} type="audio/wav" />
                            </audio>
                        </div>
                    ))}

                </div>
            </div>

            <div className="game-fx mikwitch">
                <div className="text">
                    <h3>MikWitch</h3>
                </div>

                <div className="audio">
                    {/* Iterate over each audio file and render an <audio> element */}
                    {Object.entries(mikWitch).map(([fileName, src]) => (
                        <div className='player-wrapper' key={fileName}>
                            <p>{fileName}</p>
                            <audio className='js-player-game-audio' preload="none" id="player" controls>
                                <source src={src} type="audio/wav" />
                            </audio>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    </section>
}