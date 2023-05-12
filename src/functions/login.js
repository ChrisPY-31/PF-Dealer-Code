import { FirebaseAuth } from "../firebase/credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginWithEmailPassword = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    console.log(user);
  } catch (error) {
    console.log(error.code);
    if (error.code === "auth/user-not-found") {
      toast.warn("Correo no registrado", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return () => (
        <div>
          <ToastContainer />
        </div>
      );
    } else if (error.code === "auth/wrong-password") {
      toast.warn("contraseña incorrecta", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return () => (
        <div>
          <ToastContainer />
        </div>
      );
    } else if (error.code === "auth/invalid-email") {
        toast.warn("Ingresa tu correo ", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      return () => (
        <div>
          <ToastContainer />
        </div>
      );
    }
    else if(error.code === 'auth/missing-password'){
        toast.warn("contraseña faltante", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      return () => (
        <div>
          <ToastContainer />
        </div>
      );
    }
  }
};

export default loginWithEmailPassword;
