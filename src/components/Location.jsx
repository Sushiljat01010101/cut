import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiPhone, FiClock, FiNavigation } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Location.css'

const hours = [
  { day: 'Monday – Thursday', time: '9:00 AM – 10:00 PM' },
  { day: 'Friday', time: '9:00 AM – 10:00 PM', highlight: true },
  { day: 'Saturday', time: '9:00 AM – 10:00 PM', highlight: true },
  { day: 'Sunday', time: '10:00 AM – 9:00 PM' },
]

export default function Location() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="location" id="location" ref={ref}>
      <div className="container">
        <motion.div
          className="location__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Find Us</div>
          <h2 className="section-title">Visit <span>Our Shop</span></h2>
        </motion.div>

        <div className="location__grid">
          {/* Info Panel */}
          <motion.div
            className="location__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="location__info-block">
              <div className="location__info-icon"><FiMapPin /></div>
              <div>
                <div className="location__info-label">Address</div>
                <div className="location__info-value">
                  india gate, Saini market, Plot No. – 37,<br />
                  Shatabdi Nagar, Jaipur,<br />
                  Rajasthan 302029
                </div>
              </div>
            </div>

            <div className="location__info-block">
              <div className="location__info-icon"><FiPhone /></div>
              <div>
                <div className="location__info-label">Phone</div>
                <a href="tel:+918439975439" className="location__info-value location__link">
                  084399 75439
                </a>
              </div>
            </div>

            <div className="location__info-block">
              <div className="location__info-icon"><FiClock /></div>
              <div className="location__hours">
                <div className="location__info-label">Working Hours</div>
                {hours.map(h => (
                  <div key={h.day} className={`location__hour-row ${h.highlight ? 'location__hour-row--gold' : ''}`}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="location__actions">
              <a
                href="https://maps.app.goo.gl/KXKJ45ZcezBK3EXV9"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn"
              >
                <FiNavigation /><span>Get Directions</span>
              </a>
              <a
                href="https://wa.me/918439975439?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="location__whatsapp"
              >
                <FaWhatsapp /><span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            className="location__map-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <iframe
              title="Stylen A Shine Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.2789498905!2d75.7899!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a00000001%3A0x1234567890abcdef!2sStylen%20A%20Shine!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="location__map"
            />
            <div className="location__map-badge">
              <FiMapPin />
              <div>
                <strong>Stylen A Shine</strong>
                <span>Saini Market, Jaipur</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
