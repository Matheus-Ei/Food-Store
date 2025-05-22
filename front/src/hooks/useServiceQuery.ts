import { useQuery } from "@tanstack/react-query";

export const useServiceQuery = <T>(queryFn: () => Promise<T>, queryKey: unknown[]) => {
  return useQuery<T>({ queryFn, queryKey });
};
