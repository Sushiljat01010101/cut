import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './PopularTimes.css'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const hours = ['6a', '9a', '12p', '3p', 'Now', '9p']

// Simulated busy data for each day, each hour slot 0-100
const busyData = {
  Mon: [5, 30, 55, 45, 40, 25],
  Tue: [5, 35, 60, 50, 45, 30],
  Wed: [5, 40, 65, 55, 50, 35],
  Thu: [8, 45, 70, 60, 55, 38],
  Fri: [10, 55, 80, 75, 85, 60],
  Sat: [15, 65, 90, 85, 90, 70],
  Sun: [5, 25, 45, 40, 35, 20],
}

const now = new Date()
const currentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][now.getDay()]

export default function PopularTimes() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  const activeDay = currentDay

  return (
    <section className="popular" id="popular" ref={ref}>
      <div className="container">
        <motion.div
          className="popular__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Availability</div>
          <h2 className="section-title">Popular <span>Times</span></h2>
          <p className="popular__sub">Plan your visit at the perfect time.</p>
        </motion.div>

        <motion.div
          className="popular__card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* Day tabs */}
          <div className="popular__days">
            {days.map((d) => (
              <div
                key={d}
                className={`popular__day ${d === activeDay ? 'popular__day--active' : ''}`}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="popular__chart">
            {busyData[activeDay].map((val, i) => (
              <div key={i} className="popular__bar-wrap">
                <motion.div
                  className="popular__bar"
                  style={{ '--height': `${val}%` }}
                  initial={{ scaleY: 0 }}
                  animate={inView ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
                />
                <span className="popular__bar-label">{hours[i]}</span>
              </div>
            ))}
          </div>

          {/* Hours info */}
          <div className="popular__info">
            <div className="popular__info-item">
              <span className="popular__open-dot" />
              <span>Open · Closes 10:00 PM</span>
            </div>
            <div className="popular__info-item popular__info-item--gold">
              Best time: 9 AM – 12 PM (Least crowded)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
