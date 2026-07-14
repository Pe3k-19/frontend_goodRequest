"use client";

import { useQuery } from "@tanstack/react-query";
import { getShelters } from "../api/shelters";

const shelterKeys = {
  all: ["shelters"] as const,
  list: () => [...shelterKeys.all, "list"] as const,
};

export function useShelters() {
  return useQuery({
    queryKey: shelterKeys.list(),
    queryFn: () => getShelters(),
    select: (data) => data.shelters,
  });
}
