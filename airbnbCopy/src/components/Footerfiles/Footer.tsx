import React from 'react'
import Atendimento from './Atendimento'
import Hospedagem from './Hospedagem'
import Airbnb from './Airbnb'
import { Globe, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className=" w-full desktop:px-40 px-5 border-t flex flex-col bg-[#F7F7F7]">

      <div className="flex items-center border-b py-10 gap-3 font-normal text-lg">
        <a className='hover:underline hover:decoration-solid'>Airbnb</a>
        <p>&gt;</p>
        <a className='hover:underline hover:decoration-solid'>França</a>
        <p>&gt;</p>
        <a className='hover:underline hover:decoration-solid'>Seine</a>
      </div>

      <div className="flex flex-col desktop:flex-row justify-around mt-10">
        <Atendimento/>
        <div className="border-b desktop:hidden my-8"></div>
        <Hospedagem/>
        <div className="border-b desktop:hidden my-8"></div>
        <Airbnb/>
      </div>

      <div className="flex flex-col-reverse desktop:flex-row justify-between pt-10 mt-10 border-t" >
        <div className="flex desktop:flex-row flex-col text-sm text-nowrap flex-wrap">
          <div>
            <p>© 2024 Airbnb, Inc.</p>
          </div>

          <div className="flex flex-wrap text-nowrap justify-center">
            <span className="px-1">·</span>
            <a href="#" className="hover:decoration-solid hover:underline">Privacidade</a>
            <span className="px-1">·</span>

            <a href="#" className="hover:decoration-solid hover:underline">Termos</a>
            <span className="px-1">·</span>

            <a href="#" className="hover:decoration-solid hover:underline">Mapa do site</a>
            <span className="px-1">·</span>

            <a href="#" className="hover:decoration-solid hover:underline">Informações da empresa</a>

          </div>
        </div>

        <div className="flex flex-col mini:flex-row items-center mini:gap-4 justify-center">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <Globe size={15}/>
              <a href="#" className="hover:decoration-solid hover:underline text-sm">Português (BR)</a>
            </div>

            <div className="flex gap-1">
              <span><strong>R$</strong></span>
              <strong><a href="#" className="hover:decoration-solid hover:underline text-sm">BRL</a></strong>
          </div>

          </div>

          <div className="flex items-center gap-3">
            <Facebook size={15}/>
            <Twitter size={15}/>
            <Instagram size={15}/>
          </div>
        </div>
      </div>

    </footer>
  )
}
