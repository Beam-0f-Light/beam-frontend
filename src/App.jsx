import NavBar from './components/NavBar'
import Home from './views/Home/Home'
import Articles from './views/Articles/Articles'
import Contact from './views/Contact/Contact'


function App({ view = 'Home' }) {
  return (
    <div className="App">
      <NavBar />

      {view === 'Home' && <Home />}
      {view === 'Articles' && <Articles />}
      {view === 'Contact' && <Contact />}
    </div>
  )
}

export default App