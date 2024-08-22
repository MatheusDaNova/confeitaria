import React from "react";
import  Logo from"../assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";


const Footer = () => {
    return (
        <div className="footer__wrapper">
            <div className="footer__section-one">
                <div className="footer__logo-container">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="footer__icons">
                    <BsTwitter />
                    <FaFacebookF />
                    <AiOutlineInstagram />
                    <AiOutlineLinkedin />
                </div>
            </div>
            <div className="footer__section-two">
                <div className="footer__section-columns">
                    <span>Produtos</span>
                    <span>Trabalhe conosco</span>
                    <span>Ajude</span>
                    <span>Fale conosco</span>
                    <span>Cardápio</span>
                    <span>Faça um pedido</span>
                </div>
                <div className="footer__section-columns">
                    <span>3333-5555</span>
                    <span>(21)9999-99999</span>
                    <span>Feedback</span>
                </div>
                <div className="footer__section-columns">
                    <span>Termos e condições</span>
                    <span>Política de privacidade</span>
                </div>
                <span className="footer__copy">&#169; Matheus Pereira , Todos os direitos reservados</span>
            </div>
        </div>
    )
}
export default Footer;