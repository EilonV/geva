import Plyr from "plyr";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import logo from '../assets/images/logos/geva logo.svg'
export const PersonalProjects = () => {

    const importAll = (r) => {
        let files = {};
        r.keys().map((item, index) => { files[item.replace('./', '')] = r(item); return null });
        return files;
    };

    const originals = importAll(require.context('../assets/audio/originals', false, /\.(wav|mp3)$/));
    const covers = importAll(require.context('../assets/audio/covers', false, /\.(wav|mp3)$/));
    const instrumentals = importAll(require.context('../assets/audio/instrumental', false, /\.(wav|mp3)$/));

    useEffect(() => {
        Array.from(document.querySelectorAll('.js-player-game-audio')).map((p) => {
            new Plyr(p, {
                controls: [
                    'play',            // Play/pause button
                    'progress',        // Progress bar
                    'current-time',    // Current time display
                ]
            });
            return null;
        });
    })

    return <section className="main-layout page">
        <div className="personal-projects full">
            <div className="videos" data-aos="fade-up" data-aos-delay="100">
                <h2 >Personal projects</h2>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: true,
                    //     pauseOnMouseEnter: true
                    // }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"

                >
                    <SwiperSlide>
                        <div className="original-score">
                            <div className="plyr__video-embed" id="player">
                                <iframe title='kaveret toxic'
                                    src="https://youtube.com/embed/i0eQtPvGqug"
                                    allowFullScreen
                                    allowtransparency="true"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="original-score">
                            <div className="plyr__video-embed" id="player">
                                <iframe title='kaveret toxic'
                                    src="https://youtube.com/embed/-VZ1uIlhekM"
                                    allowFullScreen
                                    allowtransparency="true"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="original-score">
                            <div className="plyr__video-embed" id="player">
                                <iframe title='kaveret toxic'
                                    src="https://youtube.com/embed/b8LfwcMnpsg"
                                    allowFullScreen
                                    allowtransparency="true"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="original-score">
                            <div className="plyr__video-embed" id="player">
                                <iframe title='kaveret toxic'
                                    src="https://youtube.com/embed/jpFcNrUp-24"
                                    allowFullScreen
                                    allowtransparency="true"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>

            <div className="audio-wrapper">
                <div className="audio-section" data-aos="fade-up" data-aos-delay="150">
                    <h3>Originals</h3>
                    <div className="audio">
                        <div className="logo-wrapper logo1">
                            <img src={logo} alt="geva hason logo" draggable='false' />
                        </div>
                        {Object.entries(originals).map(([fileName, src]) => (
                            <div className='player-wrapper' key={fileName}>
                                <p>{fileName}</p>
                                <audio className='js-player-game-audio' preload="none" id="player" controls>
                                    <source src={src} type="audio/mp3" />
                                </audio>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="audio-section" data-aos="fade-up" data-aos-delay="200">
                    <h3>Covers</h3>
                    <div className="audio">
                        <div className="logo-wrapper logo2">
                            <img src={logo} alt="geva hason logo" draggable='false' />
                        </div>

                        {Object.entries(covers).map(([fileName, src]) => (
                            <div className='player-wrapper' key={fileName}>
                                <p>{fileName}</p>
                                <audio className='js-player-game-audio' preload="none" id="player" controls>
                                    <source src={src} type="audio/mp3" />
                                </audio>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="audio-section" data-aos="fade-up" data-aos-delay="250">
                    <h3>Instrumentals</h3>
                    <div className="audio">
                        <div className="logo-wrapper logo3">
                            <img src={logo} alt="geva hason logo" draggable='false' />
                        </div>

                        {Object.entries(instrumentals).map(([fileName, src]) => (
                            <div className='player-wrapper' key={fileName}>
                                <p>{fileName}</p>
                                <audio className='js-player-game-audio' preload="none" id="player" controls>
                                    <source src={src} type="audio/mp3" />
                                </audio>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </section>
}