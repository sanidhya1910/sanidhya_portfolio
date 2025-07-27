import { motion } from 'framer-motion'
import { Code, Coffee, Heart, Zap } from 'lucide-react'

export default function About() {
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

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Heart, label: 'Happy Clients', value: '30+' },
    { icon: Zap, label: 'Years Experience', value: '3+' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="text-content">
                <p>
                  I'm a passionate Full Stack Developer with a love for creating beautiful, 
                  functional web experiences. My journey in web development started 3 years ago, 
                  and I've been constantly learning and evolving ever since.
                </p>
                <p>
                  I specialize in React, Next.js, Node.js, and modern web technologies. 
                  I believe in writing clean, maintainable code and creating user experiences 
                  that are both intuitive and delightful.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or enjoying a good cup of coffee 
                  while reading tech blogs.
                </p>
              </div>

              <motion.div className="personal-info">
                <div className="info-item">
                  <span className="label">Name:</span>
                  <span className="value">Sanidhya Ravi</span>
                </div>
                <div className="info-item">
                  <span className="label">Location:</span>
                  <span className="value">India</span>
                </div>
                <div className="info-item">
                  <span className="label">Email:</span>
                  <span className="value">sanidhya@example.com</span>
                </div>
                <div className="info-item">
                  <span className="label">Experience:</span>
                  <span className="value">3+ Years</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="about-image" variants={itemVariants}>
              <div className="image-container">
                <motion.div
                  className="profile-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="image-placeholder">
                    <div className="avatar">SR</div>
                  </div>
                </motion.div>
                <div className="image-decoration">
                  <motion.div
                    className="decoration-shape"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="stats-grid" variants={itemVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-icon">
                  <stat.icon size={24} />
                </div>
                <div className="stat-content">
                  <motion.div
                    className="stat-value"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
