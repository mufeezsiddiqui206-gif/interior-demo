import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Nav from './components/Nav'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MobileStickyBar from './components/MobileStickyBar'

import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Services from './sections/Services'
import WhyUs from './sections/WhyUs'
import About from './sections/About'
import Values from './sections/Values'
import Process from './sections/Process'
import Work from './sections/Work'
import Trust from './sections/Trust'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Location from './sections/Location'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      <Loader show={loading} />
      <CustomCursor />
      <Nav />

      <main>
        <Hero />
        <Intro />
        <Services />
        <WhyUs />
        <About />
        <Values />
        <Process />
        <Work />
        <Trust />
        <Testimonials />
        <FAQ />
        <Contact />
        <Location />
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  )
}
