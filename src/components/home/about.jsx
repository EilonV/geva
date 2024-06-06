// import geva from '../../assets/images/geva profile 1.webp'
import geva2 from '../../assets/images/IMG_4142.JPG'
import audio1 from '../../assets/audio/showreels/Geva Y Hason - Electronic & Dance Showreel.mp3'
import audio2 from '../../assets/audio/showreels/Geva Y Hason - Orchestrated Music Showreel.mp3'
import audio3 from '../../assets/audio/showreels/Geva Y Hason - Rock and Blues Showreel.mp3'
export const HomeAbout = () => {

    return <div className="home-about-wrapper full">
        <div className="home-about main-layout" data-aos="fade-up">
            <div className="home-section">
                <img src={geva2} alt="geva hason portrait" draggable="false" />
                <div className="text">
                    <div className='flex gap'>
                        <p className='summary'>Hello There!
                            I'm Geva Yosef Hason, a music composer and sound designer dedicated to finding the perfect note for every moment. Growing up in a family of musicians, I've always been surrounded by the beauty of sound.
                            <br /><br /> With a Master's in Video Game Design and a Bachelor's in Music Composition & Sound Editing for Media, I've had the privilege of working with a diverse range of creative professionals.</p>
                        <div className="audio" data-aos="fade-left" data-aos-delay="100">
                            <div className='song'>
                                <div className="audio-info">
                                    <p>Geva Y Hason - Electronic & Dance Showreel</p>
                                </div>
                                <audio className='js-player-audio' id="player" controls>
                                    <source src={audio1} type="audio/mp3" />
                                </audio>
                            </div>
                            <div className='song'>
                                <div className="audio-info">
                                    <p>Geva Y Hason - Orchestrated Music Showreel</p>
                                </div>
                                <audio className='js-player-audio' id="player" controls>
                                    <source src={audio2} type="audio/mp3" />
                                </audio>
                            </div>
                            <div className='song'>
                                <div className="audio-info">
                                    <p>Geva Y Hason - Rock and Blues Showreel</p>
                                </div>
                                <audio className='js-player-audio' id="player" controls>
                                    <source src={audio3} type="audio/mp3" />
                                </audio>
                            </div>
                        </div>
                    </div>

                    <h3 data-aos="fade-left" data-aos-delay="150">"The right note at the right moment." -Johann Sebastian Bach</h3>
                </div>

            </div>

        </div>
    </div>
}