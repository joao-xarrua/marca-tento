import React, { useState } from 'react'
import IconChevron from '../../assets/IconChevron'

const CardItem = ({title, content}) => {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active)
  }

  return (
    <div className='flex flex-col rounded-3xl w-full justify-betweencursor-pointer bg-white/10 text-white divide-y-2 divide-white/30 '>
      <div className='flex items-center justify-between p-5 cursor-pointer' onClick={handleActive}>
        <h2 className='text-2xl'>{title}</h2>
        <IconChevron className={active ? 'rotate-0' : 'rotate-180'}/>
      </div>
      {active && 
      <div className='flex items-center justify-between p-5'>
        <p>{content}</p>
      </div>
      }
    </div>
  )
}

export default CardItem
