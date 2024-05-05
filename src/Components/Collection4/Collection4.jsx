import React from 'react';
import './Collection4.css';
import produto from "../../assets/images/produto.png";

function Collection4(){
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
            <div className='h4'>
                <h1>Quarto Titulo</h1>
                <div className='container-product4'>
                    {items.map(item => (
                        <div key={item.id} className='item4'>
                            <img src={produto} alt='Produto'/>
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

export default Collection4;
