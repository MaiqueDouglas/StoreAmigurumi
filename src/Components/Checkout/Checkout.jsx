import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Checkout.css';

function Checkout(){

  return (
    <div>
        <Header/>
    <div className="checkout-container">
      <h2>Checkout</h2>
      <section className="informacoes-pessoais">
        <h3>Informações Pessoais</h3>
        <input type="text" placeholder="Nome completo" disabled />
        <input type="email" placeholder="E-mail" disabled />
        <input type="tel" placeholder="Telefone" disabled />
      </section>

      <section className="endereco-entrega">
        <h3>Endereço de Entrega</h3>
        <input type="text" placeholder="CEP" disabled />
        <input type="text" placeholder="Endereço" disabled />
        <input type="text" placeholder="Número" disabled />
        
      </section>

      <section className="pagamento">
        <h3>Pagamento</h3>
        <div className="cartao-credito">
          <h4>Cartão de Crédito</h4>
          <input type="text" placeholder="Número do cartão" disabled />
          <input type="text" placeholder="Nome impresso no cartão" disabled />
          
        </div>
    
      </section>
    </div>
    <Footer/>
    </div>
  );
}

export default Checkout;
