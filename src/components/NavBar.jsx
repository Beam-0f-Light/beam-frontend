import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <header className="NavBar">
            <h1 className="logo">FlowFuel</h1>
            <nav className='nav-links'>
                <ul>
                    <li className='active'>
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
