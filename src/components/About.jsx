import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { FiAward, FiUsers, FiCalendar, FiStar } from 'react-icons/fi'
import './About.css'

const stats = [
  { icon: <FiStar />, value: 5, suffix: '.0', label: 'Star Rating' },
  { icon: <FiUsers />, value: 23, suffix: '+', label: 'Happy Reviews' },
  { icon: <FiAward />, value: 5, suffix: '+', label: 'Years Experience' },
  { icon: <FiCalendar />, value: 100, suffix: '+', label: 'Clients Monthly' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          {/* Image Side */}
          <motion.div
            className="about__image-wrap"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img src="/tools.png" alt="Professional Barber Tools" className="about__img" />
            <div className="about__img-badge">
              <FiAward />
              <div>
                <span className="about__img-badge-num">5.0</span>
                <span className="about__img-badge-sub">Google Rating</span>
              </div>
            </div>
            <div className="about__img-glow" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-tag">About Us</div>
            <h2 className="section-title">
              Crafting <span>Perfect</span> Looks<br />Since Day One
            </h2>
            <div className="divider" />
            <p className="about__para">
              Welcome to <strong>Stylen A Shine</strong> — Jaipur's premier unisex salon 
              nestled in the heart of Saini Market, Shatabdi Nagar. We combine classic 
              barber artistry with modern techniques to give you a look that truly shines.
            </p>
            <p className="about__para">
              Our owner <strong>Faizal</strong> and the entire team bring warmth, skill, 
              and passion to every appointment. Whether it's a sharp haircut, refreshing 
              facial, or a clean shave — we deliver excellence, every time.
            </p>

            {/* Features */}
            <div className="about__features">
              {['Premium Products Only', 'Hygiene Certified', 'Walk-ins Welcome', 'Experienced Stylists'].map(f => (
                <div key={f} className="about__feature">
                  <span className="about__feature-dot" />
                  {f}
                </div>
              ))}
            </div>

            <div className="about__cta-row">
              <a
                href="https://maps.app.goo.gl/KXKJ45ZcezBK3EXV9"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn"
              >
                <span>View on Google Maps</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="about__stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
            >
              <div className="stat-card__icon">{s.icon}</div>
              <div className="stat-card__num">
                {inView && (
                  <CountUp end={s.value} duration={2} delay={0.4 + i * 0.1} />
                )}
                <span>{s.suffix}</span>
              </div>
              <div className="stat-card__label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
