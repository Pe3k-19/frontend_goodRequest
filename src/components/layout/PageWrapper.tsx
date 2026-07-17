"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Footer } from "./Footer";

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
  return (
    <PageRoot>
      <Content>
        <BackLink href={backHref}>
          <ArrowLeftOutlined aria-hidden />
          Späť
        </BackLink>
        <PageTitle>{title}</PageTitle>
        <Main>{children}</Main>
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

const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(10)} 0`};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(15)} 0`};
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${({ theme }) => `0 ${theme.spacing(20)}`};
  gap: ${({ theme }) => theme.spacing(10)};
`;
