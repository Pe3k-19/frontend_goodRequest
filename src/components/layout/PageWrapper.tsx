"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Footer } from "./Footer";
import { LanguageSelector } from "../ui/LanguageSelector";

type PageWrapperProps = {
  title: string;
  children: ReactNode;
  backHref?: string;
};

export function PageWrapper({
  title,
  children,
  backHref = "/",
}: PageWrapperProps) {
  const { t } = useTranslation();

  return (
    <PageRoot>
      <LanguageSelectorWrapper>
        <LanguageSelector />
      </LanguageSelectorWrapper>
      <Content>
        <BackLink href={backHref}>
          <ArrowLeftOutlined aria-hidden />
          {t("common.back")}
        </BackLink>
        <PageTitle>{title}</PageTitle>
        {children}
        <Footer />
      </Content>
    </PageRoot>
  );
}

const PageRoot = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

const LanguageSelectorWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing(1)};
`;

const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.spacing(10)}`};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `0 ${theme.spacing(15)}`};
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.2s ease;
  width: fit-content;
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;
