import React, { useState } from 'react';
import './Register.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Register = () => {
  const [registerData, setRegisterData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de registro
    console.log('Register Data:', registerData);
  };

  return (
    <div>
      <Header cartItemCount={0} /> {/* Passe cartItemCount como 0 */}
      <div className="container">
        <div className="register">
          <h1>Registrar</h1>
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Senha</label>
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirme a Senha</label>
              <input
                type="password"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <button className='button-register' type="submit">Registrar</button>
          </form>
          <div className="login-link">
            <p>Já tem uma conta? <a href="/login">Entre</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
