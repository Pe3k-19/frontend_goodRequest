import {
  QueryClient,
  environmentManager,
  type DefaultOptions,
} from "@tanstack/react-query";
import { ApiError } from "@/lib/api/http";

const STALE_TIME_MS = 60_000;

export const queryClientDefaultOptions: DefaultOptions = {
  queries: {
    staleTime: STALE_TIME_MS,
    refetchOnWindowFocus: false,
    retry: (failureCount, error) => {
      if (
        error instanceof ApiError &&
        error.status >= 400 &&
        error.status < 500
      ) {
        return false;
      }
      return failureCount < 1;
    },
  },
  mutations: {
    retry: false,
  },
};

export function makeQueryClient(): QueryClient {
  return new QueryClient({ defaultOptions: queryClientDefaultOptions });
}

let browserQueryClient: QueryClient | undefined;

export function getQueryClient(): QueryClient {
  if (environmentManager.isServer()) {
    return makeQueryClient();
  }

  browserQueryClient ??= makeQueryClient();
  return browserQueryClient;
}
