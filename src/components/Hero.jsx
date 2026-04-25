import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMapPin, FiStar, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Hero.css'

const RATING_COUNT = 23

export default function Hero({ onBooking }) {
  const videoRef = useRef(null)

  return (
    <section className="hero" id="hero">
      {/* BG Image */}
      <div className="hero__bg">
        <img src="/hero.png" alt="Stylen A Shine Interior" className="hero__bg-img" />
        <div className="hero__bg-overlay" />
      </div>

      {/* Animated scissor lines */}
      <div className="hero__lines">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="hero__line" style={{ animationDelay: `${i * 0.5}s` }} />
        ))}
      </div>

      <div className="container hero__content">
        {/* Badge */}
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <FiStar />
          <span>5.0 Rated · 23 Reviews · Jaipur's Finest</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="hero__title-small">Welcome to</span>
          <br />
          Stylen A <span className="hero__title-gold">Shine</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Jaipur's premium unisex salon & barber experience.<br />
          Where style meets perfection — every single cut.
        </motion.p>

        {/* Stars */}
        <motion.div
          className="hero__stars"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {[1,2,3,4,5].map(i => (
            <div key={i} className="hero__star">★</div>
          ))}
          <span className="hero__star-label">5.0 ({RATING_COUNT} reviews)</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <button className="gold-btn hero__cta" id="hero-book-btn" onClick={onBooking}>
            <span>Book Appointment</span>
          </button>
          <a
            href="https://wa.me/918439975439?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20Stylen%20A%20Shine"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__whatsapp"
          >
            <FaWhatsapp />
            <span>WhatsApp Us</span>
          </a>
          <a
            href="https://www.instagram.com/stylen_a_shine_unisex_salon?igsh=ZTRtbjl5ZDk2NGRq"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__instagram"
          >
            <FiInstagram />
            <span>Follow Us</span>
          </a>
        </motion.div>

        {/* Info Strip */}
        <motion.div
          className="hero__info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          <div className="hero__info-item">
            <FiMapPin />
            <span>Saini Market, Shatabdi Nagar, Jaipur</span>
          </div>
          <div className="hero__info-divider" />
          <div className="hero__info-item">
            <span className="hero__open-dot" />
            <span>Open · Closes 10 PM</span>
          </div>
          <div className="hero__info-divider" />
          <div className="hero__info-item">
            <FiPhone />
            <a href="tel:+918439975439">084399 75439</a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
