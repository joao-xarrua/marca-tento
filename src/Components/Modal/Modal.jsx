import React from 'react'
import { useNavigate } from 'react-router-dom'


const Modal = ({winner}) => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col justify-center bg-white/10 backdrop-blur-sm fixed m-0 p-0 top-0 w-full h-full z-50'>
      <div className='bg-white/80 p-6 my-8 mx-5 rounded-2xl flex flex-col '>
        <div className='text-center py-10'>
          <span className='text-lg'>o time vencedor foi</span>
          <h1 className='text-7xl text-amber-400'>{winner.teamName}</h1>
        </div>
        <div className='flex flex-col'>
          <a  className='border-y-2 border-neutral-700/10 text-center cursor-pointer p-6 text-xl font-bold'  onClick={() => navigate('/')}>Página Inicial</a>
        </div>
      </div>
    </div>
  )
}

export default Modal
