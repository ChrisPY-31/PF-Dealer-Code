import { FirebaseAuth } from "@/firebase/credenciales";
import { GithubAuthProvider , signInWithPopup} from "firebase/auth";

const provider = new GithubAuthProvider()

const githudAuth = async () =>{
    try {
        const credencials  = await signInWithPopup(FirebaseAuth , provider)
        console.log(credencials)
    
    } catch (error) {
        console.log(error)    
    }
}
export default githudAuth