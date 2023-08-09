import NavBar from './components/NavBar'
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'


function App({ view = 'Home' }) {
  return (
    <div className="App">
      <NavBar />

      {view === 'Home' && <Home />}
      {view === 'About' && <About />}
      {view === 'Contact' && <Contact />}
    </div>
  )
}

export default App