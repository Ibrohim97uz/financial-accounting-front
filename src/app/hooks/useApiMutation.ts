import { AxiosResponse } from "axios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { api } from "@/services/api/api";


const useApiMutation = <Variables = any, Response = any, Error = any>(
	url: string,
	method: "post" | "get" | "put" | "patch" | "delete",
	options?: UseMutationOptions<AxiosResponse<Response>, Error, Variables>,
	params?: any
) =>
	useMutation<AxiosResponse<Response>, Error, Variables>(
		{
			mutationFn:(data:any) => {
				const response = api({ method, url, data, params });
				return response;
			},
			mutationKey:[url,method],
			...options
		}
	);

export default useApiMutation;
