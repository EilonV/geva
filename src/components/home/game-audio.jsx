import vid from '../../assets/videos/catch.mp4'
import cover from '../../assets/images/catch cover.png'
export const HomeGameAudio = () => {

    return <div className="home-game-audio-wrapper mid full">
        <div className="home-game-audio main-layout">
            <div className="home-section">
                <div className="text">
                    <h2 data-aos="fade-right" data-aos-delay="100">Game audio</h2>
                    <p data-aos="fade-right" data-aos-delay="150">Composed and designed game audio that enhances the gaming experience through atmospheric and FX sounds. My work creates unique audio environments, adding depth and excitement to every interaction.</p>
                    <p data-aos="fade-right" data-aos-delay="200">Check out my sound library below to listen to all my projects and sound FX.</p>
                    <a href="/game-audio" data-aos="fade-right" data-aos-delay="250">Sound library</a>
                </div>
                <div className="video" data-aos="fade-left">
                    <video className='js-player' id="player" playsInline controls data-poster={cover}>
                        <source src={vid} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </div>
}