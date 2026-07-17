"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { SocialLinks } from "../ui/SocialLinks";

export const Footer = () => (
  <FooterRoot>
    <Divider />
    <BrandGroup>
      <Image src="/icon.svg" alt="" width={32} height={32} aria-hidden />
      <BrandName>Good boy</BrandName>
    </BrandGroup>

    <FooterLinks>
      <SocialLinks />

      <NavLinks>
        <FooterLink href="/contact">Kontakt</FooterLink>
        <FooterLink href="/about">O projekte</FooterLink>
      </NavLinks>
    </FooterLinks>
  </FooterRoot>
);

const FooterRoot = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(8)} 0;
  margin-top: auto;
`;

const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const BrandName = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;

const FooterLink = styled(Link)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;
