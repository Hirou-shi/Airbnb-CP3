import React from 'react'
import { Trophy, FlameKindling, Flower2, AudioLines} from 'lucide-react'

export default function 
() {
  return (
    <section>
        <div className='flex flex-col gap-2 border-y-[1px] border-t-gray-300 w-[60%] text-left'>
            <div className='flex items-center'>
                <Trophy />
                <div className='flex flex-col items-start p-5'>
                    <h1 className='font-semibold'>Assista à Cerimônia de Abertura dos Jogos Olímpicos</h1>
                    <p>Faça parte deste momento histórico com a celebração no icônico Rio Sena.</p>
                </div>
            </div>
            <div className='flex items-center'>
                <FlameKindling />
                <div className='flex flex-col items-start p-5'>
                    <h1 className='font-semibold'>Aproveite o terraço particular com jardim</h1>
                    <p className=''>Conheça minha escultura "Permanent Flame" e a Tocha Olímpica de Paris 2024.</p>
                </div>
            </div>
            <div className='flex items-center' >
                <Flower2/>
                <div className='flex flex-col items-start p-5'>
                    <h1 className='font-semibold'>Delicie-se com o nosso jardim de plantas comestíveis</h1>
                    <p>Escolha uma variedade de flores para criar seu próprio aperitivo exclusivo.</p>
                </div>
            </div>
            <div className='flex items-center'>
                <AudioLines />
                <div className='flex flex-col items-start p-5'>
                    <h1 className='font-semibold'>Dance até não poder mais</h1>
                    <p>A música fica por conta do coletivo de arte parisiense 99GINGER.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
