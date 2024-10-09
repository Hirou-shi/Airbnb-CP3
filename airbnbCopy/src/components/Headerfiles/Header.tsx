import React from 'react'
import Logo from './Logo'
import BarraPesquisa from './BarraPesquisa'
import Perfil from './Perfil'
import { Globe } from 'lucide-react'


export default function Header() {
  return (
    <>
        <section className='top-0 min-w-full mx-auto flex items-center justify-between border-b'>
            <Logo />
            <div className='flex items-center'>
              <BarraPesquisa />
              <div className='flex p-3 items-center'>
                  <p className='p-3'>Anuncie seu espaço no Airbnb</p>
                  <Globe size={15}/>
              </div>
              <Perfil /> 
            </div>
        </section>
                    

    </>
  )
}
