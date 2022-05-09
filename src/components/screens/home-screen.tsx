import React from "react";
import LibraryCard from "../atoms/library-card";
import WebPage from "../atoms/webpage";
import SideMenu from "../molecules/side-menu";

export interface HomeScreenProps {}
const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <WebPage className="w-full h-full flex">
      <div className="w-full max-w-[15rem]">
        <SideMenu />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-medium text-indigo-700 text-3xl px-24 pt-12">
          Biblioteca
        </h1>
        <div>
          <p className="text-medium text-gray-600 opacity-40 text-xl px-24 py-12">
            Ficção e Magia
          </p>
        </div>
        <LibraryCard
          title="Bruno"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  "
          src="https://avatars.githubusercontent.com/u/76910959?v=4"
          alt="Bruno"
        />
      </div>
    </WebPage>
  );
};

export default HomeScreen;
