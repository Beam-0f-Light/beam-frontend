import { useState } from 'react'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'
import BurguerIcon from './BurguerIcon'

function NavBar() {
    const [showMenu, setShowMenu] = useState(false)

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className="NavBar">
            <Link to='/flowfuel-frontend/' className="logo-link">
                <h1 className="logo">
                    Flow
                    <span>
                        Fuel
                    </span>
                </h1>
            </Link>
            <nav className={`nav-links ${showMenu ? 'show' : ''}`}>
                <ul>
                    <li>
                        <NavLink exact to='/flowfuel-frontend/' activeClassName='active' className='NavLink' onClick={() => {if (showMenu) handleClick()}}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/flowfuel-frontend/about' activeClassName='active' className='NavLink' onClick={() => {if (showMenu) handleClick()}}>About</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/flowfuel-frontend/contact' activeClassName='active' className='NavLink' onClick={() => {if (showMenu) handleClick()}}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={`nav-links-bg ${showMenu ? 'show' : ''}`}></div>
            <div className='burguer'>
                <BurguerIcon clicked={showMenu} handleClick={handleClick} />
            </div>
        </header>
    )
}

export default NavBar
