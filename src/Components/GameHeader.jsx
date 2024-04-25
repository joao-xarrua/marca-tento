import React from 'react'
import IconReturn from '../assets/IconReturn'
import IconMenu from '../assets/IconMenu'
import RoundedButton from './RoundedButton/RoundedButton'
import { useNavigate } from 'react-router-dom'

const GameHeader = () => {
  const navigator = useNavigate();

  return (
    <section className='h-16 flex justify-between items-center mt-3'>
        <RoundedButton onClick={() => navigator('/')} active={true} href="#">
          <IconReturn />
        </RoundedButton>
        <div className='text-white'>
            <span className='text-2xl'>00:00</span>
        </div>
        <RoundedButton active={true} href="#">
          <IconMenu />
        </RoundedButton>
    </section>
  )
}

export default GameHeader
