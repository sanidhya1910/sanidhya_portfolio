import { motion } from 'framer-motion'

export default function Skills() {

  const getSkillIntensity = (level) => {
    if (level >= 90) return 'var(--skill-expert)'
    if (level >= 80) return 'var(--skill-advanced)'
    if (level >= 70) return 'var(--skill-intermediate)'
    if (level >= 60) return 'var(--skill-developing)'
    return 'var(--skill-beginner)'
  }

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Gradio', level: 80 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5/CSS3', level: 100 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Framer Motion', level: 80 },
        { name: 'Redux', level: 60 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 60 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 60 },
        { name: 'GraphQL', level: 45 },
        { name: 'REST APIs', level: 40 },
        { name: 'Django', level: 50 },
        { name: 'Prisma', level: 70 }
      ]
    },
      {
      title: 'AI & More',
      skills: [
        { name: 'Python', level: 70 },
        { name: 'Pytorch', level: 60 },
        { name: 'Gradio', level: 50 },
        { name: 'C++', level: 60 },
        { name: 'GraphQL', level: 45 },
        { name: 'REST APIs', level: 40 },
        { name: 'LangChain', level: 50 },
        { name: 'Transformers', level: 60 }

      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Github Actions', level: 80 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Notion', level: 90 },
        { name: 'Figma', level: 90 },
        { name: 'Photoshop', level: 90 },
        { name: 'Linux', level: 75 }

      ]
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

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-category"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5 
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{ background: getSkillIntensity(skill.level) }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.2,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-content">
              <h3>Always Learning</h3>
              <p>
                Technology evolves rapidly, and I'm committed to staying current with the latest 
                trends and best practices. I'm constantly exploring new frameworks, tools, and 
                methodologies to deliver the best solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
