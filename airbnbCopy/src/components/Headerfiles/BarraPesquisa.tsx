import React from 'react'
import { Search } from 'lucide-react';

export default function BarraPesquisa() {
  return (
    <>
        <div className='flex justify-around items-center cursor-pointer w-[450px] border h-12 rounded-full'>             
            <p className='p-3'>Qualquer lugar</p>
            <div className='items-center h-8 border-l border-gray-300'></div>
            <p className='p-3'>Qualquer Semana</p>
            <div className='items-center h-8 border-l border-gray-300'></div>
            <div className='flex items-center justify-center gap-2  p-2'>
                <p className='p-3'>Hóspedes?</p>
                <div className='bg-pink-600 rounded-full w-8 h-8 flex items-center justify-center'><Search color='white' size={18} /></div>
                
            </div>
        </div>
    </>
  );
};
