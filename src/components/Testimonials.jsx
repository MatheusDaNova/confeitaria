import React from "react";
import Pic from "../assets/Leonardo.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () =>{
    return(
        <div className="work__section-wrapper">
            <div className="work__section-top">
                <p className="primary__subheading">Depoimentos</p>
                <p className="primary__heading">O Que Nossos Clientes Dizem</p>
                <p className="primary__text">Confira abaixo alguns feedbacks que já recebemos pelo nosso trabalho de excelência</p>
            </div>
            <div className="testimonial__section-bottom">
                <img src={Pic} alt="" />
                <p>
                “A confeitaria fez o bolo de aniversário dos meus sonhos. A qualidade e o sabor foram impecáveis!”
                </p>
                <div className="testimonials__stars__container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Gabriel de Souza</h2>
            </div>
        </div>
    )
}

export default Testimonials;