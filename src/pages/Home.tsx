import Meta from "../utils/Meta.tsx";

export default function Home() {
  return (
    <>
      <Meta
        title={"Ignite Life - Transformative Bowen Therapy"}
        description={
          "Discover the transformative benefits of Bowen Therapy at Ignite Life. Our holistic approach promotes relaxation, alleviates pain, and enhances overall well-being. Join us to experience a natural path to health and vitality."
        }
        keywords={
          "Bowen Therapy, holistic healing, pain relief, relaxation, overall well-being, natural health, Ignite Life"
        }
      />

      <div className="flex w-full items-center justify-center p-12">
        <h1 className="text-center text-2xl">This will be the home page </h1>
      </div>
    </>
  );
}
