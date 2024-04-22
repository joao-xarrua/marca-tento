import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Home from '../Components/Home'

const Menu = () => {
  return (
    <section className='from-green-600 via-green-500 to-green-600 bg-gradient-45 sm:bg-gradient-30 h-dvh p-4 font-light font-inter flex flex-col'>
      <Header />
      <Home />
      <Navbar />
    </section>
  )
}

export default Menu