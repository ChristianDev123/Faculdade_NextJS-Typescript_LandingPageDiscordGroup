import Example from "@/app/assets/toninhoExemple.jpeg";
import Section from "@/shared/components/templates/section";
import SubSection from "../../../shared/components/molecules/subSection";

export default function AboutUs() {
  return (
    <Section id="aboutUs">
      <SubSection
        image={Example}
        title="Lorem ipsum dolor"
        description={
          <p className="py-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            corporis sit, aperiam error, ipsam illum maiores aliquid facere
            quisquam impedit consequatur optio magnam totam deserunt quia
            aspernatur quod? Iusto, ipsum.
          </p>
        }
      />
      <SubSection
        image={Example}
        title="Lorem ipsum dolor"
        description={
          <p className="py-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            corporis sit, aperiam error, ipsam illum maiores aliquid facere
            quisquam impedit consequatur optio magnam totam deserunt quia
            aspernatur quod? Iusto, ipsum.
          </p>
        }
        reverse
      />
    </Section>
  );
}
