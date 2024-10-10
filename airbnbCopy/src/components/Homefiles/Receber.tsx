import React from 'react'
import ReceberInfos from './ReceberInfos'

export default function Receber() {
  return (
    <section className="flex flex-col items-start border-y my-10 ">
          <h1><strong>Quem vai receber você</strong></h1>

        <div className="w-2/5 flex flex-col items-center my-14 shadow-xl p-10">
          <img src="/anfitrias.webp" className="w-32 h-w-32 rounded-full"/>
          <h1><strong>Wendy And Lisa</strong></h1>
          <p>Começou a hospedar em 2024</p>
        </div>

        <ReceberInfos/>
        
        <div className="w-[50%]">
          <p>Olá! Somos Wendy e Lisa. Amigas de infância, somos uma dupla musical premiada e temos orgulho de ter feito parte da lendária banda The Revolution. Nos anos 80, nos unimos ao nosso amigo e vocalista do Revolution, Prince, para dar vida à icônica música e filme "Purple Rain". Adoramos a ideia de viajar no tempo e voltar àquele momento mágico e compartilhá-lo com você!</p>
        </div>
    </section>
  )
}
