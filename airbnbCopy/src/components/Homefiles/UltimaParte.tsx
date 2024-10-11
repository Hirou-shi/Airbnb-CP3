import React from 'react'
import DeveSaber from "./OqVcDeveSaber.jsx"
import { Mail, CircleCheck, IdCard } from 'lucide-react'

export default function UltimaParte() {
  return (
    <section>
            <div className='flex flex-col text-left border-y-[1px] border-t-gray-300 p-5 text gap-3'>

                <h1 className='font-semibold'>Destaque do bairro</h1>
                <p className='text-[12px] leading-tight mb-4'>Desde 1986, o Museu d'Orsay é um dos principais destinos parisienses para os amantes da arte. Ele abriga a maior coleção de arte impressionista e pós-impressionista do mundo, com pintores renomados como Manet, Monet, Degas, Renoir, Seurat, Gauguin e Van Gogh. Ele também conta com uma vista inigualável da Cerimônia de Abertura dos Jogos Olímpicos de Paris 2024. Sob minha orientação, o terraço foi transformado em um encantador jardim secreto, oferecendo o cenário perfeito para participar deste grande espetáculo histórico na Cidade Luz.</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center border-y-[1px] border-t-gray-300 p-10'>
                <img className='w-70 h-50' src="Iconico.png" alt="medalha" />
                <h1 className='font-bold text-[60px]'>Icônicos</h1>
                <p className='w-[390px] text-[15px]'>Experiências extraordinárias oferecidas pelos maiores nomes da música, do cinema, da TV, da arte, dos esportes e muito mais.</p>
            </div>
            <div className='mobile:grid grid-cols-3 mobile:gap-0 gap-4 p-5'>
                <div className='flex gap-2'>
                    <Mail />
                    <div>
                        <h1 className='font-semibold text-sm'>Pedido de reserva</h1>
                        <p className='text-[12px] text-gray-500'>Escolha suas datas, inclua seus hóspedes e responda por que você deseja ir.</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <CircleCheck/> 
                    <div>
                        <h1 className='font-semibold text-sm'>Processo de seleção</h1>
                        <p className='text-[12px] text-gray-500'>Primeiro, escolheremos aleatoriamente um conjunto de hóspedes em potencial. Em seguida, analisaremos suas respostas para entender suas perspectivas e conexão com o ícone. Por fim, convidaremos os hóspedes selecionados a reservarem.</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <IdCard />
                    <div>
                        <h1 className='font-semibold text-sm'>Requisitos</h1>
                        <p className='text-[12px] text-gray-500'>Para participar, você precisa ter uma conta ativa no Airbnb, o aplicativo do Airbnb e ser residente em um país ou região elegível. A participação é gratuita.</p>
                    </div>
                </div>
            </div >
            <div className='border-y-[1px] border-t-gray-300 p-5'>
                <p className='text-[8px] text-gray-500 text-left w-[60%]'>Se seu perfil for selecionado e você decidir reservar, você terá 24 horas para concluir a reserva. Os custos de viagem não estão inclusos. Confira as regras completas, incluindo os requisitos de idade e localização geográfica, como os seus dados serão utilizados, e demais condições aplicáveis.</p>
            </div>
        <DeveSaber/>
    </section>
  )
}
