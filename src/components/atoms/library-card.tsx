/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BookType } from "../../types/book-type";

export interface LibraryCardProps {
  onClick?: () => void;
  book: BookType;
}
const LibraryCard: React.FC<LibraryCardProps> = ({ onClick, book }) => {
  return (
    <div
      className="w-full h-[424px] overflow-hidden bg-white shadow-lg flex flex-col  border border-gray-100 rounded-lg cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
      onClick={onClick}
    >
      <div className="aspect-w-4 aspect-h-3 md:aspect-w-7 md:aspect-h-5">
        <img
          src={book.coverUrl}
          alt={book.coverAlt}
          className="w-full h-full rounded-t-lg"
        />
      </div>
      <div className="flex flex-col space-y-4 w-full mt-4 px-4">
        <div className="text-lg font-bold text-center line-clamp-2">
          {book.title}
        </div>
        <text className="text-sm font-normal whitespace-pre-line line-clamp-3">
          {book.description}
        </text>
      </div>
    </div>
  );
};

export default LibraryCard;
