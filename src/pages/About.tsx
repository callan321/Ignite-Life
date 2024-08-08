import Meta from "../utils/Meta.tsx";

export default function About() {
  return (
    <>
      <Meta
        description={
          "Learn more about Ignite Life and our dedication to holistic care and wellbeing through Bowen Therapy. Discover how our treatments can improve your quality of life."
        }
        keywords={
          "About Ignite Life, Bowen Therapy, holistic care, wellbeing, health improvement, Heather, holistic healing"
        }
        title={"Ignite Life - About Us"}
      />
      <div className="flex w-full items-center justify-center p-12">
        <h1 className="text-center text-2xl">This will be the About page </h1>
      </div>
    </>
  );
}
