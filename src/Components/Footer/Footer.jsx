import './Footer.css'
import logofooter from '../../assets/images/logo.png';

function Footer(){
    return(
        <div className='container-footer'>
            <div className='footer'>
                <img src={logofooter} alt='logo do footer'></img>
                <div className='icons'>
                    <img className='icons' src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1"/>
                    <img className='icons' src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/>
                    <img className='icons' src="https://img.icons8.com/ios/50/mail.png" alt="mail"/>
                </div>
                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">Coleções</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                </div>
                <hr className="linha-horizontal"></hr>

            </div>
        </div>

    )
}

export default Footer;
