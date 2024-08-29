import React from 'react'
import IconTeamDark from '../../assets/IconTeamDark'
import IconAwardDark from '../../assets/IconAwardDark'

const HistoryItem = ({item}) => {
  return (
    <div className='p-5 bg-neutral-700 rounded-3xl flex justify-center gap-4'>
      {/* TIME 1 */}
      <div className='flex flex-col items-center gap-2'>
        <div className='p-5 rounded-full bg-white'>
          <IconTeamDark />
        </div>
        <span className='font-bold text-xl text-red-600'>{item.nameTeamOne}</span>
      </div>
      {/* PLACAR */}
      <div className='flex flex-col items-center justify-between'>
        <div className='bg-white flex items-center gap-2 px-4 rounded-full'>
          <IconAwardDark />
          <span className='text-neutral-700 text-sm'>{item.scoreTotal}</span>
        </div>
        <h2 className='text-4xl text-white font-mono'>{item.scoreTeamOne}:{item.scoreTeamTwo}</h2>
        <span className='italic text-xs text-neutral-400'>Sun, 10/04/2024</span>
      </div>
      {/* TIME 2 */}
      <div className='flex flex-col items-center gap-2'>
        <div className='p-5 rounded-full bg-white'>
          <IconTeamDark />
        </div>
        <span className='font-bold text-xl text-green-600'>{item.nameTeamTwo}</span>
      </div>
    </div>
  )
}

export default HistoryItem
