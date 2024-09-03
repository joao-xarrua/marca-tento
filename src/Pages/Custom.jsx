import React from 'react'
import IconReturn from '../assets/IconReturn'
import RoundedButton from '../Components/RoundedButton/RoundedButton'
import IconMenu from '../assets/IconMenu'
import { useNavigate } from 'react-router-dom'
import CustomGameForm from '../Components/GameForm/CustomGameForm'
import { GameProvider } from '../Components/context/GameContext'


const Custom = () => {
  const navigate = useNavigate()

  return (
    <GameProvider>
      <section className='w-full max-w-2xl min-h-dvh h-full flex flex-col static font-light font-inter'>
        <div className='flex justify-between px-4 py-9 w-full'>
          <RoundedButton active={true} onClick={() => navigate('/')}>
            <IconReturn />
          </RoundedButton>
          <RoundedButton active={true} onClick={() => navigate('/')}>
            <IconMenu />
          </RoundedButton>
        </div>
        <CustomGameForm />
      </section>
    </GameProvider>
  )
}

export default Custom
