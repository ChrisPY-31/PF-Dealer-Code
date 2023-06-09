import { ToastContainer, toast } from 'react-toastify';
import { FirebaseAuth } from '../firebase/credenciales';
import { createUserWithEmailAndPassword} from 'firebase/auth'
import "react-toastify/dist/ReactToastify.css";
import { getFirestore , doc , setDoc} from 'firebase/firestore'
import { FirebaseApp } from '../firebase/credenciales';
const firestore = getFirestore(FirebaseApp)

 const registerUser =  async(email , password , rol) =>{
   try {
        const infoUser = await createUserWithEmailAndPassword(FirebaseAuth, email , password)
        console.log(infoUser.user.uid)
        const docuref  = doc(firestore , `usuarios/${infoUser.user.uid}`)
        setDoc(docuref , {correo:email , rol:rol})

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