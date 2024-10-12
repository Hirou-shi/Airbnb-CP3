import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Star } from 'lucide-react';    

export default function SliderComentarios(){
    const nomes = [
        "Vanessa",
        "Bernando",
        "Milena",
        "Johann",
        "Dahye",
        "Arnaud"
    ]
    const images = [
        "/imgsComents/Vanessa.webp",
        "/imgsComents/Bernardo.webp",
        "/imgsComents/Milena.webp",
        "/imgsComents/Johann.webp",
        "/imgsComents/Dahye.webp",
        "/imgsComents/Arnaud.webp"
    ]
    const miniText = [
        "The Woodlands, Texas",
        "9 anos no Airbnb",
        "Nova York, Nova York",
        "10 anos no Airbnb",
        "10 anos no Airbnb",
        "12 anos no Airbnb"
    ]
    const texto = [
        "Esta foi uma experiência incrível e tenho muita sorte de ter tido a chance de participar. Tudo sobre a experiência foi maravilhoso!",
        "Uma experiência única na vida. Muito obrigado por uma noite maravilhosa e perfeita, que lembraremos com alegria para sempre.",
        "Obrigado por uma noite mágica e inesquecível. Conheci algumas pessoas incríveis e compartilhei uma bela experiência.",
        "Obrigado a todos por esta ótima organização e uma experiência incrível. Inaudível. ✨",
        "Uma experiência única na vida. Muito obrigado por uma noite maravilhosa e perfeita, que lembraremos com alegria para sempre.",
        "Que experiência excepcional! Nós gostamos muito da noite. Tudo era tão distinto. Foi maravilhoso também conhecer Matthieu pessoalmente. E a equipe do Airbnb foi incrível!"
    ]

    
    return(
        <div className="mobile:hidden">
            <Swiper>
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex gap-3 mb-3">
                <img src={img} className="rounded-full w-14 h-14" />
                <div>
                    <h3><strong>{nomes[index]}</strong></h3>
                    <p>{miniText[index]}</p>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex">
                    <Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/><Star fill="black" size={15}/>
                </div>
                <p>· julho de 2024</p>
            </div>
            
            <div className=" desktop:w-[40%]">
                <p className="text-lg">{texto[index]}</p>
            </div>
                    </SwiperSlide>
                ))}
            </Swiper> 
        </div>
       
    )
}