
import './App.css';
import ConstructorProductos from './Componentes/ConstructorArticulos/Constructor';
import ItemLisContainer from './Componentes/ComponentesPromise/ItemListContainer';
import Footer from './Componentes/ComponentesApp/Footer';
import Etiquetas from './Componentes/ComponentesApp/Cards';
import Navbar from './Componentes/ComponentesApp/Nabvar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { VerItem } from './Componentes/PedirItemPorId/VerItem';
import { VerItemMarca } from './Componentes/PedirItemPorMarca/VerItemMarca';
import CarWidget from './Componentes/CarCompras/CarWidget';
import { CartProvaider } from './Componentes/Context/CarContext';
import { VerItemFetch } from './Componentes/ComponentesPromise/VerItemId';


function App() {


  return (

    <div >
    
    <CartProvaider>

      
      <BrowserRouter>
    
      <Link className = "T" to='/'> <h1 className='titulo'>BIKESTWOGO</h1></Link>
   
     
      <Navbar></Navbar>
      <Routes>
        <Route path='/'></Route>  
        <Route path='/Carrito' element={<CarWidget></CarWidget>}></Route>   
        <Route path='/VerItem/:id' element={<VerItem/>}></Route> 
        <Route path='/VerItem/Categorias/:marca' element={<VerItemMarca/>}></Route> 
        <Route path='/contenedorFetch'element = {<ItemLisContainer className='ItemListContainer' greeting={"ContenedorFetch"}></ItemLisContainer>}></Route>
        <Route path='/VerItemFetch/:id'element = {<VerItemFetch/>}></Route>
        <Route path='/constructor' element={<ConstructorProductos titulo={"Impresion desde app"} valorSeleccionadoLista={"todos"} propiedad={"Biblioteca"}></ConstructorProductos>}></Route>
        <Route path='/constructor2' element={<ConstructorProductos titulo={"Impresion desde app"} valorSeleccionadoLista={"Colnago"} propiedad={"Biblioteca"}></ConstructorProductos>}></Route>
        <Route path='/category/:categoryid' element={<ConstructorProductos titulo={"Impresion desde app"} valorSeleccionadoLista={"Scott"} propiedad={"Biblioteca"}></ConstructorProductos>}></Route>
       
      </Routes>
      
     

    
        <Etiquetas/>   
      
      
      
       <Footer></Footer>

      
       
       </BrowserRouter>
       
       </CartProvaider>
    </div>
  );
}


export default App;




