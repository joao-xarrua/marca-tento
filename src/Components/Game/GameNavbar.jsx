import React, { useContext, useState } from 'react'
import RoundedButton from '../RoundedButton/RoundedButton'
import { GameContext } from '../context/GameContext';

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
  // const [active, setActive] = useState(null);
  const {point, setPoint, activePointOption, setActivePointOption} = useContext(GameContext)

  function handleActive(index) {  
    if (activePointOption === index) {
      setActivePointOption(null)
      setPoint(1)
    } else {
      setActivePointOption(menu[index].id)
      setPoint(menu[index].tento)
    }
  }

  return (
    <div className='bg-white/10 bottom-0 rounded-3xl px-4 py-2 flex justify-around text-white text-2xl'>
      {menu.map((option, index)=> (
        <RoundedButton key={option.tento} onClick={() => handleActive(index)} active={activePointOption === index}>
          {option.tento}
        </RoundedButton>
      ))}
    </div>
  )
}

export default GameNavbar
