
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react"
import Initializetion from "../firebase/firebase.ini";

 
// 1. inisialize firebase from firebase.ini
Initializetion();

// 2. set provider as shown firebase.
const googleAuthProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth();


// 3. create Firebase function.
export const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);



  // Sign in with email & password.
   const handleNameSet = (e) => {
      setName(e.target.value);
    }
   const handleEmailSet = (e) => {
      setEmail(e.target.value);
    }
   const handlePasswordSet = (e) => {
      setPassword(e.target.value);
    }


    // Google login
    const handeleGoogleAuth = () => {
      setIsLoading(true);
      // return korci then er kaj ta login a korci.
      return signInWithPopup(auth, googleAuthProvider)
      .finally(()=> setIsLoading(false));
    }
    

  // Auth state change or not.
  useEffect( () => {
    const Unsubscribe = onAuthStateChanged(auth, user => {
        if (user) {
          setUser(user);
        }
        else {
          setUser({});
        }
        setIsLoading(false);
      });
      return () => Unsubscribe;
    }, [])
    


  // Sign-out successful.
  const handleLogOut = () => {
    setIsLoading(true);
      signOut(auth)
      .then(() => {setUser({})})
      .finally(()=> setIsLoading(false))
    }
   


  // FaceBook Log In ...
  const handelFacbook = () => {
    signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const { displayName, photoUrl, email} = result.user;
      console.log(result.user);
      const loggedUser = {
        name : displayName,
        email : email,
        photo : photoUrl
      }
       setUser(loggedUser);
     })
    .catch((error) => {
      setError(error.message);
    });
  }

  return {
      setUser,
      setEmail,
      setPassword,
      error,
      user,
      isLoading, 
      handeleGoogleAuth,
      handleLogOut,
      handelFacbook,
      name,
      email,
      auth,
      password,
      handleNameSet,
      handleEmailSet,
      handlePasswordSet
    };
}

export default useFirebase;