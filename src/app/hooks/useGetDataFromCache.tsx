import { queryClient } from "@/main";
import { useMemo } from "react";

function useGetDataFromCache(queryKey: Array<string>) {
  const cache = queryClient.getQueriesData({ queryKey });

  const dataFromCache = useMemo(
    () => ({
      data: cache && cache[0] && cache[0][1] && (cache[0][1] as any),
    }),
    [cache]
  );
  return dataFromCache.data;
}

export default useGetDataFromCache;
