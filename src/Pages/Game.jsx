import React, { useContext } from 'react'
import GameHeader from '../Components/Game/GameHeader'
import Score from '../Components/Game/Score'
import GameNavbar from '../Components/Game/GameNavbar'
import { GameProvider } from '../Components/context/GameContext'

const Game = () => {

  return (
    <section className='w-full max-w-2xl h-dvh p-4 font-light font-inter flex flex-col justify-between'>
      <GameProvider>
        <GameHeader />
        <Score />
        <GameNavbar />
      </GameProvider>
    </section>
  )
}

export default Game
