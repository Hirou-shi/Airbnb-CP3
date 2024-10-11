

export default function OqVcDeveSaber() {
  return (
    <section>
        <div className="mini:w-3/5 text-sm py-10 text-[#6A6A6A]">
            <p>Se seu perfil for selecionado e você decidir reservar, você terá 24 horas para concluir a reserva. Os custos de viagem não estão inclusos. Confira as <span className="underline decoration-solid">regras completas</span>, incluindo os requisitos de idade e localização geográfica, como os seus dados serão utilizados, e demais condições aplicáveis.</p>
        </div>
        <div className="border"></div>
        <div className="w-[70%] py-10 border-t">
            <h1 className="font-semibold text-2xl" >O que você deve saber</h1>
            <div className="flex flex-col desktop:flex-row justify-between py-3 desktop:gap-40">
                <div className="mini:border-b mini py-10">
                    <h3 className="font-semibold text-xl">Informações básicas</h3>
                    <h4 className="text-lg">Check-in após 18:00</h4>
                    <h4 className="text-lg">Checkout antes das 01:00</h4>
                    <h4 className="text-lg">Máximo de 2 hóspedes</h4>
                    <div className="flex items-center gap-2">
                        <a className="decoration-solid underline text-lg"><strong>Mostrar mais</strong></a>
                        <p className="font-semibold">&gt;</p>
                    </div>

                </div>
                
                <div className="mini:pt-10"> 
                    <h3 className="font-semibold text-xl">Segurança e propriedade</h3>
                    <h4 className="text-lg">Câmeras de segurança na parte externa da propriedade</h4>
                    <h4 className="text-lg">Alarme de monóxido de carbono</h4>
                    <h4 className="text-lg">Alarme de fumaça</h4>
                    <div className="flex items-center gap-2">
                        <a className="decoration-solid underline text-lg"><strong>Mostrar mais</strong></a>
                        <p className="font-semibold">&gt;</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
