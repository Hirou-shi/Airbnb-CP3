import React from 'react'
import { Languages, Share, Heart} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Boxpictures() {
  return (
    <section>
        <div className='hidden mobile:flex flex-col'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-3 items-center p-3 pt-6 justify-center'>
                    <Languages />
                    <h1 className='text-3xl font-semibold'>Abertura dos Jogos Olímpicos no Museu de Orsay</h1>
                </div>
                <div className='flex gap-3 items-center justify-center'>
                    <div className='flex gap-2 hover:cursor-pointer hover:bg-gray-100 rounded-2xl justify-center items-center'>
                        <Share />
                        <p className='underline'>Compartilhar</p>
                    </div>
                    <div className='flex gap-2 hover:cursor-pointer hover:bg-gray-100 rounded-2xl justify-center items-center'>
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
        </div>
        <div className='mobile:hidden'>
            <Swiper slidesPerView={1} onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide><img className='h-[530px] w-full object-cover' src="/img1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[530px] w-full object-cover' src="/img2.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[530px] w-full object-cover' src="/img3.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[530px] w-full object-cover' src="/img4.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[530px] w-full object-cover' src="/img5.png" alt="" /></SwiperSlide>
            </Swiper>
            <div className='flex gap-3 items-center p-4'>
                    <Languages />
                    <h1 className='text-[17px] font-semibold'>Abertura dos Jogos Olímpicos no Museu de Orsay</h1>
                </div>
        </div>
    </section>
  );
};
