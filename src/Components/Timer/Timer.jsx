import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../context/GameContext'

const Timer = () => {
  const {gameStatus} = useContext(GameContext)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  
  useEffect(() => {
    if (gameStatus) {
      const intervalo = setInterval(() => {
        if (seconds <= 58) {
          setSeconds(seconds+1)
        } else {
          setSeconds(0)
          setMinutes(minutes+1)
        }
      }, 1000);
      return () => clearInterval(intervalo); // Limpa o intervalo quando o componente é desmontado    
    } else {
      const totalTime = `${formatTime(minutes)}:${formatTime(seconds)}`
      return localStorage.setItem('gameTime', totalTime)
    }
  }, [seconds, gameStatus]); // O array vazio faz com que o useEffect seja executado apenas uma vez, similar ao componentDidMount


  const formatTime = (time) => {
    return String(time).padStart(2, '0')
  }

  return (
    <span className='text-2xl font-mono font-extralight'>{formatTime(minutes)}:{formatTime(seconds)}</span>
  )
}

export default Timer
