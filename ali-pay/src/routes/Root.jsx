import React from 'react'
import { Navbar , Hero, About, HowitWorks, Free, Contact, Footer } from '../components'


const Root = () => {
  return (
    <div className='w-screen overflow-x-hidden min-h-screen'>
      <Navbar />
      <Hero />
      <About />
      <HowitWorks />
      <Free />
      <Contact />
      <Footer />
    </div>
  )
}

export default Root