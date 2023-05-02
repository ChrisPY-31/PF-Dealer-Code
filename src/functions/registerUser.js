import { FirebaseAuth } from '../firebase/credenciales';
import { createUserWithEmailAndPassword} from 'firebase/auth'

 const registerUser =  async(email , password) =>{
   try {
        const user = await createUserWithEmailAndPassword(FirebaseAuth, email , password)
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}

export default registerUser