import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Gallery.css'

const photos = [
  { id: 1, src: '/hero.png', alt: 'Salon Interior', category: 'Interior' },
  { id: 2, src: '/tools.png', alt: 'Barber Tools', category: 'Tools' },
  { id: 3, src: '/hero.png', alt: 'Haircut Service', category: 'Haircut' },
  { id: 4, src: '/tools.png', alt: 'Professional Scissors', category: 'Tools' },
  { id: 5, src: '/hero.png', alt: 'Salon Ambiance', category: 'Interior' },
  { id: 6, src: '/tools.png', alt: 'Grooming Products', category: 'Products' },
]

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((l) => (l - 1 + photos.length) % photos.length)
  const next = () => setLightbox((l) => (l + 1) % photos.length)

  return (
    <section className="gallery" id="gallery" ref={ref}>
      <div className="container">
        <motion.div
          className="gallery__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag">Gallery</div>
          <h2 className="section-title">Our <span>Work</span> & Space</h2>
          <p className="gallery__sub">A glimpse into the Stylen A Shine experience.</p>
        </motion.div>

        <div className="gallery__grid">
          {photos.map((p, i) => (
            <motion.div
              key={p.id}
              className={`gallery__item ${i === 0 ? 'gallery__item--wide' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => openLightbox(i)}
            >
              <img src={p.src} alt={p.alt} />
              <div className="gallery__item-overlay">
                <span className="gallery__item-cat">{p.category}</span>
                <span className="gallery__item-zoom">⊕ View</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="gallery__footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://maps.app.goo.gl/KXKJ45ZcezBK3EXV9"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn"
          >
            <span>View All Photos on Google</span>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox__inner"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox__close" onClick={closeLightbox}><FiX /></button>
              <button className="lightbox__nav lightbox__nav--prev" onClick={prev}><FiChevronLeft /></button>
              <img src={photos[lightbox].src} alt={photos[lightbox].alt} className="lightbox__img" />
              <button className="lightbox__nav lightbox__nav--next" onClick={next}><FiChevronRight /></button>
              <div className="lightbox__caption">{photos[lightbox].alt}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
