"use client";
import { singInWithGoogle } from "../../functions/AuthWithGoogle";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../Imagenes/Logo.png";
import githudAuth from "@/functions/githudLogin";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import loginWithEmailPassword from "@/functions/login";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseApp, FirebaseAuth } from "@/firebase/credenciales";
import { getFirestore,doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getDashboard } from "@/store/reducer/getCursosId";

const Page = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginWithEmailPassword(email, password);
  };
  const firestore = getFirestore(FirebaseApp)

  const getRol = async (uid) => {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    dispatch(getDashboard(infoFinal));
    return;
  };
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        getRol(usuarioFirebase.uid);
        router.push('/Home')
        return;
      }
    });
  }, []);

  return (
    <div className="h-screen">
      <ToastContainer></ToastContainer>
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
      <div className=" flex flex-col justify-center items-center h-full">
        <div className="w-1/3">
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
                Git-hub
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="h-20 flex flex-col justify-around  my-3">
              <label
                htmlFor="email"
                className="uppercase font-light text-lg text-white"
              >
                Correo electrónico:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black rounded py-1 pl-3 outline-none"
              />
            </div>

            <div className="h-20 flex flex-col justify-around  my-3">
              <label
                htmlFor="password"
                className="uppercase font-light text-lg text-white"
              >
                Contraseña:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black rounded py-1 pl-3 outline-none"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-teal-600 px-5 py-2.5 text-lg uppercase font-medium text-white shadow w-full mt-6 hover:bg-teal-800"
            >
              Iniciar sesión
            </button>
            <div className="mt-5 mr-5 flex justify-between w-full">
              <select id="rol" className="text-black">
                <option value="admin">Administrador</option>
                <option value="user">Usuario</option>
              </select>

              <p className="">
                No tienes cuenta {}
                <Link href="sign-up" className="cursor-pointer text-blue-400 ">
                  Registrate
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
