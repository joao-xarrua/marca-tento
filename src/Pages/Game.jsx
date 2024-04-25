import React from 'react'
import GameHeader from '../Components/GameContext/GameHeader'
import Score from '../Components/GameContext/Score'
import GameNavbar from '../Components/GameContext/GameNavbar'

const Game = () => {
  return (
    <section className='from-green-600 via-green-500 to-green-600 bg-gradient-45 sm:bg-gradient-30 h-dvh p-4 font-light font-inter flex flex-col justify-between'>
      <GameHeader />
      <Score />
      <GameNavbar />
    </section>
  )
}

export default Game
