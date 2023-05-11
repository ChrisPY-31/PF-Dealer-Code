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
import { ToastContainer } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Page = () => {
  const router = useRouter();
  let dispatch = useDispatch()
  
  // await loginWithEmailPassword(email, password);
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (usuarioFirebase) => {
      if (usuarioFirebase) {
       dispatch(crearUsuario({
        email: usuarioFirebase.email,
        avatar: usuarioFirebase.photoURL,
        userName: usuarioFirebase.displayName
       }))
        return router.push("/Home");
      } else {
        return;
      }
    });
  }, []);


  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Correo electrónico no válido")
      .required("Campo requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])/,
        "La contraseña debe tener al menos una letra mayúscula y un número"
      )
      .required("Este campo es obligatorio"),
  });

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
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values.email , values.password)
            loginWithEmailPassword(values.email , values.password)
          }}
        >
          {({ isSubmitting }) => (
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

              <Form className="">
               
               <div className="h-20 flex flex-col justify-around  my-3">
                  <label
                    htmlFor="email"
                    className="uppercase font-light text-lg text-white"
                  >
                    Correo electrónico:
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full text-black rounded py-1 pl-3 outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error text-gray-400"
                  />
                </div>

                <div className="h-20 flex flex-col justify-around  my-3">
                  <label
                    htmlFor="password"
                    className="uppercase font-light text-lg text-white"
                  >
                    Contraseña:
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="w-full text-black rounded py-1 pl-3 outline-none"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error text-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-lg uppercase font-medium text-white shadow w-full mt-6 hover:bg-teal-800"
                >
                  Iniciar sesión
                </button>
                <p className="text-end mt-2 mr-5">
                  No tienes cuenta { }
                  <Link
                    href="sing-up"
                    className="cursor-pointer text-blue-400 "
                  >
                    Registrate
                  </Link>
                </p>
              </Form>
            </div>
          )}
        </Formik>
        </div>
      </div>
  );
};

export default Page;
