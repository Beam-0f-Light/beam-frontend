import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

function NavBar() {
    return (
        <header className="NavBar">
            <Link to='/flowfuel-frontend/' className="logo-link">
                <h1 className="logo">FlowFuel</h1>
            </Link>
            <nav className='nav-links'>
                <ul>
                    <li>
                        <NavLink exact to='/flowfuel-frontend/' activeClassName='active' className='NavLink'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/flowfuel-frontend/about' activeClassName='active' className='NavLink'>About</NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/flowfuel-frontend/contact' activeClassName='active' className='NavLink'>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
