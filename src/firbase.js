import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"; 
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";


const firebaseConfig = {
<<<<<<< HEAD
=======
  
>>>>>>> 74a92025b05e261a73f47e27160a2cdece7c5173
  authDomain: "react-netflix-96f90.firebaseapp.com",
  projectId: "react-netflix-96f90",
  storageBucket: "react-netflix-96f90.appspot.com",
  messagingSenderId: "1078340263750",
  appId: "1:1078340263750:web:99c3107f379faf1114cf47",
  measurementId: "G-PHQHMZ91E5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
      const res =  await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "user"),{
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      })
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);

    }
    catch(error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};
