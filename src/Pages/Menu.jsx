import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/MenuHeader'
import { Outlet } from 'react-router-dom'

const Menu = () => {

  return (
    <section className='from-green-600 via-green-500 to-green-600 bg-gradient-45 sm:bg-gradient-30 h-dvh px-4 pb-10 pt-4 font-light font-inter flex flex-col'>
      <Header />
      <Outlet />
      <Navbar />
    </section>
  )
}

export default Menu
