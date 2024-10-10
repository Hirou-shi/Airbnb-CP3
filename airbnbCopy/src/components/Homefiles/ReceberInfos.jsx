import React from 'react'

export default function ReceberInfos() {
  return (
        <div className="flex flex-col mb-8 gap-3">
          <div className="flex items-center gap-3">
            <img src="/mala-de-viagem.png" className="w-[28px] h-[28px]" alt="Malaicon" />
            <p>Meu trabalho: Musicista/compositora</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/varinha-magica.png" className="w-[28px] h-[28px]" alt="Varinhaicon" />
            <p>Habilidade mais inútil: Malabarismo (W), estalar os dedos (L)</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/relogio.png" className="w-[28px] h-[28px]" alt="Relogioicon" />
            <p>Passo muito tempo: Ouvindo palestras (W), jogando (L)</p>
          </div>

          <div className="flex items-center gap-3">
            <img src="/coracao.png" className="w-[28px] h-[28px]" alt="Coracaoicon" />
            <p>Curto muito: Música, arte e animais (W), beisebol (L)</p>
          </div>

          <div className="flex items-center gap-3 ">
            <img src="/pata.png" className="w-[28px] h-[28px]" alt="Pataicon" />
            <p>Pets: Três pugs (W), dois gatos e um cão (L)</p>
          </div>

        </div>
  )
}
