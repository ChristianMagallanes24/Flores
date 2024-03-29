import React, { useState, useEffect } from 'react';
import { LuPackageCheck } from "react-icons/lu";
import miP from "../../assets/p1.webp";
import miP2 from "../../assets/p2.jpg";
import miP3 from "../../assets/p3.jpg";

import "./Productos.scss";

const Productos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleEncargarClickFlorIndividual = () => {
    const productoSeleccionado = {
      nombre: "Flor individual",
      precio: "$150",
    };

    const mensajeWhatsApp = `Hola, estoy interesado en encargar el producto ${productoSeleccionado.nombre} ${productoSeleccionado.precio}`;

    const numeroTelefono = "+59897007813";

    const enlaceWhatsApp = `https://wa.me/${numeroTelefono}/?text=${encodeURIComponent(mensajeWhatsApp)}`;

    window.open(enlaceWhatsApp, '_blank');
  };

  const handleEncargarClickRamoDe4 = () => {
    const productoSeleccionado = {
      nombre: "Ramo de 4",
      precio: "$300",
    };

    const mensajeWhatsApp = `Hola, estoy interesado en encargar el producto ${productoSeleccionado.nombre} ${productoSeleccionado.precio}`;

    const numeroTelefono = "+59897007813";

    const enlaceWhatsApp = `https://wa.me/${numeroTelefono}/?text=${encodeURIComponent(mensajeWhatsApp)}`;

    window.open(enlaceWhatsApp, '_blank');
  };

  return (
    <div className="productos-container">
      <div className='span-productos'>
        <span><LuPackageCheck  className='spann'/>Envios a todo el pais!</span>
      </div>
      <section className='section-productos'>
        <div className='card'> 
          <h2 className='card-titulo'>Flor individual</h2>
          <div className='img' onClick={() => handleImageClick(miP)}>
            <img className='img-producto' src={miP} alt="p" />
          </div>
          <div className='card-decripcion'>
            <p className='card-precio'>$150</p>
            <p className='card-descripcion'>flor individual, colores:
            rojo, rosa, blanco, azul.</p>
          </div>
          <button className='producto-btn' onClick={handleEncargarClickFlorIndividual}>Encargar</button>
        </div>

        <div className='card'> 
          <h2 className='card-titulo'>ramo de 4</h2>
          <div className='img' onClick={() => handleImageClick(miP2)}>
            <img className='img-producto' src={miP2} alt="p" />
          </div>
          <div className='card-decripcion'>
            <p className='card-precio'>$300</p>
            <p className='card-descripcion'>ramo de 4:, colores a eleccion: <br />
            rojo, rosa, blanco, azul.</p>
          </div>
          <button className='producto-btn' onClick={handleEncargarClickRamoDe4}>Encargar</button>
        </div>
      </section>

      {/* Modal para la imagen en pantalla completa */}
      {selectedImage && (
        <div className="fullscreen-image">
          <div className="close-button" onClick={handleCloseModal}>&times;</div>
          <img src={selectedImage} alt="Fullscreen" />
        </div>
      )}
    </div>
  );
};

export default Productos;
