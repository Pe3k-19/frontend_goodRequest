"use client";

import Link from "next/link";
import styled from "styled-components";
import { FacebookIcon } from "./icons/FacebookIcon";
import { InstagramIcon } from "./icons/InstagramIcon";

export function SocialLinks() {
  return (
    <SocialLinksRoot aria-label="Sociálne siete">
      <SocialLink href="https://www.facebook.com/" aria-label="Facebook">
        <FacebookIcon />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/" aria-label="Instagram">
        <InstagramIcon />
      </SocialLink>
    </SocialLinksRoot>
  );
}

const SocialLinksRoot = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
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
