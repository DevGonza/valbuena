import React from 'react'
import img1 from '../../img/foto1.jpg'
import img2 from '../../img/foto2.webp'
import img3 from '../../img/foto4.png'
import img4 from '../../img/foto53.jpg'
import './Carrusel.css'


const Carrusel = () => {
  return (
    <div className='container'>
      <h2 className="estilo text-uppercase text-center text-warning">Encuentra tu estilo</h2>
      <div className="container d-flex justify-content-center mt-3">
        <div id="carouselExampleFade" className="carousel slide carousel-fade w-50" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} height="450" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} height="450" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} height="450" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img4} height="450" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>


  )
}

export default Carrusel





{/*  */ }

{/* <div id="carouselExampleControls" className="carousel slide w-100 d-flex justify-content-center " data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} width="600" height="750" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} width="600" height="750" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} width="600" height="750" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img4} width="600" height="750" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}