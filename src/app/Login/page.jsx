'use client'
const Page = () => {

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/3 h-3/4 bg-green-500 rounded-lg">
        <form className="w-10/12 m-auto">
          <h2 className="text-center mt-2 font-light text-3xl">
            Iniciar Sesion
          </h2>

          <div className="flex flex-col my-5">
            <input
              type="submit"
              value="Ingresar con Google"
              className="bg-indigo-600 m-2 h-12 rounded-lg uppercase"
            />
            <input
              type="submit"
              value="Ingresar con Git hud"
              className="bg-blue-600 m-2 h-12 rounded-lg uppercase"
            />
          </div>
          <div className="h-20 flex flex-col justify-around">
            <label className=" uppercase font-light text-lg">
              Ingresa tu nombre
            </label>
            <input
              type="text"
              className="w-full text-black rounded py-1 pl-3"
            />
          </div>

          <div className="h-20 flex flex-col justify-around">
            <label className=" uppercase font-light text-lg">
              Ingresa tu correo
            </label>
            <input
              type="text"
              className="w-full text-black rounded py-1 pl-3"
            />
          </div>
          <div className="h-20 flex flex-col justify-around">
            <label className=" uppercase font-light text-lg">
              Ingresa tu Contraseña
            </label>
            <input
              type="password"
              className="w-full text-black py-1 pl-3 rounded"
            />
          </div>
          <button className="py-2 px-5 rounded-lg uppercase bg-indigo-400 hover:bg-indigo-600 w-full font-medium mt-8">
            Accerder
          </button>
        </form>
        <p className="text-end mt-2 mr-10">Ya tienes cuenta ¿Inicia Sesion</p>
      </div>
    </div>
  );
};

export default Page;
