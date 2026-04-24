import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiMenu, FiX, FiScissors } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
]

export default function Navbar({ onBooking }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <div className="navbar__logo" onClick={() => handleNav('#hero')}>
            <div className="navbar__logo-icon">
              <FiScissors />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Stylen A Shine</span>
              <span className="navbar__logo-sub">Unisex Salon</span>
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {links.map((l) => (
              <li key={l.label}>
                <button
                  className={`navbar__link ${activeLink === l.href ? 'navbar__link--active' : ''}`}
                  onClick={() => handleNav(l.href)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="navbar__actions">
            <a href="tel:+918439975439" className="navbar__phone">
              <FiPhone />
              <span>08439975439</span>
            </a>
            <button className="gold-btn" onClick={onBooking} id="navbar-book-btn">
              <span>Book Now</span>
            </button>
            <button className="navbar__burger" id="navbar-menu-toggle" onClick={() => setMenuOpen(true)}>
              <FiMenu />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button className="mobile-menu__close" onClick={() => setMenuOpen(false)}>
              <FiX />
            </button>
            <div className="mobile-menu__logo">
              <FiScissors />
              <span>Stylen A Shine</span>
            </div>
            <div className="mobile-menu__rating">
              {[1,2,3,4,5].map(i => <FaStar key={i} color="#d4af37" size={14}/>)}
              <span>5.0 (23 reviews)</span>
            </div>
            <ul className="mobile-menu__links">
              {links.map((l) => (
                <li key={l.label}>
                  <button onClick={() => handleNav(l.href)}>{l.label}</button>
                </li>
              ))}
            </ul>
            <div className="mobile-menu__footer">
              <a href="tel:+918439975439" className="gold-btn" style={{width:'100%', justifyContent:'center'}}>
                <FiPhone /><span>Call Us Now</span>
              </a>
              <button className="outline-btn" onClick={() => { setMenuOpen(false); onBooking(); }} style={{width:'100%', justifyContent:'center', marginTop:'12px'}}>
                <span>Book Appointment</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
