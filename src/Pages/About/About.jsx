import React from "react";
import './About.css';
import foto from "../../assets/images/categories1.png";

function About(){
    return(
        <section className="about"  id="abaut">
             <div className="about-content">
                  <h1 className="heading">Sobre</h1>
                  <h2>Olá, me chamo Fulano de tal!</h2>
                  <p>Texto A vida é repleta de momentos efêmeros que, muitas vezes, passam despercebidos em meio à correria do dia a dia. São nas pequenas coisas, nos gestos simples e nas experiências cotidianas que encontramos a verdadeira essência da existência.</p>
                  <p>Cada amanhecer traz consigo a oportunidade de recomeçar, de aprender algo novo, de se conectar com o mundo ao nosso redor. São as interações com as pessoas, os momentos de reflexão e os instantes de alegria que dão cor e significado à nossa jornada. A vida é um constante fluxo de experiências, e cabe a nós valorizar cada momento, pois são eles que moldam quem somos e nos conduzem pelo caminho da nossa história.</p>
                  <button className="whatsApp"> <img width="50" height="50" src="https://img.icons8.com/3d-fluency/94/whatsapp.png" alt="whatsapp"/>Entre em contato comigo</button>
                  <button className="instagram"><img width="50" height="50" src="https://img.icons8.com/3d-fluency/94/instagram-new.png" alt="instagram-new"/>Me acompanhe no instagram </button>
            </div>
             <div className="abaut-img">
                 <img src={foto} alt=""/>
             </div>
             
        </section>

    );
    
}

export default About;