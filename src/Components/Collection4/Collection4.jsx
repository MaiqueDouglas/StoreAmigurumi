import React, { useState } from 'react';
import './Collection4.css';
import produto1 from "../../assets/images/produto1.png";
import CartModal from "../../Components/CartModal/CartModal";

function Collection4({ onAddToCart }) {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    const items = [
        { id: 1, nome: 'NOME DO PRODUTO 1', preco: '$100.00', imagem: produto1 },
        { id: 2, nome: 'NOME DO PRODUTO 2', preco: '$200.00', imagem: produto1 },
        { id: 3, nome: 'NOME DO PRODUTO 3', preco: '$300.00', imagem: produto1 },
        { id: 4, nome: 'NOME DO PRODUTO 4', preco: '$400.00', imagem: produto1 },
        { id: 5, nome: 'NOME DO PRODUTO 5', preco: '$500.00', imagem: produto1 },
        { id: 6, nome: 'NOME DO PRODUTO 6', preco: '$600.00', imagem: produto1 }
    ];

    const handleClick = (item) => {
        const alreadySelected = selectedItems.some(selected => selected.id === item.id);
        if (!alreadySelected) {
            setSelectedItems([...selectedItems, item]);
        }
        setIsCartModalOpen(true);
        onAddToCart(item);
    };

    const handleCloseModal = () => {
        setIsCartModalOpen(false);
    };

    return (
        <>
            <div className='h4'>
                <h1>Segundo Titulo</h1>
                <div className='container-product4'>
                    {items.map(item => (
                        <div key={item.id} className='item4'>
                            <img src={item.imagem} alt='Produto' />
                            <h2>{item.nome}</h2>
                            <div className='price'>{item.preco}</div>
                            <button className='collection-button4' onClick={() => handleClick(item)}>Adicionar ao carrinho</button>
                        </div>
                    ))}
                </div>
            </div>
            <CartModal isOpen={isCartModalOpen} onClose={handleCloseModal} selectedItems={selectedItems} />
        </>
    );
}

export default Collection4;
