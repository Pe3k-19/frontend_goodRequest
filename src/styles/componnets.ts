"use client";

import styled from "styled-components";

export const FormRoot = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }) => theme.spacing(8)};
`;

export const FormHeading = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const SectionBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const SectionLabel = styled.h2`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const FieldLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const OptionalTag = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 400;
`;
