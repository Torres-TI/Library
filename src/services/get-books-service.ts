import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { BookType } from "../types/book-type";

interface GetBookByIdServiceType {
  uid?: string;
}
const GetBooksService = async ({ uid }: GetBookByIdServiceType) => {
  const booksCollectionRef = collection(db, `users/${uid}/books`);
  try {
    const snapshot = await getDocs(booksCollectionRef);
    const books = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BookType[];
    return books;
  } catch (error) {
    console.error(error);
  }
};

export default GetBooksService;
