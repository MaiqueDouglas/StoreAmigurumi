import React, { useState } from 'react';
import './Collection2.css';
import produto from "../../assets/images/ursinho2.jpeg";
import CartModal from "../../Components/CartModal/CartModal";

function Collection2({ onAddToCart }) {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    const items = [
        { id: 1, nome: 'NOME DO PRODUTO 1', preco: '$100.00', imagem: produto },
        { id: 2, nome: 'NOME DO PRODUTO 2', preco: '$200.00', imagem: produto },
        { id: 3, nome: 'NOME DO PRODUTO 3', preco: '$300.00', imagem: produto },
        { id: 4, nome: 'NOME DO PRODUTO 4', preco: '$400.00', imagem: produto },
        { id: 5, nome: 'NOME DO PRODUTO 5', preco: '$500.00', imagem: produto },
        { id: 6, nome: 'NOME DO PRODUTO 6', preco: '$600.00', imagem: produto }
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
            <div className='h1'>
                <h1>Segundo Titulo</h1>
                <div className='container-product2'>
                    {items.map(item => (
                        <div key={item.id} className='item2'>
                            <img src={item.imagem} alt='Produto' />
                            <h2>{item.nome}</h2>
                            <div className='price2'>{item.preco}</div>
                            <button className='collection-button2' onClick={() => handleClick(item)}>Adicionar ao carrinho</button>
                        </div>
                    ))}
                </div>
            </div>
            <CartModal isOpen={isCartModalOpen} onClose={handleCloseModal} selectedItems={selectedItems} />
        </>
    );
}

export default Collection2;
