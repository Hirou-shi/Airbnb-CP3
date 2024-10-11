import { Star } from 'lucide-react'
import React from 'react'


export default function ComentariosCol1() {
  return (
    <div className="flex flex-col gap-14"> 
        <div>
            <div className="flex gap-3 mb-3">
                <img src="/imgsComents/Johann.webp" className="rounded-full w-14 h-14" />
                <div>
                    <h3><strong>Johann</strong></h3>
                    <p>10 anos no Airbnb</p>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex">
                    <Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/>
                </div>
                <p>· julho de 2024</p>
            </div>
            
            <div className=" desktop:w-[40%]">
                <p className="text-lg">Obrigado a todos por esta ótima organização e uma experiência incrível. Inaudível. ✨</p>
            </div>
        </div>

        <div>
            <div className="flex gap-3 mb-3">
                <img src="/imgsComents/Dahye.webp" className="rounded-full w-14 h-14" />
                <div>
                    <h3><strong>Dahye</strong></h3>
                    <p>10 anos no Airbnb</p>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex">
                    <Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/>
                </div>
                <p>· julho de 2024</p>
            </div>
            
            <div className=" desktop:w-[40%]">
                <p className="text-lg">Uma experiência única na vida. Muito obrigado por uma noite maravilhosa e perfeita, que lembraremos com alegria para sempre.</p>
            </div>
        </div>

        <div>
            <div className="flex gap-3 mb-3">
                <img src="/imgsComents/Arnaud.webp" className="rounded-full w-14 h-14" />
                <div>
                    <h3><strong>Arnaud</strong></h3>
                    <p>12 anos no Airbnb</p>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex">
                    <Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/>
                </div>
                <p>· julho de 2024</p>
            </div>
            
            <div className=" desktop:w-[40%]">
                <p className="text-lg">Que experiência excepcional! Nós gostamos muito da noite. Tudo era tão distinto. Foi maravilhoso também conhecer Matthieu pessoalmente. E a equipe do Airbnb foi incrível!</p>
            </div>
            <a className="decoration-solid underline text-lg"><strong>Mostrar mais</strong></a>
        </div>

        

    </div>
  )
}
