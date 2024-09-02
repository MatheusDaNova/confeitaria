import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact__page-wrapper">
            <h1 className="primary__heading">Dúvidas?</h1>
            <h1 className="primary__heading">Nós respondemos pra você</h1>
            <div className="contact__form-container">
                <input type="text" placeholder="Seu email aqui" />
                <button className="secondary__button">Enviar</button>
            </div>
        </div>
    )
}
export default Contact;