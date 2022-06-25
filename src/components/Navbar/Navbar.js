import React from "react";
import './Navbar.css'
import imagen from "../../img/foto3.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
    <div className="container-fluid">
        <a href="#" className="navbar-brand">
            <img src={imagen} height="28" alt="CoolBrand"/>
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
            <div className="navbar-nav">
                <a href="#" className="nav-item nav-link active me-2 item">Sobre MI</a>
                <a href="#" className="nav-item nav-link me-2">Cortes</a>
                <a href="#" className="nav-item nav-link me-2">Ubicacion</a>
                <a href="#" className="nav-item nav-link " tabIndex="-1">Contacto</a>
            </div>
        </div>
    </div>
</nav>
  );
};

export default Navbar;
