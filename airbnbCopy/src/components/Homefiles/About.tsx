import React from 'react'
import { Star } from 'lucide-react'

export default function About() {
  return (
    <section className='flex justify-between p-2 mb-8'>
        <div>
            <div className='flex flex-col items-start mobile:mt-8'>
                <h1 className='font-semibold mobile:text-[22px]'>Paris, França</h1>
                <p className='mobile:text-[16px] text-[14px]'>Experiência à noite</p>
            </div>
            <div className='flex font-semibold mt-1 gap-1'>
                <div className='flex ustify-center items-center'>
                    <Star  size={15}/>
                </div>
                <p>5,0 ·</p>
                <p className='underline'>9 cometários</p>
            </div>
            <div className='flex gap-4 items-center pt-12'>
                <img className='h-10 w-10 rounded-full' src="/anfitrianicon.png" alt="anfitriao" />
                <div className='flex flex-col items-start'>
                    <h2 className='font-semibold'>Anfitriã(o): Mathieu Lehanneur</h2>
                    <p>Designer multidisciplinar</p>
                </div>
                
            </div>
        </div>

        <div className='hidden mobile:flex border h-40 w-72 flex-col justify-center gap-6 shadow-md rounded-2xl items-center mt-10'>
            <p className='font-semibold text-[24px]'>Encerrado</p>
            <div className='h-12 w-64 rounded-xl bg-gray-400 flex justify-center items-center'>
                <p className=' text-white text-[16px] font-semibold'>Enviar Pedido</p>
            </div>
        </div>
    </section>
  )
}
