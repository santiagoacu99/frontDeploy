import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const NewProduct= ()=> {

 /*     let nombre = '';
    nombre = '123456'; */

    //1. Creamos las variables con los estados
    const [ nombre, setNombre] = useState(''); 
    const [ stock, setStock ] = useState('');
    const [ precio, setPrecio ] = useState('');
    const [ categoria, setCategortia ] = useState('');
    const [ img, setImg ] = useState('');
   

    //2. Creamos la función que toma los datos del form y lo envía a la API
    const handleSubmit = async (e) => {
        e.preventDefault();

        //Prueba de captura de datos    
         console.log(`Nombre: ${nombre}`);
         console.log(`Stock: ${stock}`);
         console.log(`Precio: ${precio}`);

        //enviamos los datos con axios
        try{

            const enviarDatos = await axios.post('https://backdeploy-production-0ce5.up.railway.app/product/crear', {
                nombre,
                precio,
                stock,
                categoria,
                img,
                
            })

            console.log('Respuesta: ', enviarDatos.data);

            //vaciamos los inpus de datos
            setNombre('');
            setStock('');
            setPrecio('');
            setCategortia('');
            setImg('');

        }catch(error){
            console.log(`Tenemos un error en ${error}`)
        }

    }

    return (
        <>
            <h1 className="container mt-5 text-center">
                cargar producto
            </h1>
            <div className="container mt-5 d-flex">
                <Form onSubmit={ handleSubmit } className='w-75'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre: </Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="producto"
                            value= { nombre }
                            onChange={(e) => setNombre(e.target.value)}
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>price: </Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="precio" 
                            value = { precio }
                            onChange={(e) => setPrecio(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>stock: </Form.Label>
                        <Form.Control 
                            type="number" 
                            value={ stock }
                            onChange={(e) => setStock(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Categoria: </Form.Label>
                        <Form.Control 
                            type="text" 
                            value={ categoria }
                            onChange={(e) => setCategortia(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Img: </Form.Label>
                        <Form.Control 
                            type="text" 
                            value={ img }
                            onChange={(e) => setImg(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button type='submit' variant="success">Enviar Datos</Button>
                    </div>
                </Form>

               
            </div>
        </>
    );
}

export default NewProduct;