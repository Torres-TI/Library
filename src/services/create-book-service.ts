import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { BookType } from "../types/book-type";

type CreateBookServiceType = {
  book: BookType;
};
const CreateBookService = async ({ book }: CreateBookServiceType) => {
  const bookRef = await collection(db, "books");
  const bookData = {
    title: book.title,
    author: book.author,
    description: book.description,
    coverUrl: book.coverUrl,
    coverAlt: book.coverAlt,
  };
  try {
    const bookDoc = await addDoc(bookRef, bookData);
    const bookDetailsRef = await collection(db, "books", bookDoc.id, "details");
    const addBook = await addDoc(bookDetailsRef, {
      title: book.title,
      description: book.description,
      coverUrl: book.coverUrl,
      coverAlt: book.coverAlt,
      author: book.author,
      cdd: book.cdd,
      cdu: book.cdu,
      edition: book.edition,
    });
    return addBook;
  } catch (error) {
    console.error(error);
  }
};

export default CreateBookService;
