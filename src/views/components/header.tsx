import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/favicon.png'
function header(){
    
    return(
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <NavLink className="navbar-brand bold" to="/home">
            <img src={logo} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" id="Home" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" id="Contact" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" id="Project" to="/projects">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" id="Service" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" id="About" to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
    )
}

export default header;