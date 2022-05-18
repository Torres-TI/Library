import { useQuery } from "react-query";
import GetBookByIdService from "../services/get-book-by-id-service";

type GetBookByIdType = {
  bookId: string;
};
const QUERY_KEY = "/bookById";
const useGetBookById = ({ bookId }: GetBookByIdType) => {
  const { data, isLoading, error, refetch } = useQuery(
    [QUERY_KEY, bookId],
    () => GetBookByIdService({ bookId })
  );
  return { data, isLoading, error, refetch };
};

export default useGetBookById;
