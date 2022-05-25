import React from "react";
import { BookType } from "../../types/book-type";
import LibraryCard from "../atoms/library-card";

export interface BookGridProps {
  books: BookType[];
  onBookClick: (bookId: string) => void;
}
const BookGrid: React.FC<BookGridProps> = ({ books, onBookClick }) => {
  return (
    <div className="  grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 gap-y-6  ">
      {books?.map((book) => {
        return (
          <LibraryCard
            key={book.id}
            book={book}
            onClick={() => onBookClick(book.id!)}
          />
        );
      })}
    </div>
  );
};

export default BookGrid;
