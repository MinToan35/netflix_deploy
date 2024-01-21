import fetcher from "@/libs/fetcher";
import useSwr from "swr";

const useMovies = () => {
  const { data, error, isLoading } = useSwr("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useMovies;
