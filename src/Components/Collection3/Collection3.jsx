import React from 'react';
import './Collection3.css';
import produto1 from "../../assets/images/produto1.png";

function Collection3(){
    const items = [
        { id: 1, nome: 'NOME DO PRODUTO 2', preco: '$000.00' },
        { id: 2, nome: 'NOME DO PRODUTO 2', preco: '$000.00' },
        { id: 3, nome: 'NOME DO PRODUTO 2', preco: '$000.00' },
        { id: 4, nome: 'NOME DO PRODUTO 2', preco: '$000.00' },
        { id: 5, nome: 'NOME DO PRODUTO 2', preco: '$000.00' },
        { id: 6, nome: 'NOME DO PRODUTO 2', preco: '$000.00' }
        
    ];

    return(
        <>
            <div className='h3'>
                <h1>Terceiro Titulo</h1>
                <div className='container-product3'>
                    {items.map(item => (
                        <div key={item.id} className='item3'>
                            <img src={produto1} alt='Produto'/>
                            <h2>{item.nome}</h2>
                            <div className='price'>{item.preco}</div>
                            <button>Adicionar ao carrinho</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Collection3;
