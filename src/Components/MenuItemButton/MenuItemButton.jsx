import React from 'react'
import RoundedButton from '../RoundedButton/RoundedButton'
import IconClickable from '../../assets/IconClickable'

const MenuItemButton = ({title, subtitle, transparent, onClick}) => {
  return (
    <div onClick={onClick} 
        className={`group flex rounded-3xl w-full p-5 justify-between items-center cursor-pointer 
          ${transparent ? 
            'bg-white/10 text-white h-28 active:bg-white/30' 
              : 
            'from-neutral-100 to-95% to-neutral-400 bg-gradient-120 text-neutral-600 active:bg-gradient-60 h-32'}  
    `}>       
      <div className=''>
          <h1 className={` ${transparent ? 'text-3xl' : 'text-4xl'}`}>{title}</h1>
          <span className='text-md'>{subtitle}</span>
      </div>
      <RoundedButton active={true} href="#">
        <IconClickable />
      </RoundedButton>
    </div>
  )
}

export default MenuItemButton
