"use client";

import styled from "styled-components";
import { HeroImage } from "./HeroImage";
import { Footer } from "./Footer";

export function ContributionPage() {
  return (
    <PageRoot>
      <ContentGrid>
        <FormColumn>
          {/* ContributionForm */}
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
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const ContentGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(6)};
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing(8)};
    padding: ${({ theme }) => theme.spacing(10)};
    align-items: stretch;
  }
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

const ImageColumn = styled.aside`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    min-height: calc(100vh - 80px);
  }
`;
