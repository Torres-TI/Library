import React from "react";
import { BookType } from "../../types/book-type";
import LibraryCard from "../atoms/library-card";

export interface BookGridProps {
  books: BookType[];
  onBookClick: (bookId: string) => void;
}
const BookGrid: React.FC<BookGridProps> = ({ books, onBookClick }) => {
  return (
    <div className="  grid gap-x-2 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
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
