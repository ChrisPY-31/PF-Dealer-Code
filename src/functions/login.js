import { FirebaseAuth } from '../firebase/credenciales';
import { signInWithEmailAndPassword } from 'firebase/auth';

const loginWithEmailPassword = async(email , password)=>{
    try {
        const user = await signInWithEmailAndPassword (FirebaseAuth , email , password)
        console.log(user.email)
    } catch (error) {
        console.log(error.code)
        if(error.code === 'auth/user-not-found'){
            return alert('Este correo no se encuentra registrado ')
        }else if (error.code === 'auth/wrong-password'){
            alert('La contraseña esta mal escrita')
        }

    }
}

export default loginWithEmailPassword