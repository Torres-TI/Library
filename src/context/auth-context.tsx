import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import React, { createContext } from "react";
import { app } from "../../firebase";
import { UserType } from "../types/user-type";

interface AuthContextProps {
  children?: React.ReactNode;
  user?: UserType | null;
  signInWithEmail: (email: string, password: string) => Promise<void> | null;
  signOut?: () => Promise<void>;
  loginWithGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  signInWithEmail: () => null,
});

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = React.useState<UserType | null>(null);
  const router = useRouter();
  const auth = getAuth(app);
  const signInWithEmail = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { displayName, email, uid, photoURL, providerId } =
          userCredential.user;
        setUser({ displayName, email, uid, photoURL, providerId });
        router.push("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { errorCode, errorMessage };
      });
  };
  // const signOut = () => {
  //   auth.signOut().then(() => {
  //     setUser(null);
  //     router.push("/");
  //   });
  // };
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
    <AuthContext.Provider value={{ signInWithEmail, loginWithGoogle, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
