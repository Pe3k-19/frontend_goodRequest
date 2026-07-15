"use client";

import Image from "next/image";
import styled from "styled-components";

export const HeroImage = () => (
  <HeroRoot aria-hidden>
    <Image
      src="/images/dog_title.jpg"
      alt=""
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 50vw"
      style={{ objectFit: "cover" }}
    />
  </HeroRoot>
);

const HeroRoot = styled.div`
  position: relative;
  flex: 1;
  min-height: 320px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 100%;
  }
`;
