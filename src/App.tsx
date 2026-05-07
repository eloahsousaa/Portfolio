import { useCursorTrail } from './hooks/useCursorTrail'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Divider from './components/Divider'
import styles from './App.module.css'
import WalkingCats from './components/WalkingCats/WalkingCats'

export default function App() {
  useCursorTrail()

  return (
    <div className={styles.root}>
      {/* Background radial glow */}
      <div className={styles.bgRadial} />

      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Divider />
      <Contact />
      <WalkingCats />
      <Footer />
    </div>
  )
}
