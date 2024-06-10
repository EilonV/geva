export const Contact = () => {
    return <section className="contact page main-layout">
        <div className="contact-content">
            <div className="social">
                <ul>
                    <li data-aos="fade-up" data-aos-delay="100">
                        <a href="https://www.instagram.com/geva.hason/" target="noopener" >
                            <i className="fa-brands fa-instagram"></i>                        </a>
                    </li>
                    <li  data-aos="fade-up" data-aos-delay="150">
                        <a href="https://www.linkedin.com/in/geva-hason-293b42196/" target="noopener">

                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li  data-aos="fade-up" data-aos-delay="200">
                        <a href="https://api.whatsapp.com/send?phone=972523562259&text=Hey,%20i'm%20interested%20in%20sound%20design" target="noopener">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="info">
                <div className="social-text" data-aos="fade-left" data-aos-delay="100">
                    <p className="geva">Geva Y. Hason</p>
                </div>
                <div className="social-text" data-aos="fade-left" data-aos-delay="150">
                    <i className="fa-regular fa-envelope"></i>
                    <p>ghason62@gmail.com</p>
                </div>
                <div className="social-text" data-aos="fade-left" data-aos-delay="200">
                    <i className="fa-solid fa-phone"></i>
                    <p>+972 523562259</p>
                </div>
            </div>
        </div>
    </section>
}