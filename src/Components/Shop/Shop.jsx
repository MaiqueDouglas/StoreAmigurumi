import React, { useState } from 'react';
import Collection1 from '../Collection1/Collection1';
import Collection2 from '../Collection2/Collection2';
import Collection3 from '../Collection3/Collection3';
import Collection4 from '../Collection4/Collection4';
import CartModal from '../CartModal/CartModal';

const Shop = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleAddToCart = (item) => {
    const alreadySelected = selectedItems.some(selected => selected.id === item.id);
    if (!alreadySelected) {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    } else {
      setSelectedItems(
        selectedItems.map(selected =>
          selected.id === item.id
            ? { ...selected, quantity: selected.quantity + 1 }
            : selected
        )
      );
    }
    setIsCartModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div>
      <Collection1 onAddToCart={handleAddToCart} />
      <Collection2 onAddToCart={handleAddToCart} />
      <Collection3 onAddToCart={handleAddToCart} />
      <Collection4 onAddToCart={handleAddToCart} />
      <CartModal isOpen={isCartModalOpen} onClose={handleCloseModal} selectedItems={selectedItems} />
    </div>
  );
};

export default Shop;
