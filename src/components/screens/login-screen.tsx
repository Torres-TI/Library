import React from "react";
import FacebookIcon from "../../assets/svg/facebook-icon.svg";
import GoogleIcon from "../../assets/svg/google-icon.svg";
import LibraryLogo from "../../assets/svg/library-logo.svg";
import Button from "../atoms/button";
import Card from "../atoms/card";
import Divider from "../atoms/divider";
import WebPage from "../atoms/webpage";

export interface LoginScreenProps {}
const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <WebPage className=" relative flex flex-col flex-1 items-center justify-center min-w-screen min-h-screen">
      <Card className="  flex flex-col items-center px-md md:px-xl lg:px-16 pt-10 pb-8 w-full max-w-[35rem]">
        <LibraryLogo className="w-48 h-48 -mt-32  absolute" />
        <div className=" flex flex-col w-full space-y-4 mb-4">
          <Button className=" w-full bg-slate-50 opacity-90 shadow-sm border hover:bg-slate-200  hover:border-gray-200 min-h-[4rem] rounded-2xl flex items-center px-6 mt-24">
            <GoogleIcon className="w-9 h-9 mr-2 " />
            <text className="flex flex-1 justify-center font-medium text-lg text-gray-500 ">
              Entrar com o Google
            </text>
          </Button>
          <Button className=" w-full bg-blue-900 opacity-90 shadow-sm border hover:bg-blue-500  hover:border-blue-400 min-h-[4rem] rounded-2xl flex items-center px-6  mb-4">
            <FacebookIcon className="w-9 h-9 mr-2" />
            <text className="flex flex-1 justify-center font-medium text-lg text-white">
              Entrar com facebook
            </text>
          </Button>
        </div>
        <Divider>ou</Divider>
      </Card>
    </WebPage>
  );
};

export default LoginScreen;
