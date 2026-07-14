import { apiFetch } from "@/lib/api/http";

export type ApiMessageType = "ERROR" | "WARNING" | "INFO" | "SUCCESS";

export type ApiMessage = {
  message: string;
  type: ApiMessageType;
};

type Contributor = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
};

type ContributePayload = {
  contributors: Contributor[];
  shelterID?: number | null;
  value: number;
};

type ContributeResponse = {
  messages: ApiMessage[];
};

/**
 * POST /api/v1/shelters/contribute – submit the donation form.
 */
export function postContribute(
  payload: ContributePayload,
): Promise<ContributeResponse> {
  return apiFetch<ContributeResponse>("/api/v1/shelters/contribute", {
    method: "POST",
    body: payload,
  });
}
