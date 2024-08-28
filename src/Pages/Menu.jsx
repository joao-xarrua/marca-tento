import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/MenuHeader'
import { Outlet } from 'react-router-dom'

const Menu = () => {

  return (
    <section className='w-full max-w-2xl h-dvh p-4 font-light font-inter flex flex-col'>
      <Header />
      <Outlet />
      <Navbar />
    </section>
  )
}

export default Menu
