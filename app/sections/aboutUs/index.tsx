import Example from "@/app/assets/toninhoExemple.jpeg";
import SubSection from "./components/subSection";

export default function AboutUs() {
  return (
    <section className="flex flex-col gap-20 p-10" id="aboutUs">
      <SubSection
        image={Example}
        title="Lorem ipsum dolor"
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni corporis sit, aperiam error, ipsam illum maiores aliquid facere quisquam impedit consequatur optio magnam totam deserunt quia aspernatur quod? Iusto, ipsum."
        }
      />
      <SubSection
        image={Example}
        title="Lorem ipsum dolor"
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni corporis sit, aperiam error, ipsam illum maiores aliquid facere quisquam impedit consequatur optio magnam totam deserunt quia aspernatur quod? Iusto, ipsum."
        }
        reverse
      />
    </section>
  );
}
