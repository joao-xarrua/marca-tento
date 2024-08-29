import React, { useEffect, useState } from 'react'
import RoundedButton from '../Components/RoundedButton/RoundedButton'
import IconReturn from '../assets/IconReturn'
import IconMenu from '../assets/IconMenu'
import IconClock from '../assets/IconClock'
import { useNavigate } from 'react-router-dom'
import HistoryItem from '../Components/HistoryItem/HistoryItem'

const User = () => {
  const navigate = useNavigate()
  const [history, setHistory] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // mostruoso fez o fetch assincrono ai papai chama
    const fetchHistory = async () => {
      setLoading(true);
      const res = await fetch("http://localhost:5215/v1/matches");
      
      if (!res.ok) {
        const message = `An error has occured: ${res.errors}`;
        throw new Error(message);
      }

      const obj = await res.json();
      setHistory(obj.data);
      setLoading(false)
    }
    fetchHistory();

  }, [])

  return (
    <section className='w-full max-w-2xl min-h-dvh h-full flex flex-col static font-light font-inter'>
      <div className='flex justify-between px-4 py-9 w-full'>
        <RoundedButton active={true} onClick={() => navigate('/')}>
          <IconReturn />
        </RoundedButton>
        <RoundedButton active={true} onClick={() => navigate('/')}>
          <IconMenu />
        </RoundedButton>
      </div>
      <header className='bg-green-500 p-5 h-48 flex flex-col'>
        <div className='relative mx-auto top-24 flex flex-col items-center'>
          <img src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-32 h-32 object-cover rounded-full border-4 border-green-500'/> 
          <h1 className='text-neutral-700 text-2xl'>João Xarrua</h1>
          <span className='text-neutral-700 text-md'>joao@mail.com</span>
        </div>
      </header>
      <div className='p-4 mt-36 flex gap-2 text-neutral-700'>
        <IconClock />
        <h2>Histórico</h2>
      </div>
      <div className='p-4 grow flex flex-col gap-5'>
        {history && history.map((item) => ( // fazer a comparação para que caso haja o reload da página não dê erro no state
          <HistoryItem key={item.id} item={item}/>
        ))}
      </div>
    </section>
  )
}

export default User
