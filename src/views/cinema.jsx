import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Cinema = () => {
    return <section className="cinema-wrapper page">
        <div className="main-layout">
            <div className="cinema">

                <div className="project">
                    <div className="text">
                        <div className='flex column gap'>
                            <h2>Zohar</h2>
                            <h3>Musical</h3>
                            <p className="desc">
                                Zohar is a short musical film by the ambitious director Hani Gal-Ed. <br />
                                The movie follows Zohar throughout her mental journey where she learns how to open her heart and let someone in.
                            </p>
                        </div>
                        <p className="credits">
                            Director: Hani Gal-Ed <br />
                            Actors: Shely Ben-Yosef & Chen Givaty <br />
                            Music: Geva Y. Hason
                        </p>
                    </div>
                    <div className="videos">
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            lazy="true"
                        >
                            <SwiperSlide >
                                <div class="plyr__video-embed" id="player" >
                                    <iframe title='where is the one'
                                        src="https://youtube.com/embed/yr-h3vOjDNA"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay"
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='all by myself'
                                        src="https://youtube.com/embed/y7CndV50CMc"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='desert exile'
                                        src="https://youtube.com/embed/fbFwQLAXn48"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay" loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='fear'
                                        src="https://youtube.com/embed/xdR3fiJ_nUQ"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay" loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </div>

                <div className="project">
                    <div className="videos">
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}

                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='bury a lie'
                                        src="https://youtube.com/embed/O7dQW0AfuS8"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='blissfully unaware'
                                        src="https://youtube.com/embed/u5-XiXE6Em8"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay" loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='killing everything that is cute'
                                        src="https://youtube.com/embed/KkX-EguFevw"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay" loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='wide awake'
                                        src="https://youtube.com/embed/EIOIWYLUuk4"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay" loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='blissfully unaware 2'
                                        src="https://youtube.com/embed/EQ47_6ilegE"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay" loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                    <div className="text">
                        <div className='flex column gap'>
                            <h2>Let Sleeping Dogs Lie</h2>
                            <h3>Animation</h3>
                            <p className="desc">
                                Disaster strikes a small and a happy family when the parents accidently run over the family dog. <br />
                                They choose to lie and run away from responsibly but eventually they learn the hard way that, even if its hard, its always better to tell the truth.
                            </p>
                        </div>
                        <p className="credits">
                            Directors & Animators: Guy Livnat, Sarai Abergil & Noy Frieman <br />
                            Music: Geva Y. Hason
                        </p>
                    </div>

                </div>

                <div className="project">
                    <div className="text">
                        <div className='flex column gap'>
                            <h2>Bebo Asko</h2>
                            <h3>Documantry</h3>
                            <p className="desc">
                                Maggie Basilia (Director) goes back to Georgia to visit her grandma and family. While there, she asks tough questions hoping to learn more about them and about herself.                        </p>
                        </div>
                        <p className="credits">
                            Director: Maggie Basilia <br />
                            Camera: Yaniv Duek <br />
                            Music: Geva Y. Hason
                        </p>
                    </div>
                    <div className="videos">
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='careful optimism'
                                        src="https://youtube.com/embed/UCQvnSAI6To"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay" loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='complition'
                                        src="https://youtube.com/embed/I7RTsJBXpQc"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay" loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='keep on walking'
                                        src="https://youtube.com/embed/4wJAKWJpnuI"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay" loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='shattered'
                                        src="https://youtube.com/embed/otkykmeZBrw"
                                        allowFullScreen
                                        allowtransparency="true"
                                        allow="autoplay" loading="lazy"
                                    ></iframe>
                                </div>
                            </SwiperSlide>



                        </Swiper>
                    </div>
                </div>

            </div>
        </div>

        <div className="carousel-wrapper full">
            <div className="carousel main-layout">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="project">
                            <div className="text">
                                <div className='flex column gap'>
                                    <h2>The Uncanny Variable</h2>
                                    <h3>Animation</h3>
                                    <p className="desc">
                                        Animated Series for TV.
                                        William and Elinor are forced to work together when the regime starts to hunt them down. While being pursuit, they discover a hidden city underground and secrets begin to arise.
                                    </p>
                                </div>
                                <p className="credits">
                                    Director & Producer: Neta Lahav <br />
                                    Actors: Shahar Hanoch & Adam Robenson <br />
                                    Sound Design & Editing: Geva Y Hason
                                </p>
                            </div>
                            <div className="videos">
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='the uncanny variable'
                                        src="https://youtube.com/embed/gDFzIr79bYo"
                                        allowFullScreen
                                        allowtransparency="true"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project">
                            <div className="text">
                                <div className='flex column gap'>
                                    <h2>Flex Multi Heater</h2>
                                    <h3>Commercial</h3>
                                    <p className="desc">
                                        A short concept video for a smart water heater by Smart Global B. Energy.
                                        The video presented many technical parts and animations, and the request was to make it sound "light and soft".                                          </p>
                                </div>
                                <p className="credits">
                                    Sound Design & Editing: Geva Y Hason
                                </p>
                            </div>
                            <div className="videos">
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='flex multiheater'
                                        src="https://youtube.com/embed/BQgCJlkh2bI"
                                        allowFullScreen
                                        allowtransparency="true"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project">
                            <div className="text">
                                <div className='flex column gap'>
                                    <h2>Loving</h2>
                                    <h3>Animation</h3>
                                    <p className="desc">
                                        A short animated film by the talented Paz Berenstain about the prostitution industry. <br /> <br />
                                        We decided to take a minimalistic approach placing the main character in the centre.                                                                            </p>
                                </div>
                                <p className="credits">
                                    Director & Animator: Paz Berenstain <br />
                                    Actors: Tzahi Grad & Annia Buckstein <br />
                                    Sound: Geva Y. Hason
                                </p>
                            </div>
                            <div className="videos">
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='ohev'
                                        src="https://youtube.com/embed/Z2WxE0-gOfM"
                                        allowFullScreen
                                        allowtransparency="true"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project">
                            <div className="text">
                                <div className='flex column gap'>
                                    <h2>Sham
                                    </h2>
                                    <h3>Animation</h3>
                                    <p className="desc">
                                        Sham is a satire about a Kingdom Far Far away with very similar problems to modern life where the characters are forced to deal with lies, bureaucracy and power.
                                    </p>
                                </div>
                                <p className="credits">
                                    Director & Animator: Shiran Sax Eluz <br />
                                    Actors: Lior Hakoon <br />
                                    Sound: Geva Y. Hason
                                </p>
                            </div>
                            <div className="videos">
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='sham'
                                        src="https://youtube.com/embed/Voi5nXZVvJc"
                                        allowFullScreen
                                        allowtransparency="true"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project">
                            <div className="text">
                                <div className='flex column gap'>
                                    <h2>Pigeon & Crow
                                    </h2>
                                    <h3>Animation</h3>
                                    <p className="desc">
                                        A short animated film.
                                        The endless dichotomy between black & white, pigeons & crows, nature & the chaos of the.
                                    </p>
                                </div>
                                <p className="credits">
                                    Director & Animator: Noy Frieman <br />
                                    Sound: Geva Y. Hason
                                </p>
                            </div>
                            <div className="videos">
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='pigeon and crow'
                                        src="https://youtube.com/embed/loPyknnnTcU"
                                        allowFullScreen
                                        allowtransparency="true"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>

        <div className="commercials-wrapper full">
            <div className="main-layout">
                <div className="commercials">
                    <h2>Commercials</h2>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="video">

                                <div class="plyr__video-embed" id="player">
                                    <iframe title='deer'
                                        src="https://youtube.com/embed/OpIGvPFtCyM"
                                        allowFullScreen
                                        allowtransparency="true"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="video">
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='hungry kids'
                                        src="https://youtube.com/embed/Y2NXKF_rS6E"
                                        allowFullScreen
                                        allowtransparency="true"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="video">
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='tiltan'
                                        src="https://youtube.com/embed/g_99xzdtkAE"
                                        allowFullScreen
                                        allowtransparency="true"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>

        <div className="original-scores-wrapper full">
            <div className="main-layout">
                <div className="original-scores">
                    <h2>Original scores</h2>
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
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='trailer'
                                        src="https://youtube.com/embed/sKd-MwLkVjM"
                                        allowFullScreen
                                        allowtransparency="true"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="original-score">
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='whoreville'
                                        src="https://youtube.com/embed/o_968YeezKk"
                                        allowFullScreen
                                        allowtransparency="true"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="video">
                                <div class="plyr__video-embed" id="player">
                                    <iframe title='sleepless night'
                                        src="https://player.vimeo.com/video/286387873?h=04c8cad98e"
                                        allowFullScreen
                                        allowtransparency="true"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>

                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
    </section>
}