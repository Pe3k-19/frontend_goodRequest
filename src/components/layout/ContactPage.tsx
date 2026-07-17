"use client";

import Image from "next/image";
import styled from "styled-components";
import { MailIcon } from "@/components/icons/MailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { MapPinIcon } from "@/components/icons/MapPinIcon";
import { ContactInfoCard } from "@/components/ui/ContactInfoCard";
import { PageWrapper } from "./PageWrapper";

export function ContactPage() {
  return (
    <PageWrapper title="Kontakt">
      <Grid>
        <ContactInfoCard
          icon={MailIcon}
          title="Email"
          description="Our friendly team is here to help."
          href="mailto:hello@goodrequest.com"
          value="hello@goodrequest.com"
        />
        <ContactInfoCard
          icon={MapPinIcon}
          title="Office"
          description="Come say hello at our office HQ."
          href="https://maps.google.com/?q=Obchodná+3D,+010+08+Žilina,+Slovakia"
          value="Obchodná 3D, 010 08 Žilina, Slovakia"
        />
        <ContactInfoCard
          icon={PhoneIcon}
          title="Phone"
          description="Mon-Fri from 8am to 5pm."
          href="tel:+421911750750"
          value="+421 911 750 750"
        />
      </Grid>

      <ContactImageWrapper>
        <Image
          src="/images/dog_contact.jpg"
          alt="Pes na pláži"
          fill
          priority
          sizes="(max-width: 1120px) 100vw, 1120px"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
      </ContactImageWrapper>
    </PageWrapper>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing(8)};
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
  }
`;

const ContactImageWrapper = styled.div`
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  min-height: 200px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
`;
