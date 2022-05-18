import React from "react";
import useGetBooks from "../../api-hooks/use-get-books";
import Modal from "../atoms/modal";
import WebPage from "../atoms/webpage";
import SideMenu from "../molecules/side-menu";
import BookGrid from "../organisms/book-grid";

export interface HomeScreenProps {}
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [showBookDetailModal, setShowBookDetailModal] = React.useState(false);
  const { data: books } = useGetBooks();
  return (
    <WebPage className="w-full h-full flex ">
      <div className="w-full max-w-[15rem]">
        <SideMenu />
      </div>
      <div className="flex flex-col w-full px-8 ">
        <h1 className="text-medium text-indigo-700 text-3xl pt-12">
          Biblioteca
        </h1>
        <div>
          <p className="text-medium text-gray-600 opacity-40 text-xl py-12">
            Ficção e Magia
          </p>
        </div>
        <BookGrid
          books={books!}
          openBookDetail={() => setShowBookDetailModal(true)}
        />
      </div>
      <Modal
        isOpen={showBookDetailModal}
        closeModal={() => setShowBookDetailModal(false)}
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          Hello World
        </div>
      </Modal>
    </WebPage>
  );
};

export default HomeScreen;
