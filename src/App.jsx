import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import PopularTimes from './components/PopularTimes'
import Location from './components/Location'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import ParticlesBackground from './components/ParticlesBackground'
import './App.css'

function App() {
  const [showBooking, setShowBooking] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <div className={`app ${loaded ? 'app--loaded' : ''}`}>
      <ParticlesBackground />
      <Navbar onBooking={() => setShowBooking(true)} />
      <Hero onBooking={() => setShowBooking(true)} />
      <Services />
      <About />
      <Gallery />
      <Reviews />
      <PopularTimes />
      <Location />
      <Footer onBooking={() => setShowBooking(true)} />
      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
    </div>
  )
}

export default App
