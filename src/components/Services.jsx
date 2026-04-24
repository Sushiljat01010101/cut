import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiScissors, FiDroplet, FiStar, FiZap } from 'react-icons/fi'
import { GiBeard, GiSoap, GiHairStrands, GiRazor } from 'react-icons/gi'
import './Services.css'

const services = [
  {
    icon: <FiScissors />,
    title: 'Haircut & Styling',
    desc: 'Expert precision cuts and modern styling for all hair types. From classic to contemporary looks.',
    price: 'From ₹150',
    popular: true,
  },
  {
    icon: <GiBeard />,
    title: 'Beard Trim & Shaping',
    desc: 'Professional beard grooming, trimming, and sculpting to define your perfect style.',
    price: 'From ₹100',
  },
  {
    icon: <GiSoap />,
    title: 'Facial & Skin Care',
    desc: 'Rejuvenating facial treatments with premium products for glowing, healthy skin.',
    price: 'From ₹300',
    popular: true,
  },
  {
    icon: <FiDroplet />,
    title: 'Shampoo & Conditioning',
    desc: 'Deep cleanse and conditioning treatments to restore hair vitality and shine.',
    price: 'From ₹80',
  },
  {
    icon: <GiHairStrands />,
    title: 'Hair Treatment',
    desc: 'Specialized hair spa and deep conditioning for smooth, nourished, damage-free hair.',
    price: 'From ₹400',
  },
  {
    icon: <GiRazor />,
    title: 'Clean Shave',
    desc: 'Traditional hot towel clean shave experience with luxurious shaving cream.',
    price: 'From ₹80',
  },
]

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Our Services</div>
          <h2 className="section-title">
            What We <span>Offer</span>
          </h2>
          <p className="services__subtitle">
            Premium grooming services tailored to elevate your style and boost your confidence.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {s.popular && (
                <div className="service-card__popular">
                  <FiStar size={10} /> Popular
                </div>
              )}
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__footer">
                <span className="service-card__price">{s.price}</span>
                <div className="service-card__arrow">→</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
