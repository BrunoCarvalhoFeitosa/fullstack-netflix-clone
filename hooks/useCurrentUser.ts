import useSWR from "swr"
import fetcher from "@/lib/fetcher"

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR("https://fullstack-netflix-app.vercel.app/api/current", fetcher)

    return {
        data,
        error, 
        isLoading,
        mutate
    }
}

export default useCurrentUser