import React from "react";
import NavLanding from "../NavLanding/NavLanding";
import Slider from "../SliderCourse/Slider";
import Empresas from "../Empresas/Empresas";

const Landing = () => {
  return (
    <div className="min-h-screen ">
      <NavLanding />
      <div className="w-full">
        <div className="flex items-center flex-col mt-12">
          <h1 className=" text-6xl font-light text-green-400 ">Nuevos cursos a mejor precio</h1>
          <span className=" text-6xl ">
             Precio imprencionante
          </span>
          <p className="w-1/3 font-light mt-8 text-center text-lg ">La plataforma de aprendizaje en línea donde puedes desarrollar tus habilidades y adaptarte al futuro profesional.</p>
        </div>
      <Slider/>
      <Empresas/>
      </div>
    </div>
  );
};

export default Landing;
