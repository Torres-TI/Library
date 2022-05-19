import React from "react";
import LoginScreen from "../../components/screens/authentications/login-screen";

export interface LoginRouteProps {}
const LoginRoute: React.FC<LoginRouteProps> = () => {
  return <LoginScreen />;
};

export default LoginRoute;
