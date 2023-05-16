import { GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "../firebase/credenciales";
import { addtoken } from "@/store/usuario";


const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () =>{
  try {
    const credentials = await signInWithPopup(FirebaseAuth, googleProvider)
        console.log(credentials)

        // console.log(credentials.user.email , credentials.user.displayName , credentials.user.photoURL)
        // let {user} =  credentials
        // console.log(user.accessToken);
        if(token) {
          return  user.accessToken
        }
    } catch (error) {
        console.log(error)
    }
}