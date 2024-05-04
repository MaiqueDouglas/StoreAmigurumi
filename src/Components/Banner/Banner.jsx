import React from 'react';
import './Banner.css'
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';
import p4 from '../../assets/images/p4.png';
import p5 from '../../assets/images/p5.png';
import p6 from '../../assets/images/p6.png';
import p7 from '../../assets/images/p7.png';
import p8 from '../../assets/images/p8.png';
import p9 from '../../assets/images/p3.png';
import p10 from '../../assets/images/p10.png';



function Banner() {
  return (
    <div className='box-container'>
        <h1>
            DESCONTOS DA SEMANA <br/>
            EM AMIGURUMIS DE CROCHÊ
        </h1>
        <h2>
            APROVEITE NOSSAS OFERTAS ESPECIAIS EM <br/> 
            AMIGURUMIS DE CROCHÊ ESTA SEMANA!
        </h2>
        <h3>
            DESCUBRA OS ENCANTADORES PERSONAGENS<br/>
            DISPONIVEIS.
        </h3>
        <button>
            DESCUBRA AQUI!
        </button>
    <div className="box">
      <span style={{ '--i': 1 }}><img src={p8} alt="Imagem 1" /></span>
      <span style={{ '--i': 2 }}><img src={p4} alt="Imagem 2" /></span>
      <span style={{ '--i': 3 }}><img src={p3} alt="Imagem 3" /></span>
      <span style={{ '--i': 4 }}><img src={p5} alt="Imagem 4" /></span>
      <span style={{ '--i': 5 }}><img src={p6} alt="Imagem 5" /></span>
      <span style={{ '--i': 6 }}><img src={p2} alt="Imagem 6" /></span>
      <span style={{ '--i': 7 }}><img src={p10} alt="Imagem 7" /></span>
      <span style={{ '--i': 8 }}><img src={p1} alt="Imagem 8" /></span>
      <span style={{ '--i': 9 }}><img src={p9} alt="Imagem 9" /></span>
      <span style={{ '--i': 10 }}><img src={p7} alt="Imagem 10" /></span>
    </div>
    </div>
  );
}

export default Banner;
