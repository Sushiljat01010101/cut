import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiScissors, FiDroplet, FiStar, FiZap, FiUser, FiCalendar } from 'react-icons/fi'
import { GiBeard, GiSoap, GiHairStrands, GiRazor } from 'react-icons/gi'
import './Services.css'

const services = [
  { category: 'Hair Care', img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80', title: 'Haircut', desc: 'Precision haircuts and modern styles tailored to your look.', price: 'From ₹150', popular: true },
  { category: 'Hair Care', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&q=80', title: 'Hairstyling', desc: 'Expert hairstyling for every special occasion and daily elegance.', price: 'From ₹200' },
  { category: 'Hair Care', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', title: 'Balayage', desc: 'Premium balayage and coloring for a vibrant, sun-kissed finish.', price: 'From ₹1500', popular: true },
  { category: 'Hair Care', img: 'https://images.unsplash.com/photo-1582230200305-65a8e0f63b46?w=600&q=80', title: 'Blow dry', desc: 'Professional blow dry for a flawless, bouncy, and smooth finish.', price: 'From ₹150' },
  { category: 'Hair Care', img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80', title: 'Shampoo & Wash', desc: 'Deep cleanse and restorative hair treatments for healthy hair.', price: 'From ₹100' },
  
  { category: 'Skin & Face', img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', title: 'Facials', desc: 'Rejuvenating facials using premium products for glowing skin.', price: 'From ₹300', popular: true },
  { category: 'Skin & Face', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', title: 'Skin care', desc: 'Advanced skincare routines and treatments for a healthy complexion.', price: 'From ₹400' },
  { category: 'Skin & Face', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80', title: 'Make-up services', desc: 'Flawless makeup application by experienced professional artists.', price: 'From ₹500' },
  
  { category: 'Spa & Body', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80', title: 'Massage', desc: 'Soothing body massages to relieve stress and rejuvenate your muscles.', price: 'From ₹500', popular: true },
  { category: 'Spa & Body', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80', title: 'Spa services', desc: 'Luxurious spa treatments for ultimate relaxation and pampering.', price: 'From ₹800' },
  { category: 'Spa & Body', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', title: 'Body waxing', desc: 'Smooth, hygienic, and gentle body waxing services.', price: 'From ₹300' },
  { category: 'Spa & Body', img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?w=600&q=80', title: 'Tanning', desc: 'Professional artificial tanning for a beautiful even glow.', price: 'From ₹400' },

  { category: 'Specialty', img: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=600&q=80', title: 'Bridal services', desc: 'Complete luxurious bridal packages to make your special day perfect.', price: 'Custom' },
  { category: 'Specialty', img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?w=600&q=80', title: 'Manicure', desc: 'Classic and spa manicures for perfectly groomed and beautiful hands.', price: 'From ₹200' },
  { category: 'Specialty', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80', title: 'Pedicure', desc: 'Relaxing spa pedicures for smooth, soft, and pampered feet.', price: 'From ₹250' },
]

export default function Services({ onBooking }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeTab, setActiveTab] = useState('All')

  const categories = ['All', 'Hair Care', 'Skin & Face', 'Spa & Body', 'Specialty']
  const filteredServices = activeTab === 'All' ? services : services.filter(s => s.category === activeTab)

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

        <div className="services__tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`services__tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'All' ? (
            <motion.div
              key="slider"
              className="services__slider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {services.map((s, i) => (
                <div key={s.title} className="service-card service-card--slide" onClick={() => onBooking(s.title)}>
                  {s.popular && (
                    <div className="service-card__popular">
                      <FiStar size={10} /> Popular
                    </div>
                  )}
                  <div className="service-card__cover">
                    <img src={s.img} alt={s.title} onError={(e) => { e.target.onerror = null; e.target.src = '/hero.png' }} />
                  </div>
                  <div className="service-card__content">
                    <h3 className="service-card__title">{s.title}</h3>
                    <p className="service-card__desc">{s.desc}</p>
                    <div className="service-card__footer">
                      <span className="service-card__price">{s.price}</span>
                      <div className="service-card__arrow">→</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              className="services__grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <AnimatePresence mode="popLayout">
                {filteredServices.map((s, i) => (
                  <motion.div
                    key={s.title}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="service-card"
                    onClick={() => onBooking(s.title)}
                  >
                    {s.popular && (
                      <div className="service-card__popular">
                        <FiStar size={10} /> Popular
                      </div>
                    )}
                    <div className="service-card__cover">
                      <img src={s.img} alt={s.title} onError={(e) => { e.target.onerror = null; e.target.src = '/hero.png' }} />
                    </div>
                    <div className="service-card__content">
                      <h3 className="service-card__title">{s.title}</h3>
                      <p className="service-card__desc">{s.desc}</p>
                      <div className="service-card__footer">
                        <span className="service-card__price">{s.price}</span>
                        <div className="service-card__arrow">→</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
