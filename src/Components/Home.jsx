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
    title: 'Personalizado',
    subtitle: 'defina suas regras',
    transparent: true,
  },
  {
    title: 'Marcador Livre',
    subtitle: 'sem tempo ou limite',
    transparent: true,
  },
  {
    title: 'Truco Mineiro',
    subtitle: 'jeitin mineiro',
    transparent: true,
  },
  {
    title: 'Truco Mineiro',
    subtitle: 'jeitin mineiro',
    transparent: true,
  },
  {
    title: 'Truco Mineiro',
    subtitle: 'jeitin mineiro',
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
    <section  className='grow mt-4 flex-col flex-grow-2 space-y-4 overflow-y-scroll' >
      {menu.map(({title, subtitle, transparent, targetPath}) => (
        <MenuItemButton onClick={() => navigate(targetPath)} key={title} title={title} subtitle={subtitle} transparent={transparent}/>
      ))}
    </section>
  )
}

export default Home
