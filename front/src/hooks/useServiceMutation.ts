import { useMutation } from "@tanstack/react-query";

export const useServiceMutation = <TData = unknown, TVariables = unknown>(
  mutationFn: (variables: TVariables) => Promise<TData>,
) => {
  return useMutation<TData, Error, TVariables>({ mutationFn });
};
