import React, { useContext, useState } from 'react'
import {GameContext} from '../context/GameContext'
import { useNavigate } from 'react-router-dom'

const CustomGameForm = () => {
  const teste = useContext(GameContext)
  const navigate = useNavigate()
  const [teamOneInput, setTeamOneInput] = useState("Nós")
  const [teamTwoInput, setTeamTwoInput] = useState("Eles")
  const [pointsInput, setPointsInput] = useState(12)
  
  const handleClick = () => {
    localStorage.setItem('teamOne', teamOneInput)
    localStorage.setItem('teamTwo', teamTwoInput)
    localStorage.setItem('total', pointsInput)
    navigate('/game')
  }

  return (
    <form  className='flex flex-col w-full items-center space-y-4'>
      <div className='flex flex-col w-64'>
        <label htmlFor="teamOne" className='text-white text-xl ml-2' >Time 1</label>
        <input 
          type="text" 
          id='teamOne' 
          value={teamOneInput}
          onChange={(event) => setTeamOneInput(event.target.value)}
          className='h-10 px-4 rounded-md'/>
      </div>
      <div className='flex flex-col w-64'>
        <label htmlFor="teamTwo" className='text-white text-xl ml-2' >Time 2</label>
        <input 
          type="text" 
          id='teamTwo' 
          value={teamTwoInput}
          onChange={(event) => setTeamTwoInput(event.target.value)}
          className='h-10 px-4 rounded-md'/>
      </div>
      <div className='flex flex-col w-64'>
        <label htmlFor="points" className='text-white text-xl ml-2' >Pontuação</label>
        <input 
          type="text" 
          id='points' 
          value={pointsInput}
          onChange={(event) => setPointsInput(event.target.value)}
          className='h-10 px-4 rounded-md'/>
      </div>
      <button type='button' onClick={handleClick} className='bg-white uppercase h-12 rounded-xl px-10'>Iniciar</button>
    </form>
  )
}

export default CustomGameForm
