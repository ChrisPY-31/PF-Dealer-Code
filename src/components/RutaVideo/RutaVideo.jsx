'use client'
import React from "react";
import { useState } from "react";
import Comentarios from "../Comentarios/Comentarios";
import RutaCourse from "../RutaCourse/RutaCourse";

const RutaVideo = () => {
  const [modulo , setModulo] = useState(false)
  return (
    <div className=" w-full ">
      <div className=" m-auto py-10 bg-cyan-800">
        <div className="flex justify-evenly w-11/12">
          <p className="cursor-pointer" onClick={()=> setModulo(false)}>Modulos</p>
          <p className="cursor-pointer" onClick={()=> setModulo(true)}>Comentarios</p>
        </div>  
      </div>
      <div className=" m-auto w-10/12 mt-8">
          {!modulo? <RutaCourse/> : <Comentarios/> }
      </div>
    </div>
  );
};

export default RutaVideo;
