import { useMutation } from "@tanstack/react-query";

export const useServiceMutation = (
  mutationFn: (variables: unknown) => Promise<unknown>,
) => {
  return useMutation({ mutationFn });
};
