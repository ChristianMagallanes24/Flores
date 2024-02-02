import React from "react";

import myNosotros from "../../assets/nosotros.jpeg";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <div className="sobre-nosotros">
        {/* Imagen para nosotros */}
        <div className="nosotros-img-container">
          <img className="nosotros-img" src={myNosotros} alt="xd" />
        </div>

        {/* sobre nosotros informacion "inicio" */}
        <div className="nosotros-info">
          <h2 className="nosotros-titulo">Contamos con variedades</h2>
          <p className="nosotros-parrafo">
            puedes ver nuestro catalogo
          </p>
          <Link to="/Productos" className="btn-nosotros">
            ver catalogo
          </Link>
        </div>
      </div>

     

      {/* que ofrecemos que va en el "inicio" */}
      <h1 className="titulo">¿Qué hacemos?</h1>
      <div className="que-ofrecemos-container">
        <div className="que-ofrecemos">
          <div className="que-ofrecemos-card">
            <div className="que-ofrecemos-card-text">
              <h1 className="que-ofrecemos-titulo">
                Reclutamiento y Selección
              </h1>
              <p className="que-ofrecemos-parrafo">
                Definimos el perfil del colaborador, reconocemos las
                necesidades e iniciamos la búsqueda.
              </p>
            </div>
          </div>

          <div className="que-ofrecemos-card">
            <div className="que-ofrecemos-card-text">
              <h1 className="que-ofrecemos-titulo">
                Consultoría organizaicional y recursos humanos
              </h1>
              <p className="que-ofrecemos-parrafo">
                Asesoría especializada en atracción del talento, onboarding,
                capacitación, desarrollo, clima, felicidad laboral,
                administración de personal.
              </p>
            </div>
          </div>

          <div className="que-ofrecemos-card">
            <div className="que-ofrecemos-card-text">
              <h1 className="que-ofrecemos-titulo">
                Consulta inicial e intervensiones sistémicas
              </h1>
              <p className="que-ofrecemos-parrafo">
                Estamos para escucharte, ayudarte con los procesos que impliquen
                decisiones importantes, clima, liderazgo.
              </p>
            </div>
          </div>
        </div>
        <div className="que-ofrecemos-card-btn-container">
          <button className="que-ofrecemos-btn">Saber mas</button>
        </div>
      </div>
      <div className="accion">
        <div className="accion-contenido">
          <h3 className="accion-titulo">
            ¡COMIENZA AHORA A CAMBIAR TU FUTURO!
          </h3>
          <button className="accion-btn">Postularme</button>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
