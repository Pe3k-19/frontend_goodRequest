"use client";

import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  LANGUAGE_LABELS,
  SUPPORTED_LANGUAGES,
  type AppLanguage,
} from "@/i18n/config";
import { Fragment } from "react/jsx-runtime";

export const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const current = (
    SUPPORTED_LANGUAGES.includes(i18n.language as AppLanguage)
      ? i18n.language
      : "sk"
  ) as AppLanguage;

  const buttons = SUPPORTED_LANGUAGES.map((language, index) => (
    <Fragment key={language}>
      <LangButton
        type="button"
        $active={current === language}
        onClick={() => void i18n.changeLanguage(language)}
        aria-pressed={current === language}
      >
        {LANGUAGE_LABELS[language]}
      </LangButton>
      {index < SUPPORTED_LANGUAGES.length - 1 ? (
        <Separator aria-hidden>|</Separator>
      ) : null}
    </Fragment>
  ));

  return <Root aria-label={t("common.language")}>{buttons}</Root>;
};

const Root = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-left: ${({ theme }) => theme.spacing(-2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    top: ${({ theme }) => theme.spacing(2)};
  }
`;

const LangButton = styled.button<{ $active: boolean }>`
  font-size: 0.875rem;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.textPrimary};
  border: none;
  cursor: pointer;
  background: transparent;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ theme }) => `0 ${theme.spacing(1)}`};

  &:hover {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 1px;
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 1px;
  }
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
`;
