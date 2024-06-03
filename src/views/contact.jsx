export const Contact = () => {
    return <section className="contact page main-layout">
        <div className="contact-content">
            <div className="social">
                <ul>
                    <li>
                        <a href="https://www.instagram.com/geva.hason/" target="noopener">
                            <i class="fa-brands fa-instagram"></i>                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/geva-hason-293b42196/" target="noopener">

                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=972523562259&text=Hey,%20i'm%20interested%20in%20sound%20design" target="noopener">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="info">
                <div className="social-text">
                    <p className="geva">Geva Y. Hason</p>
                </div>
                <div className="social-text">
                    <i class="fa-regular fa-envelope"></i>
                    <p>ghason62@gmail.com</p>
                </div>
                <div className="social-text">
                    <i class="fa-solid fa-phone"></i>
                    <p>+972 523562259</p>
                </div>
            </div>
        </div>
    </section>
}