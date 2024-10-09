import React from 'react'
import { Menu, CircleUserRound } from 'lucide-react';

export default function Perfil() {
  return (
    <>
    <div className='flex justify-between items-center border rounded-full w-[6em] h-14 p-3'>
        <Menu />
        <CircleUserRound size={34}/>
    </div>
    </>
  );
};
