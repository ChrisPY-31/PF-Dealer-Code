import React from "react";

const Footer = () => {
  return (
    <footer style={{ background: "#1b1b32" }} className="h-72 mt-10">
      <div className="w-3/4 mx-auto grid grid-cols-4 py-5 gap-8">
        <div className="">
          Dealer Code
          <div>
            <p>Transformamos la economía de nuestros países </p>
          </div>
          <div className="mt-5">
            <p>Aprende en nuestras redes:</p>
            <div className="flex w-full justify-around mt-5">
              <img
                className="w-8"
                src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/6304a2578abd315b18c8f6e9_twitter-logo.png"
                alt="Twiter"
              />
              <img
                className="w-8"
                src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png"
                alt="Facebook"
              />
              <img
                className="w-8"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                alt="Instagram"
              />
              <img
                className="w-8"
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-youtube-logo-6858731-5638275.png?f=webp"
                alt="Youtube"
              />
            </div>
          </div>
        </div>
        <div className="">
          <h3>Planes de Estudio</h3>
          <div>
            <ul>
              <li>Desarollador web</li>
              <li>Desarollador JavaScript</li>
              <li>Desarrollador Python</li>
              <li>Introduccion a la programacion</li>
              <li>Inteligencia Artificial</li>
            </ul>
          </div>
        </div>
        <div className="">
          <h3>Dealer code descripton</h3>
          <div>
            <ul>
              <li>cursos</li>
              <li>Termino y condiciones</li>
              <li>Aviso de Privacidad</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
        <div className="">Descarga la app</div>
      </div>
    </footer>
  );
};

export default Footer;
