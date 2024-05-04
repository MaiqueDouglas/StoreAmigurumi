import React from 'react';
import './Collection.css';
import produto from "../../assets/images/produto.png";

function Collection(){
    const items = [
        { id: 1, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 2, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 3, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 4, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 5, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 6, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 7, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 8, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 9, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 10, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 11, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 12, nome: 'NOME DO PRODUTO ', preco: '$000.00' }
    ];

    return(
        <>
            <div className='h1'>
                <h1>Mais vendidos</h1>
                <div className='container-product'>
                    {items.map(item => (
                        <div key={item.id} className='item'>
                            <img src={produto} alt='Produto'/>
                            <h2>{item.nome}</h2>
                            <div className='price'>{item.preco}</div>
                            <button>Adicionar ao carrinho</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className='titulo-h1'>
                <h1>Outro título</h1>
                <div className='container-product'>
                    {items.map(item => (
                        <div key={item.id} className='item'>
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

export default Collection;
