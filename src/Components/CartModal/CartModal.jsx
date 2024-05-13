import React, { useState } from 'react';
import './CartModal.css';
import lista from "../../assets/images/produto.png";

function CartModal({ isOpen, onClose }) {
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
                <div className='listCart'>
                    <div className='item'>
                        <div className='imagem'>
                            <img src={lista} alt='lista-de-produtos'/>
                        </div>
                    </div>
                    <div className='name'>
                        NOME
                    </div>
                    <div className='totalPrice'>
                        $000
                    </div>
                    <div className='quantity'>
                        <span className='minus' onClick={decreaseQuantity}>-</span>
                        <span>{quantity}</span>
                        <span className='plus' onClick={increaseQuantity}>+</span>
                    </div>
                </div>
                <div className='btn-cart'>
                    <button className='close' onClick={onClose}>FECHAR</button>
                    <button className='checkout'>COMPRAR</button>
                </div>
            </div>
        </div>
    );
}

export default CartModal;
