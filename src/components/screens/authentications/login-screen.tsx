import React from "react";
import Card from "../../atoms/card";
import LoginForm from "./login-form";

export interface LoginScreenProps {}
const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center min-w-screen min-h-screen ">
      <Card className="flex flex-col items-center px-4 md:px-6 py-4  w-full  max-w-[22rem] md:max-w-[35rem]">
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginScreen;
