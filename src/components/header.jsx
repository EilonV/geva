import { NavLink } from "react-router-dom"

export const Header = () => {
    return <header>
        <div className="header main-layout">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/game-audio" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music-composition" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/video" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>page</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}