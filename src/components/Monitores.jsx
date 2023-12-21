
import '../css/placas.css'
import publicm from '../assets/publicm.webp'
import monitoresG from '../assets/monitorsG.png'
import monitores144 from '../assets/monitores144.png'
import React, { useEffect } from "react";

import { useState } from 'react';
import axios from 'axios';

const Monitores1 = () => {
    const [ products, setProducts] = useState([]);
    
      const URL = 'https://backdeploy-production-0ce5.up.railway.app/product'
    
      const getProdcts = async () =>{
    
        const { data } = await axios.get(URL);
        setProducts(data.products);
        console.log(products);
     }
     

     const monitores = products.filter(products =>
         products.categoria === 'monitor')

    
     useEffect(()=>{
        getProdcts();
     },[])

     return (
        <>
            <div >
                <div className='graficas'>
                    <img src={publicm} alt="publicm" />
                </div>
                <div className='publicText'>
                    <h2>Monitores</h2>
                    <p>Encontrar el monitor perfecto para tus largas horas de juego nunca fue tan fácil. En nuestra selección de monitores, vas a encontrar las mejores marcas gaming con la resolución, relación de aspecto y frecuencia que buscas para una experiencia de juego sin igual.
                        No te conformes con un monitor cualquiera.
                        <br />
                         Elegí nuestros monitores de alta calidad, con las mejores marcas gaming y la resolución que buscas para una experiencia de juego sin igual. ¡No esperes más, chequeá nuestra selección de monitores y llevá tu experiencia de juego al siguiente nivel!</p>
                </div>
            </div>
            <div className='cardcontainer'>
                {monitores.map((product) => {
                    const handleBuy = () =>{
                        alert(`compra realizada: ${product.nombre}`)
                    }
                    return (
                        <div className='cards'>
                            <div className='img-container'>
                                <img src={product.img} alt={product.modelo} />
                            </div>
                            <div className='modelo-container'>
                                <h2>{product.nombre}</h2>
                                <h3>${product.precio}</h3>
                            </div>
                            <button onClick={handleBuy}>comprar</button>
                        </div>
                    );
                }
                )
                }
            </div>
            <div className='marcas-container'>
                <figure className='marcas'>
                    <img src={monitoresG} alt="NVIDIA" />
                    <h3>Monitores gamer</h3>
                </figure>
                <figure className='marcas'>
                    <img src={monitores144} alt="AMD" />
                    <h3>Monitores 144 hz</h3>
                </figure>

            </div>
        </>
    )
}
export default Monitores1;
