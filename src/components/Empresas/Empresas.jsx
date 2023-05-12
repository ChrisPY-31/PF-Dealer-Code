import React from "react";
import { Asociados, Asociados2 } from "./EmpresasLogo";
import "./Empresas.css";
const Empresas = () => {
  return (
    <div className="w-10/12 ">
        <h2 className= " mt-12 font-medium text-2xl">Empresas que contraran a nuestros alumnos</h2>
      <div className="flex mt-8 ">
        {Asociados.map(empresa => (
        <img 
        key={empresa.id} 
        src={empresa.image} 
        alt={empresa.name}
        className="bg-white rounded-md h-12 w-40 slide-right mx-4"
        />  
        ))}
      </div>

      <div className="flex mt-2 ">
      {Asociados2.map(empresa => (
        <img 
        key={empresa.id} 
        src={empresa.image} 
        alt={empresa.name}
        className="bg-white rounded-md h-12 w-40 slide-left mx-4"
        />  
        ))}
      </div>
      

    </div>
  );
};

export default Empresas;
