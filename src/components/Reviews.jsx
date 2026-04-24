import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight, FiThumbsUp } from 'react-icons/fi'
import './Reviews.css'

const reviews = [
  {
    name: 'VISHAL SHARMA',
    initials: 'VS',
    rating: 5,
    time: '6 months ago',
    text: 'Good sarvessas and all staff and stylen shine unisex salon and owner faizal nature is great! Highly recommend this place.',
    color: '#7c3aed',
  },
  {
    name: 'Hemant Kumar',
    initials: 'HK',
    rating: 5,
    time: '5 months ago',
    text: 'So good sarvice and excellent experience staff nice veh ever. Best haircut I have had in Jaipur.',
    color: '#0891b2',
  },
  {
    name: 'Sumer Singh',
    initials: 'SS',
    rating: 5,
    time: '6 months ago',
    text: 'Good salon good Sarvices god staff. Services: Shampoo & conditioning, Hair treatments. Will definitely come back!',
    color: '#059669',
  },
  {
    name: 'Rahul Meena',
    initials: 'RM',
    rating: 5,
    time: '4 months ago',
    text: 'Service and treatments are good 👍 Staff and owner both nature is great 😃 Best haircut and facial service in Jaipur.',
    color: '#d97706',
  },
  {
    name: 'Priya Sharma',
    initials: 'PS',
    rating: 5,
    time: '3 months ago',
    text: 'Excellent facial treatment! The staff is very professional and welcoming. The ambiance is great and very hygienic.',
    color: '#db2777',
  },
]

export default function Reviews() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent((c) => (c + 1) % reviews.length)

  return (
    <section className="reviews" id="reviews" ref={ref}>
      <div className="container">
        <motion.div
          className="reviews__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Testimonials</div>
          <h2 className="section-title">What Our <span>Clients</span> Say</h2>

          {/* Overall Rating */}
          <div className="reviews__overall">
            <div className="reviews__overall-score">5.0</div>
            <div>
              <div className="reviews__overall-stars">
                {[1,2,3,4,5].map(i => <FaStar key={i} color="#d4af37" />)}
              </div>
              <div className="reviews__overall-count">Based on 23 Google Reviews</div>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="reviews__carousel">
          <button className="reviews__nav reviews__nav--prev" onClick={prev}><FiChevronLeft /></button>

          <div className="reviews__track">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="review-card"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <div className="review-card__quote">"</div>
                <p className="review-card__text">{reviews[current].text}</p>
                <div className="review-card__stars">
                  {[1,2,3,4,5].map(i => (
                    <FaStar key={i} color="#d4af37" size={14} />
                  ))}
                </div>
                <div className="review-card__author">
                  <div className="review-card__avatar" style={{ background: reviews[current].color }}>
                    {reviews[current].initials}
                  </div>
                  <div>
                    <div className="review-card__name">{reviews[current].name}</div>
                    <div className="review-card__time">{reviews[current].time} · Google Review</div>
                  </div>
                  <div className="review-card__like"><FiThumbsUp /> Helpful</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="reviews__nav reviews__nav--next" onClick={next}><FiChevronRight /></button>
        </div>

        {/* Dots */}
        <div className="reviews__dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`reviews__dot ${i === current ? 'reviews__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

        {/* Write a Review CTA */}
        <motion.div
          className="reviews__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://maps.app.goo.gl/KXKJ45ZcezBK3EXV9"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn"
          >
            <FaStar /><span>Write a Review</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
