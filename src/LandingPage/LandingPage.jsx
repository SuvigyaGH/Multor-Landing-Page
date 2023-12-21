import React from 'react'
import Hero from '@/components/Hero/Hero'
import Benefits from '@/components/Benefits/Benefits'
import Visitors from '@/components/Visitors/Visitors'
import Reviews from '@/components/Reviews/Reviews'
import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'

const LandingPage = () => {
  return (
    <>
        <Hero/>
        <Benefits/>
        <Visitors/>
        <Reviews/>
        <About/>
        <Footer/>

    </>
  )
}

export default LandingPage
