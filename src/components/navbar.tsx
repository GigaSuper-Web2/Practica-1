import React from "react";
import {Link} from "react-router-dom";

const navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary  border-body" data-bs-theme="dark" >
            <ul className="container-fluid">
                <span className="navbar-brand">  <Link to="/" >Inicio</Link>   </span>
                <span className="navbar-brand">  <Link to="lista" >Problema 1</Link>   </span>
                <span className="navbar-brand">  <Link to="/combos" >Problema 2</Link>   </span>
                <span className="navbar-brand">  <Link to="quiz" >Problema 3</Link>   </span>
                <span className="navbar-brand">  <Link to="#" >Problema 4</Link>   </span>
            </ul>
        </nav>
    )
}

export default navbar;