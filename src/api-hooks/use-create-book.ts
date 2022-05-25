import { useMutation } from "react-query";
import CreateBookService from "../services/create-book-service";

const useCreateBook = () => {
  const { mutate: fetch, error } = useMutation(CreateBookService);
  return { fetch, error };
};

export default useCreateBook;
