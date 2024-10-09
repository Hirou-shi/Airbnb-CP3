import React from 'react'

export default function Atendimento() {
  return (
    
    <nav className="flex flex-col items-start desktop:w-1/3 text-sm gap-3">
        <h3><strong>Atendimento</strong></h3>
        <a href="#" className="hover:decoration-solid hover:underline">Central de Ajuda</a>
        <a href="#" className="hover:decoration-solid hover:underline">AirCover</a>
        <a href="#" className="hover:decoration-solid hover:underline">Antidiscriminação</a>
        <a href="#" className="hover:decoration-solid hover:underline">Apoio à pessoa com deficiência</a>
        <a href="#" className="hover:decoration-solid hover:underline">Opções de cancelamento</a>
        <a href="#" className="hover:decoration-solid hover:underline">Reporte um problema no bairro</a>
    </nav>

  )
}
