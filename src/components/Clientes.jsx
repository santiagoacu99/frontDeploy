import React, { useEffect } from "react";
import Table from "react-bootstrap/Table"
import { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const Clientes = () => {
    
      const [ personas, setPersonas] = useState([]);
    
      const URL = 'https://backdeploy-production-0ce5.up.railway.app/users'
      const {id} = useParams
    
      const getPersona = async () =>{
    
        const { data } = await axios.get(URL);
        setPersonas(data.personas);
        console.log(personas);
     }

     const deleteUser = async (id) =>{
        alert(`eliminara un ususario ${id}`)
        await axios.put(`https://backdeploy-production-0ce5.up.railway.app/users/delete/${id}`);
        setPersonas((prevPersonas) =>
          prevPersonas.filter((perosnas) => perosnas._id !== id)
        );
  
        
     }
     useEffect(()=>{
        getPersona();
     },[])
    return (
        <>
      <h1 className="text-center mt-5 mb-5">
            Listamos los Usuarios de la Database
      </h1>
      <Table striped="columns" className='container'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>email</th>
            <th>Localidad</th>
            <th>Direccion</th>
            {/* <th>contraseña</th>
            <th>id</th> */}
          </tr>
        </thead>
        <tbody>
            {personas.map(persona =>
          <tr key={persona._id}>
            <td>{persona.nombre}</td>
            <td>{persona.email}</td>
            <td>{persona.localidad}</td>
            <td>{persona.direccion}</td>
            {/* <td>{persona.password}</td> */}
            {/* <td>{persona._id}</td> */}
            <td><button onClick={()=>deleteUser(persona._id)}>eliminar usuario</button></td>
            <td><Link to={`/UserUpDate/${persona._id}`}><button>actualizar Datos</button></Link></td>
           
          </tr>
              )}
        </tbody>
        
      </Table>
    </>
  )
}

export default Clientes;