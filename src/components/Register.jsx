import React, { useState } from "react";
import logo1 from '../assets/logo.png';
import '../css/Ingresar.css'
import { Link } from "react-router-dom";
import axios from 'axios';

function Register() {

    /*     let nombre = '';
        nombre = '123456'; */
    
        //1. Creamos las variables con los estados
        const [ nombre, setNombre ] = useState(''); 
        const [ password, setPassword ] = useState('');
        const [localidad, setLocalidad] = useState('');
        const [direccion, setDireccion] = useState('');
        const [email, setEmail] = useState('');

        
    
        //2. Creamos la función que toma los datos del form y lo envía a la API
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            //Prueba de captura de datos
            console.log(`Nombre: ${nombre}`);
            console.log(`Password: ${password}`);
            console.log(`email:${email}`);
            console.log(`localidad:${localidad}`);
            console.log(`direccion :${direccion}`);
                        
                        
    
            //enviamos los datos con axios
            try{
    
                const enviarDatos = await axios.post('https://backdeploy-production-0ce5.up.railway.app/users/crear', {
                    nombre,
                    password,
                    email,
                    localidad,
                    direccion,
                   
                })
    
                console.log('Respuesta: ', enviarDatos.data);
    
                //vaciamos los inpus de datos
                setNombre('');
                setPassword('');
                setDireccion('');
                setEmail('');
                setLocalidad('');
              
    
            }catch(error){
                console.log(`Tenemos un error en ${error}`)
            }
    
        }

    return (
        <>   
                <section className="login-container" >
                    <h1>Bienvenido!</h1>
                    <figure className="logo1">
                        <Link to='/Home'><img src={logo1} alt="logo" /></Link>
                    </figure>
                    <form onSubmit={handleSubmit}>
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
                    <div className="user">
                        <h3>Contrasena</h3>
                        <input type="password"
                         placeholder="Contrasea"
                          value={password} 
                          onChange={(e) => setPassword(e.target.value)} />
                    </div>
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
                        <Link to={'/ingresar'}><button className="color" button >Iniciar secion</button></Link>
                        <button className="color " type="submit" variant="success">Registrate</button> 
                    </div>
                    
                    </form>
                </section>
        </>
    )
}
export default Register;