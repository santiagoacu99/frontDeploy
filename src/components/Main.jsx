import React from "react";
import '../css/Main.css'
import gamingxp from '../assets/gamingxp.png'
import pc from '../assets/pc.webp'
import monitor from '../assets/razer.webp'

const Carrucel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={gamingxp} className="d-block w-100" alt="..." />
            <div className=" carousel-caption  d-md-flex h-90  ">
              <div className="carousel-info">
                <h2>MH Gaming <br />Xperience</h2>
                <p>La Xperiencia Gamer Definitiva</p>
                <button>CONOCE MAS</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pc} className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-flex h-90 ">
              <div className="carousel-info">
              <h2>PC GAMERS</h2>
              <p>¿Lag? ¡Jamás! Potencia tu juego con nuestras PC gamers</p>
              <button > ¡ADIOS LAG!</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={monitor} className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-flex h-90">.
            <div className="carousel-info">

              <h2>Por Gamers,<br /> para Gamers</h2>
              <p>Equipos de vanguardia para una experiencia gaming insuperable</p>
              <button>COMPRA RAZER</button>
            </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>

  );
}
export default Carrucel;