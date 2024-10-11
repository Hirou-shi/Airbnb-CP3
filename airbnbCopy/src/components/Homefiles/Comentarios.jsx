import React from 'react'
import { Star } from 'lucide-react';
import Col1 from "./ComentariosCol1.jsx"
import Col2 from "./ComentariosCol2.jsx"

export default function Comentarios() {
  return (
    <div className="py-10">
        <div className="flex items-center gap-3 pb-10">
            <Star/>
            <h1 className="text-2xl"><strong>5,0 · 9 comentários</strong></h1>
        </div>

        <div className="flex desktop:flex-row flex-col">
            <Col1/>
            <Col2/>
        </div>

        <div className="flex flex-col desktop:flex-row items-center gap-4 py-5">
            <button className="border-black border-[2px] px-7 py-2 rounded-xl text-lg hover:bg-[#F7F7F7]"><strong>Mostrar todos os 9 comentários</strong></button>
            <a className="decoration-solid underline text-sm">Saiba como funcionam as avaliações</a>
        </div>
    </div>
  )
}
