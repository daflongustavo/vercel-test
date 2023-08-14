import { createContext, useState, useEffect } from "react";
import { Router } from "next/router";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/router";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const signinGitHub = async () => {
    try {
      setLoading(true);
      const provider = new GithubAuthProvider();
      const response = await signInWithPopup(auth, provider);
      setUser(response.user);
      console.log(response.user);
    } finally {
      setLoading(false);
    }
  };

  const signinGoogle = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      setUser(response.user);
      console.log(response.user)
    } finally {
      setLoading(false);
    }
  };

  const signout = async () => {
    try {
      setLoading(true);
      router.push("/");
      await signOut(auth);
      setUser(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signinGoogle,
        signinGitHub,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
