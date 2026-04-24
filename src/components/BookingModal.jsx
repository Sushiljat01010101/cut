import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiPhone, FiUser, FiCalendar, FiClock, FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './BookingModal.css'

const services = ['Haircut', 'Beard Trim', 'Facial', 'Shampoo', 'Hair Spa', 'Clean Shave']
const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM']

export default function BookingModal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(`Hi! I'd like to book an appointment at Stylen A Shine.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}`)
    window.location.href = `https://wa.me/918439975439?text=${msg}`
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal"
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal__header">
            <div>
              <h3 className="modal__title">Book Appointment</h3>
              <p className="modal__sub">We'll confirm via WhatsApp within minutes</p>
            </div>
            <button className="modal__close" onClick={onClose}><FiX /></button>
          </div>

          {!submitted ? (
            <form className="modal__form" onSubmit={handleSubmit}>
              <div className="modal__field">
                <label><FiUser /> Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  id="booking-name"
                />
              </div>
              <div className="modal__field">
                <label><FiPhone /> Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  id="booking-phone"
                />
              </div>
              <div className="modal__field">
                <label>Service</label>
                <select name="service" value={form.service} onChange={handleChange} required id="booking-service">
                  <option value="">Select a service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="modal__row">
                <div className="modal__field">
                  <label><FiCalendar /> Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    id="booking-date"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="modal__field">
                  <label><FiClock /> Time</label>
                  <select name="time" value={form.time} onChange={handleChange} required id="booking-time">
                    <option value="">Select time</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <button type="submit" className="gold-btn modal__submit" id="booking-submit">
                <FaWhatsapp />
                <span>Confirm via WhatsApp</span>
              </button>

              <p className="modal__note">
                Tapping confirm opens WhatsApp with your booking details pre-filled.
              </p>
            </form>
          ) : (
            <motion.div
              className="modal__success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="modal__success-icon"><FiCheck /></div>
              <h3>Booking Sent!</h3>
              <p>Your appointment request has been sent via WhatsApp. We'll confirm shortly!</p>
              <button className="gold-btn" onClick={onClose} style={{marginTop: '20px', width:'100%', justifyContent:'center'}}>
                <span>Close</span>
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
