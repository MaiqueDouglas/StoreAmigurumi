import React, { useEffect, useState } from 'react';
import './BannerSlider.css';

function BannerSlider() {
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide % 3) + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleRadioClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className='slider'>
            <div className='slides' style={{ transform: `translateX(-${(currentSlide - 1) * 1500}px)` }}>
                <div className='slide-one'>
                    <h1>Slide um</h1>
                </div>
                <div className='slide-two'>
                    <h1>Slide dois</h1>
                </div>
                <div className='slide-three'>
                    <h1>Slide três</h1>
                </div>
            </div>
            <div className='manual-navigation'>
                <input type='radio' id='radio1' name='radio-btn' checked={currentSlide === 1} onChange={() => handleRadioClick(1)} />
                <input type='radio' id='radio2' name='radio-btn' checked={currentSlide === 2} onChange={() => handleRadioClick(2)} />
                <input type='radio' id='radio3' name='radio-btn' checked={currentSlide === 3} onChange={() => handleRadioClick(3)} />
            </div>
        </div>
    );
}

export default BannerSlider;
