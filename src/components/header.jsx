import { NavLink } from "react-router-dom"
import logo from '../assets/images/logos/geva logo.svg'
import 'hamburgers/_sass/hamburgers/hamburgers.scss';
import { useRef } from "react";

export const Header = ({ headerRef, headerClass }) => {
    const hamburgerRef = useRef()
    const navRef = useRef()

    const toggleHambuger = () => {
        hamburgerRef.current.classList.toggle('is-active')
        navRef.current.classList.toggle('is-active')
    }

    const closeNav = () => {
        hamburgerRef.current.classList.remove('is-active')
        navRef.current.classList.remove('is-active')
    }

    return <header>
        <div className={`header main-layout ${headerClass}`} ref={headerRef}>
            <nav>
                <img src={logo} alt="geva hason logo" className="logo" />
                <ul ref={navRef} onClick={closeNav}>
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
                        <NavLink to="/about" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>contact</NavLink>
                    </li>
                </ul>
                <button className="hamburger hamburger--collapse" type="button" onClick={toggleHambuger} ref={hamburgerRef}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </nav>
        </div>
    </header>
}