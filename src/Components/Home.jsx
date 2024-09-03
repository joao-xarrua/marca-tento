import React from 'react'
import MenuItemButton from './MenuItemButton/MenuItemButton'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const menu = [
    {
      title: 'Novo Jogo',
      subtitle: 'jogo rápido',
      transparent: false,
      funcOnClick: () => { // muito massa que isso pode ser uma função
        localStorage.setItem('teamOne', 'Nós')
        localStorage.setItem('teamTwo', 'Eles')
        localStorage.setItem('points', 12)
        navigate('/game')
      }
    },
    {
      title: 'Personalizado',
      subtitle: 'defina suas regras',
      transparent: true,
      funcOnClick: () => {
        navigate('/custom')
      }
    },
    {
      title: 'Marcador Livre',
      subtitle: 'sem limite',
      transparent: true,
    },
    {
      title: 'Truco Mineiro',
      subtitle: 'jeitin mineiro',
      transparent: true,
    }
  ]

  return (
    <section className='grow pb-12 mt-4 flex-col flex-grow-2 space-y-4 overflow-auto' >
      {menu.map(({title, subtitle, transparent, funcOnClick}) => (
        <MenuItemButton 
          onClick={() => funcOnClick()} 
          key={title} 
          title={title} 
          subtitle={subtitle} 
          transparent={transparent}/>
      ))}
    </section>
  )
}

export default Home
