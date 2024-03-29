import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul class="holder">
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/nuestrosproductos">Nuestros Productos</Link></li>
                    <li><Link to = "/nosotros">Nosotros</Link></li>
                    <li><Link to = "/novedades">Novedades</Link></li>
                    <li><Link to = "/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;