"use client";

import Image from "next/image";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { MailIcon } from "@/components/icons/MailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { MapPinIcon } from "@/components/icons/MapPinIcon";
import { ContactInfoCard } from "@/components/ui/ContactInfoCard";
import { PageWrapper } from "./PageWrapper";

const CONTACT_INFO = {
  email: "hello@goodrequest.com",
  office: "Obchodná 3D, 010 08 Žilina, Slovakia",
  phone: "+421 911 750 750",
  emailDescription: "Our friendly team is here to help.",
  officeDescription: "Come say hello at our office HQ.",
  phoneDescription: "Mon-Fri from 8am to 5pm.",
};

export function ContactPage() {
  const { t } = useTranslation();

  return (
    <PageWrapper title={t("nav.contact")}>
      <Main>
        <Grid>
          <ContactInfoCard
            icon={MailIcon}
            title={t("form.email")}
            description={CONTACT_INFO.emailDescription}
            href="mailto:hello@goodrequest.com"
            value={CONTACT_INFO.email}
          />
          <ContactInfoCard
            icon={MapPinIcon}
            title={t("contact.officeTitle")}
            description={CONTACT_INFO.officeDescription}
            href="https://maps.google.com/?q=Obchodná+3D,+010+08+Žilina,+Slovakia"
            value={CONTACT_INFO.office}
          />
          <ContactInfoCard
            icon={PhoneIcon}
            title={t("contact.phoneTitle")}
            description={CONTACT_INFO.phoneDescription}
            href="tel:+421911750750"
            value={CONTACT_INFO.phone}
          />
        </Grid>

        <ContactImageWrapper>
          <Image
            src="/images/dog_contact.jpg"
            alt={t("contact.imageAlt")}
            fill
            priority
            sizes="(max-width: 1120px) 100vw, 1120px"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </ContactImageWrapper>
      </Main>
    </PageWrapper>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${({ theme }) => `0 ${theme.spacing(20)}`};
  gap: ${({ theme }) => theme.spacing(10)};

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    padding: 0;
  }
`;

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
