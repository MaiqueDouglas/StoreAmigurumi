import React from 'react';
import './Collection1.css';
import produto from "../../assets/images/ursinho.jpeg";

function Collection1({ onAddToCart }) {
    const items = [
        { id: 1, nome: 'NOME DO PRODUTO 1', preco: '$100.00', imagem: produto },
        { id: 2, nome: 'NOME DO PRODUTO 2', preco: '$200.00', imagem: produto },
        { id: 3, nome: 'NOME DO PRODUTO 3', preco: '$300.00', imagem: produto },
        { id: 4, nome: 'NOME DO PRODUTO 4', preco: '$400.00', imagem: produto },
        { id: 5, nome: 'NOME DO PRODUTO 5', preco: '$500.00', imagem: produto },
        { id: 6, nome: 'NOME DO PRODUTO 6', preco: '$600.00', imagem: produto }
    ];

    const handleClick = (item) => {
        onAddToCart(item);
    };

    return (
        <div className='h1'>
            <h1>Primeiro Título</h1>
            <div className='container-product'>
                {items.map(item => (
                    <div key={item.id} className='item'>
                        <img src={item.imagem} alt='Produto' />
                        <h2>{item.nome}</h2>
                        <div className='price'>{item.preco}</div>
                        <button className='collection-button' onClick={() => handleClick(item)}>Adicionar ao carrinho</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collection1;
