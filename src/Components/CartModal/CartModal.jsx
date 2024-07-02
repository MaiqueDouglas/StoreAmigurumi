import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartModal.css';

function CartModal({ isOpen, onClose, selectedItems }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(selectedItems);
  }, [selectedItems]);

  if (!isOpen) return null;

  const updateItemQuantity = (id, quantityChange) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + quantityChange } : item
    ));
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const handleCheckout = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h1>Meu Carrinho</h1>
        {items.map(item => (
          <div key={item.id} className='listCart'>
            <div className='item'>
              <div className='imagem'>
                <img src={item.imagem} alt={item.nome} />
              </div>
            </div>
            <div className='name'>
              {item.nome}
            </div>
            <div className='totalPrice'>
              {item.preco}
            </div>
            <div className='quantity'>
              <span className='minus' onClick={() => item.quantity > 1 && updateItemQuantity(item.id, -1)}>-</span>
              <span>{item.quantity}</span>
              <span className='plus' onClick={() => updateItemQuantity(item.id, 1)}>+</span>
            </div>
            <div className='delete' onClick={() => handleRemoveItem(item.id)}>
              <span>&times;</span>
            </div>
          </div>
        ))}
        <div className='btn-cart'>
          <button className='close' onClick={onClose}>FECHAR</button>
          <button className='checkout' onClick={handleCheckout}>COMPRAR</button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
