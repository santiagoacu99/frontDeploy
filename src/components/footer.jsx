import React from "react";
import '../css/Footer.css'
import DATAWEB from '../assets/DATAWEB.jpg'

const Footer = () => {
    return (
        <>
            <footer className="footer-conteiner">
                <div >
                    <div className="atencion">
                        <h3>Atencion al cliente</h3>
                        <h4>0810-555-8893</h4>
                        <h4>consultas@shadowgaming.com</h4>
                        <h4>whatsapp +54 9 3382 462589</h4>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="atencion">
                    <h3>SE EL PRIMERO EN ENTERARTE</h3>
                    <h4>Suscribite y recibe las mejores promos!</h4>

                    <div className="sendEmail">
                        <input type="email" placeholder="Direccion emai..." />
                        <button><i class="bi bi-send-fill"></i></button>
                    </div>
                    <div className="redes">
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-whatsapp"></i>
                    </div>
                </div>
                <div className="dataF">
                    <img src={DATAWEB} alt="data fiscal" />
                </div>
            </footer>


        </>
    )
}

export default Footer