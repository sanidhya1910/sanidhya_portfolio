import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ravisanidhya@gmail.com',
      href: 'mailto:ravisanidhya@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6392173757',
      href: 'tel:+916392173757'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sanidhya1910', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sanidhya19', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/sanidhya1910', label: 'Twitter' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's work together on your next project</p>
          </motion.div>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Let's talk about everything!</h3>
              <p>
                Don't like forms? Send me an email. 👋 Or give me a call. I'd love to 
                hear about your project and see how I can help bring your ideas to life.
              </p>

              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="contact-item"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="contact-icon">
                      <item.icon size={20} />
                    </div>
                    <div className="contact-text">
                      <div className="contact-label">{item.label}</div>
                      <div className="contact-value">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow me on</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div className="contact-form" variants={itemVariants}>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <motion.div
                    className="form-group"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </motion.div>
                  <motion.div
                    className="form-group"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="form-group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </motion.div>

                <motion.div
                  className="form-group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="form-input form-textarea"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      ⏳
                    </motion.div>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
