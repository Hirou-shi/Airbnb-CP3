import { Star } from 'lucide-react'
import React from 'react'


export default function ComentariosCol1() {
  return (
    <div className="flex flex-col gap-14"> 
        <div>
            <div className="flex gap-3 mb-3">
                <img src="/imgsComents/Vanessa.webp" className="rounded-full w-14 h-14 " />
                <div>
                    <h3><strong>Vanessa</strong></h3>
                    <p>The Woodlands, Texas</p>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex">
                    <Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/>
                </div>
                <p>· julho de 2024</p>
            </div>
            
            <div className=" desktop:w-[40%]">
                <p className="text-lg">Esta foi uma experiência incrível e tenho muita sorte de ter tido a chance de participar. Tudo sobre a experiência foi maravilhoso!</p>
            </div>
        </div>

        <div>
            <div className="flex gap-3 mb-3">
                <img src="/imgsComents/Bernardo.webp" className="rounded-full w-14 h-14" />
                <div>
                    <h3><strong>Bernardo</strong></h3>
                    <p>9 anos no Airbnb</p>
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
                <img src="/imgsComents/Milena.webp" className="rounded-full w-14 h-14" />
                <div>
                    <h3><strong>Milena</strong></h3>
                    <p>Nova York, Nova York</p>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex">
                    <Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/>
                </div>
                <p>· julho de 2024</p>
            </div>
            
            <div className=" desktop:w-[40%]">
                <p className="text-lg">Obrigado por uma noite mágica e inesquecível. Conheci algumas pessoas incríveis e compartilhei uma bela experiência.</p>
            </div>
        </div>

        

    </div>
  )
}
