import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Sproutify',
      description: 'A full-stack e-commerce solution built with Next.js, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/sanidhya1910/sproutify',
      demo: 'https://sproutify-wine.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Express.js', 'Socket.io', 'PostgreSQL', 'Material-UI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful visualizations.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'An analytics dashboard for social media performance tracking with data visualization and reporting capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations and optimized performance.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Framer Motion', 'CSS3', 'Vercel'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A full-featured blog platform with markdown support, comments system, and SEO optimization.',
      image: '/api/placeholder/400/250',
      technologies: ['Gatsby', 'GraphQL', 'Contentful', 'Netlify'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    }
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

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className={`project-card ${project.featured ? 'featured' : ''}`}
      variants={itemVariants}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="project-image">
        <div className="image-placeholder">
          <Eye size={40} />
        </div>
        <div className="project-overlay">
          <div className="project-links">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={20} />
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
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1 }}
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
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
