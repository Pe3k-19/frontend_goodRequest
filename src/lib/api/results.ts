import { apiFetch } from "@/lib/api/http";

type ContributionResults = {
  contributors: number;
  contribution: number | null;
};

/**
 * GET /api/v1/shelters/results – total amount raised and number of donors.
 */
export function getResults(): Promise<ContributionResults> {
  return apiFetch<ContributionResults>("/api/v1/shelters/results");
}
