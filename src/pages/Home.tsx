import Meta from "../utils/Meta.tsx";
import HeroSection from "../components/page/HeroSection.tsx";
import { heroSections } from "../config.ts";

export default function Home() {
  return (
    <>
      <Meta
        title={"Ignite Life - Bowen Therapy"}
        description={
          "Discover the transformative benefits of Bowen Therapy at Ignite Life. Our holistic approach promotes relaxation, alleviates pain, and enhances overall well-being. Join us to experience a natural path to health and vitality."
        }
        keywords={
          "Bowen Therapy, holistic healing, pain relief, relaxation, overall well-being, natural health, Ignite Life"
        }
      />
      <div className="flex w-full flex-col">
        <HeroSection sections={heroSections} />
      </div>
    </>
  );
}
