
Todo o CSS do outro projeto


* {
  margin: 0;
  padding: 0;
} 
body {
  font-family: "Robot", sans-serif;
}


a, h1, h2{
  color: #222222;
}

p{
  color: #6A6A6A;
}

.container{
  width: 1280px;
  max-width: 1280px;
  margin: 0 auto;
}

header{
  display: flex;
  padding: 0.2rem;
  box-shadow: 0px 0px 0.8px 0px;
  width: 100vw;
  max-width: 100vw;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.container-header{
  width: 1280px;
}

header nav{
  display: grid;
  grid-template-columns: 25% 40% 35%;  
  align-items: center;
  justify-self: center;
}

.grid-layout-2-header{
  display: grid;
  grid-template-columns: 80% 20%;
}

nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0px 0px 1.5px 0px;
  width: 450px;
  cursor: pointer;
  font-size: 14px;
  color: #222222;
  font-weight: 550;
  padding: 4px 8px 4px 8px;
}


.hospedes{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
}

.hospedes p{
  color: #6A6A6A;
  font-weight: 100;
}

.anuncie-header{
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
}


.anuncie-header a{
  text-decoration: dotted;
}

.texto-anuncie a{
  display: flex;
  font-weight: 550;
  font-size: 14px;
}

.perfil-header{
  display: flex;
  justify-content: center;
  justify-self: end;
  align-items: center;
  gap: 8px;
  width: 80px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0px 0px 1.5px 0px;
  cursor: pointer;  
  padding-left: 4px;
}

.border{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(128, 128, 128, 0.342);
  height: 33px;
}

.border-textos{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(128, 128, 128, 0.342);
  width: 700px;
  margin: 40px 0px 40px 0px;
}

.border-textos-1450px{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(128, 128, 128, 0.342);
  width: 1280px;
  margin: 40px 0px 40px 0px;
}

.container-fotos{
  width: 1280px;
}

.separar-transl-title{
  display: flex;
  align-items: center;
  gap: 15px;
}

.box-title {
  display: flex;
  margin-top: 30PX;
  justify-content: space-between;
  align-items: center;
}

.container-fotos{
  width: 1280px;
}

.box-title h1{
  font-size: 1.6rem;
  width: 800px;
}

.botoes {
  display: flex;
  gap: 10px;
}

.btn {
  display: flex;
  align-items: center;
  gap: 3px;
  margin-left: 20px;
}

.btn a {
  font-size: 18px;
  color: #222;
  font-weight: bold;
}

.photos {
  display: grid;
  grid-template-rows: 300px 300px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 30px;
  gap: 10px;
}

.photos div {
  width: 100%;
  height: 100%;
}

.photos img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image1 {
  grid-area: 1 / 1 / 3 / 3;
}

.image1 img {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.image4 img {
  border-top-right-radius: 15px;
}

.image5 img {
  border-bottom-right-radius: 15px;
}

.secao-texto{
  width: 1280px;
  display: grid;
  grid-template-columns: 60% 40%;
}


.container-textos{
  width: 700px;
  flex-direction: column;
  align-self: start;
  justify-content: start;
}

.titulo-produto-airbnb{
  margin-top: 15px;
}

.titulo-produto-airbnb h1{
  font-size: 22px;
}

.titulo-produto-airbnb p{
  font-size: 16px;
  margin-top: 4px;
}

.avaliacao-produto{
  padding: 0px 0px 32px 0px;
}

.avaliacao-produto{
  display: flex;
  align-items: center;
  font-size: 22px;
  gap: 5px;
}

.avaliacao-produto h6{
  display: flex;
}

.avaliacao-produto h6 span{
  text-decoration: underline;
  cursor: pointer;
}

.anfitriao{
  display: flex;
  margin-top: 25px;
  align-items: center;
  width: 300px;
  gap: 20px;
}

.anfitriao h6{
  font-size: 16px;
}

.anfitriao p{
  font-size: 14px;
}

.img-anfitriao img{
  width: 40px;
  height: 40px;
  border-radius: 100px;
}

.setores-4-img{
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 25px;
}

.setores-4-img h1{
  font-size: 16px;
}

.setores-4-img p{
  font-size: 14px;
  margin-top: 5px;
}

.setores-4-img .trofeu,.fogueira,.flor,.dancando{
  display: flex;
  width: 700px;
  gap: 35px;
  font-weight: bold;
}

.titulo-infos-airbnb{
  background-color: #6a6a6a4b;
  border-radius: 8px;
  padding: 15px 0px 15px 0px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  font-weight: normal;
}

.titulo-infos-airbnb p{
  color: #222222;
}

.infos-airbnb{
  margin-top: 52px;
  font-size: 18px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
}

span{
  display: flex;
  align-items: start;
  justify-content: start;
  text-align: start;
  font-weight: bold;
}

.exibir-original{
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
}

.infos-airbnb p{
  color: #222222;
}

.enviar-encerrado{
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 60px;
  padding-left: 70px;
  gap: 23px;

}

.box-encerrado{
  background-color: #ffffff;
  padding: 0.5rem;
  width: 400px;
  text-align: center;
  border-radius: 10px;
  font-size: 28px;
}

.button-enviar-pedido{
  font-size: 28px;
  color: white;
  text-align: center;
  background-color: #b0b0b0;
  padding: 1.2rem;
  width: 400px;
  border-radius: 10px;
  cursor: not-allowed;
}

.recepcao-anfitriao{
  display: flex;
  width: 1280px;
  justify-content: start;
  flex-direction: column;
}

.avaliacao-produto span{
  display: flex;
}

.recepcao-anfitriao-card{
  padding: 30px;
}

.descricao-anfitriao{

  display: flex;
  flex-direction: column;
  width: auto;
  gap: 25px;
  font-size: 18px;
}

.descricao-anfitriao .estudo-anfitriao, .trabalho-anfitriao, .skill-anfitriao, .hobby-anfitriao, .pets-anfitriao{
  display: flex;
  gap: 35px;
  width: 470px;
}

.descricao-anfitriao p{
  color: #222222;
}

.apresentacao-anfitriao{
  width: 720px;
  display: flex;
  padding: 32px 0px 0px 0px;
}

.img-av-produto, .texto-av-produto{
  display: flex;
  width: 400px;
  gap: 10px;
  font-weight: bold;
  font-size: 22px;
  align-items: center;
}

.texto-av-produto p{
  color: #222;
}

.comentarios-produto{
  margin-top: 15px;
  display: flex;
  width: 1280px;
}

.img-comentario img{
  width: 55px;
  border-radius: 50px;
}

.header-comment{
  display: flex;
  gap: 15px;
}

.nome-origem-comentario h5{
  font-size: 21px;
}

.nome-origem-comentario{
  font-size: 20px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 300px;
}

.nome-origem-comentario p{
  width: 300px;
  margin-top: 5px;
}

.avaliacao-comentario{
  display: flex;
  gap: 1px;
  align-items: center;
  padding-left: 2px;
}

.conteudo-av{
  display: flex;
  width: 400px;
  align-items: center;
  gap: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.conteudo-av h2{
  font-size: 16px;
}

.texto-comentario p{
  width: 470px;
  color: #222222;
  font-size: 18px;
}

.comentarios-produto{
  display: flex;
  justify-content: space-between;
  height: 240px;
}

.todos-comentarios{
  display: flex;
  padding: 12px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border: 1px solid #222222;
  width: 300px;
  border-radius: 8px;
  color: #222222;
  cursor: pointer;
  font-weight: normal;
}

.todos-comodidades{
  display: flex;
  padding: 12px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border: 1px solid #222222;
  width: 300px;
  border-radius: 8px;
  color: #222222dc;
  cursor: pointer;
  font-weight: normal;
  margin-top: 32px
}

.tipo-acomodacao{
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 700px;
}

.tipo-acomodacao h2{
  color: #222222;
}

.quartos{
  display: flex;
  gap: 60px;
  margin: 20px;
  width: 600px ;
  overflow-x: auto ;
}


.quartos::-webkit-scrollbar-thumb {
  background-color: #6A6A6A; 
  border-radius: 10px;
}


.quartos::-webkit-scrollbar{
  width: 0;
  height: 6px;
}

.quartos::-webkit-scrollbar-thumb:hover {
  background-color: #302e2e;
}

.quartos .quarto{
  min-width: 200px;
  height: auto;
  line-height: 50px;
  text-align: start;
}

.quarto{
  font-size: 20px;
  display: flex;
  flex-direction: column;
}

.quarto p{
  font-size: 16px;
  color: #222222;
}

.comodidades-produto-container p{
  color: #222;
}

.title-comodidade{
  width: 300px;
  display: flex;
  text-align: center;
}


.comodidades{
  display: grid;
  grid-template-columns: 50% 50%;
  width: 700px;
}

.comodidades-esquerda .comodidade, .comodidade-direita .comodidade{
  gap: 20px;
  padding: 15px 0px 15px 0px;
  align-items: center;
  display: flex;
}

.comodidade-direita p, .comodidades-esquerda p{
  color: #222;
  width: 210px;
}

.riscar{
  font-weight: normal;
  text-decoration: line-through;
}

.comentario-produto-container{
  display: grid;
  grid-column: repeat(4, 200px);
  grid-row: repeat(2,200px);
  grid-template-columns: 50% 50%;
}

.comentario-esquerda{
  width: 540px;
}

.container-regras-casa{
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  padding: 0px 0px 40px 0px;
  height: 40vh;
  list-style: none;
  color: #222222;
}

.conteudo-regras-casa ul li, .seguranca-propriedade ul li, .politica-cancelar ul li{
  list-style: none;
  color: #222222;
  padding-top: 10px;
}


.container-regras-casa h3{
  padding-top: 40px;
  font-size: 18px;
}



.setas-regras{
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: bold;
}

.container-precos-produto{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
  justify-content: center;
  align-items: start;
}

.texto-precos-produto{
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 20px 0px 20px 0px;
}

.texto-precos-produto h2{
  color: #222222;
  font-size: 28px;
  font-weight: 550;
}

.texto-precos-produto span{
font-size: 18px;
font-weight: 200;
}

.box-checks-produto-header{
  display: flex;
  flex-direction: column;
  width: 400px;
}

.header-box-check{
  display: grid;
  grid-template-columns: 50% 50%;
  cursor: pointer;
}

.check-in{
  border-top-right-radius: 0px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 0px;

}

.check-out{
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 10px;
}

.check-in, .check-out{
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border: 1px solid #6A6A6A;
  padding: 15px;
  gap: 4px;
}

.check-in p, .check-out p{
  margin: 2px;
  font-size: 13px;
  color: rgb(34, 34, 34);
  font-weight: bold;
}

.check-in h3, .check-out h3{
  font-size: 16px;
  padding-left: 4px;
  font-weight: 200;
}

.footer-box-check{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0px solid;
  border: 1px solid #6A6A6A;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
}

.texto-foooter-check{
  margin: 0px 10px 0px 10px;
  padding: 15px 0px 15px 5px;
}

.seta-baixo-box-check{
  padding-right: 10px;
}

.conferir-disponibilidade{
  width: 400px;
  display: flex;
  cursor: pointer;
  border-radius: 10px;
  align-items: center;
  background: linear-gradient(90deg, #912249 0%, rgb(233, 95, 153) 100%);
  justify-content: center;
}

.conferir-disponibilidade h3{
  padding: 20px;
  color: white ;
}

.cobrar-precos{
  display: flex;
  align-self: center;
  padding: 10px 0px 10px 0px;
}

.precos-produto-temp{
  font-size: 14px;
  width: 400px;
}

.valor-servicos{
  color: #222222;
  font-weight: 100;
  cursor: pointer;
}

.valor-servicos span{
  text-decoration: underline;
  font-weight: 100;
}

.valor-dias h2{
  font-weight: 100;
}

.total-s-impostos span{
  font-weight: 600;
}

.diaria{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.total-s-impostos{
  display: flex;
  justify-content: space-between;
  margin-top: 62px;
}

.denunciar-produto{
  gap: 15px;
  padding-top: 32px;
  color: #6A6A6A;
  align-self: center;
  text-decoration: underline;
  display: flex;
  cursor: pointer;
}

.hospede-box-unit{
  font-size: 10px;
}

.localizacao{
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.localizacao span{
  font-size: 18px;
  font-weight: 200;
  gap: 3px;
}

span .loc-saiba-mais{
  text-decoration: underline;
  font-weight: 600;
}