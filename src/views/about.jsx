import geva from '../assets/images/geva2.jpg'

export const About = () => {
    return <section className="about page">
        <div className="main-layout">
            <div className="about-content">
                <img src={geva} alt="geva hason" />
                <div className="text">
                    <p>
                        Hey I'm Geva and I'm a music composer and sound designer.
                        <br />
                        I believe that every moment, every second of an experience or a story has the right note that goes along with it.
                        <br />
                        Sound is all around us constantly.
                        <br />
                    </p>
                    <p>
                        My experience consists of:
                    </p>
                    <ul>
                        <li>
                            A masters degree in Video Game Design
                        </li>
                        <li>
                            A Bachelor's Degree in Music Composition & Sound Editing for Media
                        </li>
                        <li>
                            Guitar & Bass Player for over 20 years.
                        </li>
                    </ul>
                    <p>
                        My main instrument is my studio.
                        <br />
                        During years of work, I gained extensive experience working with musicians, directors and video editors and with game designers who are a big part of my 'day to day' scenery.
                    </p>
                </div>
            </div>
        </div>
    </section>
}