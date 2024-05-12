import React from 'react';
import './CartModal.css';


function CartModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className='modal'>
            <div className='modal-content'>
                <h1>Meu Carrinho</h1>
                <div className='listCart'>
                    
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
