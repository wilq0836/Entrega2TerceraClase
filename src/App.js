
import './App.css';
import ConstructorProductos from './Componentes/ConstructorArticulos/Constructor';
import ItemLisContainer from './Componentes/ComponentesPromise/ItemListContainer';
import Footer from './Componentes/ComponentesApp/Footer';
import React from 'react'; 
import Etiquetas from './Componentes/ComponentesApp/Cards';
import Navbar from './Componentes/ComponentesApp/Nabvar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Car from './Componentes/Car';
import { ImprimirRenglonesCarrito1 } from './Componentes/Tarjeta';
import { VerItem } from './Componentes/PedirItemPorId/VerItem';
import { VerItemMarca } from './Componentes/PedirItemPorMarca/VerItemMarca';



function App() {



  return (

    <div >

      <BrowserRouter>
      <Link className = "T" to='/'> <h1 className='titulo'>BIKESTWOGO</h1></Link>
      
      <Car></Car>
    
      <Navbar></Navbar>
    
      <Routes>
        <Route path='/'></Route>
       
        <Route path='/Car' element={<ImprimirRenglonesCarrito1/>}></Route>
        <Route path='/VerItem/:id' element={<VerItem/>}></Route> 
        <Route path='/VerItem/Categorias/:marca' element={<VerItemMarca/>}></Route> 
        <Route path='/contenedorFetch'element = {<ItemLisContainer className='ItemListContainer' greeting={"ContenedorFetch"}></ItemLisContainer>}></Route>
        <Route path='/constructor' element={<ConstructorProductos titulo={"Impresion desde app"} valorSeleccionadoLista={"todos"}></ConstructorProductos>}></Route>
        <Route path='/constructor2' element={<ConstructorProductos titulo={"Impresion desde app"} valorSeleccionadoLista={"Colnago"}></ConstructorProductos>}></Route>
        <Route path='/category/:categoryid' element={<ConstructorProductos titulo={"Impresion desde app"} valorSeleccionadoLista={"Scott"}></ConstructorProductos>}></Route>

      </Routes>

       <Etiquetas/>   
      
       <Footer></Footer>

          
       
       </BrowserRouter>
      
    </div>
  );
}


export default App;




