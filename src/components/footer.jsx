import logo from '../assets/images/logos/geva logo.svg'

export const Footer = () => {
    return <footer>
        <div className="footer-wrapper main-layout">
            <div className="footer">
                <img src={logo} alt="geva hason logo" className="logo" />
                <ul className="links">
                    <li><a href="/">home</a></li>
                    <li><a href="/game-audio" >game audio</a></li>
                    <li><a href="/cinema-and-commercials" >cinema</a></li>
                    <li><a href="/personal-projects">personal</a></li>
                    <li><a href="/contact">contact</a></li>
                    <li><a href="/about">about</a></li>
                </ul>
                <p className="rights">All rights reserved to Geva Y. Hason {new Date().getFullYear()} ©.</p>
                <ul className='social'>
                    <li >
                        <a href="https://www.instagram.com/geva.hason/" target="noopener" >
                            <i className="fa-brands fa-instagram"></i>                        </a>
                    </li>
                    <li >
                        <a href="https://www.linkedin.com/in/geva-hason-293b42196/" target="noopener">

                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li >
                        <a href="https://api.whatsapp.com/send?phone=972523562259&text=Hey,%20i'm%20interested%20in%20sound%20design" target="noopener">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
}