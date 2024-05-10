import React from 'react';
import './Categories.css'; 
import Photo1 from '../../assets/images/Categories1.png';
import Photo2 from '../../assets/images/Categories2.png';
import Photo3 from '../../assets/images/Categories3.png';
import Photo4 from '../../assets/images/Categories4.png';
import Photo5 from '../../assets/images/Categories5.png';
import Photo6 from '../../assets/images/Categories6.png';
import Photo7 from '../../assets/images/Categories7.png';



function Categories() {
    return (
        <div className='categories-container'>
            <h1>Categorias</h1>
            <div className="categories">
                <ul>
                    <li>
                        <img src={Photo1} alt="Categoria 1" />
                        <span>Ursinhos</span>
                    </li>
                    <li>
                        <img src={Photo2}alt="Categoria 2" />
                        <span>Tricotin</span>
                    </li>
                    <li>
                        <img src={Photo3} alt="Categoria 3" />
                        <span>Móbiles</span>
                    </li>
                    <li>
                        <img src={Photo4} alt="Categoria 4" />
                        <span>Bonecos</span>
                    </li>
                    <li>
                        <img src={Photo5} alt="Categoria 5" />
                        <span>Moda Praia</span>
                    </li>
                    <li>
                        <img src={Photo6} alt="Categoria 6" />
                        <span>Moda Bebê</span>
                    </li>
                    <li>
                        <img src={Photo7} alt="Categoria 7" />
                        <span>Nicho</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Categories;
