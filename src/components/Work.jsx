import React from "react";
import Delivery from "../assets/entrega.png";
import Choose from "../assets/mao.png";
import Restaurant  from "../assets/restaurante.png";
import { textFieldClasses } from "@mui/material";

const Work = () => {
  const WorkInfoData = [
    {
        image : Restaurant,
        title : "Escolha Seu Doce",
        text:  "Selecione entre nossas opções ou peça algo exclusivo",
    },
    {
        image : Choose,
        title : "Personalize",
        text:  "Adicione seu toque pessoal para tornar ainda mais especial",     
    },
    {
        image : Delivery,
        title : "Entrega",
        text: "Escolha a data e o local",
    },
  ];
  return (
    <div className="work__section-wrapper">
        <div className="work__section-top">
            <p className="primary__subheading">Entregas e encomendas</p>
            <h1 className="primary__heading">Como funciona</h1>
            <p className="primary__text">Transforme seus momentos especiais em memórias doces com nossas encomendas personalizadas. Seja para um aniversário, casamento ou evento corporativo, nossa equipe está pronta para criar o doce perfeito para sua ocasião.</p>
        </div>
        <div className="work__section-bottom">
          {
            WorkInfoData.map((data) => (
              <div className="work__section-info">
                <div className="info__boxes-img-container">
                  <img src={data.image} alt="image" />
                </div>
          
                <h2 className="work__section-title">{data.title}</h2>
                <p className="work__section-text">{data.text}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Work;