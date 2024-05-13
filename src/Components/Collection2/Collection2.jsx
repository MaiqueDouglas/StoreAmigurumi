import React, { useState } from 'react';
import './Collection2.css';
import produto from "../../assets/images/produto.png";
import CartModal from "../../Components/CartModal/CartModal";

function Collection2() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const items = [
        { id: 1, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 2, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 3, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 4, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 5, nome: 'NOME DO PRODUTO ', preco: '$000.00' },
        { id: 6, nome: 'NOME DO PRODUTO ', preco: '$000.00' }
    ];

    const handleAddToCart = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='h1'>
                <h1>Primeiro Titulo</h1>
                <div className='container-product'>
                    {items.map(item => (
                        <div key={item.id} className='item'>
                            <img src={produto} alt='Produto' />
                            <h2>{item.nome}</h2>
                            <div className='price'>{item.preco}</div>
                            <button className='collection-button' onClick={handleAddToCart}>Adicionar ao carrinho</button>
                        </div>
                    ))}
                </div>
            </div>
            <CartModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
}

export default Collection2;
