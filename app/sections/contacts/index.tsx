import PicapauImage from "@/app/assets/picapauImage.jpg";
import SubSection from "@/shared/components/molecules/subSection";
import Section from "@/shared/components/templates/section";
import DescriptionSubSection from "./components/descriptionSubSection";

export default function Contacts() {
  return (
    <Section id="contacts">
      <SubSection
        description={
          <DescriptionSubSection description="teste de link" link="teste" />
        }
        image={PicapauImage}
        title="Contato 1"
      />
      <SubSection
        description={
          <DescriptionSubSection description="teste de link" link="teste" />
        }
        image={PicapauImage}
        title="Contato 2"
        reverse
      />
    </Section>
  );
}
