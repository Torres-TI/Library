import { useQuery } from "react-query";
import GetBookByIdService from "../services/get-book-by-id-service";

type GetBookByIdType = {
  bookId: string;
  uid?: string;
};
const QUERY_KEY = "/bookById";
const useGetBookById = ({ uid, bookId }: GetBookByIdType) => {
  const { data, isLoading, error, refetch } = useQuery(
    [QUERY_KEY, bookId],
    () => GetBookByIdService({ uid, bookId })
  );
  return { data, isLoading, error, refetch };
};

export default useGetBookById;
