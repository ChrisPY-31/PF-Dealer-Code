import React from "react";
import NavLanding from "../NavLanding/NavLanding";
import Slider from "../SliderCourse/Slider";
import Empresas from "../Empresas/Empresas";
import Pancarta from "../NavLanding/Pancarta";

const Landing = () => {
  return (
    <div className="min-h-screen ">
      <NavLanding />
      <Pancarta/>
      <div className="w-full">
        <div className="flex c items-center flex-col mt-12">
          <h1 className=" text-6xl  text-green-400 flex items-center flex-col mt-12 font-extrabold ">Nuevos cursos a mejor precio</h1>
          <span className=" text-6xl ">
             Precio imprencionante
          </span>
          <p className="w-1/3  mt-8 text-center text-lg ">La plataforma de aprendizaje en línea donde puedes desarrollar tus habilidades y adaptarte al futuro profesional.</p>
        </div>
      <Slider/>
      <Empresas/>
      </div>
    </div>
  );
};

export default Landing;
