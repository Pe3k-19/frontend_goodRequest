"use client";

import styled from "styled-components";
import { Footer } from "./Footer";
import { HeroImage } from "./HeroImage";
import { ContributionForm } from "../ui/ContributionForm";

export function ContributionPage() {
  return (
    <PageRoot>
      <ContentGrid>
        <FormColumn>
          <ContributionForm />
          <Footer />
        </FormColumn>
        <ImageColumn>
          <HeroImage />
        </ImageColumn>
      </ContentGrid>
    </PageRoot>
  );
}

const PageRoot = styled.main`
  flex: 1;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
`;

const ContentGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
  }
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(10)}
    ${({ theme }) => theme.spacing(15)} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(10)}
      ${({ theme }) => theme.spacing(10)} 0;
  }
`;

const ImageColumn = styled.aside`
  display: none;
  padding: ${({ theme }) => theme.spacing(5)};
  padding-left: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    min-height: calc(100vh - 80px);
  }
`;
