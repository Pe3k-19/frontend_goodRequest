"use client";

import styled from "styled-components";

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
