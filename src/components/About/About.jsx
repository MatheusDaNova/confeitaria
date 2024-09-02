import React from "react";
import Background from "../../assets/fundo1.png";
import Image from "../../assets/Cake3.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "./About.css"

const About = () => {
    return (
        <div className="about__section-container">
            <div className="about__background-image-container">
                <img src={Background} alt="" />
            </div>
            <div className="about__section-image-container">
                <img src={Image} alt="" />
            </div>
            <div className="about__section-text-container">
                <p className="primary__subheading">Sobre nós</p>
                <h1 className="primary__heading">Uma vida doce é uma vida feliz</h1>
                <p className="primary__text">
                    Nossa paixão por doces é o que nos move. Fundada em 2024, nossa confeitaria é dedicada a criar momentos doces e inesquecíveis para você e sua família.
                </p>
                <p className="primary__text">
                    Utilizamos apenas ingredientes selecionados e técnicas tradicionais para garantir que cada bolo e sobremesa seja perfeito.
                </p>
                <div className="about__buttons-container">
                    <button className="secondary__button">Saiba mais</button>
                    <button className="watch-video-button">
                        {" "}
                        <BsFillPlayCircleFill /> Assita ao vídeo
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About;