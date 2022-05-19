import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useRouter } from "next/router";
import React, { createContext } from "react";
import { app } from "../../firebase";

interface AuthContextProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  signIn: (email: string, password: string) => {},
  signOut: () => {},
  loginWithGoogle: () => {},
});

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = React.useState<User>();
  const router = useRouter();
  const auth = getAuth(app);
  const signIn = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/home");
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { errorCode, errorMessage };
      });
  };
  const signOut = () => {
    auth.signOut().then(() => {
      setUser(undefined);
      router.push("/");
    });
  };
  const provider = new GoogleAuthProvider();
  const loginWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        setUser(user);
        router.push("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };
  return (
    <AuthContext.Provider value={{ signIn, signOut, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
