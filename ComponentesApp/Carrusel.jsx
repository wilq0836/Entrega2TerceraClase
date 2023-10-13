function Carrusel(){

    return( 
        <div className="Carrusel">
        <div  id="carouselExampleRide" className ="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div className="carousel-item active">
      <img  src={require("../img/fondo.jpg")} className="imagenCarrusel" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require("../img/Carrusel2.jpg")} className="imagenCarrusel" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require("../img/Carrusel3.jpg")} className="imagenCarrusel" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require("../img/carrusel1.jpg")} className="imagenCarrusel" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}
export default Carrusel;