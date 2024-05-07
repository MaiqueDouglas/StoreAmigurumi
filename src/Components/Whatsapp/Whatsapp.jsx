import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Whatsapp.css'; 

const Whatsapp = () => {
    const handleClick = () => {
        
        window.open('https://wa.me/seu-numero-de-telefone', '_blank');
    };

    return (
        <div
            className="whatsapp-button"
            onClick={handleClick}
        >
            <FaWhatsapp className="whatsapp-icon" />
        </div>
    );
};

export default Whatsapp;
