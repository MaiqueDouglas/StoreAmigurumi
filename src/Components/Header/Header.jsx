import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from "../../assets/images/logo.png"

function Header() {
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        const searchTerm = event.target.search.value;
        navigate(`/search?q=${searchTerm}`);
    };

    return (
        <div className='header'>
            <div className='header-container'>
                <img src= {logo} alt="Logo do site" className="logo-img" />
                <form onSubmit={handleSearch}>
                    <input type="text" name="search" placeholder="Pesquisar..." />
                   
                </form>
                <div className="router-links">
                    <a onClick={() => navigate("/")} href="#">Home</a>
                    <a onClick={() => navigate("/Collection")} href="#">Coleções</a>
                    <a onClick={() => navigate("/About")} href="#">Sobre</a>
                    <a onClick={() => navigate("/Contact")} href="#">Contato</a>
                </div>
                <div className='img-user'>
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/000000/user--v1.png" alt="user--v1"/>
                </div>
                <div className='img-cart'>
                    <img width="40" height="40" src="https://img.icons8.com/parakeet-line/48/000000/shopping-cart-loaded.png" alt="shopping-cart-loaded"/>
                </div>
            </div>
        </div>
    );
}

export default Header;
