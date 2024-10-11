import React from 'react'
import Logo from './Logo'
import BarraPesquisa from './BarraPesquisa'
import Perfil from './Perfil'
import { Globe, Share, Heart, ChevronLeft } from 'lucide-react'


export default function Header() {
  return (
    <>
        <section className='mobile:flex hidden top-0 min-w-full mx-auto items-center justify-between border-b'>
            <Logo />
            <div className='flex items-center'>
              <BarraPesquisa />
              <div className='flex p-3 items-center whitespace-nowrap'>
                  <p className='p-3 flex-nowrap'>Anuncie seu espaço no Airbnb</p>
                  <Globe size={15}/>
              </div>
              <Perfil /> 
            </div>
        </section>
        <section className='mobile:hidden flex justify-between p-2 h-6'>
            <div className='flex '>
              <ChevronLeft/>
              <p>Acomoações</p>
            </div>
            
            <div className='flex gap-4'>
              <Share size={15}/>
              <Heart size={15}/>
            </div>
        </section>
                    

    </>
  )
}
