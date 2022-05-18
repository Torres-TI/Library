import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { BookType } from "../types/book-type";

type GetBookByIdServiceType = {
  bookId: string;
};
const GetBookByIdService = async ({ bookId }: GetBookByIdServiceType) => {
  const booksCollectionRef = collection(db, "books", bookId, "details");
  try {
    const snapshot = await getDocs(booksCollectionRef);
    const book = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BookType[];
    return book;
  } catch (error) {
    console.error(error);
  }
};

export default GetBookByIdService;
