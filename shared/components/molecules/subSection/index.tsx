import Title from "@/shared/components/molecules/title";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface SubSectionProps {
  title: string;
  image: StaticImageData;
  description: ReactNode;
  reverse?: boolean;
}

export default function SubSection({
  description,
  image,
  title,
  reverse,
}: SubSectionProps) {
  return (
    <div
      className={`flex justify-around ${
        reverse && "flex-row-reverse"
      } items-center`}
    >
      <div className="w-full flex justify-center">
        <Image src={image} alt="cervejo" />
      </div>
      <div className="w-full flex flex-col items-center">
        <Title>{title}</Title>
        {description}
      </div>
    </div>
  );
}
