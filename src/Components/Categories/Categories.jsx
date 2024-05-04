import React from 'react';
import './Categories.css'; 
import Photo from "../../assets/images/Categories.png"

function Categories() {
    return (
        <div className='categories-container'>
            <h1>Categorias</h1>
            <div className="categories">
                <ul>
                    <li>
                        <img src={Photo} alt="Categoria 1" />
                        <span>Categoria 1</span>
                    </li>
                    <li>
                        <img src={Photo}alt="Categoria 2" />
                        <span>Categoria 2</span>
                    </li>
                    <li>
                        <img src={Photo} alt="Categoria 3" />
                        <span>Categoria 3</span>
                    </li>
                    <li>
                        <img src={Photo} alt="Categoria 4" />
                        <span>Categoria 4</span>
                    </li>
                    <li>
                        <img src={Photo} alt="Categoria 5" />
                        <span>Categoria 5</span>
                    </li>
                    <li>
                        <img src={Photo} alt="Categoria 6" />
                        <span>Categoria 6</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Categories;
