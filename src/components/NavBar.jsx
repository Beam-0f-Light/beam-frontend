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
            <Link to='/beam-frontend/' className="logo-link">
                <img className='logo' src="/provisional_logo.png" alt="logo" />
            </Link>
            <nav className={`nav-links ${showMenu ? 'show' : ''}`}>
                <ul>
                    <li>
                        <NavLink exact to='/beam-frontend/' activeClassName='active' className='NavLink' onClick={() => {if (showMenu) handleClick()}}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/beam-frontend/articles' activeClassName='active' className='NavLink' onClick={() => {if (showMenu) handleClick()}}>Articles</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/beam-frontend/contact' activeClassName='active' className='NavLink' onClick={() => {if (showMenu) handleClick()}}>Contact</NavLink>
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
