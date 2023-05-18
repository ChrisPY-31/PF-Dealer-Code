"use client";
import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseApp, FirebaseAuth } from "@/firebase/credenciales";
import { getFirestore,doc, getDoc } from "firebase/firestore";
import { getDashboard } from "@/store/reducer/getCursosId";
import registerUser from "@/functions/registerUser";

const page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
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

        return;
      }
    });
  }, []);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Correo electrónico no válido")
      .required("Campo requerido"),
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d)/,
        "La contraseña debe contener al menos un carácter especial, una mayúscula y un número"
      )
      .required("Este campo es obligatorio"),
  });

  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
            let rol = 'admin'
            registerUser(values.email, values.password ,rol);
            router.push('/Home')
        }}
      >
        {({ isSubmitting }) => (
          <div className="w-1/3">
            <h2 className="text-5xl text-white font-bold text-center">
              Registrarse Admin
            </h2>

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
                Acceder
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default page;
