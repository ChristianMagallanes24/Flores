import React, { useState } from "react";
import { Link } from "react-router-dom";
import miLogo from "../../assets/logo.png";
import "../../components/NavBar/_NavBar.scss";
import { IoIosRose } from "react-icons/io";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleButtonClick = (section) => {
    console.log(`Navegar a: ${section}`);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <Link to="/">
          <img className="logo" src={miLogo} alt="logo" />
        </Link>
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link
          to="/"
          className={`nav-btn ${location.pathname === "/" && "active"}`}
          onClick={() => handleButtonClick("")}
        >
          <IoIosHome className="nav-icon" />
          Inicio
        </Link>
        <Link
          to="/Productos"
          className={`nav-btn ${
            location.pathname === "/Productos" && "active"
          }`}
          onClick={() => handleButtonClick("Productos")}
        >
          <IoIosRose className="nav-icon" />
          Productos
        </Link>
        <Link
          to="/servicios"
          className={`nav-btn ${
            location.pathname === "/servicios" && "active"
          }`}
          onClick={() => handleButtonClick("servicios")}
        >
          <GiCommercialAirplane className="nav-icon" />
          pagos y envios
        </Link>
      
        
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
