import { useQuery } from "@tanstack/react-query";

export const useServiceQuery = (queryFn: () => void, queryKey: unknown[]) => {
  return useQuery({ queryFn, queryKey });
};
