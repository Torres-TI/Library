import React from "react";
import WebPage from "../atoms/webpage";
import SideMenu from "../molecules/side-menu";

export interface HomeScreenProps {}
const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <WebPage className="w-full h-full">
      <SideMenu />
    </WebPage>
  );
};

export default HomeScreen;
