import NavBar from './components/NavBar'
import Home from './views/Home/Home'
import Articles from './views/Articles/Articles'
import Contact from './views/Contact/Contact'
import Article from './views/Articles/Articles/Article/Article'


function App({ view = 'Home' }) {
  return (
    <div className="App">
      <NavBar />

      {view === 'Home' && <Home />}
      {view === 'Articles' && <Articles />}
      {view === 'Contact' && <Contact />}
      {view === 'Article' && <Article />}
    </div>
  )
}

export default App