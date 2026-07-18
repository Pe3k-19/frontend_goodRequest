import { z } from "zod";
import { COMMON_GTLDS } from "@/constants/email";

export function hasValidEmailDomain(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain || !z.regexes.domain.test(domain)) return false;

  const tld = domain.split(".").at(-1);
  if (!tld) return false;
  if (tld.length === 2) return true;

  return COMMON_GTLDS.has(tld);
}
