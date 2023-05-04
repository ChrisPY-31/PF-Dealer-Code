'use client'
import React from "react";
import NavLanding from "../NavLanding/NavLanding";
import Slider from "../SliderCourse/Slider";
import Empresas from "../Empresas/Empresas";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/credenciales";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter()
  // useEffect(() =>{
  //   onAuthStateChanged(FirebaseAuth , usuariofirebase => {
  //     if(usuariofirebase){
  //       router.push('/Home')
  //     }
  //   })
  // },[])

  return (
    <div className="min-h-screen ">
      <NavLanding />
      <section class=" text-white">
        <div class="mx-auto max-w-screen-xl px-4 pt-12 lg:flex lg:h-1/2 ">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="bg-gradient-to-r from-green-300 via-verde to-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
              Aprende algo nuevo hoy
              <span class="sm:block"> Y cambia tu mañana. </span>
            </h1>

            <p class="mx-auto mt-4  text-base max-w-xl sm:text-lg/relaxed">
              Cambia tu vida con el conocimiento. descubre nuestros cursos y
              enpieza a aprender hoy
            </p>

          </div>
        </div>
      </section>
      <div className="w-full flex justify-center">
        <Slider />
      </div>
      <Empresas />
    </div>
  );
};

export default Landing;
