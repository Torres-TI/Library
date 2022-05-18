import React from "react";
import useGetBookById from "../../api-hooks/use-get-book-by-id";
import useGetBooks from "../../api-hooks/use-get-books";
import { BookType } from "../../types/book-type";
import WebPage from "../atoms/webpage";
import SideMenu from "../molecules/side-menu";
import BookDetailModal from "../organisms/book-detail-modal";
import BookGrid from "../organisms/book-grid";

export interface HomeScreenProps {
  book: BookType;
}
const HomeScreen: React.FC<HomeScreenProps> = ({ book }) => {
  const [showBookDetailModal, setShowBookDetailModal] = React.useState(false);
  const [bookId, setBookId] = React.useState("");
  const { data: getBooks } = useGetBooks();

  const { data } = useGetBookById({
    bookId: bookId,
  });
  const bookDetail = data || [];

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
          books={getBooks!}
          onBookClick={(bookId) => {
            setBookId(bookId);
            setShowBookDetailModal(true);
          }}
        />
      </div>
      <BookDetailModal
        isOpen={showBookDetailModal}
        closeModal={() => setShowBookDetailModal(false)}
        booksDetail={bookDetail}
      />
    </WebPage>
  );
};

export default HomeScreen;
