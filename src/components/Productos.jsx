import React, { useEffect } from "react";
import Table from "react-bootstrap/Table"
import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Products = () => {
    
      const [ products, setProducts] = useState([]);
    
      const URL = 'https://backdeploy-production-0ce5.up.railway.app/product'
    
      const getProducts = async () =>{
    
        const { data } = await axios.get(URL);
        setProducts(data.products);
        console.log(products);
     }

     const deleteProduct = async (id) =>{
        alert(`eliminara un ususario ${id}`)
        await axios.put(`https://backdeploy-production-0ce5.up.railway.app/product/delete/${id}`);
        setProducts((prevProduct) =>
          prevProduct.filter((product) => product._id !== id)
        );
  
        
     }
     useEffect(()=>{
        getProducts();
     },[])
    return (
        <>
      <h1 className="text-center mt-5 mb-5">
            Listamos los Usuarios de la Database
      </h1>
        
      <Table striped="columns" className='container'>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoria</th>
            
          </tr>
        </thead>
        <tbody>
            {products.map(product =>
          <tr key={product._id}>
            {/* <td>{persona._id}</td> */}
            <td>{product.nombre}</td>
            <td>{product.precio}</td>
            
            <td>{product.stock}</td>
            <td>{product.categoria}</td>
            
            <td><button className ='button color'onClick={()=>deleteProduct(product._id)}>Eliminar usuario</button></td>
            <td><button className ='button color'><li><Link to={`/ProductUpDate/${product._id}`}>actualizar Datos</Link></li></button></td>
           
          </tr>
              )}
        </tbody>
        
      </Table>
    </>
  )
}

export default Products;