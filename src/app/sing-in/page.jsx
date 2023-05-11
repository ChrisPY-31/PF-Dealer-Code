"use client";
import loginWithEmailPassword from "@/functions/login";
import { singInWithGoogle } from "../../functions/AuthWithGoogle";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../Imagenes/Logo.png";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/credenciales";
import { useRouter } from "next/navigation";
import githudAuth from "@/functions/githudLogin";
import { useDispatch } from "react-redux";
import { crearUsuario } from "@/store/reducer/addPagos/agregarPago";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch()
  const handleSubtmit = async (e) => {
    e.preventDefault();
    await loginWithEmailPassword(email, password);
  };

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (usuarioFirebase) => {
      if (usuarioFirebase) {
       dispatch(crearUsuario({
        email: usuarioFirebase.email,
        avatar: usuarioFirebase.photoURL,
        userName: usuarioFirebase.displayName,
        userId: usuarioFirebase.uid
       }))
       console.log(usuarioFirebase)
        return router.push("/Home");
      } else {
        return;
      }
    });
  }, []);

  return (
    <div className="h-screen">
      <div className="flex items-center justify-center  ">
        <Image
          className="absolute p-0 left-2 top-0"
          src={Logo}
          alt="Logo"
          width={75}
          height={75}
        />
        <Link
          className="absolute ml-20 text-lg font-bold p-0 left-0 top-6 cursor-pointer"
          href={"/"}
        >
          DealerCode
        </Link>
      </div>
      <div className="flex justify-center h-full items-center flex-col ">
        <div className="w-2/5 h-3/4 flex flex-col items-center ">
          <form className="w-10/12 m-auto " onSubmit={handleSubtmit}>
            <h2 className="text-5xl text-white font-bold text-center">
              Iniciar Sesion
            </h2>

            <div className="flex justify-evenly w-full my-5 cursor-pointer">
              <div className="border-2 border-teal-600 py-2 px-16 rounded flex hover:bg-teal-600">
                <img
                  className="w-6 mr-2"
                  src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                  alt=""
                />
                <button
                  type="submit"
                  value="Ingresar con Google"
                  className="uppercase font-medium"
                  onClick={singInWithGoogle}
                >
                  Google
                </button>
              </div>

              <div className=" py-2 px-16 rounded cursor-pointer flex hover:border-cyan-600 hover:border-2 bg-cyan-600 hover:bg-transparent">
                <img
                  className="w-6 mr-2"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
                <button
                  type="submit"
                  value="Ingresar con Git hud"
                  className="uppercase font-medium"
                  onClick={githudAuth}
                >
                  Git-hud
                </button>
              </div>
            </div>

            <div className="h-20 flex flex-col justify-around">
              <label className=" uppercase font-light text-lg">
                Ingresa tu correo
              </label>
              <input
                type="text"
                placeholder="Contraseña"
                className="w-full text-black rounded py-1 pl-3 outline-none"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </div>
            <div className="h-20 flex flex-col justify-around">
              <label className=" uppercase font-light text-lg">
                Ingresa tu Contraseña
              </label>
              <input
                type="password"
                placeholder="***************"
                className="w-full text-black py-1 pl-3 rounded outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="rounded-md bg-teal-600 px-5 py-2.5 text-lg uppercase font-medium text-white shadow w-full mt-6 hover:bg-teal-800">
              Accerder
            </button>
            <p className="text-end mt-2 mr-10">
              No tienes cuenta {}
              <Link href="sing-up" className="cursor-pointer text-blue-400 ">
                ¿Registrate?
              </Link>
            </p>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
