"use client";
import registerUser from "../../functions/registerUser";
import Logo from "../../Imagenes/Logo.png";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useAppDispatch } from "@/store";
import { getRegisterUser } from "@/store/reducer";
import githudAuth from "@/functions/githudLogin";
import { singInWithGoogle } from "@/functions/AuthWithGoogle";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseApp, FirebaseAuth } from "@/firebase/credenciales";
import { getFirestore , doc , getDoc} from 'firebase/firestore'
import { useRouter } from "next/navigation";
import { getDashboard } from "@/store/reducer/getCursosId";

const page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const firestore = getFirestore(FirebaseApp)

  const getRol = async (uid) =>{
    const docuRef = doc(firestore , `usuarios/${uid}`)
    const docuCifrada = await getDoc(docuRef)
    const infoFinal = docuCifrada.data().rol
    dispatch(getDashboard(infoFinal))
    return 
  }


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

  useEffect(() =>{
    onAuthStateChanged(FirebaseAuth , (usuarioFirebase) =>{
      if(usuarioFirebase){
        getRol(usuarioFirebase.uid)
        router.push('/Home')

        return 
      }
    })
  },[])
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
            let rol = 'user'
            registerUser(values.email, values.password ,rol);
            const newUser = {
              name: values.name,
              email: values.email,
              password: values.password,
            };
            dispatch(getRegisterUser(newUser));
          }}
        >
          {({ isSubmitting }) => (
            <div className="w-1/3">
              <h2 className="text-5xl text-white font-bold text-center">
                Registrarse
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
                    Nombre
                  </label>
                  <Field
                    type="name"
                    name="name"
                    id="name"
                    className="w-full text-black rounded py-1 pl-3 outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error text-gray-400"
                  />
                </div>

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
                <p className="text-end mt-2 mr-5">
                  tienes cuenta {}
                  <Link
                    href="sign-in"
                    className="cursor-pointer text-blue-400 "
                  >
                    ¿Inicia sesion?
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

export default page;
