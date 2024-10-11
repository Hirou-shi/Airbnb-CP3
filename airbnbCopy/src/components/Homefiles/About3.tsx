import React from 'react'
import { ChevronRight } from 'lucide-react'

export default function About3() {
  return (
    <section className='flex flex-col justify-start gap-10 mt-7'>
        <div className='mobile:flex bg-gray-100 w-[80%] mobile:text-center text-left p-3 rounded-xl'>
            <p className='text-[12px]'>Algumas informações foram traduzidas automaticamente. </p>
            <p className='underline text-[13px] font-semibold'>Exibir Original</p>
        </div>
        <div className='hidden mobile:flex'>
            <div>
                <h2>Celebre o início dos Jogos Olímpicos de Paris 2024 no jardim exclusivo do terraço do Museu d'Orsay, pertinho das grandes obras-primas impressionistas que residem em suas paredes, e com toda a beleza de Paris ao seu redor. Em um lugar exclusivo e privilegiado e com muita dança e bebidas, você assistirá a cerimônia de abertura percorrer o Sena até chegar ao seu glorioso final aos pés da Torre Eiffel.</h2>
            </div>
            <div className='text-left'>
                <h3 className='font-semibold'>O que vocês farão</h3>
                <p>O Museu d'Orsay, que já foi uma estação ferroviária no coração de Paris, agora é um dos melhores museus do mundo. Em preparação para a Cerimônia de Abertura dos Jogos Olímpicos, o terraço no quinto andar foi transformado sob minha direção criativa, proporcionando uma atmosfera tão única como a própria Paris. Na verdade, na entrada do terraço, vocês descobrirão um piso que evoca o fluxo calmo das águas do Sena. Espero que gostem tanto do espaço quanto eu gostei de dar vida a ele.</p>
            </div>
            <div className='text-left gap-10'>
                <p>Além das muitas atrações que preparei, o terraço oferece vistas inigualáveis da cerimônia, do Rio Sena e da cidade. Aproveite tudo ao máximo. Paris é uma obra-prima por si só. </p>
                <p>• Mantenha os olhos bem abertos ao chegar no terraço. Deixei a tocha olímpica deste ano, que tive o prazer de projetar, em exposição para você poder vê-la de perto.</p>
                <p>• Caminhe pelo piso inspirado no Sena até o bar de degustação, onde você pode se deliciar com a arte de Margot Lecarpentier, que já foi considerada "a bartender mais influente" de Paris.</p>
                <p>• Selecione os ingredientes que quiser do nosso jardim de plantas comestíveis para criar bebidas perfumadas de inspiração francesa. Santé!</p>
                <p>• Curta o início dos Jogos Olímpicos de Paris assistindo à Cerimônia de Abertura no Rio Sena do alto. A paisagem e os sons vão te encantar, inspirar e energizar.</p>
                <p>• Assim que a cerimônia passar, a música pode começar. O coletivo de arte 99GINGER, com sede em Paris, cuida da trilha sonora para celebrar o amor, a paz, a união e a França.</p>
            </div>
        </div>
        <div className='mobile:hidden text-left'>
            <h2 className=''>Celebre o início dos Jogos Olímpicos de Paris 2024 no jardim exclusivo do terraço do Museu d'Orsay, pertinho das grandes obras-primas impressionistas que residem em suas paredes, e com toda a beleza de Paris ao seu redor. Em um lugar exclusivo e privilegiado e com muita dança e bebidas, você assistirá a cerimônia de abertura percorrer o Sena até chegar ao seu glorioso final aos pés da Torre Eiffel.</h2>
            <div className='flex items-center mt-4'>
                <p className='underline font-semibold'>Mostrar mais</p>
                <ChevronRight size={20}/>
            </div>
            

        </div>
    </section>
  )
}
