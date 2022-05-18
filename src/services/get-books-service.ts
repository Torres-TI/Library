import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { BookType } from "../types/book-type";

const GetBooksService = async () => {
  const booksCollectionRef = collection(db, "books");
  try {
    const snapshot = await getDocs(booksCollectionRef);
    const books = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as BookType[];
    return books;
  } catch (error) {
    console.error(error);
  }
};

export default GetBooksService;
