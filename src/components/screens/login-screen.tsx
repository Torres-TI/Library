import React from "react";
import EmailIcon from "../../assets/svg/email-icon.svg";
import FacebookIcon from "../../assets/svg/facebook-icon.svg";
import GoogleIcon from "../../assets/svg/google-icon.svg";
import LibraryLogo from "../../assets/svg/library-logo.svg";
import PasswordIcon from "../../assets/svg/password-icon.svg";
import { classNameBuilder } from "../../helpers/class-name-builder";
import Button from "../atoms/button";
import Card from "../atoms/card";
import Divider from "../atoms/divider";
import TextInput from "../atoms/text-input";
import WebPage from "../atoms/webpage";

export interface LoginScreenProps {}
const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <WebPage className=" relative flex flex-col flex-1 items-center justify-center min-w-screen min-h-screen">
      <Card className="  flex flex-col items-center px-md md:px-xl lg:px-16 pt-10 pb-8 w-full max-w-[35rem]">
        <LibraryLogo className="w-48 h-48 -mt-32  absolute" />
        <div className=" flex flex-col w-full space-y-4 mb-4">
          <Button
            type="button"
            className=" w-full bg-slate-50 opacity-90 shadow-sm border hover:bg-slate-200  hover:border-gray-200 min-h-[4rem] rounded-2xl flex items-center px-6 mt-24"
          >
            <GoogleIcon className="w-9 h-9 mr-2 " />
            <text className="flex flex-1 justify-center font-medium text-lg text-gray-500 ">
              Entrar com o Google
            </text>
          </Button>
          <Button
            type="button"
            className=" w-full bg-blue-900 opacity-90 shadow-sm border hover:bg-blue-500  hover:border-blue-400 min-h-[4rem] rounded-2xl flex items-center px-6  mb-4"
          >
            <FacebookIcon className="w-9 h-9 mr-2" />
            <text className="flex flex-1 justify-center font-medium text-lg text-white">
              Entrar com facebook
            </text>
          </Button>
        </div>
        <Divider>ou</Divider>
        <div className="flex flex-col w-full space-y-4 mt-4">
          <TextInput
            type="email"
            value={email}
            onChange={setEmail}
            className={classNameBuilder(`w-full border border-gray-200 
          min-h-[4rem] rounded-2xl flex items-center px-6  text-center 
         placeholder-gray-400  focus:outline-none focus:border-gray-500 focus:placeholder-transparent`)}
            placeholder="Digite seu E-mail"
          >
            <EmailIcon className="w-7 h-7" />
          </TextInput>
          <TextInput
            type="password"
            value={password}
            onChange={setPassword}
            className={classNameBuilder(`w-full border border-gray-200 
          min-h-[4rem] rounded-2xl flex items-center px-6  text-center 
         placeholder-gray-400  focus:outline-none focus:border-gray-500 focus:placeholder-transparent`)}
            placeholder="Digite sua Senha"
          >
            <PasswordIcon className="w-7 h-7" />
          </TextInput>
        </div>
        <Button type="button" className="w-full flex justify-end mt-2 mr-2">
          <text className="font-semibold text-xs text-gray-400 underline">
            Esqueci a senha
          </text>
        </Button>
        <Button
          type="submit"
          className=" w-full bg-blue-800  shadow-sm border hover:bg-blue-700  hover:border-blue-600 min-h-[4rem] rounded-2xl flex items-center px-6  mt-4"
        >
          <text className="flex flex-1 justify-center font-medium text-lg text-white uppercase">
            Login
          </text>
        </Button>
      </Card>
    </WebPage>
  );
};

export default LoginScreen;
