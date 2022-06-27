import React from "react";
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid mb-5">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mt-5" id="navbarNav">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item me-5 ms-2">
                                <button className="btnn btn-dark opacity-75 text-warning text-uppercase" type="button">cortes</button>
                            </li>
                            <li className="nav-item">
                                <button className="btnn btn-dark opacity-75 text-warning text-uppercase" type="button">sobre mi</button>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item me-5">
                                <button className="btnn btn-dark opacity-75 text-warning text-uppercase" type="button">citas</button>
                            </li>
                            <li className="nav-item me-2">
                                <button className="btnn btn-dark opacity-75 text-warning text-uppercase" type="button">contacto</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                
                            </li>
                            <li className="nav-item">
                                
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                
                            </li>
                            <li className="nav-item">
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav> */}