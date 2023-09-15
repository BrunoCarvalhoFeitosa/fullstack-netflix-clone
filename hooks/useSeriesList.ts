import useSwr from 'swr'
import fetcher from '@/lib/fetcher'

const useSeriesList = () => {
  const { data, error, isLoading } = useSwr('/api/seriesList', fetcher, {
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

export default useSeriesList