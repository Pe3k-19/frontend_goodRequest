"use client";

import { useQuery } from "@tanstack/react-query";
import { getResults } from "../api/results";

export const resultsKeys = {
  all: ["results"] as const,
  detail: () => [...resultsKeys.all] as const,
};

export function useResults() {
  return useQuery({
    queryKey: resultsKeys.detail(),
    queryFn: () => getResults(),
  });
}
