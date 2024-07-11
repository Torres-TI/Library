/* eslint-disable @next/next/no-img-element */
import { PencilIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import { BookType } from "../../types/book-type";
import Button from "../atoms/button";
import Modal from "../atoms/modal";

export interface BookDetailModalProps {
  isOpen: boolean;
  closeModal: () => void;
  booksDetail: BookType[];
}
const BookDetailModal: React.FC<BookDetailModalProps> = ({
  isOpen,
  closeModal,
  booksDetail,
}) => {
  const router = useRouter();
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      className={`w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all min-w-[1200px] min-h-[640px]`}
    >
      {booksDetail?.map((book) => {
        return (
          <>
            <div key={book.id} className="w-full h-full flex flex-row relative">
              <img
                src={book.coverUrl}
                alt={book.coverAlt}
                className=" w-full max-w-[500px] flex max-h-[640px] h-full rounded-2xl "
              />
              <div className="flex w-full flex-row items-center justify-end absolute mt-8 mr-4 space-x-4 px-8">
                <Button
                  className="flex flex-row items-center justify-center px-2  border border-gray-300 rounded-md h-7 space-x-1  hover:border-2 hover:border-gray-900 group "
                  onClick={() => router.push("/adicionar")}
                >
                  <span className="text-gray-500 font-normal text-sm group-hover:text-gray-900">
                    editar
                  </span>
                  <PencilIcon className="w-4 h-4 text-gray-500  group-hover:text-gray-900" />
                </Button>
                <Button
                  className="items-center justify-center px-2  border border-gray-300 rounded-md h-7 group hover:border-gray-900 hover:border-2"
                  onClick={closeModal}
                >
                  <XIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-900" />
                </Button>
              </div>
              <div className="w-full h-full flex flex-col ">
                <h1 className="font-bold text-black text-3xl pt-12 pl-8">
                  {book.title}
                </h1>
                <p className="px-8 pt-8 ">
                  <span className="text-left whitespace-pre-line font-normal text-base line-clamp-[15]">
                    {book.description}
                  </span>
                </p>
                <p className="px-8 pt-8">
                  <span className="font-bold text-black text-base">
                    {`Autor: ${book.author}`}
                  </span>
                </p>
                <div className=" bg-gray-modal w-[400px] h-[75px] justify-between grid grid-cols-3 divide-x divide-gray-200 rounded-2xl mx-8 mt-8">
                  <p className="flex flex-col items-center justify-center space-y-1 ">
                    <span className="text-lg text-indigo-600 font-semibold">
                      {book.edition}
                    </span>
                    <span className="text-xs text-gray-500 font-normal">
                      EDIÇÃO
                    </span>
                  </p>
                  <p className="flex flex-col items-center justify-center space-y-1">
                    <span className="text-lg text-indigo-600 font-semibold">
                      {book.cdd}
                    </span>
                    <span className="text-xs text-gray-500 font-normal">
                      CDD
                    </span>
                  </p>
                  <p className="flex flex-col items-center justify-center space-y-1">
                    <span className="text-lg text-indigo-600 font-semibold">
                      {book.cdd}
                    </span>
                    <span className="text-xs text-gray-500 font-normal">
                      CDU
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </Modal>
  );
};

export default BookDetailModal;
