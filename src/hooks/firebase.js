import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

import initializeAuthentication from "../Firebase/firebase.init";




initializeAuthentication();




const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});


    const signInUsingGoogle = () => {


        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);


    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }

        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return {
        user,
        signInUsingGoogle,
        setUser,
        logOut
    }


}

export default useFirebase;