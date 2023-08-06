import './NavBar.css'

function NavBar() {
    return (
        <header className="NavBar">
            <h1 className="logo">FlowFuel</h1>
            <nav className='nav-links'>
                <ul>
                    <li className='active'>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
