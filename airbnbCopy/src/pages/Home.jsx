import Header from "../components/Headerfiles/Header"
import Boxpictures from "../components/Homefiles/Boxpictures";
import About from "../components/Homefiles/About";
import About2 from "../components/Homefiles/About2";
import About3 from "../components/Homefiles/About3";
import Receber from "../components/Homefiles/Receber";



export default function home() {
  return (
        <section>
            <Boxpictures />
            <About />
            <About2 />
            <About3 />
            <Receber/>
        </section>
            
  );
};
