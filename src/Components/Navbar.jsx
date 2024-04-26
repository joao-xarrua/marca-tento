import React, { useState } from 'react'
import RoundedButton from './RoundedButton/RoundedButton'
import IconHome from '../assets/IconHome'
import IconInformation from '../assets/IconInformation'
import IconAdjustments from '../assets/IconAdjustments'
import IconConfigurations from '../assets/IconConfigurations'
import { NavLink } from 'react-router-dom'

const menu = [
  {
    item: '/',
    icon: <IconHome />
  },
  {
    item: 'infos',
    icon: <IconInformation />
  },
  {
    item: 'adjustments',
    icon: <IconAdjustments />
  },
  {
    item: 'configurations',
    icon: <IconConfigurations />
  }
];

// const [active, useActive] = useState(0);

const Navbar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className='absolute bottom-5 left-4 right-4 bg-white/10 backdrop-blur-sm  rounded-3xl px-4 py-2 flex justify-between'>
      {menu.map((option, index)=> (
        <NavLink to={option.item} key={option.item} className={`${active === index && 'bg-neutral-800/10 active:bg-neutral-800/30 group-active:bg-neutral-800/30 rounded-full backdrop-blur-xl'} flex items-center justify-center w-12 h-12 ` } onClick={() => setActive(index)}>
          {option.icon} 
        </NavLink>
      ))}
    </div>
  )
}

export default Navbar
