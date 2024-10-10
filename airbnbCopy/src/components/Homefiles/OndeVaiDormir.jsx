import React from 'react'

export default function OndeVaiDormir() {
  return (
    <div className="flex flex-col border-b my-10">
        <h1>Onde você vai dormir</h1>
        <div className="flex">
            <div>
                <img src="quarto1" className="rounded-xl"/>
                <h3>Quarto 1</h3>
                <p>1 cama queen</p>

            </div>

            <div>
                <img src="quarto2" className="rounded-xl"/>
                <h3>Quarto 2</h3>
                <p>1 cama de casal</p>

            </div>
        </div>
    </div>
  )
}
