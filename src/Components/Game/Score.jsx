import React, {useContext, useState } from 'react'
import IconTeam from '../../assets/IconTeam'
import IconAward from '../../assets/IconAward'
import IconPlus from '../../assets/IconPlus'
import IconMinus from '../../assets/IconMinus'
import { GameContext } from '../context/GameContext'

const Score = () => {
  const {teamOne, teamTwo, handleScore, total, winner} = useContext(GameContext) 

  return (
    <section className='flex flex-col bg-white/30 rounded-3xl w-full p-5 justify-around items-center gap-5'>
      {/* seção do topo */}
      <div className='flex w-full justify-between'>
        <div className='bg-neutral-700/40 p-4 rounded-full'>
          <IconTeam />
        </div>
        <div className='flex gap-2 align-middle items-center bg-neutral-700/40 px-5 py-1 self-start rounded-full text-white'>
          <IconAward className='text-xl'/>
          <span>{total}</span>
        </div>
        <div className='bg-neutral-700/40 p-4 rounded-full'>
          <IconTeam />
        </div>
      </div>
      {/* seção do corpo */}
      <div className='flex w-full items-center justify-center gap-4'>
        <div className='flex flex-col justify-between gap-3 text-right'>
          <span className='text-white text-2xl w-14' style={{direction: 'rtl'}}>{teamOne.teamName}</span>
          <span className='text-white text-8xl w-14' style={{direction: 'rtl'}}>{teamOne.points}</span>
        </div>  
        <div className='pt-6'>
          <span className='text-white text-8xl'>:</span>
        </div>
        <div className='flex flex-col justify-between gap-3 text-left'>
          <span className='text-white text-2xl w-14'>{teamTwo.teamName}</span>
          <span className='text-white text-8xl w-14'>{teamTwo.points}</span>
        </div>
      </div>
      {/* botões */}
      <div className='flex w-full items-center justify-center gap-5'>
        <div className='flex flex-col items-center w-full h-36 from-neutral-100 to-95% to-neutral-400 bg-gradient-120 text-neutral-600 active:bg-gradient-60 rounded-3xl'>
          <button className='w-full flex items-center basis-3/4 justify-center rounded-t-3xl border-b-2 border-b-neutral-700/30' id="addOne" onClick={handleScore}><IconPlus /></button>
          <button className='w-full flex items-center basis-1/4 justify-center rounded-b-3xl' id="removeOne" onClick={handleScore}><IconMinus /></button>
        </div>
        <div className='flex flex-col items-center w-full h-36 from-neutral-100 to-95% to-neutral-400 bg-gradient-120 text-neutral-600 active:bg-gradient-60 rounded-3xl'>
          <button className='w-full flex items-center basis-3/4 justify-center rounded-t-3xl border-b-2 border-b-neutral-700/30' id="addTwo" onClick={handleScore}><IconPlus /></button>
          <button className='w-full flex items-center basis-1/4 justify-center rounded-b-3xl' id="removeTwo" onClick={handleScore}><IconMinus /></button>
        </div>
      </div>
    </section>
  )
}

export default Score
