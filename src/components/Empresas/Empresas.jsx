import React from "react";
import { Asociados, Asociados2 } from "./EmpresasLogo";
import "./Empresas.css";
const Empresas = () => {
  return (
    <div className="w-10/12 m-auto flex h-72 mt-20 justify-between">
      <div className="w-2/5 flex flex-col">
        <h2 className=" mt-12 font-medium text-2xl">Dealer Empresas </h2>
        <p className="text-gray-400 mt-3">
          Potencia el talento de tu equipo con capacitación en liderazgo,
          inteligencia artificial aplicada al trabajo, inglés y más.
        </p>
      </div>
      <div className=" w-1/2 grid grid-cols-3 my-16">
      <img src="https://static.platzi.com/cdn-cgi/image/width=1024…=auto/media/uploads/Company_Google_e06c7248d9.svg" alt="google" />
      <img src="https://static.platzi.com/cdn-cgi/image/width=1024…=auto/media/uploads/Company_Stripe_77facb7078.svg" alt="stripe" />
      <img src="https://static.platzi.com/cdn-cgi/image/width=1024…auto/media/uploads/Company_Git_Lab_0c04d3d8e0.svg" alt="git-lab" />
      <img src="	https://static.platzi.com/cdn-cgi/image/width=1024…media/uploads/Company_Y_Combinator_025a5a4366.svg" alt="" />
      <img src="https://static.platzi.com/cdn-cgi/image/width=1024…to/media/uploads/Company_Microsoft_b0de58073c.svg" alt="microsoft" />
      </div>
    </div>
  );
};

export default Empresas;
