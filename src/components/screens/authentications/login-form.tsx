import React from "react";
import EmailIcon from "../../../assets/svg/email-icon.svg";
import FacebookIcon from "../../../assets/svg/facebook-icon.svg";
import GoogleIcon from "../../../assets/svg/google-icon.svg";
import PasswordIcon from "../../../assets/svg/password-icon.svg";
import { classNameBuilder } from "../../../helpers/class-name-builder";
import { useAuth } from "../../../hooks/use-auth";
import Button from "../../atoms/button";
import Divider from "../../atoms/divider";
import TextInput from "../../atoms/text-input";

export interface LoginFormProps {}
const LoginForm: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signInWithEmail, loginWithGoogle } = useAuth();
  return (
    <>
      <div className=" flex flex-col w-full space-y-4 mb-4 mt-6 md:mt-8 lg:mt-10">
        <Button
          type="button"
          className=" w-full bg-slate-50 opacity-90 shadow-sm border hover:bg-slate-200  hover:border-gray-200 min-h-[2.5rem] md:min-h-[3rem] rounded-xl flex items-center px-6 "
          onClick={loginWithGoogle}
        >
          <GoogleIcon
            className="
               w-6 h-6 md:w-8 md:h-8 mr-2 "
          />
          <text className="flex flex-1 justify-center font-semibold text-sm text-gray-500 ">
            Entrar com o Google
          </text>
        </Button>
        <Button
          type="button"
          className=" w-full bg-blue-900 opacity-90 shadow-sm border hover:bg-blue-500  hover:border-blue-400 h-[2.5rem] md:h-[3rem] rounded-xl flex items-center px-6 "
        >
          <FacebookIcon className="w-6 h-6 md:w-8 md:h-8 mr-2" />
          <text className="flex flex-1 justify-center font-semibold text-sm text-white">
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
          h-[2.5rem] md:h-[3rem] rounded-xl flex items-center px-6  text-center text-sm
        placeholder-gray-400  focus:outline-none focus:border-gray-500 focus:placeholder-transparent`)}
          placeholder="Digite seu E-mail"
        >
          <EmailIcon className="w-5 h-5 md:w-7 md:h-7" />
        </TextInput>
        <TextInput
          type="password"
          value={password}
          onChange={setPassword}
          className={classNameBuilder(`w-full border border-gray-200 
          h-[2.5rem] md:h-[3rem] rounded-xl flex items-center px-6  text-center text-sm text-semibold 
       placeholder-gray-400  focus:outline-none focus:border-gray-500 focus:placeholder-transparent`)}
          placeholder="Digite sua Senha"
        >
          <PasswordIcon className="w-5 h-5 md:w-7 md:h-7" />
        </TextInput>
      </div>
      <Button type="button" className="w-full flex justify-end mt-2 mr-2">
        <text className="font-semibold text-xs text-gray-400 underline">
          Esqueci a senha
        </text>
      </Button>
      <Button
        type="button"
        className=" w-full bg-blue-800  shadow-sm border hover:bg-blue-700  hover:border-blue-600 h-[2.5rem] md:h-[3rem] rounded-xl flex items-center px-6  mt-4"
        onClick={() => {
          signInWithEmail(email, password);
        }}
      >
        <text className="flex flex-1 justify-center font-semibold text-sm text-white uppercase">
          Login
        </text>
      </Button>
    </>
  );
};

export default LoginForm;
