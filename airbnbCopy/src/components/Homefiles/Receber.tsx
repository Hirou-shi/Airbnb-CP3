import React from 'react'
import ReceberInfos from './ReceberInfos'

export default function Receber() {
  return (
    <section className="flex flex-col items-start border-y py-10 ">
          <h1 className='text-xl'><strong>Quem vai receber você</strong></h1>

        <div className="desktop:w-1/4 w-full flex my-14 shadow-xl rounded-2xl p-10 relative gap-3">
          <div className="flex flex-col items-center">
            <img src="/anfitriao.png" className="w-32 h-w-32 rounded-full"/>
            <h1 className="text-center"><strong>Mathieu<br/>Lehanneur</strong></h1>
            <p className='flex items-center'><img src="/medalha.png" className="w-[12px] h-[12px]"/>Superhost</p>
          </div>

          <div className="ml-auto" >
            <div className="mb-4">
              <h3 className="desktop:text-2xl"><strong>10</strong></h3>
              <p className="desktop:text-lg">avaliações</p>
            </div>

            <div className="border-y py-4">
              <h3 className="desktop:text-2xl"><strong>5</strong></h3>
              <p className="desktop:text-lg">estrelas</p>
            </div>

            <div className="mt-4">
              <h3 className="desktop:text-2xl"><strong>6</strong></h3>
              <p className="desktop:text-lg">meses hospedando</p>
            </div>

          </div>
        </div>

        <ReceberInfos/>
        
        <div className="mini:w-[40%]">
          <p>Olá! Meu nome é Mathieu Lehanneur e sou um designer multidisciplinar francês. Eu crio móveis, objetos e espaços que combinam design, arte, natureza e ciência. Acredito na magia e na fantasia, e sempre procuro incluir um fator surpresa em tudo o que faço.</p>
        </div>
    </section>
  )
}
