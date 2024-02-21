import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { api } from "@/services/api/api";

const useGeneralAPIQuery = <Data = any, Error = any>(
  url: string,
  params?: object,
  queryKey?: string,
  options?: any
) => {
  return useQuery<Data>({
    queryFn: () => api.get(url, { params }).then((data) => data?.data),

    ...options,

    queryKey: [queryKey ? queryKey : url],
  });
};

export default useGeneralAPIQuery;
