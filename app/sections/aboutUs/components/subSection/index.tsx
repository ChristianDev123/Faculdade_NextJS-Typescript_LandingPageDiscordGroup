import Title from "@/shared/components/molecules/title";
import Image, { StaticImageData } from "next/image";

interface SubSectionProps {
  title: string;
  image: StaticImageData;
  description: string;
  reverse?: boolean;
}

export default function SubSection({
  description,
  image,
  title,
  reverse,
}: SubSectionProps) {
  return (
    <div className={`flex justify-around ${reverse && "flex-row-reverse"}`}>
      <div className="w-full flex justify-center">
        <Image src={image} alt="cervejo" />
      </div>
      <div className="w-full flex flex-col items-center">
        <Title>{title}</Title>
        <p className="py-5">{description}</p>
      </div>
    </div>
  );
}
