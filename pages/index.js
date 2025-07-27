import Head from 'next/head'
import { motion } from 'framer-motion'
import Hero from '@components/Hero'
import About from '@components/About'
import Projects from '@components/Projects'
import Skills from '@components/Skills'
import Contact from '@components/Contact'
import Navigation from '@components/Navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sanidhya Ravi - Portfolio</title>
        <meta name="description" content="Full Stack Developer & UI/UX Designer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Navigation />
      
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
