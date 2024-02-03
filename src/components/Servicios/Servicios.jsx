// Servicios.jsx
import React, { useEffect } from "react";
import miPago from "../../assets/pago.jpg";
import miEnvio from "../../assets/envios.jpg";

import "./_Servicios.scss";

const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="servicios-container">
      {/* Contenedor de la imagen */}
      <div className="servicios-img-container"></div>

      {/* Información del header */}
      <div className="info-container">
        <div className="info-card">
          <div className="img-container">
            <img className="img" src={miPago} alt="Pago" />
          </div>
          <div>
            <h1 className="titulo-card">Pagos Seguros</h1>
            <ul className="lista-check">
              <li> Aceptamos diversas formas de pago para tu comodidad.</li>
              <li> Nuestro sistema de pago en línea garantiza transacciones seguras y protegidas.</li>
              <li> Puedes confiar en que tu información financiera está en buenas manos.</li>
            </ul>
          </div>
        </div>

        <div className="info-card">
          <div>
            <h1 className="titulo-card">Envío Rápido y Seguro</h1>
            <ul className="lista-check">
              <li> Nuestro compromiso es brindarte un servicio de envío rápido y seguro.</li>
              <li> Después de confirmar tu pedido, nuestro equipo se encargará de preparar y empaquetar cuidadosamente tus productos.</li>
              <li> Utilizamos servicios de envío confiables para garantizar la entrega oportuna.</li>
            </ul>
          </div>
          <div className="img-container">
            <img className="img" src={miEnvio} alt="Envío" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
