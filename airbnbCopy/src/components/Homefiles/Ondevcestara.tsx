import React from 'react'

export default function Ondevcestara() {
  return (
    <section className='pt-4'>
        <div className='text-left'>
            <h1 className='font-semibold text-[20px] mb-4'>Onde você estará</h1>
            <p className=''>Paris, Ilha de França, França</p>
            <div className='py-3'>
                <img src="/localizacao-cp.png" alt="localização"/>
            </div>
            <div className='flex py-4 gap-1 text-[12px] mobile:text-base'>
                <p>Verificamos que a localização deste anúncio está correta.</p>
                <p className='underline font-semibold'>Saiba mais</p>
            </div>
        </div>
    </section>
  )
}
