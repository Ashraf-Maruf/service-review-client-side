import { createContext, useEffect, useState } from "react";
import { 
      
    createUserWithEmailAndPassword,
     getAuth,   
     onAuthStateChanged,      
     signInWithEmailAndPassword, 
     signInWithPopup,  
     signOut,
     updateProfile,   
    } from 'firebase/auth';
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth  (app)

const AuthProvider = ({ children }) => {
    
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    // This is create new account users
    const newCreateUsers = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password)
        
    }

    const ProfileDetails = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }    

    // This is google login users 
    const googleLoginProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // This is SignIn users 

    const userSignIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // This is Sign Out users 

    const userSignOut = () => {
        setLoading(true);
        localStorage.removeItem('Usertoken')
        return signOut(auth);
    }

    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (UserCurrent) => {
            setUsers(UserCurrent);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authDetails = {
        newCreateUsers,
        ProfileDetails,
        googleLoginProvider,
        userSignIn,
        userSignOut,
        users,
        loading
    }

    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;