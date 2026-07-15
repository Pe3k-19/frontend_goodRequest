"use client";

import { Select } from "@/components/ui/Select";
import { useShelters } from "@/lib/hooks/shelters";
import { SectionBlock, SectionLabel } from "@/styles/componnets";

type ShelterSectionProps = {
  value: number | null;
  onChange: (value: number | null) => void;
  required?: boolean;
};

export function ShelterSection({
  value,
  onChange,
  required = false,
}: ShelterSectionProps) {
  const { data: shelters = [], isLoading } = useShelters();
  const options = shelters.map((shelter) => ({
    value: shelter.id,
    label: shelter.name,
  }));

  return (
    <SectionBlock>
      <SectionLabel>O projekte</SectionLabel>
      <Select
        id="shelters-select"
        label="Útulok"
        placeholder="Vyberte útulok zo zoznamu"
        value={value}
        onChange={onChange}
        isLoading={isLoading}
        required={required}
        options={options}
      />
    </SectionBlock>
  );
}
