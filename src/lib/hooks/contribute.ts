"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resultsKeys } from "@/lib/hooks/results";
import { postContribute } from "../api/contribute";

export function useContribute() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postContribute,
    onSuccess: () => {
      // Refresh the raised amount / donor count after a successful donation.
      queryClient.invalidateQueries({ queryKey: resultsKeys.all });
    },
  });
}
