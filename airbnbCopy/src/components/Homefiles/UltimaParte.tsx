import React from 'react'

export default function UltimaParte() {
  return (
    <section>
        <div>
            <div className='flex flex-col text-left border-y-[1px] border-t-gray-300 p-5 text gap-3'>

                <h1 className='font-semibold'>Destaque do bairro</h1>
                <p className='text-[12px] leading-tight mb-4'>Desde 1986, o Museu d'Orsay é um dos principais destinos parisienses para os amantes da arte. Ele abriga a maior coleção de arte impressionista e pós-impressionista do mundo, com pintores renomados como Manet, Monet, Degas, Renoir, Seurat, Gauguin e Van Gogh. Ele também conta com uma vista inigualável da Cerimônia de Abertura dos Jogos Olímpicos de Paris 2024. Sob minha orientação, o terraço foi transformado em um encantador jardim secreto, oferecendo o cenário perfeito para participar deste grande espetáculo histórico na Cidade Luz.</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center border-y-[1px] border-t-gray-300 p-10'>
                <img className='w-70 h-50' src="Iconico.png" alt="medalha" />
                <h1 className='font-bold text-[60px]'>Icônicos</h1>
                <p className='w-[390px] text-[15px]'>Experiências extraordinárias oferecidas pelos maiores nomes da música, do cinema, da TV, da arte, dos esportes e muito mais.</p>
            </div>
        </div>
    </section>
  )
}
