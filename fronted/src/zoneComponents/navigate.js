import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
          
            <Link className="navbar-brand" to="/">inicio</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" mr-auto" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/createUsers">Registrarse</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/cuenta"> Cuenta</Link>
                  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Cerrar Sesion</Link>
                 
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
    )
  }
}
