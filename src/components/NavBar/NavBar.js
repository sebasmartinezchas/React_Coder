import React from "react";
import navbar from "../NavBar/navbar.css";
import logo from "../NavBar/logo.png";
import CartWidgets from "./CartWidgets";
import{Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <i className="material-icons menu-icon">menu</i>
          <div className="logo">
            <Link to='/'>
            <img src={logo} alt="logo Adidas" />
            </Link>
            
            <div className="text"> Adidas Store</div>
          </div>
          <div className="item search right" tabIndex="0">
            <div className="search-group">
              <select>
                <option value="all">Todos</option>
                <option value="all">Hombre</option>
                <option value="all">Mujer</option>
                <option value="all">Niños</option>
              </select>
              <input type="text" />
              <i className="material-icons search-icon">search</i>
            </div>
          </div>

          <a href="/" className="  item">
            <div className="group">
              <i className="material-icons">account_circle</i>
              <div className="detail">
                Cuenta
                <div className="sub">Ingresar</div>
              </div>
            </div>
          </a>
          <CartWidgets />
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
