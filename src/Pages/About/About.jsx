import React from "react";
import './About.css';
import foto from "../../assets/images/about.png";
import Header from "../../Components/Header/Header";


function About(){
    return(
        <div>
        <Header/>
        <section className="about"  id="abaut">
             <div className="about-content">
                  <h2>Olá, me chamo Fulano de tal!</h2>
                  <p>Texto A vida é repleta de momentos efêmeros que, muitas vezes, passam despercebidos em meio à correria do dia a dia.
                     São nas pequenas coisas, nos gestos simples e nas experiências cotidianas que encontramos a verdadeira essência da existência.</p>
                  <p>Cada amanhecer traz consigo a oportunidade de recomeçar, de aprender algo novo, de se conectar com o mundo ao nosso redor.
                     São as interações com as pessoas, os momentos de reflexão e os instantes de alegria que dão cor e significado à nossa jornada. 
                     A vida é um constante fluxo de experiências, e cabe a nós valorizar cada momento, 
                     pois são eles que moldam quem somos e nos conduzem pelo caminho da nossa história.</p>
                  <button className="whatsApp">Entre em contato comigo</button>
                  <button className="instagram">Me acompanhe no instagram </button>
                  <img className="img1" width="40" height="40" src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1"/>
                  <img className="img2" width="40" height="40" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/>
            </div>
             <div className="abaut-img">
                 <img src={foto} alt=""/>
             </div>
        </section>
         </div>
        

    );
    
}

export default About;