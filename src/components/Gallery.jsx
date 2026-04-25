import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Gallery.css'

const media = [
  { id: 1, type: 'video', src: '/video_2026-04-25_09-12-34.mp4', alt: 'Haircut Service Video', category: 'Haircut' },
  { id: 2, type: 'video', src: '/video_2026-04-25_09-14-37.mp4', alt: 'Styling Session', category: 'Styling' },
  { id: 3, type: 'video', src: '/video_2026-04-25_09-15-00.mp4', alt: 'Salon Ambiance', category: 'Interior' },
  { id: 4, type: 'video', src: '/video_2026-04-25_09-15-28.mp4', alt: 'Grooming Services', category: 'Products' },
  { id: 5, type: 'video', src: '/video_2026-04-25_09-16-03.mp4', alt: 'Fade Highlight', category: 'Haircut' },
  { id: 6, type: 'image', src: '/best.png', alt: 'Professional Shop', category: 'Interior' },
]

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((l) => (l - 1 + media.length) % media.length)
  const next = () => setLightbox((l) => (l + 1) % media.length)

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
          {media.map((p, i) => (
            <motion.div
              key={p.id}
              className={`gallery__item ${i === 0 ? 'gallery__item--wide' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => openLightbox(i)}
            >
              {p.type === 'video' ? (
                <video src={p.src} autoPlay loop muted playsInline />
              ) : (
                <img src={p.src} alt={p.alt} />
              )}
              <div className="gallery__item-overlay">
                <span className="gallery__item-cat">{p.category}</span>
                <span className="gallery__item-zoom">{p.type === 'video' ? '▶ Play Video' : '⊕ View Image'}</span>
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
              {media[lightbox].type === 'video' ? (
                <video src={media[lightbox].src} className="lightbox__media" controls autoPlay playsInline />
              ) : (
                <img src={media[lightbox].src} alt={media[lightbox].alt} className="lightbox__media" />
              )}
              <button className="lightbox__nav lightbox__nav--next" onClick={next}><FiChevronRight /></button>
              <div className="lightbox__caption">{media[lightbox].alt}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
