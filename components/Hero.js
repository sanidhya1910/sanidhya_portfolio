import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="floating-shapes">
          <motion.div
            className="shape shape-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="shape shape-2"
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="shape shape-3"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Sanidhya Ravi</span>
          </motion.h1>

          <motion.div className="hero-subtitle" variants={itemVariants}>
            <motion.span
              className="typing-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Full Stack Developer with a Passion for AI
            </motion.span>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code, user experience, and bringing ideas to life.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
            >
              View My Work
            </motion.button>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={itemVariants}>
            <motion.a
              href="https://github.com/sanidhya1910"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -3 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sanidhya19"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -3 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:ravisanidhya@gmail.com"
              className="social-link"
              whileHover={{ y: -3 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-btn"
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}
