import logo from '../assets/images/logos/geva logo.svg'

export const Footer = () => {
    return <footer>
        <div className="footer-wrapper main-layout">
            <div className="footer">
                <img src={logo} alt="geva hason logo" className="logo" />
                <ul className="links">
                    <li><a href="/" target='noopener'>home</a></li>
                    <li><a href="/game-audio" target='noopener'>game audio</a></li>
                    <li><a href="/cinema-and-commercials" target='noopener'>cinema</a></li>
                    <li><a href="/personal-projects" target='noopener'>personal projects</a></li>
                    <li><a href="/contact" target='noopener'>contact</a></li>
                    <li><a href="/about" target='noopener'>about</a></li>
                </ul>
                <p className="rights">All rights reserved to Geva Y. Hason {new Date().getFullYear()} ©.</p>
            </div>
        </div>
    </footer>
}