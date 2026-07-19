"use client";

import { useTranslation } from "react-i18next";
import { Select } from "@/components/ui/Select";
import { useShelters } from "@/lib/hooks/shelters";
import { SectionBlock, SectionLabel } from "@/styles/componnets";

type ShelterSectionProps = {
  value: number | null;
  onChange: (value: number | null) => void;
  onBlur?: () => void;
  required?: boolean;
  error?: string;
};

export function ShelterSection({
  value,
  onChange,
  onBlur,
  required = false,
  error,
}: ShelterSectionProps) {
  const { t } = useTranslation();
  const { data: shelters = [], isLoading } = useShelters();
  const options = shelters.map((shelter) => ({
    value: shelter.id,
    label: shelter.name,
  }));

  return (
    <SectionBlock>
      <SectionLabel>{t("form.aboutProject")}</SectionLabel>
      <Select
        id="shelters-select"
        label={t("form.shelterLabel")}
        placeholder={t("form.shelterPlaceholder")}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isLoading={isLoading}
        required={required}
        options={options}
        error={error}
      />
    </SectionBlock>
  );
}
