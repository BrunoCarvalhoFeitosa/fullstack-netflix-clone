import useSwr from 'swr'
import fetcher from '@/lib/fetcher'

const useFilmsList = () => {
  const { data, error, isLoading } = useSwr('/api/filmsList', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useFilmsList