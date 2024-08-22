import React from "react";
import Header from "./Header";
import Banner from"../assets/fundo.png";
import { FiArrowRight } from "react-icons/fi";
import Cupcake from "../assets/Cupcake.png";

const Home = () =>{
    return(
        <div className="home__container">
            <Header />
            <div className="home__banner-container">
                <div className="home__bannerImage-container">
                    <img src={Banner} alt="" />
                </div>
                <div className="home__text-container">
                    <h1 className="primary__heading">Os melhores doces você encontra aqui!</h1>
                    <p className="primary__text">Delicie-se com nossas criações artesanais feitas com amor e ingredientes frescos.</p>
                    <p className="primary__text">Explore nosso menu e descubra o sabor da felicidade!</p>
                    <button className="secondary__button">
                        Peça agora <FiArrowRight />
                    </button>
                </div>
                <div className="home__image-section">
                    <img src={Cupcake} alt="" />
                </div>
            </div>
        </div>
    );
}
export default Home;