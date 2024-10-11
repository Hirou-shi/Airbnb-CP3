import React from 'react'

export default function Ondevcestara() {
  return (
    <section>
        <h1 className='font-semibold'>Onde você estará</h1>
        <p>Paris, Ilha de França, França</p>
        <div>
            <img src="/localizacao-cp.png" alt="localização"/>
        </div>
        <div className='flex'>
            <p>Verificamos que a localização deste anúncio está correta.</p>
            <p className='underline font-semibold'>Saiba mais</p>
        </div>
    </section>
  )
}
