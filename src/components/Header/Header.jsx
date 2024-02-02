import React from "react";
import { Link } from "react-router-dom";
import "./_Header.scss";
import miImagen from "../../assets/headerimg.png";

const Header = () => {
  return (
    <header className="header">
      <div className="img-header-container">
        <img className="header-img" src={miImagen} alt="Mi Imagen" />
      </div>
      {/* Información del header */}
      <div className="header-info">
        <div className="header-text">
          <div>
            <h1 className="header-titulo">Flores eternas</h1>
          </div>

          <div>
            <p className="parrafo-header">
              el mejor regalo para san valentín en este 14 de febrero!
            </p>
          </div>
        </div>
        
        {/* Utilizamos Link para enlazar a la página de productos */}
        <Link to="/Productos" className="btn-header">
          ver productos
        </Link>
      </div>
      {/* imagen del header */}
      
    </header>
  );
};

export default Header;
