import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (seconds <= 58) {
        setSeconds(seconds+1)
      } else {
        setSeconds(0)
        setMinutes(minutes+1)
      }
    }, 1000);

    return () => clearInterval(intervalo); // Limpa o intervalo quando o componente é desmontado

  }, [seconds]); // O array vazio faz com que o useEffect seja executado apenas uma vez, similar ao componentDidMount


  const formatTime = (time) => {
    return String(time).padStart(2, '0')
  }

  return (
    <span className='text-2xl'>{formatTime(minutes)}:{formatTime(seconds)}</span>
  )
}

export default Timer
