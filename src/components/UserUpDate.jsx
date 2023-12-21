import React, { useState, useEffect } from "react";
import logo1 from '../assets/logo.png';
import '../css/Ingresar.css'
import { Link, useParams, useNavigate} from "react-router-dom";
import axios from 'axios';


function UserUpData() {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [direccion, setDireccion] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const UpdateUsers = async (e) => {

        e.preventDefault()
        try {
            const putData = await axios.put(`https://backdeploy-production-0ce5.up.railway.app/users/update/${id}`, {
                nombre: nombre,
                email: email,
               
                localidad: localidad,
                direccion: direccion
            },
               
            )
            console.log(putData)
            navigate('/Clientes')
        } catch (error) {
            console.log(error.response)
        }
    }
    useEffect(() => {
        getDataById(id)
    }, [id])
    const getDataById = async (id) => {
        const res = await axios.get(`https://backdeploy-production-0ce5.up.railway.app/users/GetById/${id}`,{
          
        })
        console.log(res)
        setNombre(res.data.dataById.nombre)
        setEmail(res.data.dataById.email)
        
        setLocalidad(res.data.dataById.localidad)
        setDireccion(res.data.dataById.direccion)

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
                        <h3>Usuario</h3>
                        <input type="text"
                            placeholder="Ingrese su usuario"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}/>
                    
                    </div>
                    <div className="user">
                        <h3>email</h3>
                        <input type="email"
                         placeholder="email"
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="user">
                   
                        <h3>Direccion</h3>
                        <input type="text"
                         placeholder="direccion"
                          value={direccion} 
                          onChange={(e) => setDireccion(e.target.value)} />
                    </div>
                    <div className="user">
                        <h3>Localidad</h3>
                        <input type="text"
                         placeholder="localidad"
                          value={localidad} 
                          onChange={(e) => setLocalidad(e.target.value)} />
                    </div>
          
          <div className="button">
              <button className="color " type="submit" variant="success">Actualizar Datos</button> 
          </div>
          
          </form>
      </section>
</>
    )
}

export default UserUpData;