import React from "react";

const RouteOfCourse = () => {
  return (
    <section>
      <h3 className="text-3xl font-bold my-5">Potencia lo que ya sabes</h3>
      <p>
        Elige una ruta de aprendizaje y sigue un orden de cursos sobre temas o
        áreas específicas, de forma ágil y guiada.
      </p>
      <div className="flex justify-between mt-4">
        <div className="h-80 bg-gradient-to-tr from-green-300 via-verde to-white rounded-lg w-60 cursor-pointer hover:bg-slate-100 opacity-95 text-black">
          <div className="w-10/12 mx-auto my-4 h-3/4">
            <div className="flex items-center h-9">
              <button className="border-solid border px-2 rounded-lg border-black">
                Ruta
              </button>
              <p className="ml-4">13 Cursos</p>
            </div>
            <div className="flex flex-col justify-between h-full">
              <h3>Front End Developer con JavaScript</h3>
              <p>
                Aprende a Construir paginas web desde cero con esta ruta front
                end vas a poder ser una experto de la programacion web
              </p>
              <button className="underline text-start">Ir a la ruta</button>
            </div>
          </div>
        </div>

        <div className="h-80 bg-gradient-to-tr from-cyan-700 via-cyan-500 to-white rounded-lg w-60 cursor-pointer hover:bg-slate-100 opacity-95 text-black">
          <div className="w-10/12 mx-auto my-4 h-3/4">
            <div className="flex items-center h-9">
              <button className="border-solid border px-2 rounded-lg border-black">
                Ruta
              </button>
              <p className="ml-4">13 Cursos</p>
            </div>
            <div className="flex flex-col justify-between h-full">
              <h3>Front End Developer con JavaScript</h3>
              <p>
                Aprende a Construir paginas web desde cero con esta ruta front
                end vas a poder ser una experto de la programacion web
              </p>
              <button className="underline text-start">Ir a la ruta</button>
            </div>
          </div>
        </div>
        
        <div className="h-80 bg-gradient-to-tr from-emerald-600 via-sky-700 to-white rounded-lg w-60 cursor-pointer hover:bg-slate-100 opacity-95 text-black">
          <div className="w-10/12 mx-auto my-4 h-3/4">
            <div className="flex items-center h-9">
              <button className="border-solid border px-2 rounded-lg border-black">
                Ruta
              </button>
              <p className="ml-4">13 Cursos</p>
            </div>
            <div className="flex flex-col justify-between h-full">
              <h3>Front End Developer con JavaScript</h3>
              <p>
                Aprende a Construir paginas web desde cero con esta ruta front
                end vas a poder ser una experto de la programacion web
              </p>
              <button className="underline text-start">Ir a la ruta</button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default RouteOfCourse;
