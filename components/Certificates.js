import { motion } from 'framer-motion'
import { Award, ExternalLink, Download, Calendar, CheckCircle, XCircle } from 'lucide-react'

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'IBM Full Stack Software Developer Certificate',
      issuer: 'IBM (Coursera)',
      description: 'Technologies covered includes Cloud GitHub, Node.js, React, Docker, Kubernetes, Django ORM, Bootstrap, Microservices, Serverless computing, and more.',
      date: 'June 2025',
      status: 'valid',
      credentialId: 'FCC-12345',
      verifyUrl: 'https://freecodecamp.org/verify',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'AWS Fundamentals: Building Serverless Applications',
      issuer: 'AWS (Coursera)',
      description: 'Understanding of core AWS services, key AWS security concepts, migrating from on-premises to AWS, and basics of building serverless applications with AWS.',
      date: 'July 2025',
      status: 'valid',
      credentialId: 'META-67890',
      verifyUrl: 'https://coursera.org/verify',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'AWS Cloud Solutions Architect Certification',
      issuer: 'AWS (Coursera)',
      description: 'Covers Amazon API Gateway, AWS Lambda, Amazon SQS, Amazon DynamoDB, and Amazon SNS to build a serverless web backend.',
      date: 'July 2025',
      status: 'valid',
      credentialId: 'AWS-CLF-001',
      verifyUrl: 'https://aws.amazon.com/verification',
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Generative AI Engineering with LLMs Specialization',
      issuer: 'IBM (Coursera)',
      description: 'Covers the fundamentals of generative AI, including large language models (LLMs), prompt engineering, and ethical considerations.',
      date: 'September 2023',
      status: 'valid',
      credentialId: 'GOOGLE-UX-456',
      verifyUrl: 'https://coursera.org/verify',
      downloadUrl: '#'
    },
    {
      id: 5,
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      description: 'Database design, aggregation framework, indexing strategies, and MongoDB best practices.',
      date: 'July 2023',
      status: 'valid',
      credentialId: 'MDB-DEV-789',
      verifyUrl: 'https://university.mongodb.com/verify',
      downloadUrl: '#'
    },
    // {
    //   id: 6,
    //   title: 'JavaScript Algorithms and Data Structures',
    //   issuer: 'freeCodeCamp',
    //   description: 'Advanced JavaScript concepts, ES6+, algorithms, data structures, and problem-solving techniques.',
    //   date: 'May 2023',
    //   status: 'valid',
    //   credentialId: 'FCC-JS-123',
    //   verifyUrl: 'https://freecodecamp.org/verify',
    //   downloadUrl: '#'
    // }
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

  const CertificateCard = ({ certificate, index }) => (
    <motion.div
      className="certificate-card"
      variants={itemVariants}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="certificate-header">
        <div className="certificate-bg-pattern"></div>
        <motion.div
          className="certificate-icon"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring" }}
          viewport={{ once: true }}
        >
          <Award size={48} />
        </motion.div>
      </div>

      <div className="certificate-content">
        <h3 className="certificate-title">{certificate.title}</h3>
        <div className="certificate-issuer">{certificate.issuer}</div>
        <p className="certificate-description">{certificate.description}</p>
        
        <div className="certificate-meta">
          <div className="certificate-date">
            <Calendar size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
            {certificate.date}
          </div>
          <div className={`certificate-status ${certificate.status}`}>
            {certificate.status === 'valid' ? (
              <>
                <CheckCircle size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                Valid
              </>
            ) : (
              <>
                <XCircle size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                Expired
              </>
            )}
          </div>
        </div>

        <div className="certificate-actions">
          <motion.a
            href={certificate.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink size={16} />
            Verify
          </motion.a>
          <motion.a
            href={certificate.downloadUrl}
            className="certificate-btn primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={16} />
            Download
          </motion.a>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <motion.div
          className="certificates-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Certifications & Achievements</h2>
            <p className="section-subtitle">Professional certifications that validate my expertise</p>
          </motion.div>

          <div className="certificates-grid">
            {certificates.map((certificate, index) => (
              <CertificateCard key={certificate.id} certificate={certificate} index={index} />
            ))}
          </div>

          <motion.div className="certificates-cta" variants={itemVariants}>
            <p>Continuously learning and earning new certifications</p>
            <motion.a
              href="https://linkedin.com/in/sanidhya19"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Certifications
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
