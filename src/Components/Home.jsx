import React from 'react'
import MenuItemButton from './MenuItemButton/MenuItemButton'
import { useNavigate } from 'react-router-dom'

const menu = [
  {
    title: 'Novo Jogo',
    subtitle: 'jogo rápido',
    transparent: false,
    targetPath: '/game'
  },
  {
    title: 'Marcador Livre',
    subtitle: 'jogo rápido',
    transparent: true,
  },
  {
    title: 'Truco Mineiro',
    subtitle: 'jeitin mineiro',
    transparent: true,
  },
]

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className='grow mt-4 flex-col space-y-4'>
      {menu.map(({title, subtitle, transparent, targetPath}) => (
        <MenuItemButton onClick={() => navigate(targetPath)} key={title} title={title} subtitle={subtitle} transparent={transparent}/>
      ))}
    </section>
  )
}

export default Home
