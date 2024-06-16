import geva from '../assets/images/geva2.webp'

export const About = () => {
    return <section className="about page">
        <div className="main-layout">
            <div className="about-content">
                <img src={geva} alt="geva hason" data-aos="fade-right" data-aos-delay="100"/>
                <div className="text">
                    <p data-aos="fade-left" data-aos-delay="100">
                        Hey I'm Geva and I'm a music composer and sound designer.
                        <br />
                        I believe that every moment, every second of an experience or a story has the right note that goes along with it.
                        <br />
                        Sound is all around us constantly.
                        <br />
                    </p>
                    <p data-aos="fade-left" data-aos-delay="150">
                        My experience consists of:
                    </p>
                    <ul data-aos="fade-left" data-aos-delay="200">
                        <li>
                            A masters degree in Video Game Design
                        </li>
                        <li>
                            A Bachelor's Degree in Music Composition & Sound Editing for Media
                        </li>
                        <li>
                            Guitar & Bass Player for over 20 years
                        </li>
                    </ul>
                    <p data-aos="fade-left" data-aos-delay="250">
                        My main instrument is my studio.
                        <br />
                        During years of work, I gained extensive experience working with musicians, directors and video editors and with game designers who are a big part of my 'day to day' scenery.
                    </p>
                </div>
            </div>
        </div>
    </section>
}