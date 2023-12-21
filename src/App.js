import { Routes , Route,  } from 'react-router-dom';
import './css/App.css';
import Navegador from './components/Navegador';
import Ingresar from './components/Ingrear';
import Home from './components/home';
import Placas from './components/placas';
import Monitores1 from './components/Monitores';
import Footer from './components/footer';
import Notebooks1 from './components/Notebooks';
import Clientes from './components/Clientes';
import NewProduct from './components/newProduct';
import UserUpData from './components/UserUpDate';
import Register from './components/Register';
import Products from './components/Productos';
import ProductUpDate from './components/ProductUpDate';
function App() {
  return (
    <div className="App">
      <Navegador />
      <Routes>
         <Route path='/' element ={ <Ingresar />}></Route>
         <Route path='/home' element ={ <Home />}></Route>
         <Route path='/Ingresar' element = { <Ingresar />}></Route> 
         <Route path='/placas' element ={ <Placas />}></Route>
         <Route path='/Monitores' element = {<Monitores1 />}></Route>
         <Route path='/Notebooks' element = {<Notebooks1 />}></Route>
         <Route path='/clientes' element = {<Clientes />}></Route>
         <Route path='/newProducts' element = {<NewProduct />}></Route>
         <Route path='/UserUpDate/:id' element = {<UserUpData />}></Route>
         <Route path='/register' element = {<Register />}></Route>
         <Route path='/products' element = {<Products />}></Route>
         <Route path='/ProductUpDate/:id' element = {<ProductUpDate />}></Route>
         
      </Routes>
      <Footer />
  
    </div>
  );
}

export default App;
