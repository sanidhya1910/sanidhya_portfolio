import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.p 
            className="hero-label"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.p>

          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Building digital experiences that matter
          </motion.h1>

          <motion.p 
            className="hero-description" 
            variants={itemVariants}
          >
            I create modern web applications with clean design and robust functionality. 
            Passionate about React, Next.js, and innovative user experiences.
          </motion.p>

          <motion.div 
            className="hero-buttons" 
            variants={itemVariants}
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToAbout}
            >
              View My Work
            </motion.button>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div 
            className="social-links" 
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/sanidhya1910"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sanidhya19"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:ravisanidhya@gmail.com"
              className="social-link"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="scroll-btn"
        >
          <ChevronDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  )
}
