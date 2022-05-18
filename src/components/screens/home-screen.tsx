import React from "react";
import { BookType } from "../../types/book-type";
import Modal from "../atoms/modal";
import WebPage from "../atoms/webpage";
import SideMenu from "../molecules/side-menu";
import BookGrid from "../organisms/book-grid";

export interface HomeScreenProps {}
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [showBookDetailModal, setShowBookDetailModal] = React.useState(false);

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
          books={booksList}
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

const booksList = [
  {
    id: "harry_potter",
    title: "Harry Potter e a Pedra Filosofal",
    description: "A história de Harry Potter e a Pedra Filosofal",
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41897yAI4LL._SX346_BO1,204,203,200_.jpg",
    coverAlt: "Harry Potter e a Pedra Filosofal",
  },
  {
    id: "harry_pot",
    title: "Harry Potter e a Pedra Filosofal",
    description: "A história de Harry Potter e a Pedra Filosofal",
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41897yAI4LL._SX346_BO1,204,203,200_.jpg",
    coverAlt: "Harry Potter e a Pedra Filosofal",
  },
  {
    id: "harry_po",
    title: "Harry Potter e a Pedra Filosofal",
    description: "A história de Harry Potter e a Pedra Filosofal",
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41897yAI4LL._SX346_BO1,204,203,200_.jpg",
    coverAlt: "Harry Potter e a Pedra Filosofal",
  },
  {
    id: "harry_p",
    title: "Harry Potter e a Pedra Filosofal",
    description: "A história de Harry Potter e a Pedra Filosofal",
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41897yAI4LL._SX346_BO1,204,203,200_.jpg",
    coverAlt: "Harry Potter e a Pedra Filosofal",
  },
  {
    id: "harry_",
    title: "Harry Potter e a Pedra Filosofal",
    description: "A história de Harry Potter e a Pedra Filosofal",
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41897yAI4LL._SX346_BO1,204,203,200_.jpg",
    coverAlt: "Harry Potter e a Pedra Filosofal",
  },
  {
    id: "harry",
    title: "Harry Potter e a Pedra Filosofal",
    description: "A história de Harry Potter e a Pedra Filosofal",
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41897yAI4LL._SX346_BO1,204,203,200_.jpg",
    coverAlt: "Harry Potter e a Pedra Filosofal",
  },
] as BookType[];
