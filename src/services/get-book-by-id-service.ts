import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { BookType } from "../types/book-type";

type GetBookByIdServiceType = {
  bookId: string;
  uid?: string;
};
const GetBookByIdService = async ({ bookId, uid }: GetBookByIdServiceType) => {
  const booksCollectionRef = collection(
    db,
    `users/${uid}/books/${bookId}/details`
  );
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
