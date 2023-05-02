import { FirebaseAuth } from '../firebase/credenciales';
import { signInWithEmailAndPassword } from 'firebase/auth';

const loginWithEmailPassword = async(email , password)=>{
    try {
        const user = await signInWithEmailAndPassword (FirebaseAuth , email , password)
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}

export default loginWithEmailPassword