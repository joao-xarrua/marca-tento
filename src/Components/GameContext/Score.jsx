import React, { useState } from 'react'
import IconTeam from '../../assets/IconTeam'
import IconAward from '../../assets/IconAward'
import IconPlus from '../../assets/IconPlus'
import IconMinus from '../../assets/IconMinus'

const Score = () => {
  const [teamOne, setTeamOne] = useState(0)
  const [teamTwo, setTeamTwo] = useState(0)
  

  function handleAddOne() {
      setTeamOne(teamOne+1);
  }
  function handleAddTwo() {
      setTeamTwo(teamTwo+1); 
  }

  function handleRemoveOne() {
    if (teamOne > 0) {
      setTeamOne(teamOne-1);
    }
  }
  function handleRemoveTwo() {
    if (teamTwo > 0) {
      setTeamTwo(teamTwo-1);
    }
  }

  return (
    <section className='flex flex-col bg-white/30 rounded-3xl w-full p-5 justify-around items-center gap-5'>
      {/* seção do topo */}
      <div className='flex w-full justify-between'>
        <div className='bg-neutral-700/40 p-4 rounded-full'>
          <IconTeam />
        </div>
        <div className='flex gap-2 align-middle items-center bg-neutral-700/40 px-5 py-1 self-start rounded-full text-white'>
          <IconAward className='text-xl'/>
          <span>1 - 2</span>
        </div>
        <div className='bg-neutral-700/40 p-4 rounded-full'>
          <IconTeam />
        </div>
      </div>
      {/* seção do corpo */}
      <div className='flex w-full items-center justify-center gap-4'>
        <div className='flex flex-col justify-between gap-3 text-right'>
          <span className='text-white text-2xl w-14' style={{direction: 'rtl'}}>Nós</span>
          <span className='text-white text-8xl w-14' style={{direction: 'rtl'}}>{teamOne}</span>
        </div>  
        <div className='pt-6'>
          <span className='text-white text-8xl'>:</span>
        </div>
        <div className='flex flex-col justify-between gap-3 text-left'>
          <span className='text-white text-2xl w-14'>Eles</span>
          <span className='text-white text-8xl w-14'>{teamTwo}</span>
        </div>
      </div>
      {/* botões */}
      <div className='flex w-full items-center justify-center gap-5'>
        <div className='flex flex-col items-center w-full h-36 from-neutral-100 to-95% to-neutral-400 bg-gradient-120 text-neutral-600 active:bg-gradient-60 rounded-3xl'>
          <button className='w-full flex items-center basis-3/4 justify-center rounded-t-3xl border-b-2 border-b-neutral-700/30' onClick={handleAddOne}><IconPlus /></button>
          <button className='w-full flex items-center basis-1/4 justify-center rounded-b-3xl' onClick={handleRemoveOne}><IconMinus /></button>
        </div>
        <div className='flex flex-col items-center w-full h-36 from-neutral-100 to-95% to-neutral-400 bg-gradient-120 text-neutral-600 active:bg-gradient-60 rounded-3xl'>
          <button className='w-full flex items-center basis-3/4 justify-center rounded-t-3xl border-b-2 border-b-neutral-700/30' onClick={handleAddTwo}><IconPlus /></button>
          <button className='w-full flex items-center basis-1/4 justify-center rounded-b-3xl' onClick={handleRemoveTwo}><IconMinus /></button>
        </div>
      </div>
      
    </section>
  )
}

export default Score
