import React from 'react'

export default function Ondevcestara() {
  return (
    <section className='pt-4'>
        <div className='text-left'>
            <h1 className='font-semibold text-[20px] mb-4'>Onde você estará</h1>
            <p className=''>Paris, Ilha de França, França</p>
            <div className='py-3'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10498.597716889917!2d2.32417!3d48.860541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc7d35db721%3A0x408ab2ae4bb10e02!2sParis%2C%20France!5e0!3m2!1spt!2sbr!4v1697479937432!5m2!1spt!2sbr"
                    style={{ border: 0 }}
                    className="w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização"
                ></iframe>
            </div>
            <div className='flex py-4 gap-1 text-[12px] mobile:text-base'>
                <p>Verificamos que a localização deste anúncio está correta.</p>
                <p className='underline font-semibold'>Saiba mais</p>
            </div>
        </div>
    </section>
  )
}
