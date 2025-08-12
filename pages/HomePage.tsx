'use client'

import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import Menu from '../components/Menu'
import About from '../components/About'
import Atmosphere from '../components/Atmosphere'
import Reservations from '../components/Reservations'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Reviews />
      <Menu />
      <About />
      <Atmosphere />
      <Reservations />
      <Contact />
    </>
  )
}

export default HomePage