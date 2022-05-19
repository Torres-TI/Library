import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";
import { useRouter } from "next/router";
import React, { createContext } from "react";
import { app } from "../../firebase";

interface AuthContextProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  signIn: (email: string, password: string) => {},
  signOut: () => {},
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
        console.log({ errorCode, errorMessage });
      });
  };
  const signOut = () => {
    auth.signOut().then(() => {
      setUser(undefined);
      router.push("/");
    });
  };
  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
