import Header from "../components/Headerfiles/Header"
import Boxpictures from "../components/Homefiles/Boxpictures";
import About from "../components/Homefiles/About";
import About2 from "../components/Homefiles/About2";
import About3 from "../components/Homefiles/About3";
import Receber from "../components/Homefiles/Receber";
import Comentarios from "../components/Homefiles/Comentarios";
import Ondevcestara from "../components/Homefiles/Ondevcestara";
import UltimaParte from "../components/Homefiles/UltimaParte";



export default function Home() {
  return (
        <section className=" px-5 desktop:px-40 ">

            <Boxpictures />
            <About />
            <About2 />
            <About3 />
            <Receber/>
            <Comentarios/>
            <Ondevcestara />
            <UltimaParte />
        </section>
            
  );
};
