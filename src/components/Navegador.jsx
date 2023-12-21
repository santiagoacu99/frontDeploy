import React from "react";
import '../css/Navegador.css'
import logo1 from '../assets/logo.png';
import { Link } from "react-router-dom";
import { useState } from "react";

const Navegador = () => {

const [menu , setMenu] = useState(false)
const togglemenu = () =>{
    setMenu( !menu )
}



    return (
        <>
            <div className="header-container">
                <nav className="nav-bar">
                    <div className="logo">
                        <Link to='Home'><img src={logo1} alt="logo" /></Link>
                    </div>
                    <div className="buscador">
                        <input type="search" />
                        <i class="bi bi-search"></i>
                    </div>
                    <div className="icons">
                        <ul>
                            <li className="ingresar"><Link to='/Ingresar'><i class="bi bi-person" ></i><h3>Ingresar</h3></Link></li>
                            <li><a href=""><i class="bi bi-cart3 color: white"></i></a></li>
                        </ul>
                    </div>

                </nav>

                <nav className= "secondNavConteiner">
                    <button onClick={togglemenu} className="BurguerButoon">
                        <i class="bi bi-list"></i>
                    </button>
                </nav>
                <div className={`secondNav ${ menu ? 'isActive' : ''}`}>
                    <ul>
                        <li><Link to='/notebooks'>NOTEBOOK</Link></li>
                        <li><Link to='/placas'>PLACAS DE VIDEO</Link></li>
                        <li><Link to='/Monitores'>MONITORES</Link></li>
                        <li><Link to ='/Clientes'>CLIENTES</Link></li>
                        <li><Link to ='/newProducts'>CARGAR PRODUCTOS</Link></li>
                        <li><Link to ='/products'>PRODUCTOS</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Navegador;