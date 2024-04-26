import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className='from-green-600 via-green-500 to-green-600 bg-gradient-45 sm:bg-gradient-30 h-dvh p-4 flex flex-col justify-center'>
      <h1 className='font-bold font-inter text-white text-6xl'>Página não Encontrada</h1>
      <a className='font-inter text-white text-xl underline' onClick={() => navigate('/')}>voltar para o início</a>
    </section>
  )
}

export default NotFound
