import { NavLink } from "react-router-dom"
import logo from '../assets/images/logos/geva logo.svg'

export const Header = ({ headerRef, headerClass }) => {
    return <header>
        <div className={`header main-layout ${headerClass}`} ref={headerRef}>
            <nav>
                <img src={logo} alt="geva hason logo" className="logo" />
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/game-audio" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>game</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cinema-and-commercials" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>cinema</NavLink>
                    </li>
                    <li>
                        <NavLink to="/personal-projects" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>personal</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>about</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}