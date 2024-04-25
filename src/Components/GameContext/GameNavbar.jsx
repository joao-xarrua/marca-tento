import React, { useState } from 'react'
import RoundedButton from '../RoundedButton/RoundedButton'

const menu = [
  {
    id: 0,
    tento: 3
  },
  {
    id: 1,
    tento: 6
  },
  {
    id: 2,
    tento: 9
  },
  {
    id: 3,
    tento: 12
  }
];

const GameNavbar = () => {
  const [active, setActive] = useState(null);

  function handleActive(index) {  
    if (active === index) {
      setActive(null)
    } else {
      setActive(menu[index].id)
    }
  }

  return (
    <div className='bg-white/10 bottom-0 rounded-3xl px-4 py-2 flex justify-between text-white text-2xl'>
      {menu.map((option, index)=> (
        <RoundedButton key={option.tento} onClick={() => handleActive(index)} active={active === index}>
          {option.tento}
        </RoundedButton>
      ))}
    </div>
  )
}

export default GameNavbar
