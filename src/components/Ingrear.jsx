import React, { useState } from "react";
import logo1 from '../assets/logo.png';
import '../css/Ingresar.css'
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';

function Formulario() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();
  
  
    const handleSubmit = async (e) =>{
          e.preventDefault();
          console.log(`email: ${email}`)
          console.log(`password: ${password}`)
  
          try {
                const enviarDatos = await axios.post( 'https://backdeploy-production-0ce5.up.railway.app/users/ingresar', {
                    email,
                    password
  
                } )
  
                if (enviarDatos.data.isValidCredentials === true) { 
                  console.log("es valido");
                    navigate('/home')
                  }else {
                  alert("usuario y/o contraseña inválido");
                  setEmail('');
                  setPassword('');
                 }
  
                
          } catch (error) {
                console.log(`Tenemos un error en: ${error}`);
          }
  
  
  
  
    }

    return (
        <>   
                <section className="login-container" >
                    <h1>Bienvenido!</h1>
                    <figure className="logo1">
                        <Link to='/Home'><img src={logo1} alt="logo" /></Link>
                    </figure>
                    <form  onSubmit={ handleSubmit } >
                    <div className="user">
                        <h3>Usuario</h3>
                        <input type="email"
                            value={email}
                            placeholder="Ingrese su usuario"
                        onChange={ (e) => setEmail (e.target.value) }
                            />
                    
                    </div>
                    <div className="user">
                        <h3>Contrasena</h3>
                        <input type="password"
                         placeholder="Contrasea"
                         value={password}
                         onChange={ (e) => setPassword (e.target.value) }
                           />
                    </div>
                    
                    <div className="button">
                        <button className="color"  type="submit">Iniciar secion</button>
                        <Link to={'/register'}><button className="color" type="submit" variant="success">Registrate</button> </Link>
                    </div>
                    
                    </form>
                </section>
        </>
    )
}

export default Formulario;