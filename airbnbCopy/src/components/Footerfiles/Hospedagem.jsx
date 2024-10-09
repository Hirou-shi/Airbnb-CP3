import React from 'react'

export default function Hospedagem() {
  return (
    <nav className="flex flex-col items-start desktop:w-1/3 text-sm gap-3 flex-wrap">
        <h3><strong>Hospedagem</strong></h3>
        <a href="#" className="hover:decoration-solid hover:underline">Anuncie seu espaço no Airbnb</a>
        <a href="#" className="hover:decoration-solid hover:underline">AirCover para anfitriões</a>
        <a href="#" className="hover:decoration-solid hover:underline">Recursos para anfitriões</a>
        <a href="#" className="hover:decoration-solid hover:underline">Fórum da comunidade</a>
        <a href="#" className="hover:decoration-solid hover:underline">Hospedagem responsável</a>
        <a href="#" className="hover:decoration-solid hover:underline text-nowrap">Participe de uma aula gratuita <br className="mini:hidden"/>de hospedagem</a>
    </nav>
  )
}
