"use client";

import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { CURRENCY } from "@/constants/units";
import { useResults } from "@/lib/hooks/results";
import { PageWrapper } from "./PageWrapper";

export function AboutPage() {
  const { t, i18n } = useTranslation();
  const { data, isLoading } = useResults();

  const contribution = data?.contribution ?? 0;
  const contributors = data?.contributors ?? 0;
  const locale = i18n.language === "cz" ? "cs-CZ" : "sk-SK";

  const formatAmount = (value: number) =>
    `${new Intl.NumberFormat(locale).format(value)} ${CURRENCY}`;

  const formatCount = (value: number) =>
    new Intl.NumberFormat(locale).format(value);

  return (
    <PageWrapper title={t("about.title")}>
      <Main>
        <Intro>{t("about.intro")}</Intro>

        <StatsSection aria-label={t("about.resultsAria")}>
          <Stat>
            <StatValue>
              {isLoading
                ? t("common.loadingPlaceholder")
                : formatAmount(contribution)}
            </StatValue>
            <StatLabel>{t("about.totalRaised")}</StatLabel>
          </Stat>
          <Stat>
            <StatValue>
              {isLoading
                ? t("common.loadingPlaceholder")
                : formatCount(contributors)}
            </StatValue>
            <StatLabel>{t("about.donorsCount")}</StatLabel>
          </Stat>
        </StatsSection>

        <Outro>{t("about.outro")}</Outro>
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

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    padding: 0;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    margin: 0;
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
