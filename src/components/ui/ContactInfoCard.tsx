"use client";

import styled from "styled-components";
import type { IconType } from "@/types/components";

type ContactInfoCardProps = {
  icon: IconType;
  title: string;
  description: string;
  href?: string;
  value: string;
};

export function ContactInfoCard({
  icon: Icon,
  title,
  description,
  href,
  value,
}: ContactInfoCardProps) {
  return (
    <Card>
      <IconBadge>
        <Icon />
      </IconBadge>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {href ? (
        <CardLink href={href}>{value}</CardLink>
      ) : (
        <CardValue>{value}</CardValue>
      )}
    </Card>
  );
}

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const IconBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
`;

const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const CardDescription = styled.p`
  font-size: 0.9375rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const CardLink = styled.a`
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const CardValue = styled.p`
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;
