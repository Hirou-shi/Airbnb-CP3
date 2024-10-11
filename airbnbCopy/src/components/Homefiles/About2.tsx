import React from 'react'
import { Trophy, FlameKindling, Flower2, AudioLines} from 'lucide-react'

export default function About2() {
  return (
    <section>
        <div className='flex flex-col mobile:gap-2 border-y-[1px] border-t-gray-300 mobile:w-[60%] text-left'>
            <div className='flex items-center'>
                <Trophy />
                <div className='flex flex-col items-start mobile:p-5 p-3 '>
                    <h1 className='font-semibold text-[15px]'>Assista à Cerimônia de Abertura dos Jogos Olímpicos</h1>
                    <p className='text-[13px]'>Faça parte deste momento histórico com a celebração no icônico Rio Sena.</p>
                </div>
            </div>
            <div className='flex items-center'>
                <FlameKindling />
                <div className='flex flex-col items-start mobile:p-5 p-3'>
                    <h1 className='font-semibold text-[15px]'>Aproveite o terraço particular com jardim</h1>
                    <p className='text-[13px]'>Conheça minha escultura "Permanent Flame" e a Tocha Olímpica de Paris 2024.</p>
                </div>
            </div>
            <div className='flex items-center' >
                <Flower2/>
                <div className='flex flex-col items-start mobile:p-5 p-3'>
                    <h1 className='font-semibold text-[15px]'>Delicie-se com o nosso jardim de plantas comestíveis</h1>
                    <p className='text-[13px]'>Escolha uma variedade de flores para criar seu próprio aperitivo exclusivo.</p>
                </div>
            </div>
            <div className='flex items-center'>
                <AudioLines />
                <div className='flex flex-col items-start mobile:p-5 p-3'>
                    <h1 className='font-semibold text-[15px]'>Dance até não poder mais</h1>
                    <p className='text-[13px]'>A música fica por conta do coletivo de arte parisiense 99GINGER.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
