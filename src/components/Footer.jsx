import { FiScissors, FiPhone, FiMapPin, FiClock, FiInstagram, FiStar } from 'react-icons/fi'
import { FaWhatsapp, FaGoogle } from 'react-icons/fa'
import './Footer.css'

export default function Footer({ onBooking }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="gold-line" />
      <div className="container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon"><FiScissors /></div>
              <div>
                <span className="footer__logo-name">Stylen A Shine</span>
                <span className="footer__logo-sub">Unisex Salon & Barber</span>
              </div>
            </div>
            <p className="footer__tagline">
              Where every visit leaves you looking sharp, feeling confident, 
              and ready to shine. Jaipur's most trusted grooming destination.
            </p>
            <div className="footer__rating">
              {[1,2,3,4,5].map(i => <FiStar key={i} fill="#d4af37" color="#d4af37" size={14} />)}
              <span>5.0 · 23 Reviews</span>
            </div>

            <div className="footer__socials">
              <a href="https://wa.me/918439975439" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://maps.app.goo.gl/KXKJ45ZcezBK3EXV9" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Google Maps">
                <FaGoogle />
              </a>
              <a href="#" className="footer__social" aria-label="Instagram">
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {['Home', 'Services', 'About', 'Gallery', 'Reviews', 'Location'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__links">
              {['Haircut & Styling', 'Beard Trim', 'Facial Treatment', 'Shampoo & Conditioning', 'Hair Spa', 'Clean Shave'].map(s => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <FiMapPin />
                <span>india gate, Saini market, Plot No. – 37, Shatabdi Nagar, Jaipur 302029</span>
              </div>
              <div className="footer__contact-item">
                <FiPhone />
                <a href="tel:+918439975439">084399 75439</a>
              </div>
              <div className="footer__contact-item">
                <FiClock />
                <span>Open Daily · 9 AM – 10 PM</span>
              </div>
            </div>
            <button className="gold-btn footer__book-btn" onClick={onBooking} id="footer-book-btn">
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
      <div className="gold-line" />
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Stylen A Shine. All rights reserved.</span>
          <span>Designed with ♥ for <span style={{color:'var(--gold)'}}>Faizal</span> & the team</span>
        </div>
      </div>
    </footer>
  )
}
