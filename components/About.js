import { motion } from 'framer-motion'
import { MapPin, Mail, Calendar, Code } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const skills = [
    'React & Next.js',
    'Node.js & Express',
    'Python & AI/ML',
    'PostgreSQL & MongoDB',
    'TypeScript',
    'Tailwind CSS'
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
            <h2 className="section-title">About</h2>
            <p className="section-subtitle">Building digital experiences with modern technologies</p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="text-content">
                <p>
                  I'm a passionate Full Stack Developer focused on creating intuitive, 
                  high-performance web applications. With expertise in React, Next.js, and 
                  modern web technologies, I bring ideas to life through clean code and 
                  thoughtful design.
                </p>
                <p>
                  My approach combines technical precision with user-centered thinking, 
                  ensuring that every project not only functions flawlessly but also 
                  delivers an exceptional user experience.
                </p>
                <p>
                  When I'm not coding, I'm exploring AI/ML innovations, contributing to 
                  open-source projects, and staying current with the latest in web development.
                </p>
              </div>

              <div className="personal-details">
                <div className="detail-item">
                  <MapPin size={16} className="detail-icon" />
                  <span>Mumbai, India</span>
                </div>
                <div className="detail-item">
                  <Mail size={16} className="detail-icon" />
                  <span>ravisanidhya@gmail.com</span>
                </div>
                <div className="detail-item">
                  <Calendar size={16} className="detail-icon" />
                  <span>Available for new opportunities</span>
                </div>
              </div>

              <div className="skills-section">
                <h4>Key Technologies</h4>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div className="about-image" variants={itemVariants}>
              <div className="image-container">
                <motion.div
                  className="profile-image"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <img 
                    src="/profile.jpg" 
                    alt="Sanidhya Ravi" 
                    className="profile-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-placeholder" style={{ display: 'none' }}>
                    <Code size={32} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
