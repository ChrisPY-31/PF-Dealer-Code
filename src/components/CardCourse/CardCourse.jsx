import React from "react";
import Link from "next/link";

const CardCourse = () => {
  return (
    <div className="bg-indigo-600 ">
      <div className="">
        <div className="bg-teal-500 h-52 ">

        </div>
        <div className="w-11/12 m-auto mt-2.5 ">
          <div>
            <p>
              price
              <span>Descuento</span>
            </p>
            <p>Descuento</p>
          </div>
          <div>
            <Link href='/checkaut' className="py-2.5 w-full bg-lime-500">Comprar Curso</Link>
            <button className="py-2.5 w-full bg-slate-600">Agregar a la Cesta</button>
          </div>
          <div>
            <h2>Que incluye este Curso</h2>
            <div>
              <div>
                <p>image</p>
                <p>Certificado final del curso</p>
              </div>
              <div>
                <p>image</p>
                <p>7 horas del curso</p>
              </div>
              <div>
                <p>image</p>
                <p>Recursos descargables</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
