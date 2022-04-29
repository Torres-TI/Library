import React from "react";
import { HomeScreen } from "../../components/screens/home-screen";

export interface HomeRouteProps {}
const HomeRoute: React.FC<HomeRouteProps> = () => {
  return (
    <>
      <HomeScreen />
    </>
  );
};

export default HomeRoute;
