import React from 'react'
import { Languages, Share, Heart} from 'lucide-react'

export default function Boxpictures() {
  return (
    <section>
        <div className='flex items-center justify-between'>
            <div className='flex gap-3 items-center'>
                <Languages />
                <h1 className='text-3xl font-semibold'>Abertura dos Jogos Olímpicos no Museu de Orsay</h1>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='flex gap-2 hover:cursor-pointer hover:bg-gray-100 rounded-2xl'>
                    <Share />
                    <p className='underline'>Compartilhar</p>
                </div>
                <div className='flex gap-2 hover:cursor-pointer hover:bg-gray-100 rounded-2xl'>
                    <Heart />
                    <p className='underline'>Salvar</p>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-4 grid-rows-[300px_300px] gap-[10px] mt-4'>
            <div className='col-start-1 col-end-3 row-start-1 row-end-3  '>
                <img className='object-cover w-full h-full rounded-tl-2xl rounded-bl-2xl' src="/img1.png" alt="" />
            </div>
            <div className=''>
                <img className='object-cover w-full h-full'  src="/img2.png" alt="" />
            </div>
            <div className=''>
                <img className='object-cover w-full h-full rounded-tr-2xl' src="/img4.png" alt="" />
            </div>
            <div className=''>
                <img className='object-cover w-full h-full' src="/img3.png" alt="" />
            </div>
            <div className=''>
                <img className='object-cover w-full h-full rounded-br-2xl' src="/img5.png" alt="" />
            </div>
        </div>
    </section>
  );
};
