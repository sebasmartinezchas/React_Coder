import React from "react";
import navbar from "../NavBar/navbar.css";
import logo from "../NavBar/logo.png";
import CartWidgets from "./CartWidgets";
import { Link,NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo Adidas" />
            <div className="title"> Adidas Store</div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/category/hombre" className={({isActive})=>isActive?'select':'unselect'}>
            Hombre
          </NavLink>
        </div>
        <div>
          <NavLink to="/category/mujer" className={({isActive})=>isActive?'select':'unselect'}>
            Mujer
          </NavLink>
        </div>
        <div>
          <NavLink to="/category/niños" className={({isActive})=>isActive?'select':'unselect'}>
            Niños
          </NavLink>
        </div>

        <CartWidgets />
      </nav>
    </header>
  );
};

export default NavBar;
