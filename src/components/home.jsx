import React from "react";
import Carrucel from './Main';
import '../css/Main.css';
import marcasrazer from '../assets/marcasrazer.webp';
import razerlogo from '../assets/razer1.webp';
import marcasaorus from '../assets/marcasaorus.webp';
import aoruslogo from '../assets/aorus1.webp';
import marcascorsair from '../assets/marcascorsair.webp';
import corsairlogo from '../assets/corsair1.webp';
import elgatomarcas from '../assets/marcaselgato.webp';
import elgatologo from '../assets/elgato1.webp';
import promosPcg from '../assets/pcgamers.webp'
import workstation from '../assets/workstation.webp'

const Home = () => {
    return (
        <>
            <Carrucel />
            <div className="MARCAS">
                <h2>LAS MEJORES MARCAS</h2>
                <div className="marcas1">
                    <div className="cards-marcas">
                        <img className="imgMarca" src={marcasrazer} alt="razer" />
                        <img className="logoMarca" src={razerlogo} alt="razer" />
                    </div>
                    <div className="cards-marcas">
                        <img className="imgMarca" src={marcasaorus} alt="aorus" />
                        <img className="logoMarca" src={aoruslogo} alt="aorus" />
                    </div>
                    <div className="cards-marcas">
                        <img className="imgMarca" src={marcascorsair} alt="corsair" />
                        <img className="logoMarca" src={corsairlogo} alt="corsair" />
                    </div>
                    <div className="cards-marcas">
                        <img className="imgMarca" src={elgatomarcas} alt="elgato" />
                        <img className="logoMarca" src={elgatologo} alt="elgato" />
                    </div>
                </div>
            </div>
            <div className="MARCAS">

                <h2>CONOCE NUESTRAS PROMOS</h2>
                <div className="promociones">
                    <figure>
                        <img src={promosPcg} alt="promos" />
                    </figure>
                    <figure>
                        <img src={workstation} alt="promos" />
                    </figure>

                </div>
            </div>

        </>

    )
}
export default Home;