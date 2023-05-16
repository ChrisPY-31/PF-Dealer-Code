"use client";
import React from "react";
import NavBar from "@/app/Home/components/Nav/NavBar";
import Slider from "../SliderCourse/Slider";
import Empresas from "../Empresas/Empresas";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import RouteOfCourse from "../RouteOfCourse/RouteOfCourse";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { getCursos } from "@/store/reducer/addPagos/agregarPago";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/credenciales";
import { getRegisterUser } from "@/store/reducer";

const Landing = () => {
  const router = useRouter();
  let dispatch = useDispatch()
  useEffect(() =>{

    disacth(getCursos())
  },[])
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        const userGoogle = {
          name : usuarioFirebase.displayName,
          correo: usuarioFirebase.email,
          photo: usuarioFirebase.photoURL,
          uid: usuarioFirebase.uid
        }
        // dispatch(getRegisterUser(userGoogle))
        return router.push("/Home");
      } else {
        return;
      }
    });
  }, []);
  
  return (
    <div className="min-h-screen ">
      <NavBar></NavBar>
      <section className=" text-white">
        <div className="mx-auto max-w-screen-xl px-4 pt-12 lg:flex lg:h-1/2 ">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-verde to-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
              Aprende algo nuevo hoy
              <span className="sm:block"> Y cambia tu mañana. </span>
            </h1>

            <p className="mx-auto mt-4  text-base max-w-xl sm:text-lg/relaxed">
              Cambia tu vida con el conocimiento. descubre nuestros cursos y
              empieza a aprender hoy
            </p>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center">
        <Slider />
      </div>
      <div className="mx-auto w-3/4">
        <RouteOfCourse />
      </div>
      <Empresas />
      <Footer/>
    </div>
  );
};

export default Landing;
