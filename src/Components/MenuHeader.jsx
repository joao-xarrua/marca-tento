import React from 'react'
import RoundedButton from './RoundedButton/RoundedButton'
import IconUser from '../assets/IconUser'

const MenuHeader = () => {
  return (
    <section className='h-16 flex justify-between items-center mt-3'>
        <div className='text-white'>
            <h1 className='text-4xl'>Marca Tento</h1>
            <span className='text-md'>marcador de truco</span>
        </div>
        <RoundedButton active={true} href="#">
          <IconUser />
        </RoundedButton>
    </section>
  )
}

export default MenuHeader
