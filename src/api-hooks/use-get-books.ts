import { useQuery } from "react-query";
import GetBooksService from "../services/get-books-service";

interface useGetBooksProps {
  uid?: string;
}
const QUERY_KEY = "/users/uid/books";
const useGetBooks = ({ uid }: useGetBooksProps) => {
  const { data, isLoading, error, refetch } = useQuery([QUERY_KEY], () =>
    GetBooksService({ uid })
  );
  return { data, isLoading, error, refetch };
};

export default useGetBooks;
