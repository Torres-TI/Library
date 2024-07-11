import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { BookType } from "../types/book-type";

type CreateBookServiceType = {
  book: BookType;
  uid?: string;
};
const CreateBookService = async ({ book, uid }: CreateBookServiceType) => {
  const userRef = collection(db, `users/${uid}/books`);
  const bookData = {
    title: book.title,
    author: book.author,
    description: book.description,
    coverUrl: book.coverUrl,
    coverAlt: book.coverAlt,
  };
  try {
    const doc = await addDoc(userRef, bookData);
    const booksDetailRef = await collection(userRef, doc.id, "details");
    const addBookDetail = await addDoc(booksDetailRef, {
      title: book.title,
      description: book.description,
      coverUrl: book.coverUrl,
      coverAlt: book.coverAlt,
      author: book.author,
      cdd: book.cdd,
      cdu: book.cdu,
      edition: book.edition,
    });
    return addBookDetail;
  } catch {
    console.log("error");
  }
};

export default CreateBookService;
