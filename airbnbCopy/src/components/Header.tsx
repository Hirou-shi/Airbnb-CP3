import React from 'react'

export default function Header() {
  return (
    <>
            <nav>
                <div class="logo-header">
                <img src="./assets/logo.png" width="120px" height="auto" alt="Imagem logo airbnb" />
                </div>
                <nav>
                <ul>
                    <li>Qualquer lugar</li>
                    <div class="border"></div>
                    <li>Qualquer Semana</li>
                    <div class="border"></div>
                    <div class="hospedes">
                    <p>Hóspedes?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" alt="Imagem busca header--hospedes" viewBox="0 0 32 32"
                        aria-hidden="true" role="presentation" focusable="false"
                        style="display: block; fill: none;background-color:#ff385c;border-radius:50px;color:white; height: auto; width: 14px; padding: 8%  ;margin:2px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                    </svg>
                    </div>
                </ul>
                </nav>
                <div class="grid-layout-2-header">
                <div class="anuncie-header">
                    <div class="texto-anuncie">
                    <a href="#">Anuncie seu espaço no Airbnb</a>
                    </div>
                    <div class="globo">
                    <svg xmlns="http://www.w3.org/2000/svg" alt="Imagem globo header" viewBox="0 0 16 16" aria-hidden="true"
                        role="presentation" focusable="false"
                        style="display: block; height: 20px; width: 20px; fill: currentcolor;">
                        <path
                        d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z">
                        </path>
                    </svg>
                    </div>
                </div>
                <div class="perfil-header">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" alt="Imagem menu-perfil header" viewBox="0 0 32 32"
                        aria-hidden="true" role="presentation" focusable="false"
                        style="display: block; fill: none; height: auto; width: 18px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
                        <g fill="none">
                        <path d="M2 16h28M2 24h28M2 8h28"></path>
                        </g>
                    </svg>
                    <a class="perfil"><svg xmlns="http://www.w3.org/2000/svg" alt="Imagem perfil-pessoa header" class="perfil"
                        viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false"
                        style="display: block;color:dimgray; height: 35 ; padding: 4px 2px 4px 4px;fill: currentcolor;">
                        <path
                            d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z">
                        </path>
                        </svg></a></a>
                </div>
                </div>
            </nav>
    </>
  )
}
