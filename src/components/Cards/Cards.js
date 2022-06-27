import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import imgcard1 from '../../img/contact.webp'
import imgcard2 from '../../img/foto2.png'
import imgcard3 from '../../img/loc.webp'
import '../Cards/Cards.css'
import { Context } from '../../store/AppContext';

const Cards = () => {
  const { turnero } = useContext(Context)
  return (
    <div className='container mb-5'>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        <div className="col">
          <div className="card h-100">
            <img src= {imgcard1} height="316" className="card-img-top" alt="..." />
            <div className="card-body bg-warning">
              <h5 className="card-title text-uppercase text-center">citas</h5>
              <p className="card-text fs-4 text-center text-white fw-bolder">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className='bg-warning d-flex justify-content-center'>
              <button type="button" className="btnc mt-5 mb-3 text-uppercase"><a className='text-decoration-none text-white ' href='https://koalendar.com/e/turnos' target="_blank">agendar</a></button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src= {imgcard2} className="card-img-top" alt="..." />
            <div className="card-body bg-warning">
              <h5 className="card-title text-uppercase text-center">contacto</h5>
              <p className="card-text fs-4 text-center text-white fw-bolder">TThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className='bg-warning d-flex justify-content-center'>
              <button type="button" className="btnc mt-5 mb-3 text-uppercase text-white">contactame</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src= {imgcard3} className="card-img-top" alt="..." />
            <div className="card-body bg-warning">
              <h5 className="card-title text-uppercase text-center">ubicacion</h5>
              <p className="card-text fs-4 text-center text-white fw-bolder">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className='bg-warning d-flex justify-content-center'>
              <button type="button" className="btnc mb-3 text-uppercase text-white">encuentrame</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Cards;