import { ToastContainer, toast } from 'react-toastify';
import { FirebaseAuth } from '../firebase/credenciales';
import { createUserWithEmailAndPassword} from 'firebase/auth'
import "react-toastify/dist/ReactToastify.css";

 const registerUser =  async(email , password) =>{
   try {
        const user = await createUserWithEmailAndPassword(FirebaseAuth, email , password)
console.log(user)
    } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            toast.warn("Este correo ya esta en uso", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              return () =>{
                <div>
                    <ToastContainer/>
                </div>
              }
        }
    }
}

export default registerUser