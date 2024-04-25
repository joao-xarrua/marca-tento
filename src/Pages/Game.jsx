import React, { useContext } from 'react'
import GameHeader from '../Components/Game/GameHeader'
import Score from '../Components/Game/Score'
import GameNavbar from '../Components/Game/GameNavbar'
import { GameProvider } from '../Components/context/GameContext'

const Game = () => {

  return (
    <section className='from-green-600 via-green-500 to-green-600 bg-gradient-45 sm:bg-gradient-30 h-dvh p-4 font-light font-inter flex flex-col justify-between'>
      <GameProvider>
        <GameHeader />
        <Score />
        <GameNavbar />
      </GameProvider>
    </section>
  )
}

export default Game
