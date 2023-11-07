"use client";
import Button from "@/shared/components/molecules/button";

interface DescriptionSubSectionProps {
  link: string;
  description: string;
}

export default function DescriptionSubSection({
  description,
  link,
}: DescriptionSubSectionProps) {
  return (
    <div>
      <p>{description}</p>
      <Button
        onClick={() => {
          window.open(link, "_blank");
        }}
      >
        Acessar
      </Button>
    </div>
  );
}
