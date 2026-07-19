"use client";

import Link from "next/link";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";

export function SocialLinks() {
  const { t } = useTranslation();

  return (
    <SocialLinksRoot aria-label={t("a11y.social")}>
      <SocialLink href="https://www.facebook.com/" aria-label={t("a11y.facebook")}>
        <FacebookIcon />
      </SocialLink>
      <SocialLink
        href="https://www.instagram.com/"
        aria-label={t("a11y.instagram")}
      >
        <InstagramIcon />
      </SocialLink>
    </SocialLinksRoot>
  );
}

const SocialLinksRoot = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

const SocialLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
