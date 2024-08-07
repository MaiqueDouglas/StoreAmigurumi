import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import './Home.css';
import Collection1 from "../../Components/Collection1/Collection1";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import Collection2 from "../../Components/Collection2/Collection2";
import Collection3 from "../../Components/Collection3/Collection3";
import Collection4 from "../../Components/Collection4/Collection4";
import About from "../About/About";
import Footer from "../../Components/Footer/Footer";
import Whatsapp from "../../Components/Whatsapp/Whatsapp";
import CartModal from "../../Components/CartModal/CartModal";

function Home() {
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
      <Header />
      <Banner />
      <Categories />
      <Collection1 onAddToCart={handleAddToCart} />
      <Collection2 onAddToCart={handleAddToCart} />
      <BannerSlider />
      <Collection3 onAddToCart={handleAddToCart} />
      <Collection4 onAddToCart={handleAddToCart} />
      <About />
      <Footer />
      <Whatsapp />
      <CartModal isOpen={isCartModalOpen} onClose={handleCloseModal} selectedItems={selectedItems} />
    </div>
  );
}

export default Home;
