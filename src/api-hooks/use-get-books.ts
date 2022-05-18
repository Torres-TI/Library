import { useQuery } from "react-query";
import GetBooksService from "../services/get-books-service";

const QUERY_KEY = "/books";
const useGetBooks = () => {
  const { data, isLoading, error, refetch } = useQuery(
    QUERY_KEY,
    GetBooksService
  );
  return { data, isLoading, error, refetch };
};

export default useGetBooks;
