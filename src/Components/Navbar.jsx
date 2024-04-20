import React, { useState } from 'react'
import RoundedButton from './RoundedButton/RoundedButton'
import IconHome from '../assets/IconHome'
import IconInformation from '../assets/IconInformation'
import IconAdjustments from '../assets/IconAdjustments'
import IconConfigurations from '../assets/IconConfigurations'

const menu = [
  {
    item: 'home',
    icon: <IconHome />
  },
  {
    item: 'rules',
    icon: <IconInformation />
  },
  {
    item: 'customize',
    icon: <IconAdjustments />
  },
  {
    item: 'setting',
    icon: <IconConfigurations />
  }
];

// const [active, useActive] = useState(0);

const Navbar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className='bg-white/10 bottom-0 rounded-3xl px-4 py-2 flex justify-between'>
      {menu.map((option, index)=> (
        <RoundedButton key={option.item} onClick={() => setActive(index)} active={active === index}>
          {option.icon}
        </RoundedButton>
      ))}
    </div>
  )
}

export default Navbar
