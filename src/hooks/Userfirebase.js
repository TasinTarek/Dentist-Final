import { useEffect, useState } from "react"
import {getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword} from 'firebase/auth'
import initAuth from "../components/Firebase/Firebase.init";

initAuth();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth , googleProvider)
        .then(result => {
            console.log(result.user);
        })
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
               setUser({}) 
        })
    }
// observe hook
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }

        });
    },[])


    const handleUserRegister=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
        }
        
          )  };

    return{
        user,
        signInUsingGoogle,
        logOut,
        handleUserRegister
    }
}

export default useFirebase;