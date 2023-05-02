import { GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "../firebase/credenciales";


const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () =>{
    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        const credentials = GoogleAuthProvider.credentialFromResult(result)
        console.log(credentials)
    } catch (error) {
        console.log(error)
    }
}