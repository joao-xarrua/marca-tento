import React from 'react'
import MenuItemButton from './MenuItemButton/MenuItemButton'
import CardItem from './CardItem/CardItem'

const infoItems = [
  {
    title: 'Iniciando',
    content: '   Jogo valendo 12 pontos, conseguidos através das "mãos". Fração da partida, vale 1 ponto e poderá ter seu valor aumentado a 3, 6, 9 e até 12 pontos, é disputada em melhor de 3 rodadas.'
  },
  {
    title: 'Pontuação',
    content: '   Jogo valendo 12 pontos, conseguidos através das "mãos". Fração da partida, vale 1 ponto e poderá ter seu valor aumentado a 3, 6, 9 e até 12 pontos, é disputada em melhor de 3 rodadas.'
  },
  {
    title: 'Vencendo',
    content: '   Jogo valendo 12 pontos, conseguidos através das "mãos". Fração da partida, vale 1 ponto e poderá ter seu valor aumentado a 3, 6, 9 e até 12 pontos, é disputada em melhor de 3 rodadas.'
  }
]

const Infos = () => {
  return (
    <section  className='grow mt-4 pb-12 flex-col flex-grow-2 space-y-4 overflow-y-scroll' >
      <MenuItemButton title={'Regas Oficiais'} subtitle={'acesse o site'}/>
      <h1 className={'pt-5 text-3xl text-white'}>Como jogar truco?</h1>
      {infoItems.map(({title, content})=> (
        <CardItem key={title} title={title} content={content}/>
      ))}
      
    </section>
  )
}

export default Infos
