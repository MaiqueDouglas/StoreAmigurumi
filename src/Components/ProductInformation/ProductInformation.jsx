
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ProductInformation.css';

function ProductInformation() {
    const { id } = useParams();

    return (
        <div>
        <Header/>
        <div>
            Informação do produto {id}
        </div>
        <Footer/>
        </div>
    );
}

export default ProductInformation;
