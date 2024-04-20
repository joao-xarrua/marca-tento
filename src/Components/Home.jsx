import React from 'react'
import MenuItemButton from './MenuItemButton/MenuItemButton'

const menu = [
  {
    title: 'Novo Jogo',
    subtitle: 'jogo rápido',
    transparent: false,
  },
  {
    title: 'Marcador Livre',
    subtitle: 'jogo rápido',
    transparent: true,
  },
  {
    title: 'Novo Jogo',
    subtitle: 'jogo rápido',
    transparent: true,
  },
]

const Home = () => {
  return (
    <section className='grow mt-4 flex-col space-y-4'>
      {menu.map(({title, subtitle, transparent}) => (
        <MenuItemButton title={title} subtitle={subtitle} transparent={transparent}/>
      ))}
    </section>
  )
}

export default Home
