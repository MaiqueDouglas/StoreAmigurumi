import React from 'react';
import './BannerSlider.css';
import slide1 from "../../assets/images/slider1.png";
import slide2 from "../../assets/images/slide1.2.png";

function BannerSlider() {
    return (
        <div className='slider'>
            <div className='slides'>
                <div className='slide-one'>
                    <img src={slide1} alt='slide1' />
                    <h1>FRETE</h1>
                    <h2>GRÁTIS</h2>
                    <h3>Para todo o Brasil</h3>
                </div>
                <div className='lastslide'>
                    <img src={slide2} alt='slide2' />
                </div>
            </div>
        </div>
    );
}

export default BannerSlider;
