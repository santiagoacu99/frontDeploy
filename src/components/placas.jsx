
//import '../productos'
import '../css/placas.css'
//import PlacasDeVideo from "../productos";
import publicg from '../assets/publicg.webp'
import NVIDIA from '../assets/NVIDIA.webp'
import AMD from '../assets/AMD.png'

import { useState, useEffect } from 'react';
import axios from 'axios';

const Placas = () => {
    const [ products, setProducts] = useState([]);
    
      const URL = 'https://backdeploy-production-0ce5.up.railway.app/product'
    
      const getProdcts = async () =>{
    
        const { data } = await axios.get(URL);
        setProducts(data.products);
        console.log(products);
     }
     

     const placas = products.filter(products =>
         products.categoria === 'placas')

    
     useEffect(()=>{
        getProdcts();
     },[])

    return (
        <>

            <div className='public-conteiner'>
                <div className='graficas'>
                    <img src={publicg} alt="publicg" />
                </div>
                <div className='publicText'>
                    <h2>Placas De Video</h2>
                    <p>Lo ultimo en innovación de tarjetas gráficas, con la tecnología de Nvidia y AMD ¡dale una experiencia única a tu juego!</p>
                </div>
            </div>
            <div className='cardcontainer'>
                {placas.map((product) => {
                    const handleBuy = () =>{
                        alert(`compra realizada: ${product.nombre}`)
                    }
                    return (
                        <div className='cards'>
                            <div className='img-container'>
                                <img src={product.img} alt={product.nombre} />
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
                    <img src={NVIDIA} alt="NVIDIA" />
                    <h3>Placas de Video NVIDIA</h3>
                </figure>
                <figure className='marcas'>
                    <img src={AMD} alt="AMD" />
                    <h3>Placas de Video AMD</h3>
                </figure>

            </div>
        </>
    )
}
export default Placas;
