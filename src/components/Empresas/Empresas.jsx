import React from "react";
import "./Empresas.css";
const Empresas = () => {
  return (
    <div className="w-10/12 ">
        <h2 className= " mt-12 font-medium text-2xl">Empresas que contraran a nuestros alumnos</h2>
      <div className="flex mt-8 ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png" className="bg-indigo-400 h-12 w-40 slide-right mx-4"></img>
        <div className="bg-indigo-400 h-12 w-40 slide-right mx-4">Pandora</div>
        <div className="bg-indigo-400 h-12 w-40 slide-right mx-4">Amazon</div>
        <div className="bg-indigo-400 h-12 w-40 slide-right mx-4">Facebook</div>
        <div className="bg-indigo-400 h-12 w-40 slide-right mx-4">Linkedin</div>
        <div className="bg-indigo-400 h-12 w-40 slide-right mx-4">
          Instagram
        </div>
        <div className="bg-indigo-400 h-12 w-40 slide-right mx-4">
          Instagram
        </div>
      </div>

      <div className="flex mt-2 ">
        <div className="bg-indigo-400 h-12 w-40 slide-left mx-4">Google</div>
        <div className="bg-indigo-400 h-12 w-40 slide-left mx-4">Pandora</div>
        <div className="bg-indigo-400 h-12 w-40 slide-left mx-4">Amazon</div>
        <div className="bg-indigo-400 h-12 w-40 slide-left mx-4">Facebook</div>
        <div className="bg-indigo-400 h-12 w-40 slide-left mx-4">Linkedin</div>
        <div className="bg-indigo-400 h-12 w-40 slide-left mx-4">
          Instagram
        </div>
        <div className="bg-indigo-400 h-12 w-40 slide-left mx-4">
          Instagram
        </div>
      </div>
      

    </div>
  );
};

export default Empresas;
