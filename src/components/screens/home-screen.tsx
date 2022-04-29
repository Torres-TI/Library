import React from "react";
import WebPage from "../atoms/webpage";

export interface HomeScreenProps {}
const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <WebPage>
      <h1>Home</h1>
    </WebPage>
  );
};

export default HomeScreen;
