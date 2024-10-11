import React from 'react'

export default function ReceberInfos() {
  return (
        <div className="flex flex-col mb-8 gap-3">
          <div className="flex items-center gap-3">
            <img src="/diplomado.png" className="w-[28px] h-[28px]" alt="diplomadoicon" />
            <p>Onde estudei: ENSCI-Les Ateliers</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/mala-de-viagem.png" className="w-[28px] h-[28px]" alt="Malaicon" />
            <p>Meu trabalho: Designer</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/relogio.png" className="w-[28px] h-[28px]" alt="Relogioicon" />
            <p>Passo muito tempo: Lendo</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/varinha-magica.png" className="w-[28px] h-[28px]" alt="Varinhaicon" />
            <p>Habilidade mais inútil: Equilibrar uma vassoura no nariz</p>
          </div>


          <div className="flex items-center gap-3 ">
            <img src="/pata.png" className="w-[28px] h-[28px]" alt="Pataicon" />
            <p>Pets: Dois cachorros, por enquanto...</p>
          </div>

        </div>
  )
}
