import { useEffect } from "react";
import { toaster } from "@/components/ui/toaster";

export const useToaster = (
  isError: boolean,
  isSuccess: boolean,
  isPending: boolean,
  options?: { error?: string; success?: string },
) => {
  useEffect(() => {
    if (isPending) return;

    if (isError) {
      toaster.create({
        description: options?.error || "There was an error",
        type: "error",
      });
    }

    if (isSuccess) {
      toaster.create({
        description: options?.success || "Success making the operation",
        type: "success",
      });
    }
  }, [isPending, isError, isSuccess, options]);
};
