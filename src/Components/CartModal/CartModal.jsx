import React, { useState } from 'react';
import './CartModal.css';

function CartModal({ isOpen, onClose, selectedItems }) {
    const [quantity, setQuantity] = useState(1);

    if (!isOpen) return null;

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className='modal'>
            <div className='modal-content'>
                <h1>Meu Carrinho</h1>
                {selectedItems.map(selectedItem => (
                    <div key={selectedItem.id} className='listCart'>
                        <div className='item'>
                            <div className='imagem'>
                                <img src={selectedItem.imagem} alt={selectedItem.nome} />
                            </div>
                        </div>
                        <div className='name'>
                            {selectedItem.nome}
                        </div>
                        <div className='totalPrice'>
                            {selectedItem.preco}
                        </div>
                        <div className='quantity'>
                            <span className='minus' onClick={decreaseQuantity}>-</span>
                            <span>{quantity}</span>
                            <span className='plus' onClick={increaseQuantity}>+</span>
                        </div>
                    </div>
                ))}
                <div className='btn-cart'>
                    <button className='close' onClick={onClose}>FECHAR</button>
                    <button className='checkout'>COMPRAR</button>
                </div>
            </div>
        </div>
    );
}

export default CartModal;
