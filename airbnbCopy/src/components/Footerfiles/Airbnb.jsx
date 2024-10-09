import React from 'react'

export default function Airbnb() {
  return (

    <nav className="flex flex-col items-start desktop:w-1/3 text-sm gap-3">
        <h3><strong>Airbnb</strong></h3>
        <a href="#" className="hover:decoration-solid hover:underline">Newsroom</a>
        <a href="#" className="hover:decoration-solid hover:underline">Novos recursos</a>
        <a href="#" className="hover:decoration-solid hover:underline">Carreiras</a>
        <a href="#" className="hover:decoration-solid hover:underline">Investidores</a>
        <a href="#" className="hover:decoration-solid hover:underline">Locais emergenciais Airbnb.org</a>
    </nav>
  )
}
