"use client";

import styled from "styled-components";
import { useResults } from "@/lib/hooks/results";
import { ABOUT_INTRO, ABOUT_OUTRO } from "@/constants/about";
import { PageWrapper } from "./PageWrapper";

function formatAmount(value: number): string {
  return `${new Intl.NumberFormat("sk-SK").format(value)} €`;
}

function formatCount(value: number): string {
  return new Intl.NumberFormat("sk-SK").format(value);
}

export function AboutPage() {
  const { data, isLoading } = useResults();

  const contribution = data?.contribution ?? 0;
  const contributors = data?.contributors ?? 0;

  return (
    <PageWrapper title="O projekte">
      <Main>
        <Intro>{ABOUT_INTRO}</Intro>

        <StatsSection aria-label="Výsledky zbierky">
          <Stat>
            <StatValue>
              {isLoading ? "—" : formatAmount(contribution)}
            </StatValue>
            <StatLabel>Celková vyzbieraná hodnota</StatLabel>
          </Stat>
          <Stat>
            <StatValue>{isLoading ? "—" : formatCount(contributors)}</StatValue>
            <StatLabel>Počet darcov</StatLabel>
          </Stat>
        </StatsSection>

        <Outro>{ABOUT_OUTRO}</Outro>
      </Main>
    </PageWrapper>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }) => theme.spacing(10)};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing(20)};
  }
`;

const Intro = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Outro = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const StatsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => `${theme.spacing(8)} 0`};
  margin: ${({ theme }) => `0 ${theme.spacing(10)}`};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing(8)};
    align-items: center;
  }
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const StatValue = styled.p`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.75rem;
  }
`;

const StatLabel = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
