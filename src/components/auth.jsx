import { auth, googleProvider } from '../config/firebase-config';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch(err) {
      console.error(err);
    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch(err) {
      console.error(err);
    }
  };

  console.log(auth?.currentUser?.email);

  const logout= async () => {
    try {
      await signOut(auth);
    } catch(err) {
      console.error(err);
    }
  }; 

  return (
    <div>
      <input type="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={signIn}>Sign in</button>
      <button onClick={signInWithGoogle}>Sihn In With Google</button>
      <button onClick={logout}>Logout</button>
    </div>
  )

}