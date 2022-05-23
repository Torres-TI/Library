import React from "react";
import useGetBookById from "../../api-hooks/use-get-book-by-id";
import useGetBooks from "../../api-hooks/use-get-books";
import { BookType } from "../../types/book-type";
import WebPage from "../atoms/webpage";
import BookDetailModal from "../organisms/book-detail-modal";
import BookGrid from "../organisms/book-grid";
import PrivateTemplate from "../template/private-template";

export interface HomeScreenProps {
  book?: BookType;
}
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [showBookDetailModal, setShowBookDetailModal] = React.useState(false);
  const [bookId, setBookId] = React.useState("");
  const { data: getBooks } = useGetBooks();

  const { data } = useGetBookById({
    bookId: bookId,
  });
  const bookDetail = data || [];

  return (
    <PrivateTemplate title="Biblioteca">
      <WebPage title="Home | Library" />

      <BookGrid
        books={getBooks!}
        onBookClick={(bookId) => {
          setBookId(bookId);
          setShowBookDetailModal(true);
        }}
      />
      <BookDetailModal
        booksDetail={bookDetail}
        isOpen={showBookDetailModal}
        closeModal={() => setShowBookDetailModal(false)}
      />
    </PrivateTemplate>
  );
};

export default HomeScreen;
