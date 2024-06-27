import React, { useState } from 'react';
import './Login.css'; // Adicione estilos personalizados aqui
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de login
    console.log('Login Data:', loginData);
  };

  return (
    <div>
      <Header/>
    <div className="container">
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
          </div>
          <button className='button-login' type="submit">Entrar</button>
        </form>
        <div className="register-link">
          <p>Não tem uma conta? <a href="#register">Cadastre-se</a></p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
