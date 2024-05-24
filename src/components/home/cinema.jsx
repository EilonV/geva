import vid from '../../assets/videos/deer.mp4'
import cover from '../../assets/images/cinema cover.png'
export const HomeCinema = () => {
    // const player = new Plyr('video', { captions: { active: true } });

    return <div className="home-sound-design-wrapper full">
        <div className="home-sound-design main-layout">
            <div className="home-section">
                <div className="video">
                    <video className='js-player' id="player" playsInline controls poster={cover} >
                        <source src={vid} type="video/mp4" />
                    </video>
                </div>
                <div className="text">
                    <h2>Cinema & commecrials</h2>
                    <p>As a sound designer I specialize in creating immersive and impactful auditory experiences across various media, including animated series, commercials, and short films. </p>
                    <p>Explore my portfolio to see how I bring stories to life through professionally  designed sound. Discover how sound transforms visual media into truly immersive experiences.</p>
                    <a href="/cinema-and-commercials">Projects</a>
                </div>
            </div>
        </div>
    </div>
}