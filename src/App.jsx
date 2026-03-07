import './App.css'
import Header from './components/header'
import HeroContainer from './components/HeroContainer'
import About from './screens/About'
import Projects from './screens/Projects'
import Contact from './screens/Contact'
import './styles/style.css'

function App() {

  return (
    <div className='app-container' >
      <Header />
      <section className='flex-row'>
        <HeroContainer />
      </section>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
