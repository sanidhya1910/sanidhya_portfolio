import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Sproutify',
      description: 'A comprehensive web application for organizing and managing beach cleanup events, built with Next.js, Prisma, and PostgreSQL.',
      image: '/sproutify.jpg',
      technologies: ['Next.js', 'MongoDB', 'Framer-Motion', 'Tailwind CSS'],
      github: 'https://github.com/sanidhya1910/sproutify',
      demo: 'https://sproutify-wine.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Multiline TrOCR',
      description: 'AI tool to automatically transcribe and translate handwritten text from images, leveraging advanced OCR and translation models.',
      image: '/trocr.jpg',
      technologies: ['Python', 'Gradio', 'Hugging Face', 'PyTorch', 'Transformers'],
      github: 'https://github.com/sanidhya1910/multiline_TrOCR',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Talk to Me_ta',
      description: 'A conversational voice assistant built using Meta ASR, TTS, Gradio, and optionally accelerated by FlashAttention 2.',
      image: '/talk-to-me-ta.jpg',
      technologies: ['Python', 'Gradio', 'Hugging Face', 'PyTorch', 'Transformers'],
      github: 'https://github.com/sanidhya1910/Talk-To-Me-ta-',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 4,
      title: 'Dynamic Island for Windows',
      description: 'An enhanced iOS-style Dynamic Island widget for Windows with improved UI and additional features.',
      image: '/dynamic-island-windows.jpg',
      technologies: ['React', 'Electron.js', 'CSS3', 'Windows API'],
      github: 'https://github.com/sanidhya1910/dynamic_island',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 5,
      title: 'Plantshopia',
      description: 'An e-commerce platform for buying and selling plants, featuring a user-friendly interface and robust backend.',
      image: '/plantshopia.jpg',
      technologies: ['React', 'Javascript', 'CSS'],
      github: 'https://github.com/sanidhya1910/plantshopia',
      demo: 'https://sanidhya1910.github.io/plantshopia/',
      featured: true
    },
    // {
    //   id: 6,
    //   title: 'Blog Platform',
    //   description: 'A full-featured blog platform with markdown support, comments system, and SEO optimization.',
    //   image: '/api/placeholder/400/250',
    //   technologies: ['Gatsby', 'GraphQL', 'Contentful', 'Netlify'],
    //   github: 'https://github.com',
    //   demo: 'https://demo.com',
    //   featured: true
    // }
  ]

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

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className={`project-card ${project.featured ? 'featured' : ''}`}
      variants={itemVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-img"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
        <div className="image-placeholder" style={{ display: 'none' }}>
          <Eye size={32} />
        </div>
        <div className="project-overlay">
          <div className="project-links">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="tech-tag"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: techIndex * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div className="projects-cta" variants={itemVariants}>
            <p>Want to see more of my work?</p>
            <motion.a
              href="https://github.com/sanidhya1910"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
