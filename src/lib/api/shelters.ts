import { apiFetch } from "@/lib/api/http";

type Shelter = {
  id: number;
  name: string;
};

type GetSheltersResponse = {
  shelters: Shelter[];
};

/**
 * GET /api/v1/shelters/ – list of shelters participating in the project.
 */
export function getShelters(): Promise<GetSheltersResponse> {
  return apiFetch<GetSheltersResponse>("/api/v1/shelters/");
}
