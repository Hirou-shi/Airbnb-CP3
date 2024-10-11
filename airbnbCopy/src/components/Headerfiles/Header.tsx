import React from 'react'
import Logo from './Logo'
import BarraPesquisa from './BarraPesquisa'
import Perfil from './Perfil'
import { Globe, Share, Heart, ChevronLeft } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';


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
        <section className='mobile:hidden flex justify-between h-6 items-center p-2 pb-8'>
            <div className='flex hover:underline hover:cursor-pointer items-center justify-center'>
              <ChevronLeft/>
              <p className='font-semibold text-sm'>Acomodações</p>
            </div>
            
            <div className='flex gap-2 hover:cursor-pointer'>
              <div className='hover:bg-gray-200 rounded-full h-7 w-7 flex items-center justify-center'>
              <Share size={15}/>
              </div>
              <div className='hover:bg-gray-200 rounded-full h-7 w-7 flex items-center justify-center'>
              <Heart size={15}/>
              </div>
            </div>
        </section>
                    

    </>
  )
}
