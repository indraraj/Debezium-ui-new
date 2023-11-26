import { useEffect, useState } from "react";
import { FetchApiResult } from "./useFetchApi";

function useFetchDynamicApi<T>(
  url: string | null,
  api: any,
  serviceRef: any,
  dynamicData: any
): FetchApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCall = api.bind(serviceRef);
        const response = await apiCall(url, dynamicData);

        setData(response);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error as Error);

        console.error("Error fetching data:", error);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, isLoading, error };
}

export default useFetchDynamicApi;
