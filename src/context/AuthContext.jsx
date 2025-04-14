import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";


// Создание контекста
const AuthContext = createContext();

// Провайдер для управления состоянием 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc) {
          const userData = userDoc.data();
          console.log("USER DATAAAA⚡⚡", userData);
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            ...userData,
          });
        } else {
          setUser(currentUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    };
  
    const unsubscribe = onAuthStateChanged(auth, fetchUserData);
  
    return () => {
      console.log("🔴 Компонент размонтируется! Отписка...");
      unsubscribe();
    };
  }, []);
  

  const logout = () => {
    signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);