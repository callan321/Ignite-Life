import AboutMeta from "../meta/AboutMeta.tsx";

export default function About() {
  return (
    <>
      <AboutMeta />
      <div className="flex w-full items-center justify-center p-12">
        <h1 className="text-center text-2xl">This will be the About page </h1>
      </div>
    </>
  );
}
