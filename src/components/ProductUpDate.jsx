import React, { useState, useEffect } from "react";
import logo1 from '../assets/logo.png';
import '../css/Ingresar.css'
import { Link, useParams, useNavigate} from "react-router-dom";
import axios from 'axios';


function ProductUpDate () {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const[categoria, setCategoria] = useState('');
    const [img, setImg] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const UpdateUsers = async (e) => {

        e.preventDefault()
        try {
            const putData = await axios.put(`https://backdeploy-production-0ce5.up.railway.app/product/update/${id}`, {
                nombre: nombre,
                precio: precio,
                stock: stock,
                categoria: categoria,
                img: img
            },
               
            )
            console.log(putData)
            navigate('/Productos')
        } catch (error) {
            console.log(error.response)
        }
    }
    useEffect(() => {
        getDataById(id)
    }, [id])
    const getDataById = async (id) => {
        const res = await axios.get(`https://backdeploy-production-0ce5.up.railway.app/product/GetById/${id}`,
          
        )
            console.log(res)
            setNombre(res.data.dataById.nombre)
            setPrecio(res.data.dataById.precio)
            setStock(res.data.dataById.stock)
            setCategoria(res.data.dataById.categoria)
            setImg(res.data.dataById.img)
        }
            
        

    
    return (
      <>   
      
      <section className="login-container" >
                    <h1>Bienvenido!</h1>
                    <figure className="logo1">
                        <Link to='/Home'><img src={logo1} alt="logo" /></Link>
                    </figure>
                    <form onSubmit={UpdateUsers} >
                    <div className="user">
                        <h3>Modelo</h3>
                        <input type="text"
                            placeholder="Ingrese su usuario"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}/>
                    
                    </div>
                    <div className="user">
                        <h3>Precio</h3>
                        <input type="text v"
                         placeholder="email"
                          value={precio} 
                          onChange={(e) => setPrecio(e.target.value)} />
                    </div>
                    <div className="user">
                
                        <h3>Stock</h3>
                        <input type="text"
                         placeholder="direccion"
                          value={stock} 
                          onChange={(e) => setStock(e.target.value)} />
                    </div>
                    <div className="user">
                        <h3>Categoria</h3>
                        <input type="text"
                         placeholder="localidad"
                          value={categoria} 
                          onChange={(e) => setCategoria(e.target.value)} />
                    </div>
                    <div className="user">
                        <h3>Imagen</h3>
                        <input type="text"
                         placeholder="localidad"
                          value={img} 
                          onChange={(e) => setImg(e.target.value)} />
                    </div>
          
          <div className="button">
              <button className="color " type="submit" variant="success">Actualizar Datos</button> 
          </div>
          
          </form>
      </section>
</>
    )
}

export default ProductUpDate ;