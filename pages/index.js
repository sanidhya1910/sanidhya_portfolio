import Head from 'next/head'
import { motion } from 'framer-motion'
import Hero from '@components/Hero'
import About from '@components/About'
import Projects from '@components/Projects'
import Skills from '@components/Skills'
import Certificates from '@components/Certificates'
import Contact from '@components/Contact'
import Navigation from '@components/Navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sanidhya Ravi - Portfolio</title>
        <meta name="description" content="Full Stack Developer with a passion for AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </>
  )
}
