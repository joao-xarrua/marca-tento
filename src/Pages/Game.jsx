import React from 'react'
import GameHeader from '../Components/GameHeader'
import Score from '../Components/Score'

const Game = () => {
  return (
    <section className='from-green-600 via-green-500 to-green-600 bg-gradient-45 sm:bg-gradient-30 h-dvh p-4 font-light font-inter flex flex-col'>
      <GameHeader />
      <Score />
    </section>
  )
}

export default Game
